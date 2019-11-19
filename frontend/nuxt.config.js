export default {
  build: {
    extend(config, ctx) {}
  },
  buildModules: [
    // "@nuxtjs/eslint-module",
    "@nuxt/typescript-build"
  ],
  css: ["~assets/css/app.css"],
  generate: {
    dir: "../backend/dist",
    fallback: true
  },
  head: {
    title: "Flask + Vue + Nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Learning how to deploy a Vue/Nuxt application with Flask."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      }
    ]
  },
  loading: {
    color: "#900000",
    continuous: true,
    height: "6px"
  },
  mode: "spa",
  modules: [],
  plugins: [],
  typescript: {
    ignoreNotFoundWarnings: false,
    typeCheck: true
  }
};
