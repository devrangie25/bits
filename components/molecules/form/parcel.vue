<template>
    <div>
        <v-card class="pa-6" rounded="lg" flat>
            <v-card-title class="d-flex justify-space-between">
                <div>
                    {{ `${formTitle} Parcel` }}
                </div>
                <div v-if="action === 'edit'">
                    <div>
                        <v-btn class="text-capitalize mx-2" color="primary" depressed outlined small>
                            <v-icon left>
                               mdi-file-document
                            </v-icon>
                            Print
                        </v-btn>
                        Trucking ID # {{ `${parcel.trucking_id}` }}
                    </div>
                </div>
            </v-card-title>
            <v-form ref="parcelForm">
                <v-card-text>
                    <div>Sender Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_name"
                                    outlined
                                    label="Full Name"
                                    dense
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_address"
                                    outlined
                                    label="Address"
                                    dense
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_contact"
                                    outlined
                                    label="Contact Number"
                                    dense
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div>Recipient Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_name"
                                    outlined
                                    label="Full Name"
                                    dense
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_address"
                                    outlined
                                    label="Address"
                                    dense
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_contact"
                                    outlined
                                    label="Contact Number"
                                    dense
                                    hide-details="auto"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    outlined
                                    label="Branch Processed"
                                    dense
                                    hide-details="auto"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    outlined
                                    label="Pickup Branch"
                                    dense
                                    hide-details="auto"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </div>
                    <div >Shipping Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    outlined
                                    label="Date Shipped"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    outlined
                                    label="Date Received"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    outlined
                                    :items="['Pick Up', 'Drop Off', 'Deliver']"
                                    label="Type"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    outlined
                                    :items="['Order Created', 'Shipped', 'Accepted', 'Pick Up', 'Delivered', 'Drop Off', 'Failed']"
                                    label="Status"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                ></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </div>
                    <div>Product Information</div>
                    <div>
                        <v-row>
                            <v-col cols="12">
                                <bt-m-table-products />
                            </v-col>
                        </v-row>
                    </div>
                </v-card-text>
                <v-card-actions class="mx-2 d-flex justify-center">
                    <v-btn
                        @click="cancel"
                        class="text-capitalize"
                        color="gray"
                        depressed
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        @click="save"
                        class="text-capitalize"
                        color="primary"
                        depressed
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "parcelForm",
    props: {
        formData: Object,
        action: String,
    },

    data() {
        return {
            parcel: {...this.formData}
        };
    },

    computed: {
        parcelData: {
            set() {
                console.log("test");
            },

            get() {
                return this.tempData;
            },
        },

        formTitle() {
            if (this.action === "create") {
                return "New";
            }
            return "Edit";
        },
    },

    methods: {
        cancel() {
            this.$emit("cancel-parcel", true);
        },

        save() {
            console.log('Parcel', this.parcel)
            const today = new Date();
            this.$emit("save-parcel", {...this.parcel, trucking_id : `PH208565912${Math.floor(Math.random() * 10)}`, status: 'Order Created', shipped_date: today.toLocaleDateString("en-US")});
        },
    },
};
</script>
