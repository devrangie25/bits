<template>
    <div>
        <v-row>
            <v-col
                v-for="(k, i) in headerData"
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
                            <span class="mx-4 font-weight-light body-1"> {{ k.title }} </span>
                        </div>
                        <div class="font-weight-light">100</div>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="line">
                    <v-card flat class="pa-4">
                        <client-only>
                            <line-chart
                                :height="150"
                                :data="chartData"
                            ></line-chart>
                        </client-only>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="pie">
                    <v-card flat class="pa-4" rounded="lg">
                        <client-only>
                            <pie-chart
                                :height="350"
                                :data="pieData"
                            ></pie-chart>
                        </client-only>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="6">
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
    data() {
        return {
            headerData: [
                {
                    icon: "mdi-dropbox",
                    title: "Parcels",
                    color: '#00C897'
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
                    color: '#ff6384'
                },
            ],
            pieData: {
                labels: [
                    "Parcels",
                    "Order Created",
                    "Items Shipped",
                    "Accepted by Courier",
                    "Pick Up",
                    "Delivered",
                    "Drop Off",
                    "Unsuccessful",
                ],
                datasets: [
                    {
                        label: "Pie Data",
                        data: [30, 25, 12, 35, 20, 30, 10, 5],
                        backgroundColor: [
                            "#00C897",
                            "#ff9f40",
                            "#ffcd56",
                            "#4bc0c0",
                            "#D96098",
                            "#325288",
                            "#D4ECDD",
                            "#ff6384",
                        ],
                    },
                ],
            },
            chartData: {
                labels: [
                    "Parcels",
                    "Order Created",
                    "Items Shipped",
                    "Accepted by Courier",
                    "Pick Up",
                    "Delivered",
                    "Drop Off",
                    "Unsuccessful",
                ],
                datasets: [
                    {
                        fill: false,
                        label: "Line Data",
                        data: [30, 25, 12, 35, 20, 30, 10, 5],
                        backgroundColor: [
                            "#00C897",
                            "#ff9f40",
                            "#ffcd56",
                            "#4bc0c0",
                            "#D96098",
                            "#325288",
                            "#D4ECDD",
                            "#ff6384",
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
};
</script>

<style scoped></style>
