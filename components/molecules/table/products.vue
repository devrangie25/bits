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
                        @cancel-edit-product="cancelEditProduct"
                        @update-product-item="updateItem"
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
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'parcelProductsTable',
    props: {
        products: Array
    },

    data() {
        return {
            formData: {},
            selectedProducts: [],
            showDialog: false,
            action: 'new'
        };
    },

    watch: {
        selectedProducts: function(newArr){
            this.$emit('add-products', newArr)
        }
    },

    mounted(){
        console.log('products of parcel', this.products)
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

        cancelEditProduct(){
            this.formData = {}
            this.showDialog = false
            this.action = 'new'
        },

        updateItem(updatedItem){
            console.log('updatedItem', updatedItem)
            this.selectedProducts = this.selectedProducts.map(val => {
                if (val.product_id === updatedItem.id) {
                    return updatedItem
                } else {
                    return val
                }
            })

            console.log('selectedProducts', this.selectedProducts)
            this.action = 'new'
            this.formData = {}
        },

        saveItem(data) {
            let isExist = this.selectedProducts.filter(val => +val.id === +data.id)

            if(isExist.length === 0) {
                this.selectedProducts.push(data)
            } else {
                this.$swal.fire({
                    title: `${data.name} added already.`,
                    icon: 'warning'
                })
            }

            console.log('saveItem-selectedProducts', this.selectedProducts)
            this.formData = {}
            this.action = 'new'
        },

        editItem(item) {
            console.log('editItem', item)
            this.action = 'edit'
            this.showDialog = true
            this.formData = item
        },

        async deleteItem(item) {
            try {
                const isDeleted = await this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })

                if (isDeleted.isConfirmed) {
                    this.selectedProducts = this.selectedProducts.filter(val => val.id !== item.id)
                    this.$swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Item has been deleted.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            } catch (error) {
                console.error('error', error)
            }
        },
    }
};
</script>
