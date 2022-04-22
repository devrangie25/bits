<template>
    <div>
        <v-card class="pa-6" rounded="lg" flat>
            <v-card-title class="d-flex justify-space-between">
                <div>
                    {{ action === 'create' ? 'New' : 'Edit' }} Parcel
                </div>
                <div v-if="action === 'edit'">
                    <div>
                        <v-btn class="text-capitalize mx-2" color="primary" depressed outlined small>
                            <v-icon left>
                               mdi-file-document
                            </v-icon>
                            Print
                        </v-btn>
                        Trucking ID # {{ `${parcel.reference_number}` }}
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
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_address"
                                    outlined
                                    label="Address"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_contact"
                                    outlined
                                    label="Contact Number"
                                    dense
                                    type="number"
                                    hide-details="auto"
                                    :rules="[rules.required]"
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
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_address"
                                    outlined
                                    label="Address"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_contact"
                                    outlined
                                    label="Contact Number"
                                    dense
                                    hide-details="auto"
                                    type="number"
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.branch_processed"
                                    :items="storeBranches"
                                    item-text="name"
                                    item-value="id"
                                    outlined
                                    label="Branch Processed"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.branch_pickup"
                                    :items="storeBranches"
                                    item-text="name"
                                    item-value="id"
                                    outlined
                                    label="Pickup Branch"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </div>
                    <div >Shipping Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.date_shipped"
                                    outlined
                                    label="Date Shipped"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.date_received"
                                    outlined
                                    label="Date Received"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.type"
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
                                    v-model="parcel.status"
                                    outlined
                                    :items="['Order Created', 'Shipped', 'Accepted', 'Pick Up', 'Delivered', 'Drop Off', 'Failed']"
                                    label="Status"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </div>
                    <div>
                        <v-row>
                            <v-col cols="12">
                                <bt-m-table-products :products="parcel.products" @add-products="addProductsToParcel"/>
                                <!-- <bt-m-table-products @add-products="addProductsToParcel"/> -->
                            </v-col>
                        </v-row>
                    </div>
                </v-card-text>
                <v-card-actions class="ma-2 d-flex justify-end">
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
            parcel: {...this.formData},
            rules: {
                required: (value) => !!value || "Required field"
            }
        };
    },
    computed: {

        storeBranches(){
            return this.$store.state.branches.branches
        },

        formTitle() {
            if (this.action === "create") {
                return "New";
            }
            return "Edit";
        },
    },

    methods: {

        addProductsToParcel(products){
            this.parcel = {...this.parcel, products}
            // this.parcel['products'] = products
        },

        cancel() {
            this.$emit("cancel-parcel", true);
        },

        save() {
            if (!this.$refs.parcelForm.validate()) return

            console.log('PARCEL TO BE SAVED', this.parcel)

            if (this.action === 'create') {
                this.$emit("save-parcel", this.parcel);
            } else {
                this.$emit('update-parcel', this.parcel)
            }
        },
    },
};
</script>
