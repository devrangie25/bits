<template>
    <div>
        <v-row class="pa-0">
            <v-col cols="12" class="tracker-field-con py-16">
                <v-container style="max-width: 800px">
                    <div class="mb-6 text-center headline white--text font-weight-bold">
                        Start tracking your parcel by entering your tracking ID.
                    </div>
                    <v-text-field
                        outlined
                        placeholder="Enter Pracel Tracking ID"
                        hide-details="auto"
                        flat
                        append-icon="mdi-magnify"
                        solo
                    >
                    </v-text-field>
                </v-container>
            </v-col>

            <v-col cols="12">
                <v-container style="max-width: 700px">
                    <div
                        class="my-4 mb-8 title ml-10 d-flex justify-space-between"
                    >
                        <span> Tracking Number </span>
                        <span class="font-weight-bold">
                            PH29127408211
                            <v-icon class="ml-2 mt-n1 copy-icon">
                                mdi-content-copy
                            </v-icon>
                        </span>
                    </div>
                    <v-timeline dense align-top>
                        <v-timeline-item
                            v-for="n in 3"
                            :key="n"
                            small
                            color="primary"
                        >
                            <v-card flat class="pa-2">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold"
                                >
                                    March 30, 2022
                                </v-card-title>
                                <v-card-text>
                                    Arrived at Mandaue Center Hub
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    layout: "public",
};
</script>
