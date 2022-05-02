<template>
    <div class="error-404">
        <div>
            <v-img
                src="/img/error-404.png"
                lazy-src="/img/error-404.png"
                contain
                :width="$vuetify.breakpoint.mdAndDown ? '200' : ''"
            ></v-img>
        </div>
        <div class="text-center mt-6 title">
            Page Not Found!
            <br v-if="$vuetify.breakpoint.mdAndDown">
            <Nuxt-Link class="mx-1" to="/admin/dashboard">Home page</Nuxt-Link>
        </div>
    </div>
</template>

<script>
export default {
    name: "error-404",
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
