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
    <a href="#">
      <article>
        <h1>nuxt-portfolio-dev</h1>
        <p>
          By reading this article, I would suppose that you know enough to
          decide whether you will use GraphQl in your next Django project or
          not.
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
