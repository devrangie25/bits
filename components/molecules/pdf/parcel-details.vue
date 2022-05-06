<template>
    <div>
        <client-only>
            <vue-html2pdf
                ref="html2Pdf"
                :show-layout="false"
                :float-layout="true"
                :enable-download="false"
                :preview-modal="true"
                :paginate-elements-by-height="1100"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                pdf-orientation="portrait"
                pdf-content-width="800px"
                :image="{ type: 'jpeg', quality: 0.95 }"
                :html-to-pdf-options="htmlToPDF"
                @hasDownloaded="hasDownloaded($event)"
                @progress="onProgress($event)"
                @startPagination="startPagination"
                @hasPaginated="hasPaginated"
            >
                <section slot="pdf-content">
                    <slot />
                </section>
            </vue-html2pdf>
        </client-only>
        <div>
            <v-btn
                class="text-capitalize mx-2"
                color="primary"
                depressed
                outlined
                small
                :disabled="parcelStatus !== 'Order Created'"
                @click="generateReport"
            >
                <v-icon left> mdi-file-document </v-icon>
                Print
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "pdf",

    props: {
        parcelStatus: String
    },

    data() {
        return {
            htmlToPDF: {
                margin: 0,
                filename: `test123.pdf`,
                image: {
                    type: "jpeg",
                    quality: 0.98,
                },

                enableLinks: true,
                html2canvas: {
                    scale: 1,
                    useCORS: true,
                },

                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: "portrait",
                },
                pagebreak: { mode: ["avoid-all", "css", "legacy"] },
            },
        };
    },

    methods: {
        generateReport() {
            this.$refs.html2Pdf.generatePdf();
        },

        startPagination() {
            console.log("startPagination");
        },

        hasPaginated() {
            console.log("hasPaginated");
        },

        onProgress($event) {
            console.log("onProgress", $event);
        },

        hasDownloaded($event) {
            console.log("hasDownloaded", $event);
        },
    },
};
</script>

<style>
.title {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 3.2rem;
    font-weight: bold;
}

.refnotxt {
    font-weight: bold;
}

.refno {
    margin-bottom: 0.5rem;
    padding-left: 3.2rem;
}

.tbl-head{
    text-align: left;
}

.header-title{
    font-size: 2rem;
    padding-left: 3.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.tbl-total {
    text-align: right;
}

</style>
