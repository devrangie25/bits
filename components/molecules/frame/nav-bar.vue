<template>
    <v-navigation-drawer
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        mini-variant-width="80"
        permanent
        color="primary"
    >
        <v-list-item class="px-4">
            <v-list-item-avatar>
                <v-img
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                ></v-img>
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
                    title: "Deliveries",
                    icon: "mdi-truck",
                    to: "/admin/deliveries",
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
};
</script>
