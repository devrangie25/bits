<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="selectedProducts"
            hide-default-footer
        >
            <template v-slot:top>
                <div class="d-flex justify-space-between">
                    <span>
                        Product Information
                    </span>
                    <bt-m-dialog-product-item
                        :showDialog="showDialog"
                        :action="action"
                        :formData="formData"
                        @save-product-item="saveItem"
                        @show-dilaog="showDialog = false"
                    />
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    color="orange"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    color="red"
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
            </template>
            <template v-if="false" v-slot:body.append>
                <tr>
                    <td>
                        <v-select
                            v-model="productItem.name"
                            :items="storeProducts"
                            item-text="name"
                            item-value="id"
                            class="mt-6"
                            label="Select Product"
                            outlined
                            dense
                        ></v-select>
                    </td>
                    <td>
                        <v-text-field
                            v-model="productItem.qty"
                            class="mt-6"
                            outlined
                            dense
                            type="number"
                        ></v-text-field>
                    </td>
                    <td >
                        <span>
                            {{ productItem.shipping_fee }}
                        </span>
                    </td>
                    <td>
                        <span>
                            {{ productItem.amount }}
                        </span>
                    </td>
                    <td>
                        <v-icon
                            small
                            class="mr-2"
                            color="orange"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            color="red"
                            small
                        >
                            mdi-delete
                        </v-icon>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        Total
                    </td>
                    <td>
                        0.00
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
        <div v-if="false" class="d-flex justify-end">
            <v-btn class="text-capitalize mx-2" depressed color="gray">
                Cancel
            </v-btn>
            <v-btn class="text-capitalize" depressed color="primary" @click="addProductItem">
                Add Item
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {},
            selectedProducts: [],
            showDialog: false,
            action: 'new'
        };
    },

    computed: {

        storeProducts(){
           return this.$store.state.products.products
        },

        headers() {
            return [
                {
                    text: "Product",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                {
                    text: "Quantity",
                    value: "quantity"
                },
                { text: "Shipping Fee (₱)", value: "shipping_fee" },
                { text: "Amount (₱)", value: "total" },
                { text: "Actions", value: "actions" }
            ];
        },
    },

    methods: {

        saveItem(data) {
            let isExist = this.selectedProducts.filter(val => +val.id === +data.id)

            console.log('isExist', isExist)

            if(isExist.length === 0) {
                this.selectedProducts.push(data)
            } else {
                this.$swal.fire({
                    title: `${this.shallowCopy.name} added already.`,
                    icon: 'warning'
                })
            }
        },

        editItem(item) {
            console.log('editItem', item)
            this.action = 'edit'
            this.showDialog = true
            this.formData = item
        },

        deleteItem(item) {
            console.log('deleteItem', item)
            this.showDialog = true
        },
    }
};
</script>
