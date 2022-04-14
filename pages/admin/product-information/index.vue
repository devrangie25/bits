<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12" v-if="page === 1">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="storeProducts"
                            sort-by="calories"
                            class="transparent rounded-lg"
                            :search="search"
                        >
                            <template v-slot:top>
                                <v-toolbar flat rounded="lg">
                                    <v-toolbar-title>Products</v-toolbar-title>
                                    <v-btn
                                        class="ml-2"
                                        x-small
                                        depressed
                                        fab
                                        color="primary"
                                        @click="addParcelForm"
                                    >
                                        <v-icon> mdi-plus </v-icon>
                                    </v-btn>
                                    <v-spacer
                                        v-for="i in 6"
                                        :key="i"
                                    ></v-spacer>
                                    <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search Product"
                                        outlined
                                        dense
                                        single-line
                                        hide-details
                                        class="mr-n4"
                                    ></v-text-field>
                                </v-toolbar>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    color="orange"
                                    @click="editProduct(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    color="red"
                                    small
                                    @click="deleteProduct(item)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="12" v-if="page === 2">
                    <bt-m-form-product
                        :formData="formData"
                        :action="action"
                        @cancel-product="cancelParcel"
                        @save-product="addNewProduct"
                        @update-product="updateProduct"
                    />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    layout: "loggedin",
    middleware: 'secure',

    data: () => ({
        page: 1,
        search: "",
        headers: [
            {
                text: "Item",
                value: "name",
            },
            { text: "Type", value: "type" },
            { text: "Size (kg)", value: "size" },
            { text: "Shipping Fee (₱)", value: "shipping_fee" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        products: [],
        formData: {},
        action: 'New'
    }),

    computed: {
        storeProducts(){
           return this.$store.state.products.products
        }
    },

    methods: {

        async deleteProduct(productToDelete){
            try {
                const confirm = await this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })

                if (confirm.isConfirmed) {
                    const product = await this.$store.dispatch('products/deleteProduct', { product_id : productToDelete.id })
                    if (!product.error) {
                        await this.getProducts()
                        await this.showParcelNotification({ icon : 'success', title: 'Product Successfully Deleted' })
                        this.page = 1
                    } else {
                        await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                    }
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        editProduct(product){
            this.formData = product
            this.action = 'Edit'
            this.page = 2;
        },

        showParcelNotification({ position, icon, title, showConfirmButton, time}){
            return this.$swal.fire({
                position: position || 'success',
                icon: icon || 'success',
                title: title || 'Success',
                showConfirmButton: showConfirmButton || false,
                timer: time || 1500,
            });
        },

        async getProducts () {
            try {
                await this.$store.dispatch('products/getProducts')
            } catch (error) {
                console.error('error', error)
            }
        },

        async updateProduct(updatedProduct) {
            try {
                const product = await this.$store.dispatch('products/updateProduct', {...updatedProduct, product_id : updatedProduct.id})
                if (!product.error) {
                    await this.getProducts()
                    await this.showParcelNotification({ icon : 'success', title: 'Product Successfully Updated' })
                    this.page = 1
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        async addNewProduct(newProduct) {
            try {
                const product = await this.$store.dispatch('products/createProduct', newProduct)
                if (!product.error) {
                    await this.getProducts()
                    await this.showParcelNotification({ icon : 'success', title: 'Product Successfully Added' })
                    this.page = 1
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        cancelParcel() {
            this.page = 1;
        },

        saveParcel() {
            this.page = 1;
            this.$swal.fire({
                position: "center",
                icon: "success",
                title: "Product Successfully Added.",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        addParcelForm() {
            this.action = 'New'
            this.page = 2;
        }
    },
};
</script>
