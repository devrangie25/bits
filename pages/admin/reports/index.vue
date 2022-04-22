<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12">
                    <v-card class="pa-6" flat rounded="lg">
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="3">
                                    <v-select
                                        v-model="formData.status"
                                        :items="statusItems"
                                        outlined
                                        dense
                                        hide-details
                                        label="Status"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-text-field
                                        type="date"
                                        outlined
                                        dense
                                        hide-details
                                        label="From"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="3">
                                    <v-text-field
                                        type="date"
                                        outlined
                                        dense
                                        hide-details
                                        label="To"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    md="3"
                                    class="d-flex justify-space-between"
                                >
                                    <v-btn
                                        depressed
                                        color="primary"
                                        class="text-capitalize mr-1"
                                        width="50%"
                                        height="40"
                                    >
                                        View Report
                                    </v-btn>
                                    <v-btn
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
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="parcels"
                            sort-by="calories"
                            class="transparent rounded-lg"
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
        formData: {},
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
                value: "refno",
            },
            { text: "Sender", value: "sender" },
            { text: "Receiver", value: "receiver" },
            { text: "Amount", value: "total" },
            { text: "Status", value: "status" }
        ],
        parcels: [],
    }),
};
</script>
