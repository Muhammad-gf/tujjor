export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: false,
    head: {
        title:
            "Интернет-платформа  Tujjor —  низкие цены и широкий ассортимент! | Tujjor",
        htmlAttrs: {
            lang: "en"
        },

        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            },
            {
                hid: "description",
                name: "description",
                content:
                    "Интернет-платформа  Tujjor —  низкие цены и широкий ассортимент! | Tujjor. "
            },

            {
                name: "keywords",
                content:
                    "интернет магазин, узбекистан, ташкент, рассрочка, скидка, Книги, телефоны и гаджеты, компьютеры  и  оргтехника, для геймеров, кондиционеры, бытовая техника, телевизоры, видео и аудио, посуда, мебель, техника для красоты и здоровья, техника для кухни, для дома и офиса, инструменты и автотовары, игрушки, подарки и аксессуары, рамазан, одежда, обувь и аксессуары"
            }
        ],

        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href:
                    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href:
                    "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
            },

            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            },

            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            },

            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/scss/main.scss"],

    loading: {
        color: "#f7931f",
        hieght: "1px"
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "@/plugins/vue-slick-carousel.js" },
        { src: "@/plugins/vue-slider-component.js", ssr: false },
        { src: "@/plugins/vue-star-rating.js", mode: "client", ssr: false },
        { src: "@plugins/v-mask.js" },
        { src: "@plugins/persistedState.js", ssr: false },
        { src: "@plugins/vuelidate.js", ssr: false },
        { src: "@plugins/pdf.js", ssr: false }
    ],
    fontawesome: {
        component: "fa",
        icons: {
            solid: true,
            brands: true
        }
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/fontawesome"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/style-resources",
        "@nuxtjs/axios",
        "@nuxtjs/auth-next",
        "@nuxtjs/recaptcha",
        "@nuxtjs/i18n"
    ],
    i18n: {
        locales: [
            {
                code: "uz",
                file: "uz.js"
            },
            {
                code: "ru",
                file: "ru.js"
            }
        ],
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
        defaultLocale: "ru"
    },
    recaptcha: {
        hideBadge: true, // Boolean Hide badge element
        siteKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Site key for requests,
        version: 2 // Version
    },

    router: {
        // middleware: ["auth"],

        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                const { x, y } = savedPosition;
                let scrollY, winInnerHieght;

                const interval = setInterval(() => {
                    scrollY = window.scrollY;
                    winInnerHieght = document.body.clientHeight;
                    if (y <= winInnerHieght) {
                        window.scrollTo({
                            top: y,
                            left: x,
                            behavior: "smooth"
                        });

                        if (scrollY <= y + 150 && scrollY >= y - 150) {
                            clearInterval(interval);
                        }
                    }
                }, 500);

                return setTimeout(() => {
                    clearInterval(interval);
                    return savedPosition;
                }, 30000);
            } else {
                return { x: 0, y: 0 };
            }
        }
    },

    auth: {
        redirect: {
            login: "/auth/login",
            logout: "/",
            callback: "/auth/login",
            home: "/"
        },
        strategies: {
            local: {
                token: {
                    property: "token",
                    // required: true,
                    // type: 'Bearer'
                    name: "token"
                },
                user: {
                    property: "data"
                    // autoFetch: true
                },
                endpoints: {
                    login: { url: "/user/login", method: "post" },
                    user: { url: "/user/me", method: "get" }
                }
            }
        }
    },
    styleResources: {
        scss: ["@/assets/scss/*.scss"]
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "https://cdn.tujjor.org/api",
        proxyHeaders: false,
        credentials: false
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vue-slick"],
        vendor: ["vue-slider-component", "star-rating"]
    }
};
