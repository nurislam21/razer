<template>
  <div class="header-bg">
    <div class="header">
      <div class="header-login">
        Войдите
      </div>
      <div class="header-and">
        или
      </div>
      <div class="header-reg">
        Зарегистрируйтесь
      </div>
    </div>

    <div class="navigation">
      <div class="navigation-logo">
        <router-link to="/">
          <img src="../assets/razerlogo.svg" alt="">
        </router-link>
      </div>
      <div class="navigation-panel">
        <p>ПК</p>
        <p>Мобильные</p>
        <p>Лайфстайл</p>
        <p>Магазин</p>
        <p>Поддержка</p>
      </div>
      <div class="navigation-icons">
        <img src="../assets/search.svg" alt="">
        <img src="../assets/asd.png" alt="">
        <img src="../assets/basket.svg" alt="">
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
