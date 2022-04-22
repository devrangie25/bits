<template>
    <v-dialog v-model="dialog" width="500" persistent>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" depressed v-bind="attrs" v-on="on" class="text-capitalize">
                <v-icon left>
                    mdi-plus
                </v-icon>
                Add Product
            </v-btn>
        </template>

        <v-card>
            <v-form ref="productItemForm">

                <v-card-title>
                    Product
                </v-card-title>

                <v-card-text>
                    <v-select
                        v-model="copyData.product_id"
                        :items="storeProducts"
                        item-value="id"
                        item-text="name"
                        label="Select Product"
                        outlined
                        dense
                        :rules="[rules.required]"
                        :readonly="action === 'edit'"
                    ></v-select>
                     <v-text-field
                        v-model="copyData.quantity"
                        label="Quantity"
                        outlined
                        dense
                        type="number"
                        :rules="[rules.required]"
                    ></v-text-field>
                    <v-text-field
                        v-model="copyData.shipping_fee"
                        label="Shipping Fee"
                        outlined
                        dense
                        :rules="[rules.required]"
                        readonly
                        type="number"
                    ></v-text-field>
                     <v-text-field
                        v-model="copyData.total"
                        label="Total Amount"
                        outlined
                        dense
                        :rules="[rules.required]"
                        type="number"
                        readonly
                    ></v-text-field>
                </v-card-text>


                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="gray" text @click="cancel">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" depressed @click="addItem">
                        {{ action === 'new' ? 'Add' : 'Save'}}
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'productItemModal',
    props: {
        formData: Object,
        showDialog: Boolean,
        action: String
    },
    data () {
      return {
        dialog: false,
        copyData: {...this.formData},
        rules: {
            required: (value) => !!value || "Required field"
        }
      }
    },

    watch: {

        showDialog: function(bol){
            let self = this
            self.dialog = bol
            this.copyData = {...this.formData}
        },

        'copyData.product_id': function(newVal){
            this.storeProducts.forEach(val => {
                if (val.id === newVal) {
                    this.copyData['shipping_fee'] = parseFloat(val['shipping_fee']).toFixed(2)
                    this.copyData['name'] = val['name']
                    this.copyData['id'] = val['id']
                }
            })
        },

        'copyData.quantity': function(newValue) {
            let self = this
            self.copyData.total = parseFloat(self.copyData?.shipping_fee * newValue).toFixed(2)
        }
    },

    computed: {
        storeProducts(){
           return [...this.$store.state.products.products]
        },
    },

    methods: {

        cancel(){
            if (this.action === 'new') {
                this.dialog = false
                this.copyData = {}
                this.$refs.productItemForm.resetValidation()
            } else {
                this.$emit('cancel-edit-product', false)
                this.dialog = false
            }
        },

        addItem(){
            if (!this.$refs.productItemForm.validate() ) return

            if (this.copyData.quantity == 0) return this.$swal.fire({
                title: 'Quantity cannot be 0',
                icon: 'warning'
            })

            if (this.action === 'new') {
                this.$emit('save-product-item', this.copyData)
                this.dialog = false
                this.copyData = {}
                this.$refs.productItemForm.resetValidation()
            } else {
                this.$emit('update-product-item', this.copyData)
                this.$emit('cancel-edit-product', false)
                this.dialog = false
            }
        }
    }
  }
</script>

