<template>
    <v-app>
        <v-container class="container">
            <bt-m-error-pages-type1 v-if="errorPage === '404'" />
            <bt-m-error-pages-type2 v-else />
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "nuxt-error",
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        errorPage() {
            if (this.error.statusCode === 404) {
                return "404";
            }
            // catch everything else
            return "500";
        },
    },
};
</script>

<style scoped>
.container {
    display: flex !important;
    flex: 1 !important;
    height: 100vh !important;
    justify-content: center !important;
    align-items: center !important;
}
</style>
