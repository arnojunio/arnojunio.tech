<template>
  <a  @click="scrollTop" v-show="visible" class="back-to-top">
    <i class="fa fa-angle-up"></i>
  </a>
</template>

<script>
export default {
  name: "ScrollTopComponent",
  data () {
    return {
      visible: false
    }
  },
    methods: {
    scrollTop: function () {
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 250
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style>
.back-to-top {
  margin: 0;
  position: fixed;
  bottom: 40px;
  right: 2%;
  width: 40px;
  background-color: #42b883;
  color:#FFF;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.18);
  z-index: 100;
  display: block;
  text-decoration: none;
}
.back-to-top i{
  color:#FFF;
}
</style>