<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12" v-if="page === 1">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="finalArr"
                            sort-by="parcel_id"
                            sort-desc
                            class="transparent rounded-lg"
                            :search="search"
                            :key="tableKey"
                        >
                            <template v-slot:top>
                                <v-toolbar flat rounded="lg">
                                    <v-toolbar-title>Parcels</v-toolbar-title>
                                    <v-btn
                                        class="ml-2"
                                        x-small
                                        depressed
                                        fab
                                        color="primary"
                                        @click="addParcelForm"
                                    >
                                        <v-icon> mdi-plus </v-icon>
                                    </v-btn>
                                    <v-spacer
                                        v-for="i in 6"
                                        :key="i"
                                    ></v-spacer>
                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search Parcel"
                                        outlined
                                        dense
                                        single-line
                                        hide-details
                                        class="mr-n4"
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:item.status="{ item }">
                                <v-chip
                                    :color="parcelStatusColor(item.status)[0].color"
                                    dark
                                >
                                    {{ item.status }}
                                </v-chip>
                            </template>
                            <template v-slot:item.date_shipped="{ item }">
                                <span>
                                    {{ $dayjs(item.date_shipped).format('MM/DD/YYYY')}}
                                </span>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    small
                                    color="orange"
                                    @click="editParcel(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    color="red"
                                    class="mx-2"
                                    small
                                    @click="deleteParcel(item)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="12" v-if="page === 2">
                    <bt-m-form-parcel
                        :isLoading="isLoadingSubmit"
                        :action="formAction"
                        :formData="formData"
                        @cancel-parcel="cancelParcel"
                        @save-parcel="addNewParcel"
                        @update-parcel="updateParcel"
                        @product-item-deleted="getParcelShippingDetails"
                    />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    layout: "loggedin",
    middleware: 'secure',
    name: 'indexParcel',
    data: () => ({
        tableKey: 1,
        finalArr: [],
        page: 1,
        isLoadingSubmit: false,
        search: "",
        formAction: "create",
        formData: { status: 'Order Created' },
        headers: [
            {
                text: "Tracking ID",
                value: "reference_number",
            },
            {
                text: "Shipped Date",
                value: "date_shipped",
            },
            { text: "Sender", value: "sender_name" },
            { text: "Recipient", value: "receiver_name" },
            { text: "Status", value: "status" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        statusColors: [
            {
                title: "Order Created",
                color: '#ff9f40'
            },
            {
                title: "In Transit",
                color: '#00796B'
            },
            {
                title: "Picked Up",
                color: 'primary lighten-1'
            },
            {
                title: "Dropped Off",
                color: '#1B5E20'
            },
            {
                title: "Unsuccessful Delivery",
                color: '#BF360C'
            },
        ]
    }),

    computed: {
        storeParcels(){
           return this.$store.state.parcels.parcels
        }
    },

    watch: {
        formData: function(newVal){
            console.log('formData', newVal)
        }
    },

    mounted(){
        this.getParcelShippingDetails()
    },

    methods: {

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
                        } else {
                            temp2.push({...parcel, products: []})
                            this.finalArr = temp2.filter((val, ind) => temp2.indexOf(val) === ind)
                        }
                    })
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        parcelStatusColor(status){
            return this.statusColors.filter(val => {
                return val.title === status
            })
        },

        async updateParcel(udpatedParcel){
            try {
                this.isLoadingSubmit = true
                const parcel = await this.$store.dispatch('parcels/updateParcel', {...udpatedParcel, parcel_id : udpatedParcel.parcel_id})
                if (!parcel.error) {
                    await this.getParcels()
                    await this.getParcelShippingDetails()
                    await this.showParcelNotification({ icon : 'success', title: 'Parcel Successfully Updated' })
                    this.page = 1
                    this.isLoadingSubmit = false
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                    this.isLoadingSubmit = false
                }
            } catch (error) {
                this.isLoadingSubmit = false
                console.error('error', error)
            }
        },

        showParcelNotification({ position, icon, title, showConfirmButton, time}){
            return this.$swal.fire({
                position: position || 'success',
                icon: icon || 'success',
                title: title || 'Success',
                showConfirmButton: showConfirmButton || false,
                timer: time || 1500,
            });
        },

        async addNewParcel(newParcel) {
            try {
                this.isLoadingSubmit = true
                const parcel = await this.$store.dispatch('parcels/createParcel', newParcel)
                if (!parcel.error) {
                    await this.getParcels()
                    await this.getParcelShippingDetails()
                    await this.showParcelNotification({ icon : 'success', title: 'Parcel Successfully Added' })
                    this.page = 1
                    this.isLoadingSubmit = false
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                    this.isLoadingSubmit = false
                }
            } catch (error) {
                this.isLoadingSubmit = false
                console.error('error', error)
            }
        },

        async getParcels () {
            try {
                await this.$store.dispatch('parcels/getParcels')
            } catch (error) {
                console.error('error', error)
            }
        },

        cancelParcel() {
            this.page = 1;
            this.formData = {}
        },

        saveParcel(newParcel) {
            this.page = 1;
            this.parcels = [...this.parcels, newParcel];
            this.$swal.fire({
                position: "center",
                icon: "success",
                title: "Parcel Successfully Added",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        addParcelForm() {
            this.formAction = "create";
            this.page = 2;
        },

        editParcel(item) {
            this.formAction = "edit";
            this.formData = item;
            this.page = 2;
        },

        async deleteParcel(parcelToDelete){
            try {
                const confirm = await this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })

                if (confirm.isConfirmed) {
                    const parcel = await this.$store.dispatch('parcels/deleteParcel', { parcel_id : parcelToDelete.parcel_id })
                    if (!parcel.error) {
                        await this.getParcels()
                        await this.getParcelShippingDetails()
                        await this.showParcelNotification({ icon : 'success', title: 'Parcel Successfully Deleted' })
                        this.page = 1
                    } else {
                        await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                    }
                }
            } catch (error) {
                console.error('error', error)
            }
        },
    },
};
</script>
