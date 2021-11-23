<template>
  <Header style="position: fixed"/>
  <div class="basket">
    <div class="basket-title">
      <div class="basket-title-main">Главная страница /</div>
      <div class="basket-title-basket">КОРЗИНА</div>
    </div>
    <div class="basket-block">
      <div class="basket-block-item">
        <img src="../assets/razerlox.png" alt="">
        <p>100% оригинальные</p>
        <span>устройства Razer</span>
      </div>
      <div class="basket-block-item">
        <img src="../assets/chit.svg" alt="">
        <p>Официальная гарантия</p>
        <span>устройства Razer</span>
      </div>
      <div class="basket-block-item">
        <img src="../assets/car.png" alt="">
        <p>Быстрая доставка</p>
        <span>устройства Razer</span>
      </div>
      <div class="basket-block-item">
        <img src="../assets/buy.svg" alt="">
        <p>Эксклюзивные модели и новинки <span>раньше всех</span></p>

      </div>
    </div>

  </div>
  <div class="goods">
    <div class="goods-text">
      <div class="goods-text-title">В Вашей корзине пока нет товаров</div>
      <div class="goods-text-btn">ПЕРЕЙТИ В МАГАЗИН</div>
    </div>
  </div>
  <Footer style="height: 282px"/>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";

  export default {
    name: "Basket",
    components: {
      Header,
      Footer,
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
