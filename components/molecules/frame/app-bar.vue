<template>
    <v-app-bar
        app
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        height="80"
    >

        <v-toolbar-title class="font-weight-bold">Bantayan Island Trucking Services</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/auth/login" class="text-capitalize font-weight-bold" color="primary" depressed>
            Login
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "app-bar",
};
</script>

