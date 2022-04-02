<template>
    <div class="error-404">
        <div>
            <v-img
                src="/img/warning.png"
                lazy-src="/img/warning.png"
                contain
                :width="$vuetify.breakpoint.mdAndDown ? '200' : ''"
            ></v-img>
        </div>
        <div class="text-center title">
            An Error Occured
            <br v-if="$vuetify.breakpoint.mdAndDown" />
            <NuxtLink class="mx-1" to="/">Home page</NuxtLink>
        </div>
    </div>
</template>
<script>
export default {
    name: "error-500",
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
