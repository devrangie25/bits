<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12" v-if="page === 1">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="products"
                            sort-by="calories"
                            class="transparent rounded-lg"
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
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    color="red"
                                    small
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="12" v-if="page === 2">
                    <bt-m-form-product
                        @cancel-product="cancelParcel"
                        @save-product="saveParcel"
                    />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    layout: "loggedin",

    data: () => ({
        page: 1,
        search: "",
        headers: [
            {
                text: "Item",
                value: "product",
            },
            { text: "Type", value: "type" },
            { text: "Size", value: "size" },
            { text: "Shipping Fee", value: "shipping_fee" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        products: []
    }),

    methods: {
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
            this.page = 2;
        }
    },
};
</script>
