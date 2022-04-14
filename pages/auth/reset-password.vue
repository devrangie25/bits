<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" lg="7" class="bg-img d-none d-lg-flex">
                <div class="display-2 font-weight-bold col-1-center-form ">
                    Bantayan Island Trucking Services
                </div>
            </v-col>
            <v-col cols="12" lg="5" class="col-2-center-form">
                <bt-m-auth-form :formData="formData" title="Reset Password" @reset-password="resetPassword"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    layout: "auth",
    name: "login",
    data(){
        return {
            formData: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        }
    },

    methods: {

        async resetPassword(userData){
             try {
                const user = await this.$store.dispatch('auth/resetPassword', userData)
                if (!user.error) {
                    await this.showParcelNotification({ icon : 'success', title: 'Successfully Reset' })
                    this.$router.push("/auth/login");
                } else {
                    await this.showParcelNotification({ icon : 'error', title: 'An Error Occured' })
                }
            } catch (error) {
                console.error('error', error.message)
            }
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
    }
};
</script>

<style scoped>

.bg-img {
    background-image: url('/img/truck.jpeg') !important;
    background-color: #3c5a77 !important;
    background-blend-mode: multiply !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;
    opacity: 0.8 !important;
}

.col-1-center-form {
    color: white !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 1 !important;
    height: 100vh !important;
}

.col-2-center-form {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 1 !important;
    height: 100vh !important;
}
</style>
