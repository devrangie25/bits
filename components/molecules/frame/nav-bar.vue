<template>
    <v-navigation-drawer
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        mini-variant-width="80"
        :permanent="!isMobileOrTable"
        :temporary="isMobileOrTable"
        color="primary"
    >
        <v-list-item class="px-2 d-flex justify-center">
                <v-img
                    src="/img/bits-logo.png"
                    width="150"
                ></v-img>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="px-4">
            <v-list-item-avatar>
                <v-icon large color="white"> mdi-account-circle </v-icon>
            </v-list-item-avatar>

            <v-list-item-title class="white--text mx-2"
                >Admin</v-list-item-title
            >

            <v-btn dark icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-list rounded>
            <v-list-item
                color="white"
                ripple
                link
                v-for="item in items"
                :key="item.title"
                :to="item.to"
            >
                <v-list-item-icon>
                    <v-icon dark>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="white--text">{{
                        item.title
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn to="/auth/login" block depressed color="transparent">
                    <v-icon color="white"> mdi-logout </v-icon>
                    <span
                        class="text-capitalize subtitle-1 white--text mx-4"
                        v-if="!mini"
                    >
                        Logout
                    </span>
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            drawer: true,
            items: [
                { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
                { title: "Parcels", icon: "mdi-cart", to: "/admin/parcels" },
                {
                    title: "Products",
                    icon: "mdi-briefcase",
                    to: "/admin/product-information",
                },
                {
                    title: "Branches",
                    icon: "mdi-map-marker",
                    to: "/admin/branches",
                },
                {
                    title: "Reports",
                    icon: "mdi-file-document-multiple",
                    to: "/admin/reports",
                },
                {
                    title: "About Us",
                    icon: "mdi-account",
                    to: "/about-us",
                },
            ],
            mini: true,
        };
    },

    computed: {
        isMobileOrTable() {
            if (this.$vuetify.breakpoint.mdAndDown) {
                return true;
            }
            return false;
        },
    },

    created() {
        this.$nuxt.$on("show", (bol) => {
            console.log("bol");
            this.drawer = true;
        });
    },

    beforeDestroy() {
        this.$nuxt.$off("show");
    },
};
</script>
