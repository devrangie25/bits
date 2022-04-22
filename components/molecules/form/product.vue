<template>
    <div>
        <v-card class="pa-6" rounded="lg" flat>
            <v-card-title>
                {{ action === 'New' ? 'New' : 'Edit' }} Product
            </v-card-title>
            <v-form ref="productForm">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                outlined
                                v-model="product.name"
                                label="Product Name"
                                dense
                                hide-details="auto"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="product.shipping_fee"
                                outlined
                                label="Shipping Fee"
                                dense
                                hide-details="auto"
                                type="number"
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-select
                                v-model="product.type"
                                outlined
                                label="Type"
                                :items="[
                                    'Goods',
                                    'Flammable',
                                    'Fragile'
                                ]"
                                dense
                                hide-details="auto"
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                v-model="product.size"
                                outlined
                                label="Size (kg)"
                                type="number"
                                dense
                                hide-details="auto"
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
    name: "productForm",
    props: {
        formData: Object,
        action: String
    },

    data() {
        return {
            product: {...this.formData},
            rules: {
                required: (value) => !!value || "Required field"
            }
        };
    },

    watch: {
        'product.shipping_fee': function(newValue){
            let self = this
            // self.product.shipping_fee = parseFloat(newValue).toFixed(2)
        },

        'product.size': function(newValue){
            let self = this
            // self.product.size = parseFloat(newValue).toFixed(2)
        }
    },

    methods: {
        cancel() {
            this.$emit("cancel-product", true);
        },

        save() {
            if (!this.$refs.productForm.validate()) return
            this.$emit(`${this.action === 'New' ? 'save' : 'update'}-product`, this.product);
        },
    },
};
</script>
