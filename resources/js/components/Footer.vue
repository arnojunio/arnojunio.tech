<template>
  <footer v-if="visible" class="footer">
    <hr />
    <span>
      &copy;2022 arnojunio made with ♡
    </span>
    <span>
      <a href="https://github.com/arnojunio/arnojunio.tech" target="_blank">Open sourced on Github</a>
    </span>

    <ul>
      <li><i class="fab fa-github"></i></li>
      <li><i class="fab fa-linkedin"></i></li>
      <li><i class="fab fa-instagram"></i></li>
    </ul>

  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    visible: Boolean
  }
};
</script>

<style>
.footer ul {
  display: flex;
  align-items: stretch;
  padding: 10px 20px;
}

.footer ul li a {
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.4em;
  font-weight: 500;
  color: var(--main-text-color) !important;
}

.footer {
  max-width: calc(1300px - 40px);
  padding: 0 20px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--main-text-color) !important;
}

.footer hr {
  flex-basis: 100%;
}

.footer span {
  font-size: 1em;
  flex-basis: 40%;
  padding: 5px 20px;
  color: var(--main-text-color) !important;
}
.footer a{
  color: var(--main-text-color) !important;
}
.footer li {
  font-size: 1.4em;
  padding: 0 5px;
  list-style: none;
}

.footer i {
  color: var(--main-text-color) !important;
}
</style>
