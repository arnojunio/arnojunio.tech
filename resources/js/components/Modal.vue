<template>
  <transition name="modal-fade">
    <div v-show="visible" class="modal-backdrop">
      <div class="modal slide-top" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <h1> Centro de Preferências de Privacidade. </h1>
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <h2>Cookies de Sistema</h2>
          <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
          </label>
          <p>Servem para acompanhar acessos no site e analisá-los para melhorar suas visitas no site.</p>
        </section>

        <section class="modal-body" id="modalDescription">
          <h2>Cookies de desempenho</h2>
          <label class="switch">
            <input type="checkbox" disabled checked>
            <span class="slider round" style="background-color: #ccc;"></span>
          </label>
          <p>Servem para a plataforma funcionar, ajustando as preferências de idioma e tema.</p>
        </section>
        <footer class="modal-footer">
          <button type="button" class="btn-green" @click="closeAll" aria-label="Close modal">
            Aceitar e fechar
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {

    }
  },
  props: {
    visible: Boolean
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeAll() {
      this.$emit("closeAll");
    }
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
  font-size: 1.4em;
  text-align: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  border-bottom: 1px solid #eeeeee;
}

.modal-body p {
  float: left;
  padding-top: 7px;
}

.btn-close {
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

.btn-green {
  color: white;
  background: #42b883;
  border: 1px solid #42b883;
  border-radius: 2px;
  padding: 10px 10px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  float: right;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #42b883
}

input:focus+.slider {
  box-shadow: 0 0 1px #42b883
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.slide-top {
  -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
}

@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
}
</style>