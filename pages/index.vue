<template>
    <div>
        <v-row>
            <v-col v-for="(k, i) in headerData" :key="i" cols="12" lg="3" md="6">
                <v-card height="100" flat rounded="lg" class="pa-4">
                    <v-card-title class="d-flex justify-space-between">
                        <div>
                            <v-icon large color="primary">
                                {{ k.icon }}
                            </v-icon>
                            <span class="mx-4"> {{ k.title }} </span>
                        </div>
                        <div>100</div>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="line">
                    <v-card flat class="pa-4">
                        <client-only>
                            <line-chart :height="150" :data="chartData"></line-chart>
                        </client-only>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="pie">
                    <client-only>
                        <pie-chart :height="350" :data="pieData"></pie-chart>
                    </client-only>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="pie">
                    <client-only>
                        <doughnut-chart :height="350" :data="pieData"></doughnut-chart>
                    </client-only>
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
                    icon: "mdi-truck",
                    title: "Deliveries",
                },
                {
                    icon: "mdi-cart",
                    title: "Pick Up",
                },
                {
                    icon: "mdi-truck",
                    title: "Drop Off",
                },
                {
                    icon: "mdi-map-marker",
                    title: "Branches",
                },
            ],
            pieData: {
                labels: ["Goods", "Appliances", "Vehicle", "Others"],
                datasets: [
                    {
                        label: "Pie Data",
                        data: [45, 55, 48, 12],
                        backgroundColor: [
                            "#ff6384",
                            "#ff9f40",
                            "#ffcd56",
                            "#36a2eb",
                        ],
                    },
                ],
            },
            chartData: {
                labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
                datasets: [
                    {
                        fill: false,
                        label: "Line Data",
                        data: [30, 25, 12, 35, 20],
                        backgroundColor: [
                            "#ff6384",
                            "#ff9f40",
                            "#ffcd56",
                            "#4bc0c0",
                            "#36a2eb",
                        ],
                        borderColor: '#4bc0c0',
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
