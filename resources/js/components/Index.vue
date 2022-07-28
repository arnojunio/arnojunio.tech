<template>
  <main>
    <Cta :text= text />
    <Stacks :text= text />
    <Blogs :text = text />
    <Projects :text = text />
  </main>
</template>

<script>
import Cta from "./Cta.vue";
import Stacks from "./Stacks.vue";
import Blogs from "./Blogs.vue";
import Projects from "./Projects.vue";
export default {
  nome: "Index",
  components: {
    Cta,
    Stacks,
    Blogs,
    Projects
  },
  props:{
    text: Object
  }
};
</script>

<style></style>
