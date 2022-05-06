<template>
    <div>
        <v-row class="pa-0">
            <v-col cols="12" class="tracker-field-con py-16">
                <div v-if="!$vuetify.breakpoint.mdAndDown" style="float: left">
                    <v-img src="/img/bits-logo.png" width="200"></v-img>
                </div>
                <v-container style="max-width: 800px">
                    <div
                        class="mb-6 text-center headline white--text font-weight-bold"
                    >
                        Start tracking your parcel by entering your reference number.
                    </div>

                    <v-text-field
                        v-model="referenceNumber"
                        outlined
                        placeholder="Enter Pracel Tracking ID"
                        hide-details="auto"
                        flat
                        append-icon="mdi-magnify"
                        solo
                        v-on:keyup.enter="getParcelByReferenceNumber"
                    >
                        <template #append>
                            <v-btn
                                color="secondary"
                                depressed
                                class="text-capitalize"
                                @click="getParcelByReferenceNumber"
                            >
                                Search
                                <v-icon right>
                                    mdi-magnify
                                </v-icon>
                            </v-btn>
                        </template>
                    </v-text-field>
                </v-container>
            </v-col>

            <v-col v-if="parcelData.status === 'Unsuccessful Delivery' && isSearch" cols="12" class="my-16 d-flex justify-center">
                <bt-m-error-pages-failed />
            </v-col>

            <v-col v-if="isParcelNotFound" cols="12" class="mt-16 d-flex justify-center">
                <div>
                    <div class="d-flex justify-center">
                        <v-img
                            src="/img/parcel-not-found.png"
                            :width="$vuetify.breakpoint.mdAndDown ? 50 : 100"
                        ></v-img>
                    </div>
                    <div :class="`mt-6 ${$vuetify.breakpoint.mdAndDown ? 'title' : 'display-1'}`">Parcel Not Found</div>
                </div>
            </v-col>

            <v-col v-if="isNotEmpty && parcelData.status !== 'Unsuccessful Delivery'" cols="12">
                <v-container style="max-width: 700px">
                    <div
                        class="my-4 mb-2 title ml-10 d-flex justify-space-between"
                    >
                        <span class="font-weight-light"> Parcel Details </span>
                        <span class="font-weight-bold">
                            {{ parcelData.reference_number }}
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Sender :
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            {{ parcelData.sender_name }}
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Sender Contact Number:
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            {{ parcelData.sender_contact }}
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Receiver :
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            {{ parcelData.receiver_name }}
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Receiver Address:
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            {{ parcelData.receiver_address }}
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Receiver Contact Number:
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            {{ parcelData.receiver_contact }}
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Status:
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            {{ parcelData.status }}
                        </span>
                    </div>
                    <div v-if="parcelData.status === 'Unsuccessful Delivery'" class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Note:
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            Return To Sender
                        </span>
                    </div>
                    <div class="mb-8 title ml-10" v-if="parcelData.products && parcelData.products.length !== 0">
                        <span class="font-weight-light subtitle-2">
                            Products:
                        </span>
                        <div v-for="(product, i) in parcelData.products" :key="i">
                            <v-card flat color="transparent">
                                <v-card-subtitle>
                                    Item {{ i + 1}}.
                                </v-card-subtitle>
                                <v-card-text>
                                    <div>
                                        Name: {{ product.name }}
                                    </div>
                                    <div>
                                        Quantity: {{ product.quantity }}
                                    </div>
                                    <div>
                                        Shipping Fee: ₱ {{ parseFloat( product.total ).toFixed(2) }}
                                    </div>
                                    <div v-if="parcelData.products.length === i + 1" class="d-flex justify-end">
                                        <span class="font-weight-bold">
                                            Total: ₱ {{ numberWithCommas(parseFloat( totalFee ).toFixed(2)) }}
                                        </span>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>
                    <v-timeline dense align-top>
                        <v-timeline-item
                            v-for="(val, k) in history"
                            :key="k"
                            color="primary"
                            small
                            :icon="val.icon"
                            fill-dot
                        >
                            <v-card flat class="pa-2">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold"
                                >
                                    {{ $dayjs(val.date).format('MMMM DD, YYYY (dddd)')}}
                                </v-card-title>
                                <v-card-text>
                                    {{ val.title }} - {{ val.branch }}
                                    <br>
                                    {{ val.title2 }} - {{ val.address }}
                                    <br>
                                    {{ 'Contact' }} - {{ val.contact }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-col>
            <v-col cols="12" v-if="!isSearch" class="mt-16 pt-16">
                <div class="text-center display-1">
                    Customer Ratings
                </div>
                <bt-m-ratings-carousel />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    layout: "public",
    name: 'customer',
    data() {
        return {
            isParcelNotFound: false,
            referenceNumber: '',
            parcelData: {},
            isSearch: false,
            history: [],
            isNotEmpty: false,
            rating: 4
        };
    },

    computed: {
        totalFee(){
            if (this.parcelData.products?.length > 0) {
                return this.parcelData.products.map(val => +val.total).reduce((prev, next) => prev + next, 0)
            }
            return 0
        }
    },

    watch: {
        referenceNumber:function(newVal) {
            if(newVal === '') {
                this.isNotEmpty = false
                this.isSearch = false
            }
        }
    },

    methods: {

        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

        onEnter() {
            this.isSearch = true;
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

        async getParcelByReferenceNumber() {
            if (this.referenceNumber === '') {
                return await this.showParcelNotification({ icon : 'error', title: 'Please input Reference Number' })
            }
            this.history = []
            try {
                const result = await this.$store.dispatch('parcels/getParcelByRefId', { reference_number : this.referenceNumber })
                if (!result.error) {
                    this.isSearch = true;
                    let processed = {
                        date: result.data[0].date_shipped,
                        branch: result.data[0].branch_processed,
                        address: result.data[0].branch_processed_address,
                        contact: result.data[0].branch_processed_contact_number,
                        icon: "mdi-cube-send",
                        title: "Branch Processed",
                        title2: "Branch Address"
                    }
                    this.history.push(processed)

                    if(result.data[0].date_received !== null || result.data[0].date_received !== '' || result.data[0].date_received !== undefined) {
                        let received = {
                            date: result.data[0].date_received,
                            branch: result.data[0].branch_pickup,
                            address: result.data[0].branch_pickup_address,
                            contact: result.data[0].branch_pickup_contact_number,
                            icon: "mdi-car-pickup",
                            title: "Branch Pickup",
                            title2: "Branch Address"
                        }
                        this.history.push(received)
                    }

                    let products = await this.getShippingProducts(result.data[0].parcel_id)

                    if(products?.length > 0) {
                        let parcel_products = products.map(product => {
                            if (product) {
                                if (product.parcel_id === result.data[0].parcel_id) {
                                    return product
                                }
                            }
                            return
                        });

                        this.parcelData = {...result.data[0], products: parcel_products}
                    } else {
                        this.parcelData = {...result.data[0], products: []}
                    }
                    this.isNotEmpty = true
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'Parcel Not Found' })
                    this.referenceNumber = ''
                }
            } catch (error) {
                console.error('error', error)
            }
        },
    },
};
</script>

<style scoped>
.customer-ratings{
    margin-top: 200px;
}
</style>
