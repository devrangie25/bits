<template>
    <v-app class="app">
        <bt-m-frame-nav-bar />
        <v-main>
            <v-container fluid class="pa-6">
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "loggedin",
};
</script>

