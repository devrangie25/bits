<template>
    <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="(rate, i) in ratings" :key="i" v-slot="{ active, toggle }">
            <v-card class="ma-4" color="primary" min-height="150" flat dark width="300" @click="toggle">
                <v-card-subtitle class="font-italic font-weight-light ">
                    {{ $dayjs(rate.created_on).format('MMMM DD, YYYY ') }}
                </v-card-subtitle>
                <v-card-text class="font-italic font-weight-light">
                    "{{ rate.message }}"
                </v-card-text>
                <div class="px-4 body-2 mb-3 font-weight-light font-italic">
                    - {{ rate.fullname }}
                    <div class="d-flex justify-start">
                        <v-rating
                            v-model="rate.rate"
                            color="warning"
                            size="20"
                            dense
                            background-color="grey darken-1"
                        ></v-rating>
                    </div>
                </div>
            </v-card>
        </v-slide-item>
    </v-slide-group>
</template>

<script>
export default {
    name: "customerRatings",
    data: () => ({
        model: null,
        ratings: []
    }),

    created() {
        this.$nuxt.$on("get-ratings", (bol) => {
            this.getRatings()
        });
    },

    mounted(){
        this.getRatings()
    },

    methods: {
        async getRatings(){
            try {
                const results = await this.$axios.$get('/ratings')

                if (results) {
                    this.ratings = results.data
                }

            } catch (error) {
                console.error('error', error)
            }
        }
    }
};
</script>

<style scoped>
.bot {
    position: fixed;
    bottom: 0;
}
</style>
