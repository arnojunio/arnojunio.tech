<template>
  <div v-show="visible" class="cookies">
    <div class="message">
      <h1>Podemos usar os Cookies?</h1>
      <p>{{text.cookieMsg}}</p>
      <router-link :to="{ name: 'terms.show' }">{{text.termsLink}}</router-link>
    </div>
    <div class="links">
      <a class="btn" href="#">{{text.acceptAll}}</a>
      <button type="button" class="btn-inverted" @click="showModal">
        {{text.cookieDef}}
      </button>
      
    </div>
    <button
            type="button"
            class="btn-close"
 @click="closeCookieModal"
            aria-label="Close modal"
          >
            x
          </button>
  </div>
  <Modal :visible="isModalVisible" @closeAll="closeAllModals" @close="closeModal" />
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  name: "CookieNavigation",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      visible: true
    };
  },
  props:{
    text: Object
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeCookieModal(){
      this.visible = false;
    },
    closeAllModals(){
      this.closeModal();
      this.closeCookieModal();
    }
  },
};
</script>

<style>
.cookies {
    max-width: calc(870px - 100px);
    max-height: 128px;
    border-radius: 10px;
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    margin: 5px auto;
    left: 0;
    right: 0;
    background-color: var(--main-card-color) !important;
}


.cookies .message {
  color: var(--main-text-color) !important;
  padding: 20px;
  flex-basis: 50%;
  font-size: 0.875em;
}
.cookies a{
    color: #42b883 !important;
    text-decoration: underline;
}
.cookies .message p{
  margin-bottom: 5px;
  color: var(--main-text-color) !important;
  text-align: justify;
}
.cookies h1{
    margin-bottom: 10px;
    color: var(--main-text-color) !important;
}
.cookies .btn {
  padding: 10px 10px;
  margin-right: 4px;
  color: #fff !important;
  background-color: #42b883;
  border-radius: 5px;
  font-weight: 500;
}
.cookies .btn-inverted {
  padding: 10px 10px;
  margin-right: 4px;
  color: #42b883 !important;
  background-color: #FFF;
  border-radius: 5px;
  font-weight: 500;
}
.cookies .links {
  flex-basis: 40%;
  display: flex;
  align-items: center;
}
.btn-close{
    position: absolute;
    top: -5px;
    right: 5px;
    border: none;
    font-size: 25px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}
</style>