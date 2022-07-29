<template>
  <section class="main-projects">
    <header>
      <h2>
        <i class="fas fa-angle-double-left"></i>{{ text.projectsTitle
        }}<i class="fas fa-angle-double-right"></i>
      </h2>
    </header>
    <a href="#">
      <article>
        <h1>arnojunio</h1>
        <p>
          This site repository on Github, enjoy!
        </p>
      </article>
    </a>
    <a href="#">
      <article>
        <h1>nuxt-portfolio-dev</h1>
        <p>
          In this article, I will be giving you brief information about
          Elasticsearch,
        </p>
      </article>
    </a>
    <a href="https://github.com/arnojunio/github-mini-search">
      <article>
        <h1>github-mini-search</h1>
        <p>
          This is a technical evaluation exercise done with Vuejs to consume the github API
        </p>
      </article>
    </a>
    <a href="#">
      <article>
        <h1>nuxt-portfolio-dev</h1>
        <p>
          In this article, I will be giving you brief information about
          Elasticsearch,
        </p>
      </article>
    </a>
  </section>
</template>

<script>
export default {
  nome: "Projects",
  props: {
    text: Object,
  },
};
</script>

<style scoped>

</style>
