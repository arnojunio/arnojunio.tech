<template>
  <section class="about-content">
    <h1>{{ text.aboutTitle }}</h1>
    <p v-for="a in text.about" :key="text.index">
      {{a}}
    </p>
    <h1>Get In Touch</h1>
    <h2>Feel free to:</h2>
    <p>📧 me at arnojunio@gmail.com</p>
  </section>
</template>

<script>
export default {
  name: "Sobre",
  props:{
    text: Object
  }
};
</script>
<style scoped>
.about-content {
  max-width: calc(900px - 40px);
  padding: 0 20px;
  margin: 20px auto;
}
.about-content h1 {
  font-size: 2em;
  margin: 20px 0;
  color: #42b883;
}
.about-content p {
  font-size: 1em;
  padding: 8px 0;
  color: var(--main-text-color) !important;
}
</style>