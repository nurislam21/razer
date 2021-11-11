<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="q-pa-md">
    <q-carousel
      style="height: 700px; width: 81%; top: 100px"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      navigation-position="left"
    >

      <q-carousel-slide :name="1" img-src="https://static.razer.ru/238327/pro-click-mini-gallery-1500x1000-1.jpg"/>
      <q-carousel-slide :name="2" img-src="https://static.razer.ru/238395/pro-click-mini-gallery-1500x1000-2.jpg"/>
      <q-carousel-slide :name="3" img-src="https://static.razer.ru/238396/pro-click-mini-gallery-1500x1000-3.jpg"/>
      <q-carousel-slide :name="4" img-src="https://static.razer.ru/238397/pro-click-mini-gallery-1500x1000-4.jpg"/>
      <q-carousel-slide :name="5" img-src="https://static.razer.ru/238398/pro-click-mini-gallery-1500x1000-5.jpg"/>
      <q-carousel-slide :name="6" img-src="https://static.razer.ru/238400/pro-click-mini-gallery-1500x1000-6.jpg"/>
    </q-carousel>
  </div>
  <div class="bgbuy">
    <div class="buy">
      <div class="buy-title">
        <div class="buy-title-raz">Razer Pro Click Mini</div>
        <span>Артикул: RZ01-03990100-R3G1</span>
      </div>
      <div class="buy-price">
        <div class="buy-price-rub">6 190 <img src="../assets/rub.svg" alt=""></div>
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
          <span>Купи сейчас за 1548 ₽, плати потом Долями.</span>
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
  <div class="text-one">
     <h2 class="text-one-title">ПОБЕЖДАЙТЕ НА РАБОТЕ</h2>
    <div class="text-one-description">Сделайте мир своим офисом с Razer Pro Click Mini — идеальной мышью для эффективной работы в дороге. Благодаря бесшумным щелчкам и удобной форме в компактном корпусе этот маленький помощник идеально дополнит ваш рабочий день, где бы вы ни находились.</div>

    <h2 class="text-one-title">МАКСИМАЛЬНАЯ ПРОДУКТИВНОСТЬ. МИНИМАЛЬНЫЙ ШУМ</h2>
    <div class="text-one-description">Бесшумные механические переключатели этой мыши позволят вам и окружающим вас в офисе или дома работать в тишине без отвлекающих факторов, а ее сверхпрочная конструкция обеспечит ресурс до 15 миллионов щелчков.
    </div>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse1.jpg" alt="">
  </div>
  <div class="text-two">
    <h2 class="text-two-title">АБСОЛЮТНАЯ ПОРТАТИВНОСТЬ</h2>
    <div class="text-two-description">Элегантный и стильный корпус мыши легко поместится в рюкзак или портфель, что позволит вам максимально повысить продуктивность и эффективность работы независимо от того, находитесь ли вы в офисе или дома.</div>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse2.jpg" alt="">
  </div>
  <div class="text-three">
    <h2 class="text-three-title">НЕПРИНУЖДЕННАЯ НАВИГАЦИЯ</h2>
    <div class="text-three-description">Колесо прокрутки обеспечивает удобную навигацию: вы можете переключаться между режимом свободного вращения, если просматриваете длинные веб-страницы или документы, и режимом тактильной прокрутки, когда нужна точность прокрутки, а также использовать наклонное нажатие колеса для прокрутки по горизонтали.</div>
  </div>
  <div class="mouseimgs">
    <img src="../assets/mouse3.jpg" alt="">
    <img src="../assets/mouse4.jpg" alt="">
    <img src="../assets/mouse5.jpg" alt="">
  </div>
</template>

<script>
  import Header from "./Header";
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: "Mouse",
    components:{
      Header
    },
    setup() {
      return {
        slide: ref(1)
      }
    }
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
