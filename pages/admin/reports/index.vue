<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12">
                    <v-card class="pa-6" flat rounded="lg">
                        <v-card-text>
                            <v-form ref="form">
                                <v-row>
                                    <v-col cols="12" md="3">
                                        <v-select
                                            v-model="status"
                                            :items="statusItems"
                                            outlined
                                            dense
                                            hide-details
                                            label="Status"
                                            :rules="[rules.required]"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="dateFrom"
                                            type="date"
                                            outlined
                                            dense
                                            hide-details
                                            label="From"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            v-model="dateTo"
                                            type="date"
                                            outlined
                                            dense
                                            hide-details
                                            label="To"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        md="3"
                                        class="d-flex justify-space-between"
                                    >
                                        <v-btn
                                            @click="viewReport"
                                            depressed
                                            color="primary"
                                            class="text-capitalize mr-1"
                                            width="50%"
                                            height="40"
                                        >
                                            View Report
                                        </v-btn>
                                        <v-btn
                                            @click="reset"
                                            depressed
                                            color="secondary"
                                            class="text-capitalize ml-1"
                                            width="50%"
                                            height="40"
                                        >
                                            Reset
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="finalArr"
                            sort-by="parcel_id"
                            class="transparent rounded-lg"
                            :search="search"
                        >
                            <template v-slot:top>
                                <v-toolbar flat rounded="lg">
                                    <v-toolbar-title>Reports</v-toolbar-title>
                                    <v-spacer
                                        v-for="i in 6"
                                        :key="i"
                                    ></v-spacer>
                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        outlined
                                        dense
                                        single-line
                                        hide-details
                                        class="mr-n4"
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:item.created_on="{ item }">
                                {{ $dayjs(item.created_on).format('MM/DD/YYYY')}}
                            </template>
                            <template v-slot:item.total="{ item }">
                                {{ total(item.products.map(product => +product.total)) }}
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" color="orange">
                                    mdi-eye
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    layout: "loggedin",
    middleware: "secure",

    data: () => ({
        search: "",
        status: '',
        dateTo: '',
        dateFrom: '',
        statusItems: [
            "Order Created",
            "Items Shipped",
            "Accepted",
            "Pick Up",
            "Delivered",
            "Drop Off",
            "Failed",
        ],
        headers: [
            {
                text: "Reference Number",
                value: "reference_number",
            },
            { text: "Sender", value: "sender_name" },
            { text: "Receiver", value: "receiver_name" },
            { text: "Amount (₱)", value: "total" },
            { text: "Date Created", value: "created_on" },
            { text: "Status", value: "status" },
        ],
        finalArr: [],
        cloneArr: [],
        rules: {
            required: (value) => !!value || "Required field",
        },
    }),

    mounted(){
        this.getParcelShippingDetails()
    },

    computed: {
        storeParcels() {
            return this.$store.state.parcels.parcels;
        },
    },

    methods: {

        reset(){
            this.$refs.form.resetValidation()
            this.finalArr = this.cloneArr
            this.dateTo = ''
            this.dateFrom = ''
            this.status = ''
        },

        viewReport(){
            if (!this.$refs.form.validate()) return;

            this.finalArr = this.finalArr.filter(val => this.$dayjs(val.created_on).isBetween(this.dateFrom, this.dateTo, null, '[]') && val.status === this.status)
        },

        total(arr){
            return arr.reduce((prev, next) => prev + next, 0)
        },

        async getShippingProducts(parcel_id){
            try {
                const shipping_details = await this.$axios.$post('/shipping-details/get-shipping-details-by-parcel', { parcel_id })
                if (shipping_details.data?.length > 0) {
                    return shipping_details.data.map((product, i) => {
                        if (product.product_id !== null) {
                            return product
                        }
                    }).filter(val => val !== undefined)
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        async getParcelShippingDetails(){
            try {
                if (this.storeParcels.length > 0) {
                    let temp2 = []
                    this.storeParcels.forEach(async parcel => {
                        let products = await this.getShippingProducts(parcel.parcel_id)

                        if(products?.length > 0) {
                            let parcel_products = products.map(product => {
                                if (product) {
                                    if (product.parcel_id === parcel.parcel_id) {
                                        return product
                                    }
                                }
                                return
                            });
                            temp2.push({...parcel, products: parcel_products})
                            this.finalArr = temp2.filter((val, ind) => temp2.indexOf(val) === ind)
                            this.cloneArr = [...this.finalArr]
                        } else {
                            temp2.push({...parcel, products: []})
                            this.finalArr = temp2.filter((val, ind) => temp2.indexOf(val) === ind)
                            this.cloneArr = [...this.finalArr]
                        }
                    })
                }
            } catch (error) {
                console.error('error', error)
            }
        },
    }
};
</script>
