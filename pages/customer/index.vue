<template>
    <div>
        <v-row class="pa-0">
            <v-col cols="12" class="tracker-field-con py-16">
                <div v-if="!$vuetify.breakpoint.mdAndDown" style="float: left">
                    <v-img src="/img/bits-logo.png" width="200"></v-img>
                </div>
                <v-container style="max-width: 800px">
                    <div
                        class="mb-6 text-center headline white--text font-weight-bold"
                    >
                        Start tracking your parcel by entering your tracking ID.
                    </div>

                    <v-text-field
                        outlined
                        placeholder="Enter Pracel Tracking ID"
                        hide-details="auto"
                        flat
                        append-icon="mdi-magnify"
                        solo
                        v-on:keyup.enter="onEnter"
                    >
                    </v-text-field>
                </v-container>
            </v-col>

            <v-col v-if="false" cols="12" class="mt-16 d-flex justify-center">
                <div>
                    <div class="d-flex justify-center">
                        <v-img
                            src="/img/parcel-not-found.png"
                            :width="$vuetify.breakpoint.mdAndDown ? 50 : 100"
                        ></v-img>
                    </div>
                    <div :class="`mt-6 ${$vuetify.breakpoint.mdAndDown ? 'title' : 'display-1'}`">Parcel Not Found</div>
                </div>
            </v-col>

            <v-col v-if="isSearch" cols="12">
                <v-container style="max-width: 700px">
                    <div
                        class="my-4 mb-2 title ml-10 d-flex justify-space-between"
                    >
                        <span class="font-weight-light"> Tracking Number </span>
                        <span class="font-weight-bold">
                            PH29127408211
                            <v-icon class="ml-2 mt-n1 copy-icon">
                                mdi-content-copy
                            </v-icon>
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Parcel :
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            Smart TV LED
                        </span>
                    </div>
                    <div class="mb-2 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Sender :
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            Jose Rizal
                        </span>
                    </div>
                    <div class="mb-8 title ml-10">
                        <span class="font-weight-light subtitle-2">
                            Receiver :
                        </span>
                        <span class="font-weight-bold subtitle-2">
                            Pablo Escobar
                        </span>
                    </div>
                    <v-timeline dense align-top>
                        <v-timeline-item
                            v-for="(val, k) in history"
                            :key="k"
                            color="primary"
                            small
                            :icon="val.icon"
                            fill-dot
                        >
                            <v-card flat class="pa-2">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold"
                                >
                                    {{ val.date }}
                                </v-card-title>
                                <v-card-text>
                                    {{ val.status }} - {{ val.place }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-col>
            <v-col cols="12">
                <bt-m-paragraphs-about color="transparent" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    layout: "public",

    data() {
        return {
            isSearch: false,
            history: [
                {
                    date: "March 30, 2022",
                    status: "Pick Up",
                    place: "Madridejos",
                    icon: "mdi-car-pickup",
                },
                {
                    date: "March 29, 2022",
                    status: "Delivered",
                    place: "Cebu",
                    icon: "mdi-truck-check",
                },
                {
                    date: "March 28, 2022",
                    status: "Drop Off",
                    place: "Cebu",
                    icon: "mdi-cart",
                },
                {
                    date: "March 27, 2022",
                    status: "Shipped",
                    place: "Madridejos",
                    icon: "mdi-cart",
                },
            ],
        };
    },

    methods: {
        onEnter() {
            this.isSearch = true;
        },
    },
};
</script>
