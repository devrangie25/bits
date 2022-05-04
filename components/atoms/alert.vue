<template>
    <div>
        <v-alert
            v-model="alert"
            dark
            :type="alertType"
            :color="alertColor"
            dismissible
            text
        >
            {{ description }}
        </v-alert>
    </div>
</template>

<script>
export default {
    name: "alert",
    props: {
        alertColor: {
            default: "#499f6e",
            type: String,
            required: false,
        },
        alertType: {
            default: "success",
            type: String,
            required: false,
        },
        description: {
            default: "This is alert",
            type: String,
            required: false,
        },
    },

    watch: {
        alert: function(n){
            if(!n) {
                this.$store.dispatch('parcels/setLatestAction', {})
            }
        },
    },

    data() {
        return {
            alert: true,
        };
    },
};
</script>
