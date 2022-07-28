<template>
  <div class="main-cta">
    <div class="main-cta-content">
      <h1 v-html="text.cta"> 
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  nome: "Cta",
  props:{
    text: Object
  }
};
</script>

<style scope>

</style>
