// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@unocss/reset/tailwind.css"],

  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    [
      "@vee-validate/nuxt",
      {
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
  ],

  build: {
    transpile: ["trpc-nuxt"],
  },

  runtimeConfig: {
    databaseHost: "",
    databaseUsername: "",
    databasePassword: "",
    cloudinarySecret: "",
    public: {
      cloudinaryName: "",
      cloudinaryKey: "",
    },
  },

  devtools: {
    enabled: true,
  },
});
