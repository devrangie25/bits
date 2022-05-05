<template>
    <div>
        <v-card class="pa-6" rounded="lg" flat>
            <v-card-title class="d-flex justify-space-between">
                <div>{{ action === "create" ? "New" : "Edit" }} Parcel</div>
                <div v-if="action === 'edit'">
                    <div class="d-flex">
                        <bt-m-pdf-parcel-details>
                            <section>
                                <div class="date-title">
                                    <div class="title">Parcel Details</div>
                                    <div class="date">{{ $dayjs(new Date()).format('MMMM DD, YYYY') }}</div>
                                </div>
                                <div class="header-title">BANTAYAN ISLAND TRUCKING SERVICES</div>
                                <div class="refno">
                                    <span class="refnotxt">
                                        Tracking/Reference Number:
                                    </span>
                                    {{ `${parcel.reference_number}` }}
                                </div>
                                <div class="refno">
                                    <span class="refnotxt"> Type: </span>
                                    {{ `${parcel.type}` }}
                                </div>
                                <div class="refno">
                                    <span class="refnotxt"> Status: </span>
                                    {{ `${parcel.status}` }}
                                </div>
                                <div class="refno">
                                    <span class="refnotxt">
                                        Branch Accepted the Parcel:
                                    </span>
                                    {{
                                        `${parcel.branch_processed_name}, (${parcel.branch_processed_schedule}), ${parcel.branch_processed_address}, ${parcel.branch_processed_zipcode}, ${parcel.branch_processed_municipality}`
                                    }}
                                </div>
                                <div class="refno">
                                    <span class="refnotxt">
                                        Sender Information
                                    </span>
                                    <div>
                                        <span> Name: </span>
                                        {{ parcel.sender_name }}
                                    </div>
                                    <div>
                                        <span> Address: </span>
                                        {{ parcel.sender_address }}
                                    </div>
                                    <div>
                                        <span> Contact: </span>
                                        {{ parcel.sender_contact }}
                                    </div>
                                </div>
                                <div class="refno">
                                    <span class="refnotxt">
                                        Receiver Information
                                    </span>
                                    <div>
                                        <span> Name: </span>
                                        {{ parcel.receiver_name }}
                                    </div>
                                    <div>
                                        <span> Address: </span>
                                        {{ parcel.receiver_address }}
                                    </div>
                                    <div>
                                        <span> Contact: </span>
                                        {{ parcel.receiver_contact }}
                                    </div>
                                </div>
                                <div class="refno" v-if="demoArr.length > 0">
                                    <span class="refnotxt">
                                        Product Information
                                    </span>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="tbl-head">
                                                        Product
                                                    </th>
                                                    <th class="tbl-head">
                                                        Type
                                                    </th>
                                                    <th class="tbl-head">
                                                        Quantity
                                                    </th>
                                                    <th class="tbl-head">
                                                        Unit Price
                                                    </th>
                                                    <th class="tbl-head">
                                                        Amount
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="(product, i) in demoArr"
                                                    :key="i"
                                                >
                                                    <td>{{ product.name }}</td>
                                                    <td>{{ product.type }}</td>
                                                    <td>{{ product.quantity }}</td>
                                                    <td>{{ product.shipping_fee }}</td>
                                                    <td>{{ product.total }}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="4" class="tbl-total">
                                                        <span class="total-ph">
                                                            Total ₱ {{  parseFloat( total(demoArr.map(val => +val.total)) ).toFixed(2) }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </div>
                            </section>
                        </bt-m-pdf-parcel-details>
                        Trucking ID # {{ `${parcel.reference_number}` }}
                    </div>
                </div>
            </v-card-title>
            <v-form ref="parcelForm">
                <v-card-text>
                    <div>Sender Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_name"
                                    outlined
                                    label="Full Name"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_address"
                                    outlined
                                    label="Address"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.sender_contact"
                                    outlined
                                    label="Contact Number"
                                    dense
                                    type="number"
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </div>
                    <div>Recipient Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_name"
                                    outlined
                                    label="Full Name"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_address"
                                    outlined
                                    label="Address"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.receiver_contact"
                                    outlined
                                    label="Contact Number"
                                    dense
                                    hide-details="auto"
                                    type="number"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.branch_processed"
                                    :items="storeBranches"
                                    item-text="name"
                                    item-value="id"
                                    outlined
                                    label="Branch Processed"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.branch_pickup"
                                    :items="storeBranches"
                                    item-text="name"
                                    item-value="id"
                                    outlined
                                    label="Pickup Branch"
                                    dense
                                    hide-details="auto"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </div>
                    <div>Shipping Information</div>
                    <div class="my-6">
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.date_shipped"
                                    outlined
                                    label="Date Shipped"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field
                                    v-model="parcel.date_received"
                                    outlined
                                    label="Date Received"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                    :readonly="isFormReadOnly"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.type"
                                    outlined
                                    :items="['Pick Up', 'Drop Off', 'Door to door']"
                                    label="Type of Delivery"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                    :rules="[rules.required]"
                                    :readonly="isFormReadOnly"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-select
                                    v-model="parcel.status"
                                    outlined
                                    :readonly="action === 'create'"
                                    :items="[
                                        'Order Created',
                                        'In Transit',
                                        'Picked Up',
                                        'Dropped Off',
                                        'Unsuccessful Delivery',
                                    ]"
                                    label="Status"
                                    dense
                                    hide-details="auto"
                                    type="date"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </div>
                    <div>
                        <v-row>
                            <v-col cols="12">
                                <bt-m-table-products
                                    :formStatus="action"
                                    :demoArr="demoArr"
                                    @add-product="addProduct"
                                    @update-product="updateProduct"
                                    @delete-product="deleteProduct"
                                />
                            </v-col>
                        </v-row>
                    </div>
                </v-card-text>
                <v-card-actions class="ma-2 d-flex justify-end">
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
    name: "parcelForm",
    props: {
        formData: Object,
        action: String,
    },
    data() {
        return {
            demoArr: this.formData.products ? [...this.formData.products] : [],
            parcel: { ...this.formData },
            rules: {
                required: (value) => !!value || "Required field",
            },
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                }
            ],
        };
    },

    watch: {
        "parcel.products": function (newProducts) {
            console.log("newProducts", newProducts);
        },
    },

    computed: {

        isFormReadOnly(){
            if (this.action === 'edit') {
                return true
            }
            return false
        },

        storeBranches() {
            return this.$store.state.branches.branches;
        },

        formTitle() {
            if (this.action === "create") {
                return "New";
            }
            return "Edit";
        },
    },

    methods: {

        total(arr){
            return arr.reduce((prev, next) => prev + next, 0)
        },

        async deleteProduct(deleteProduct) {
            try {
                const deleted = await this.$axios.$post('/parcels/delete-parcel-product', { shipping_product_id : deleteProduct.shipping_product_id })
                if (deleted.status) {
                    this.demoArr = this.demoArr.filter(
                        (val) => val.id !== deleteProduct.id
                    );
                    this.$emit('product-item-deleted', true)
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

        updateProduct(updatedProduct) {
            this.demoArr = this.demoArr.map((val) => {
                if (val.product_id === updatedProduct.id) {
                    return updatedProduct;
                } else {
                    return val;
                }
            });
        },

        addProduct(newProduct) {
            this.demoArr.push(newProduct);
            console.log("demoArr", this.demoArr);
        },

        cancel() {
            this.$emit("cancel-parcel", true);
        },

        save() {
            if (!this.$refs.parcelForm.validate()) return;

            this.parcel = { ...this.parcel, products: this.demoArr };

            if (this.parcel.products.length === 0) {
                return this.$swal.fire({
                    title: `Please add product(s)`,
                    icon: "warning",
                });
            }

            console.log("PARCEL TO BE SAVED", this.parcel);
            if (this.action === "create") {
                this.$emit("save-parcel", this.parcel);
            } else {
                this.$emit("update-parcel", this.parcel);
            }
        },
    },
};
</script>

<style scoped>
.title {
    margin-top: 100px;
}

.date {
    margin-right: 100px;
    margin-top: 100px;
}

.date-title {
    display: flex;
    flex: 1;
    justify-content: space-between;
}
</style>
