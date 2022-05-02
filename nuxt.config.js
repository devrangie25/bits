import colors from "vuetify/es5/util/colors";

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - bits",
        title: "bits",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/style.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/chart.js", mode: "client" },
        { src: "~/plugins/swal", mode: "client" },
        { src: '~/plugins/vue-html2pdf.js', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        {
            path: "~/components/atoms/",
            prefix: "bt-a",
        },

        {
            path: "~/components/molecules/",
            prefix: "bt-m",
        },

        {
            path: "~/components/organisms/",
            prefix: "bt-o",
        },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify",
        // '@nuxtjs/google-fonts'
    ],

    //   googleFonts: {
    //     families: {
    //         Roboto: false,
    //         Karla: true,
    //         Rubik: true,
    //     },
    //     display: 'swap'
    // },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/dayjs',
        "@nuxtjs/pwa",
        "@nuxtjs/dotenv"
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: process.env.API_URL || 'http://localhost:4000/api'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    env: {
        baseUrl: process.env.API_URL || 'http://localhost:4000/api'
    },

    dayjs: {
        locales: ['en', 'ja'],
        defaultLocale: 'en',
        defaultTimeZone: 'Asia/Manila',
        plugins: [
            'utc', // import 'dayjs/plugin/utc'
            'timezone', // import 'dayjs/plugin/timezone'
            'isBetween'
        ] // Your Day.js plugin
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        treeshake: true,
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
                light: {
                    primary: "#499f6e",
                    accent: "#71DFE7",
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
