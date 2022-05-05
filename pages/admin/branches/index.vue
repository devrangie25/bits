<template>
    <div>
        <div class="parcel-container">
            <v-row>
                <v-col cols="12" v-if="page === 1">
                    <v-card class="pa-6" rounded="lg" flat>
                        <v-data-table
                            :headers="headers"
                            :items="storeBranches"
                            sort-by="calories"
                            class="transparent rounded-lg"
                            :search="search"
                        >
                            <template v-slot:top>
                                <v-toolbar flat rounded="lg">
                                    <v-toolbar-title>Branches</v-toolbar-title>
                                    <v-btn
                                        class="ml-2"
                                        x-small
                                        depressed
                                        fab
                                        color="primary"
                                        @click="addBranchForm"
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
                                        label="Search Branch"
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
                                    @click="editBranch(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    color="red"
                                    small
                                    @click="deleteBranch(item)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="12" v-if="page === 2">
                    <bt-m-form-branch
                        :formData="formData"
                        :isLoading="isLoadingSubmit"
                        :action="action"
                        @cancel-branch="cancelOrClearBranchForm"
                        @save-branch="addNewBranch"
                        @update-branch="updateBranch"
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
        isLoadingSubmit: false,
        headers: [
            {
                text: "Name",
                value: "name",
            },
            { text: "Municipality", value: "municipality" },
            { text: "Zip Code", value: "zipcode" },
            { text: "Contact #", value: "contact_number" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        branches: [],
        formData: {},
        action: 'New'
    }),

    computed: {
        storeBranches(){
           return this.$store.state.branches.branches
        }
    },

    methods: {

        async deleteBranch(branchToDelete){
            console.log('branchToDelete', branchToDelete.id)
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
                    const branch = await this.$store.dispatch('branches/deleteBranch', { branch_id : branchToDelete.id })
                    if (!branch.error) {
                        await this.getBranches()
                        await this.showParcelNotification({ icon : 'success', title: 'Branch Successfully Deleted' })
                        this.page = 1
                    } else {
                        await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                    }
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        editBranch(branch){
            this.formData = branch
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

        async getBranches () {
            try {
                await this.$store.dispatch('branches/getBranches')
            } catch (error) {
                console.error('error', error)
            }
        },

        async updateBranch(updatedBranch) {
            try {
                this.isLoadingSubmit = true
                const branch = await this.$store.dispatch('branches/updateBranch', {...updatedBranch, branch_id : updatedBranch.id})
                if (!branch.error) {
                    await this.getBranches()
                    await this.showParcelNotification({ icon : 'success', title: 'Branch Successfully Updated' })
                    this.cancelOrClearBranchForm()
                    this.isLoadingSubmit = false
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                }
            } catch (error) {
                console.error('error', error)
                this.isLoadingSubmit = false
            }
        },

        async addNewBranch(newBranch) {
            try {
                this.isLoadingSubmit = true
                const branch = await this.$store.dispatch('branches/createBranch', newBranch)
                if (!branch.error) {
                    await this.getBranches()
                    await this.showParcelNotification({ icon : 'success', title: 'Branch Successfully Added' })
                    this.cancelOrClearBranchForm()
                    this.isLoadingSubmit = false
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                    this.isLoadingSubmit = false
                }
            } catch (error) {
                console.error('error', error)
                this.isLoadingSubmit = false
            }
        },

        cancelOrClearBranchForm() {
            this.page = 1;
            this.formData = {}
        },

        saveBranch() {
            this.page = 1;
            this.$swal.fire({
                position: "center",
                icon: "success",
                title: "Branch Successully Added",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        addBranchForm() {
            this.page = 2;
        }
    },
};
</script>
