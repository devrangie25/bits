<template>
    <div>
        <v-row>
            <v-col
                v-for="(k, i) in widgets"
                :key="i"
                cols="12"
                lg="3"
                md="6"
            >
                <v-card height="100" flat rounded="lg" class="pa-4">
                    <v-card-title class="d-flex justify-space-between">
                        <div>
                            <v-icon large :color="k.color">
                                {{ k.icon }}
                            </v-icon>
                            <span class="mx-4 font-weight-light body-2"> {{ k.title }} </span>
                        </div>
                        <div class="font-weight-light">{{ k.data || 0 }}</div>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <div class="line">
                    <v-card flat class="pa-4">
                        <client-only>
                            <line-chart
                                :height="320"
                                :data="chartData"
                            ></line-chart>
                        </client-only>
                    </v-card>
                </div>
            </v-col>
            <v-col  cols="12" md="6">
                <div class="pie">
                    <v-card flat class="pa-4" rounded="lg">
                        <client-only>
                            <pie-chart
                                :height="320"
                                :data="pieData"
                            ></pie-chart>
                        </client-only>
                    </v-card>
                </div>
            </v-col>
            <v-col v-if="false" cols="12" md="6">
                <div class="pie">
                    <v-card flat class="pa-4" rounded="lg">
                        <client-only>
                            <doughnut-chart
                                :height="350"
                                :data="pieData"
                            ></doughnut-chart>
                        </client-only>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    layout: "loggedin",
    name: "IndexPage",
    middleware: 'secure',
    data() {
        return {
            parcels: [],
            headerData: [
                {
                    icon: "mdi-dropbox",
                    title: "Parcels",
                    color: '#00C897',
                },
                {
                    icon: "mdi-cart",
                    title: "Order Created",
                    color: '#ff9f40'
                },
                {
                    icon: "mdi-airplane-takeoff",
                    title: "Items Shipped",
                    color: '#ffcd56'
                },
                {
                    icon: "mdi-office-building",
                    title: "Accepted",
                    color: '#4bc0c0'
                },
                {
                    icon: "mdi-car-pickup",
                    title: "Pick Up",
                    color: '#D96098'
                },
                {
                    icon: "mdi-truck",
                    title: "Delivered",
                    color: '#325288'
                },
                {
                    icon: "mdi-map-marker",
                    title: "Drop Off",
                    color: '#D4ECDD'
                },
                {
                    icon: "mdi-alert-circle",
                    title: "Failed",
                    color: '#BF360C'
                },
            ],
            pieData: {
                labels: [
                    "Parcels",
                    "Order Created",
                    "Items Shipped",
                    "Accepted",
                    "Pick Up",
                    "Delivered",
                    "Drop Off",
                    "Failed",
                ],
                datasets: [
                    {
                        label: "Pie Data",
                        data: [],
                        backgroundColor: [
                            "#00C897",
                            "#ff9f40",
                            "#ffcd56",
                            "#4bc0c0",
                            "#D96098",
                            "#325288",
                            "#D4ECDD",
                            "#BF360C",
                        ],
                    },
                ],
            },
            chartData: {
                labels: [
                    "Parcels",
                    "Order Created",
                    "Items Shipped",
                    "Accepted",
                    "Pick Up",
                    "Delivered",
                    "Drop Off",
                    "Failed",
                ],
                datasets: [
                    {
                        fill: false,
                        label: "Line Data",
                        data: [],
                        backgroundColor: [
                            "#00C897",
                            "#ff9f40",
                            "#ffcd56",
                            "#4bc0c0",
                            "#D96098",
                            "#325288",
                            "#D4ECDD",
                            "#BF360C",
                        ],
                        borderColor: "#4bc0c0",
                        borderWidth: 1,
                        pointRadius: 10,
                        pointBorderColor: "rgb(0, 0, 0)",
                    },
                ],
            },
        };
    },

    async created(){
        await this.getParcels()
        await this.getProducts()
        await this.getBranches()
    },

    mounted(){
        // table chart
        this.chartData.datasets[0].data.push(this.storeParcels.length)
        this.chartData.datasets[0].data.push(this.parcelStatus('Order Created'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Shipped'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Accepted'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Pick Up'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Delivered'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Drop Off'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Failed'))

        // pie
        this.pieData.datasets[0].data.push(this.storeParcels.length)
        this.pieData.datasets[0].data.push(this.parcelStatus('Order Created'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Shipped'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Accepted'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Pick Up'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Delivered'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Drop Off'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Failed'))
    },

    computed: {

        orderCreatedParcels(){
            return this.storeParcels.filter(val => val.status === 'Order Created').length
        },

        storeParcels(){
            return this.$store.state.parcels.parcels
        },

        widgets(){
            return this.headerData.map(val => {
                if (val.title === 'Parcels') {
                    return {...val, data: this.parcels.data?.length}
                } if (val.title === 'Order Created') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Order Created').length}
                } if (val.title === 'Items Shipped') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Shipped').length}
                } if (val.title === 'Accepted') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Accepted').length}
                } if (val.title === 'Pick Up') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Pick Up').length}
                } if (val.title === 'Delivered') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Delivered').length}
                } if (val.title === 'Drop Off') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Drop Off').length}
                } if (val.title === 'Failed') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Failed').length}
                }else {
                    return val
                }
            })
        },
    },

    methods: {

        parcelStatus(status){
            return this.storeParcels.filter(val => val.status === status).length
        },

        async getParcels () {
            try {
                const temp = await this.$store.dispatch('parcels/getParcels')
                if (temp) {
                    this.parcels = temp
                    console.log('parcels', this.parcels)
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        async getProducts () {
            try {
                await this.$store.dispatch('products/getProducts')
            } catch (error) {
                console.error('error', error)
            }
        },

        async getBranches () {
            try {
                await this.$store.dispatch('branches/getBranches')
            } catch (error) {
                console.error('error', error)
            }
        }
    }
};
</script>
