<template>
  <section v-if="found" class="blog-content">
    <h1>{{ blog.title }}</h1>
    <img class="notion-image-inset" :src="`../images/${blog.cover}`" />
    <div v-html="blog.content"></div>
  </section>
</template>

<script>
//import Blog from "@/components/Blog.vue";
import sourceData from "../scripts/blogs.json";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
export default {
  name: "BlogDetail",
  components: {
    BounceLoader,
  },
  data() {
    return {
      found: false,
      loading: true,
      blog:{}
    };
  },
  props: {
    slug: { type: String, required: true },
  },
  methods: {

    async getBlog() {
      console.log(this.$isPtBr);
      await this.$axios.get("/sanctum/csrf-cookie").then((response) => {
        this.loading = true;
        this.$axios
          .get(`/api/artigo`, { params: { slug: this.slug, lang: (this.$isPtBr ? "pt_br" : "en_us") } })
          .then((response) => {
            this.loading = false;
            if (response.data.code == 403) {
              this.$router.push({
                name: "NotFound",
                params: { pathMatch: this.$route.path.split("/").slice(1) },
                query: this.$route.query,
                hash: this.$route.hash,
              });
            } else {
              this.found = true;
              this.blog = response.data;

            }
          })
          .catch(function (error) {
            console.error(error);
          });
      });
    },
  },
  mounted() {
    this.getBlog();
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();// highlight your code on mount
  },
  created() {
    //this.getBlog();

  },
  computed: {
    /*blog() {
      //return sourceData.blogs.find((blog) => blog.slug === this.slug);
      
    },*/
  },
};
</script>

<style>
.blog-content {
  max-width: calc(860px - 40px);
  padding: 0px 20px;
  margin: 20px auto;
}

.blog-content .load {
  max-width: calc(150px - 40px);
  padding: 40px 20px;
  margin: 40px auto;
}

.blog-content h1 {
  font-size: 2.4em;
  margin: 20px 0;
  color: #42b883;
}

.blog-content h2 {
  font-size: 1.6em;
  margin: 20px 0;
  color: #42b883;
}

.blog-content p {
  font-size: 1.1em;
  line-height: 1.6em;
  margin: 1.2em 0 -1.2em;
  padding-bottom: 1.2em;
  font-weight: 400;
  text-align: justify;
  color: var(--main-text-color) !important;
}

.notion-image-inset {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 1px;
}
.code{
      background: #2c3e50;
    display: block;
    padding: 15px;
    border-radius: 16px;
    font-size: 14px;
    color: #FFF;
    font-weight: 700;
}
</style>