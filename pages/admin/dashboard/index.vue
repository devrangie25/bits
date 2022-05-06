<template>
    <div>
        <v-row>
            <v-col cols="12">
                <bt-a-alert v-if="getNotification" :description="parcelNotif.msg" />
            </v-col>
        </v-row>
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
            branches: [],
            headerData: [
                {
                    icon: "mdi-package-variant-closed",
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
                    title: "In Transit",
                    color: '#ffcd56'
                },
                {
                    icon: "mdi-car-pickup",
                    title: "Picked Up",
                    color: '#D96098'
                },
                {
                    icon: "mdi-dropbox",
                    title: "Dropped Off",
                    color: '#1a73e8'
                },
                {
                    icon: "mdi-truck-check",
                    title: "Delivered",
                    color: '#499f6e'
                },
                {
                    icon: "mdi-alert-circle",
                    title: "Unsuccessful Delivery",
                    color: '#BF360C'
                },
                {
                    icon: "mdi-map-marker",
                    title: "Branches",
                    color: '#f59d3e'
                },
            ],
            pieData: {
                labels: [
                    "Parcels",
                    "Order Created",
                    "In Transit",
                    "Picked Up",
                    "Dropped Off",
                    "Delivered",
                    "Unsuccessful Delivery",
                    "Branches"
                ],
                datasets: [
                    {
                        label: "Pie Data",
                        data: [],
                        backgroundColor: [
                            "#00C897",
                            "#ff9f40",
                            "#ffcd56",
                            "#D96098",
                            "#D4ECDD",
                            "#499f6e",
                            "#BF360C",
                            "#f59d3e"
                        ],
                    },
                ],
            },
            chartData: {
                labels: [
                    "Parcels",
                    "Order Created",
                    "In Transit",
                    "Picked Up",
                    "Dropped Off",
                    "Delivered",
                    "Unsuccessful Delivery",
                    "Branches"
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
                            "#D96098",
                            "#D4ECDD",
                            "#499f6e",
                            "#BF360C",
                            "#f59d3e"
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
        this.chartData.datasets[0].data.push(this.parcelStatus('In Transit'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Successfully Picked Up'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Successfully Dropped Off'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Successfully Delivered'))
        this.chartData.datasets[0].data.push(this.parcelStatus('Unsuccessful Delivery'))
        this.chartData.datasets[0].data.push(this.storeBranches.length)

        // pie
        this.pieData.datasets[0].data.push(this.storeParcels.length)
        this.pieData.datasets[0].data.push(this.parcelStatus('Order Created'))
        this.pieData.datasets[0].data.push(this.parcelStatus('In Transit'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Successfully Picked Up'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Successfully Dropped Off'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Successfully Delivered'))
        this.pieData.datasets[0].data.push(this.parcelStatus('Unsuccessful Delivery'))
        this.pieData.datasets[0].data.push(this.storeBranches.length)
    },

    computed: {

        getNotification(){
            if (Object.keys(this.$store.state.parcels.latest_action).length > 0) {
                return true
            }
            return false
        },

        parcelNotif(){
            return this.$store.state.parcels.latest_action
        },

        orderCreatedParcels(){
            return this.storeParcels.filter(val => val.status === 'Order Created').length
        },

        storeParcels(){
            return this.$store.state.parcels.parcels
        },

        storeBranches(){
            return this.$store.state.branches.branches
        },

        widgets(){
            return this.headerData.map(val => {
                if (val.title === 'Parcels') {
                    return {...val, data: this.parcels.data?.length}
                } if (val.title === 'Order Created') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Order Created').length}
                } if (val.title === 'In Transit') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'In Transit').length}
                } if (val.title === 'Picked Up') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Successfully Picked Up').length}
                } if (val.title === 'Dropped Off') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Successfully Dropped Off').length}
                } if (val.title === 'Unsuccessful Delivery') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Unsuccessful Delivery').length}
                } if (val.title === 'Delivered') {
                    return {...val, data: this.parcels.data?.filter(val => val.status === 'Successfully Delivered').length}
                }if (val.title === 'Branches') {
                    return {...val, data: this.storeBranches.length}
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
