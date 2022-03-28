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
        <v-list-item class="px-4">
            <v-list-item-avatar>
                <v-icon large color="white">
                    mdi-account-circle
                </v-icon>
            </v-list-item-avatar>

            <v-list-item-title class="white--text">Admin</v-list-item-title>

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
            ],
            mini: true,
        };
    },

    computed: {
        isMobileOrTable(){
            if (this.$vuetify.breakpoint.mdAndDown) {
                return true
            }
            return false
        }
    },

    created(){
        this.$nuxt.$on('show', bol => {
            console.log('bol')
            this.drawer = true
        })
    },

    beforeDestroy(){
        this.$nuxt.$off('show')
    }
};
</script>
