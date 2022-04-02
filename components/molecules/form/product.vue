<template>
    <div>
        <v-card class="pa-6" rounded="lg" flat>
            <v-card-title>
                {{ "New Product" }}
            </v-card-title>
            <v-form ref="parcelForm">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                outlined
                                label="Product Name"
                                dense
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                outlined
                                label="Shipping Fee"
                                dense
                                hide-details="auto"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-select
                                outlined
                                label="Type"
                                :items="[
                                    'Goods',
                                    'Flammable',
                                    'Fragile'
                                ]"
                                dense
                                hide-details="auto"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                outlined
                                label="Size"
                                type="number"
                                dense
                                hide-details="auto"
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
    name: "productForm",
    props: {
        form: Object,
    },

    methods: {
        cancel() {
            this.$emit("cancel-product", true);
        },

        save() {
            this.$emit("save-product", true);
        },
    },
};
</script>
