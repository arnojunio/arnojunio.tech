<template>
  <main>
    <div class="main-cta">
      <div class="main-cta-content">
        <h1 v-html="text.cta"></h1>
      </div>
    </div>
    <section class="main-content">
      <header>
        <h2>
          <i class="fas fa-angle-double-left"></i>{{ text.stack
          }}<i class="fas fa-angle-double-right"></i>
        </h2>
      </header>
      <article>
        <i title="Python" class="fab fa-python"></i>
      </article>
      <article>
        <i title="Amazon Web Services" class="fab fa-aws"></i>
      </article>
      <article>
        <i title="Javascript" class="fab fa-js"></i>
      </article>
      <article>
        <i title="Vue JS" class="fab fa-vuejs"></i>
      </article>
      <article>
        <i title="Laravel" class="fab fa-laravel"></i>
      </article>
      <article>
        <i title="Php" class="fab fa-php"></i>
      </article>
      <article>
        <i title="Banco de Dados" class="fas fa-database"></i>
      </article>
      <article>
        <i title="Linux" class="fab fa-linux"></i>
      </article>
      <article>
        <i title="Bootstrap" class="fab fa-bootstrap"></i>
      </article>
    </section>
    <section class="main-blog">
      <header>
        <h2>
          <i class="fas fa-angle-double-left"></i>{{ text.blogTitle
          }}<i class="fas fa-angle-double-right"></i>
        </h2>
      </header>
      <article v-for="blog in text.blogs" :key="blog.title">
        <router-link :to="{ name: 'blog.show', params: { slug: blog.slug } }">
          <img :src="`./images/${blog.img}`" />
          <h1>{{ blog.title }}</h1>
          <p>
            {{ blog.p }}
          </p>
        </router-link>
      </article>
    </section>
    <section class="main-projects">
      <header>
        <h2>
          <i class="fas fa-angle-double-left"></i>{{ text.projectsTitle
          }}<i class="fas fa-angle-double-right"></i>
        </h2>
      </header>
      <a href="https://github.com/arnojunio/arnojunio.tech" target="_blank">
        <article>
          <h1>arnojunio</h1>
          <p>
            This site repository on Github, enjoy!
          </p>
        </article>
      </a>
      <a href="https://github.com/arnojunio/github-mini-search" target="_blank">
        <article>
          <h1>github-mini-search</h1>
          <p>
            This is a technical evaluation exercise done with Vuejs to consume the github API
          </p>
        </article>
      </a>
      <a href="#">
        <article>
          <h1>chat-spa</h1>
          <p>
            Neste projeto, mostro como criei uma SPA de chat realtime com Laravel e Vue JS
          </p>
        </article>
      </a>
      <a href="#">
        <article>
          <h1>random-user-generator</h1>
          <p>
            In this simple project, I used laravel with sanctum api and vue js to generate random users with
            credentials...
          </p>
        </article>
      </a>
    </section>
  </main>
</template>

<script>
import home from "../scripts/home.json";
export default {
  name: "HomePage",
  props: {
    text: Object
  },
  data() {
    return {

      lang: "",
    };
  },
  created() {
    //this.text = home.en;
  }
}
</script>

<style>
</style>