<template>
  <section class="main-blog">
    <header>
      <h2><i class="fas fa-angle-double-left"></i>{{ text.blogTitle }}<i class="fas fa-angle-double-right"></i></h2>
    </header>
    <article v-for="blog in text.blogs" :key="blog.title" >
      <img :src="require(`@/assets/${blog.img}`)" />
      <h1>{{ blog.title }}</h1>
      <ul class="tags"  >
        <li v-for="tag in blog.tags" :key="tag">{{ tag }}</li>
      </ul>
      <p>
        {{ blog.p }}
      </p>
      <router-link :to="'/blogdetail/' + blog.slug">{{ blog.a }} <i class="fas fa-angle-double-right"></i></router-link>
    </article>
  </section>
</template>

<script>
export default {
  nome: "Blogs",
  props:{
    text: Object
  }
};
</script>

<style scoped>

</style>
