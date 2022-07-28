<template>
  <Header
    @toggle-theme="toggleTheme"
    @toggle-lang="toggleLang"
    :text="this.text"
    :isDay="this.isDay"
    :isPtBr="this.isPtBr"
  />
  <router-view v-slot="{ Component }" :text="this.text">
    <transition name="scale" mode="out-in">
      <component :is="Component" :key="$route.path"><Access /></component>
    </transition>
  </router-view>
  <ScrollTopComponent />
  <Footer />
  <CookieNavigation :text="this.text"/>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Access from "./components/Access.vue";
import ScrollTopComponent from "./components/ScrollTopComponent.vue";
import { en_us, pt_br } from "./scripts/custom.js";
import { useCookies } from "vue3-cookies";
import CookieNavigation from "./components/CookieNavigation.vue";
export default {
  nome: "App",
  components: {
    Header,
    Footer,
    CookieNavigation,
    Access,
    ScrollTopComponent
  },
  setup() {
    const { cookies } = useCookies();
    return { cookies };
  },
  data() {
    return {
      text: {},
      lang: "",
      isDay: true,
      isPtBr: true
    };
  },
  created() {
    const lang = this.cookies.get("lang");
    if (lang === "pt") {
      this.text = pt_br;
    } else {
      this.cookies.set("lang", "en");
      this.text = en_us;
    } 
    },
  methods: {
    toggleTheme() {
      const el = document.body;
      this.isDay = !this.isDay;
      if (this.isDay) {
        el.classList.remove("night");
        this.cookies.set("theme", "day");
        document.documentElement.style.setProperty("--main-color", "#42b883");
        document.documentElement.style.setProperty(
          "--main-text-color",
          "#35495e"
        );
        document.documentElement.style.setProperty(
          "--main-card-color",
          "#EAEAEA"
        );
      } else {
        el.classList.add("night");
        this.cookies.set("theme", "dark");
        document.documentElement.style.setProperty("--main-color", "#FFF");
        document.documentElement.style.setProperty("--main-text-color", "#FFF");
        document.documentElement.style.setProperty(
          "--main-card-color",
          "#1f2937"
        );
      }
    },
    toggleLang() {
      this.isPtBr = !this.isPtBr;
      if (this.isPtBr) {
        this.cookies.set("lang", "pt");
        this.country = "Brazil";
        this.text = pt_br;
      } else {
        this.cookies.set("lang", "en");
        this.country = "United States";
        this.text = en_us;
      }
    },
    setThemeBasedOnCookie() {
      if (this.cookies.get("theme") == "day") {
        console.log("Dia");
        this.isDay = false;
        this.toggleTheme();
      } else {
        console.log("Noite");
        this.isDay = true;
        this.toggleTheme();
      }
    },
    setLangBasedOnCookie(){
      if (this.cookies.get("lang") == "pt") {
        this.isPtBr = false;
        this.toggleLang();
      } else {
        this.isPtBr = true;
        this.toggleLang();
      }
    }
  },
  mounted() {
    this.setThemeBasedOnCookie()
    this.setLangBasedOnCookie()
  },
};
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5%);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
