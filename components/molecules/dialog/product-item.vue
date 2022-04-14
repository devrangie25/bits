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
                        v-model="copyData.product"
                        :items="storeProducts"
                        item-value="id"
                        item-text="name"
                        label="Select Product"
                        outlined
                        dense
                        :rules="[rules.required]"
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
                        Add
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
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
        },

        'copyData.product': function(newValue) {
            console.log('copyData.product', newValue)
            let self = this
            let temp = self.storeProducts.filter(val => {
                return +val.id === +newValue
            })
            self.copyData.shipping_fee = parseFloat(temp[0]?.shipping_fee).toFixed(2)
            self.copyData.total = parseFloat(temp[0]?.shipping_fee).toFixed(2)
            self.copyData.name = temp[0]?.name
            self.copyData.quantity = 1
            self.copyData.id = temp[0]?.id
        },

        'copyData.quantity': function(newValue) {
            console.log('copyData.quantity', newValue)
            let self = this
            self.copyData.total = parseFloat(self.copyData?.shipping_fee * newValue).toFixed(2)
        }
    },

    computed: {
        storeProducts(){
           return this.$store.state.products.products
        },
    },

    methods: {

        cancel(){
            if (this.action === 'new') {
                this.dialog = false
            } else {
                this.$emit('show-dilaog', false)
                this.dialog = false
            }
        },

        addItem(){
            if (!this.$refs.productItemForm.validate() ) return
            if (this.copyData.quantity == 0) return this.$swal.fire({
                title: 'Please add quantity',
                icon: 'warning'
            })

            console.log('copyData', this.copyData)
            if (this.action === 'new') {
                this.$emit('save-product-item', this.copyData)
                this.dialog = false
            } else {
                this.$emit('update-product-item', this.copyData)
                this.$emit('show-dilaog', false)
                this.dialog = false
            }
        }
    }
  }
</script>

