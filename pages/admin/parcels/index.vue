<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12" v-if="page === 1">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="parcels"
                            sort-by="calories"
                            class="transparent rounded-lg"
                            :search="search"
                        >
                            <template v-slot:top>
                                <v-toolbar flat rounded="lg">
                                    <v-toolbar-title>Parcels</v-toolbar-title>
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
                                        label="Search Parcel"
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
                                    @click="editParcel(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    color="red"
                                    small
                                    @click="deleteParcel(item)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="12" v-if="page === 2">
                    <bt-m-form-parcel
                        :action="formAction"
                        :formData="formData"
                        @cancel-parcel="cancelParcel"
                        @save-parcel="saveParcel"
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
        formAction: "create",
        formData: {},
        headers: [
            {
                text: "Tracking ID",
                value: "trucking_id",
            },
            {
                text: "Shipped Date",
                value: "shipped_date",
            },
            { text: "Sender", value: "sender_name" },
            { text: "Recipient", value: "receiver_name" },
            { text: "Status", value: "status" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        parcels: [
            {
                trucking_id: "PH2085659125",
                shipped_date: "09/25/2022",
                sender_name: "Rangie Laurente",
                sender_address: "Poblacion, Madridejos, Cebu",
                sender_contact: "09123856245",
                receiver_name: "Kyla Jean",
                receiver_address: "Mancilang, Madridejos, Cebu",
                receiver_contact: "09387172840",
                status: "Pick Up",
            },
            {
                trucking_id: "PH2085612345",
                shipped_date: "09/25/2022",
                sender_name: "John Doe",
                sender_address: "Poblacion, Madridejos, Cebu",
                sender_contact: "09123856245",
                receiver_name: "Jose Rizal",
                receiver_address: "Tugas, Madridejos, Cebu",
                receiver_contact: "09376591624",
                status: "Delivered",
            },
        ],
    }),

    mounted() {},

    methods: {
        cancelParcel() {
            this.page = 1;
            this.formData = {}
        },

        saveParcel(newParcel) {
            this.page = 1;
            this.parcels = [...this.parcels, newParcel];
            this.$swal.fire({
                position: "center",
                icon: "success",
                title: "Parcel Successfully Added",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        addParcelForm() {
            this.formAction = "create";
            this.page = 2;
        },

        editParcel(item) {
            this.formAction = "edit";
            this.formData = item;
            this.page = 2;
        },

        deleteParcel(item) {
            try {
                this.$swal
                    .fire({
                        title: "Are you sure?",
                        text: `Delete ${item.trucking_id}.`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#499f6e",
                        cancelButtonColor: "red",
                        confirmButtonText: "Yes, delete parcel!",
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            this.$swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Parcel has been deleted.",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
            } catch (error) {
                console.error("An error Occured", error);
            }
        },
    },
};
</script>
