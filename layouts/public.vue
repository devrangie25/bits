<template>
    <v-app class="app">
        <bt-m-frame-app-bar />
        <v-main>
            <v-container fluid>
                <Nuxt />
            </v-container>
        </v-main>
        <bt-m-frame-footer />
    </v-app>
</template>

<script>
export default {
    name: "public",
};
</script>

