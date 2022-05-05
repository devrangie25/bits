<template>
    <div>
        <v-card class="pa-6" rounded="lg" flat>
            <v-card-title>
                {{ action === 'New' ? 'New' : 'Edit' }} Branch
            </v-card-title>
            <v-form ref="branchForm">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="branch.name"
                                outlined
                                label="Trucking Name"
                                dense
                                hide-details="auto"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="branch.address"
                                outlined
                                label="Address"
                                dense
                                hide-details="auto"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="branch.schedule"
                                outlined
                                label="Schedule"
                                dense
                                hide-details="auto"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="branch.zipcode"
                                outlined
                                label="Zip Code"
                                dense
                                hide-details="auto"
                                type="number"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="branch.municipality"
                                outlined
                                label="Municipality"
                                dense
                                hide-details="auto"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="branch.contact_number"
                                outlined
                                label="Contact Number"
                                dense
                                hide-details="auto"
                                type="number"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="mx-2 d-flex justify-end">
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
    name: "branchForm",
    props: {
        formData: Object,
        action: String
    },

    data(){
        return {
            branch: {...this.formData},
            rules: {
                required: (value) => !!value || "Required field"
            }
        }
    },

    methods: {
        cancel() {
            this.$emit("cancel-branch", true);
        },

        save() {
            if (!this.$refs.branchForm.validate()) return
            // this.$emit("save-parcel", {...this.branch, status: 1});
            this.$emit(`${this.action === 'New' ? 'save' : 'update'}-branch`, {...this.branch, status: 1});
        },
    },
};
</script>
