<template>
    <div>
        <v-dialog
            transition="dialog-bottom-transition"
            max-width="600"
            persistent
            v-model="dialog"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="text-capitalize font-weight-bold"
                    color="primary"
                    depressed
                    v-bind="attrs"
                    v-on="on"
                    >Rate Our Services</v-btn
                >
            </template>
            <template>
                <v-card>
                    <v-toolbar flat color="primary" dark>
                        <span class="title"> Customer Feedback </span>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form">
                            <v-row class="mt-4">
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="formData.fullname"
                                        label="Name"
                                        outlined
                                        dense
                                        hide-details="auto"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="formData.address"
                                        label="Address"
                                        outlined
                                        dense
                                        hide-details="auto"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="formData.contact"
                                        label="Contact"
                                        outlined
                                        dense
                                        hide-details="auto"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        v-model="formData.message"
                                        label="Feedback"
                                        outlined
                                        dense
                                        hide-details="auto"
                                        rows="3"
                                        :rules="[rules.required]"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-space-between align-center">
                                    <div class="subtitle-2">
                                        Rate
                                    </div>
                                    <div>
                                        <v-rating
                                            v-model="formData.rate"
                                            color="warning"
                                            background-color="grey darken-1"
                                        ></v-rating>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn text class="text-capitalize" @click="reset">Close</v-btn>
                        <v-btn
                            depressed
                            color="primary"
                            @click="submitFeedback"
                            class="text-capitalize"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "rateForm",

    data: () => ({
        dialog: false,
        formData: {},
        rules: {
            required: (value) => !!value || "Required field"
        }
    }),

    methods: {

        showParcelNotification({ position, icon, title, showConfirmButton, time}){
            return this.$swal.fire({
                position: position || 'success',
                icon: icon || 'success',
                title: title || 'Success',
                showConfirmButton: showConfirmButton || false,
                timer: time || 1500,
            });
        },

        async submitFeedback(){
            if (!this.$refs.form.validate()) return

            if (!this.formData.rate) return this.showParcelNotification({ icon : 'error', title: 'Please add your rating.' })

            try {
                console.log('DATA TO BE SAVED', this.formData)
                const rate = await this.$axios.$post('/ratings/create', this.formData)

                if (rate) {
                    console.log('rate', rate)
                    await this.showParcelNotification({ icon : 'success', title: 'Thank you for rating us.' })
                    this.reset()
                }
            } catch (error) {
                console.error('error', error)
            }
        },

        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.dialog = false
            this.formData = {}
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>
