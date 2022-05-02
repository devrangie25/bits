<template>
    <div>
        <v-form ref="form">
            <v-card flat class="transparent px-16">
                <v-card-title>
                    <v-card-title
                        class="signup-title font-weight-bold text-break ml-n4"
                    >
                        {{ title }}
                    </v-card-title>
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col v-if="!isLoginPage && !isResetPasswordPage" cols="12" class="mb-n3">
                            <label>First Name</label>
                            <v-text-field
                                v-model="formData.first_name"
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="!isLoginPage && !isResetPasswordPage" cols="12" class="mb-n3">
                            <label>Last Name</label>
                            <v-text-field
                                v-model="formData.last_name"
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="!isLoginPage && !isResetPasswordPage" cols="12" class="mb-n3">
                            <label>Mobile Number</label>
                            <v-text-field
                                v-model="formData.mobile_number"
                                type="number"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                                :rules="[rules.required]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="mb-n3">
                            <label>Email</label>
                            <v-text-field
                                v-model="formData.email"
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                                :rules="[rules.required, rules.email]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="mb-n3">
                            <label>{{ isResetPasswordPage ? 'New Password' : 'Password'}}</label>
                            <v-text-field
                                v-model="formData.password"
                                outlined
                                hide-details="auto"
                                dense
                                class="my-1"
                                :append-icon="
                                    seePassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                @click:append="toggleEye"
                                :type="seePassword ? 'text' : 'password'"
                                :rules="title === 'Login' ? [] : [rules.required, rules.password]"
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="isResetPasswordPage" cols="12" class="mb-n3">
                            <label>Confirm Password</label>
                            <v-text-field
                                v-model="formData.confirmPassword"
                                outlined
                                hide-details="auto"
                                dense
                                class="my-1"
                                :append-icon="
                                    seeConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                @click:append="toggleEyeConfirm"
                                :type="seeConfirmPassword ? 'text' : 'password'"
                                :rules="title === 'Login' ? [] : [rules.required, rules.confirmPassword]"
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="isLoginPage" cols="12" class="my-n1">
                            <div>
                                Forgot Password?
                                <nuxt-link :to="`/auth/reset-password`"  class="text-decoration-none primary--text font-weight-bold forgot-password" >Reset here</nuxt-link>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions :class="`${!isLoginPage ? 'mt-6' : ''} mx-2`">
                    <v-btn
                        @click.prevent="authAction"
                        color="primary"
                        block
                        depressed
                        height="42"
                    >
                        <span class="font-weight-bold text-capitalize">
                            {{ authActionText }}
                        </span>
                    </v-btn>
                </v-card-actions>
                <div
                    v-if="!isResetPassword"
                    class="text-center mx-4 mt-2 body-2 font-weight-medium"
                >
                    {{ authDescription }}
                    <nuxt-link :to="`/auth/${to}`" class="text-decoration-none primary--text font-weight-bold" >{{ authText }}</nuxt-link>
                </div>
                <div
                    v-if="isResetPassword"
                    class="text-center mx-4 mt-2 body-2 font-weight-medium"
                >
                    Back to
                    <span class="primary--text font-weight-bold forgot-password" >Login</span>
                </div>
            </v-card>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "authForm",
    props: {
        title: String,
        formData: Object,
    },

    data() {
        return {
            isResetPassword: false,
            seeConfirmPassword: false,
            seePassword: false,
            rules: {
                required: (value) => !!value || "Required field",
                email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid",
                password: value => {
                    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                    return (
                        pattern.test(value) || "Min. 8 characters with at least one capital letter, a number and a special character."
                    );
                },
                confirmPassword: (value) => value === this.formData.password || 'Password does not match.'
            }
        };
    },

    computed: {

        isResetPasswordPage(){
            if (this.title === 'Reset Password') {
                return true
            }
            return false
        },

        isLoginPage() {
            return this.title === "Login" ? true : false;
        },

        authActionText() {
            return this.title === "Login" ? "Login" : this.title === "Sign up" ? "Sign up" : "Reset Password"
        },

        authDescription() {
            return this.title === "Login" ? `Don't have an account? ` : this.title === "Sign up" ? `Already have an account?` : `Back to`;
        },

        authText() {
            return this.title === "Login" ? "Sign up" : this.title === "Sign up" ? "Sign in" : "Login"
        },

        to() {
            return this.title === "Login" ? `register` : `login`;
        },
    },

    methods: {

        resetPassword(){
            this.$router.push('/reset-password')
        },

        toggleEye() {
            this.seePassword = !this.seePassword;
        },

        toggleEyeConfirm() {
            this.seeConfirmPassword = !this.seeConfirmPassword;
        },

        authAction() {
            if (!this.$refs.form.validate()) return

            if (this.title === 'Sign up') {
                this.$emit('register-user', this.formData)
            } if (this.title === 'Login') {
                this.$emit('login-user', this.formData)
            }else {
                this.$emit('reset-password', this.formData)
            }
        },
    },
};
</script>

<style scoped>
.signup-title {
    color: #434343 !important;
}

.forgot-password {
    cursor: pointer;
}
</style>
