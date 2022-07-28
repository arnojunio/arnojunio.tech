<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>4<span></span>4</h1>
      </div>
      <h2>Oops! Página não encontrada</h2>
      <p>
        Desculpe, mas a página que você está procurando não existe, foi removida, teve o nome alterado ou está temporariamente indisponível
      </p>
      <router-link to="/">Voltar para a página inicial</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
#notfound {
    position: relative;
    height: 70vh;
}
#notfound .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.notfound {
    max-width: 520px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
}
.notfound .notfound-404 {
    height: 190px;
}
.notfound .notfound-404 h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 146px;
    font-weight: 700;
    margin: 0px;
    color: #42b883;
}
.notfound .notfound-404 h1>span {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-image: url('http://192.168.100.2:8000/images/emoji.png');
    background-size: cover;
    -webkit-transform: scale(1.4);
    -ms-transform: scale(1.4);
    transform: scale(1.4);
    z-index: -1;
}
.notfound h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    color: #42b883;
}
.notfound p {
    font-family: 'Source Sans Pro', sans-serif;
    color: var(--main-text-color) !important;
    font-weight: 300;
}
.notfound a {
    font-family: 'Source Sans Pro', sans-serif;
    display: inline-block;
    padding: 12px 30px;
    font-weight: 700;
    background-color: #42b883;
    color: #fff;
    border-radius: 40px;
    text-decoration: none;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    margin-top: 10px;
}
</style>