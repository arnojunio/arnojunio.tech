<template>
  <section class="main-content">
    <header>
      <h2><i class="fas fa-angle-double-left"></i>{{ text.stack }}<i class="fas fa-angle-double-right"></i></h2>
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
</template>

<script>
export default {
  name: "Stacks",
  props:{
    text: Object
  }
};
</script>

<style scoped>

</style>
