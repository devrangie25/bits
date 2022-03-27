<template>
    <div>
        <v-form ref="parcelForm">
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'parcelForm'
};
</script>

<style></style>
