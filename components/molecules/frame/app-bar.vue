<template>
    <v-app-bar
        app
        absolute
        :color="$vuetify.breakpoint.mdAndDown && $route.path !== '/customer' ? 'primary' : 'white'"
        height="80"
        flat
    >
        <v-app-bar-nav-icon @click="showDrawer" :class="'white--text'" v-if=" $route.path !== '/customer'"></v-app-bar-nav-icon>
        <v-toolbar-title v-else class="font-weight-light">Bantayan Island Trucking Services</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn v-if="$route.path === '/customer'" to="/auth/login" class="text-capitalize font-weight-bold" color="primary" depressed>
            Login
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "app-bar",

    methods: {
        showDrawer(){
            this.$nuxt.$emit('show', true)
        }
    }
};
</script>

