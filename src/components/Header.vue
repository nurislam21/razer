<template>
  <div class="header-bg">
    <div class="navigation">
      <div class="navigation-logo">
        <router-link to="/">
          <img src="../assets/razerlogo.svg" alt="">
        </router-link>
      </div>
      <div class="navigation-icons">
        <img src="../assets/search.svg" alt="">
        <img src="../assets/asd.png" alt="">
        <div @click="basket" >
          <img src="../assets/basket.svg" alt="">

        </div>
      </div>
    </div>
    <div class="navigation-panel">
      <p @click="pc">ПК</p>
      <p @click="kresla">Лайфстайл</p>
      <p>Магазин</p>
    </div>
  </div>

</template>

<script>
  import {defineComponent} from 'vue'
    export default defineComponent({
        name: "Header",
      methods:{
          basket(){
            this.$router.push('/basket')
          },
        pc(){
            this.$router.push('/pc')
        },
        kresla(){
            this.$router.push('/pc/gaming-chairs')
        },
        razer(){
            this.$router.push('/')
        }
      }
    })
</script>

<style scoped>

</style>
