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
                        <v-col v-if="!isLoginPage" cols="12" class="mb-n3">
                            <label>First Name</label>
                            <v-text-field
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="!isLoginPage" cols="12" class="mb-n3">
                            <label>Last Name</label>
                            <v-text-field
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="!isLoginPage" cols="12" class="mb-n3">
                            <label>Mobile Number</label>
                            <v-text-field
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="mb-n3">
                            <label>Email</label>
                            <v-text-field
                                type="email"
                                class="mt-1"
                                outlined
                                hide-details="auto"
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="mb-n3">
                            <label>Password</label>
                            <v-text-field
                                outlined
                                hide-details="auto"
                                dense
                                class="my-1"
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="isLoginPage" cols="12" class="my-n1">
                            <div>
                                Forgot Password? <span class="primary--text font-weight-bold forgot-password">Reset here</span>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions :class="`${!isLoginPage ? 'mt-6' : ''} mx-2`">
                    <v-btn @click.prevent="authAction" color="primary" block depressed height="42">
                        <span class="font-weight-bold text-capitalize">
                            {{ authActionText }}
                        </span>
                    </v-btn>
                </v-card-actions>
                <div v-if="!isResetPassword" class="text-center mx-4 mt-2 body-2 font-weight-medium">
                    {{ authDescription }}<nuxt-link :to="`/auth/${to}`" class="text-decoration-none primary--text font-weight-bold">{{ authText }}</nuxt-link>
                </div>
                <div v-if="isResetPassword" class="text-center mx-4 mt-2 body-2 font-weight-medium">
                    Back to <span class="primary--text font-weight-bold forgot-password">Login</span>
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
        form: Object,
    },

    data(){
        return {
            isResetPassword: false
        }
    },

    computed: {
        isLoginPage(){
            return this.title === 'Login' ? true : false
        },

        authActionText(){
            return this.title === 'Login' ? 'Login' : 'Sign up'
        },

        authDescription(){
            return this.title === 'Login' ? `Don't have an account? ` : `Already have an account? `
        },

        authText(){
            return this.title === 'Login' ? 'Sign up' : 'Sign in'
        },

        to(){
            return this.title === 'Login' ? `register` : `login`
        }
    },

    methods: {
        authAction(){
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
    .signup-title {
        color: #434343 !important;
    }
</style>
