<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="desserts"
            item-key="name"
            hide-default-footer
        >
            <template v-slot:body.append>
                <tr>
                    <td>
                        <v-select
                            class="mt-6"
                            label="Select Product"
                            outlined
                            dense
                        ></v-select>
                    </td>
                    <td>
                        <v-text-field
                            v-model="calories"
                            class="mt-6"
                            outlined
                            dense
                        ></v-text-field>
                    </td>
                    <td colspan="4"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        Total
                    </td>
                    <td>
                        0.00
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </template>
        </v-data-table>
        <div class="d-flex justify-end">
            <v-btn class="text-capitalize mx-2" depressed color="gray">
                Cancel
            </v-btn>
            <v-btn class="text-capitalize" depressed color="primary">
                Add Item
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        table: Object
    },
    data() {
        return {
            calories: "",
            desserts: [],
        };
    },
    computed: {
        headers() {
            return [
                {
                    text: "Product",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                {
                    text: "Per Transaction",
                    value: "calories"
                },
                { text: "Shipping Fee", value: "fat" },
                { text: "Amount", value: "carbs" },
                { text: "Actions", value: "protein" }
            ];
        },
    },
};
</script>
