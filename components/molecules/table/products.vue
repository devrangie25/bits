<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="demoArr"
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
        products: Array,
        demoArr: Array
    },

    data() {
        return {
            formData: {},
            showDialog: false,
            action: 'new',
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

        cancelEditProduct(){
            this.formData = {}
            this.showDialog = false
            this.action = 'new'
        },

        updateItem(updatedItem){
            this.$emit('update-product', updatedItem)
            this.action = 'new'
            this.formData = {}
        },

        saveItem(product) {
            let isExist = this.demoArr.filter(val => +val.id === +product.id)

            if(isExist.length === 0) {
                this.$emit('add-product', product)
            } else {
                this.$swal.fire({
                    title: `${product.name} added already.`,
                    icon: 'warning'
                })
            }
            this.formData = {}
            this.action = 'new'
        },

        editItem(item) {
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
                    this.$emit('delete-product', item)
                }
            } catch (error) {
                console.error('error', error)
            }
        },
    }
};
</script>
