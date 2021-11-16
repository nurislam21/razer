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
  <div class="q-pa-md">
    <q-carousel
      style="height: 700px; width: 81%"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      navigation-position="left"
    >

      <q-carousel-slide :name="1" img-src="https://static.razer.ru/235668/razer-blackwidow-v3-mini-hyperspeed-hero-photo.jpg"/>
      <q-carousel-slide :name="2" img-src="https://static.razer.ru/237614/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-4.jpg"/>
      <q-carousel-slide :name="3" img-src="https://static.razer.ru/235739/razer-blackwidow-v3-mini-hyperspeed-1500x1000-01.jpg"/>
      <q-carousel-slide :name="4" img-src="https://static.razer.ru/237616/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-6.jpg"/>
      <q-carousel-slide :name="5" img-src="https://static.razer.ru/237617/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-1.jpg"/>
      <q-carousel-slide :name="6" img-src="https://static.razer.ru/235743/razer-blackwidow-v3-mini-hyperspeed-1500x1000-05.jpg"/>
    </q-carousel>
  </div>
  <div class="bgbuy">
    <div class="buy">
      <div class="buy-title">
        <div class="buy-title-raz">Razer BlackWidow V3 Mini HyperSpeed (Green Switch) Phantom Edition</div>
        <span>Артикул: RZ03-03892000-R3M1</span>
      </div>
      <div class="buy-price">
        <div class="buy-price-rub">17 990 <img src="../assets/rub.svg" alt=""></div>
      </div>
      <div class="buy-btn">
        <p>В КОРЗИНУ</p>
      </div>
      <div class="buy-razer">
        <img src="../assets/heart.svg" alt="">
        <p>Добавить в мой razer</p>
      </div>
      <div class="buy-stock">
        <span>В наличии. </span>
        Отгрузим сегодня при размещении заказа до 18:00 МСК
      </div>
      <div class="buy-item1">
        <img src="../assets/buy.svg" alt="">
        <div class="buy-item1-title">
          <span>Купи сейчас за 4498 ₽, плати потом Долями.</span>
          Равные платежи без процентов 2 раза в месяц.
        </div>
      </div>
      <div class="buy-item2">
        <img src="../assets/chit.svg" alt="">
        <div class="buy-item1-title">
          Официальная
          <span>гарантия и техподдержка</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: "Keyboard",
    setup() {
      return {
        slide: ref(1)
      }
    },

  })
</script>

<style scoped>
  .q-pa-md {
    padding: 0;
    position: relative;
    height: 700px;
    width: 100%;
  }
</style>

