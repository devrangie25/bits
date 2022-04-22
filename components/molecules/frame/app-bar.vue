<template>
    <v-app-bar
        app
        absolute
        :color="
            $vuetify.breakpoint.mdAndDown && $route.path !== '/customer'
                ? 'primary'
                : 'white'
        "
        height="80"
        flat
    >
        <v-app-bar-nav-icon
            @click="showDrawer"
            :class="'white--text'"
            v-if="$route.path !== '/customer' && $route.path !== '/customer/'"
        ></v-app-bar-nav-icon>
        <v-toolbar-title v-if="$route.path === '/customer' || $route.path === '/customer/'" class="font-weight-light">
            Bantayan Island Trucking Services
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <bt-m-form-rate v-if="$route.path === '/customer' || $route.path === '/customer/'" />

        <!-- <v-btn
            v-if="$route.path === '/customer'"
            class="text-capitalize font-weight-bold"
            color="primary"
            depressed
        >
            Rate Our Services
        </v-btn> -->
    </v-app-bar>
</template>

<script>
export default {
    name: "app-bar",

    methods: {
        showDrawer() {
            this.$nuxt.$emit("show", true);
        },
    },
};
</script>
