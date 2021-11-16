<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="q-pa-md">
    <q-carousel
      style="height: 100vh; width: 81%; top: 100px"
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      navigation-position="left"
    >

      <q-carousel-slide :name="1" img-src="https://static.razer.ru/236996/hammerhead-true-wireless-1500x1000-1.jpg"/>
      <q-carousel-slide :name="2" img-src="https://static.razer.ru/236989/hammerhead-true-wireless-1500x1000-2.jpg"/>
      <q-carousel-slide :name="3" img-src="https://static.razer.ru/236990/hammerhead-true-wireless-1500x1000-3.jpg"/>
      <q-carousel-slide :name="4" img-src="https://static.razer.ru/236991/hammerhead-true-wireless-1500x1000-4.jpg"/>
      <q-carousel-slide :name="5" img-src="https://static.razer.ru/236992/hammerhead-true-wireless-1500x1000-5.jpg"/>
      <q-carousel-slide :name="6" img-src="https://static.razer.ru/236993/hammerhead-true-wireless-1500x1000-6.jpg"/>
    </q-carousel>
  </div>
  <div class="bgbuy">
    <div class="buy">
      <div class="buy-title">
        <div class="buy-title-raz">Razer Hammerhead True Wireless (2021)</div>
        <span>Артикул: RZ12-03820100-R3G1</span>
      </div>
      <div class="buy-price">
        <div class="buy-price-rub">13 490 <img src="../assets/rub.svg" alt=""></div>
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
          <span>Купи сейчас за 3373 ₽, плати потом Долями.</span>
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
  <div class="block">
    <div class="block-odin">
      <div class="block-odin-title">ОСВЕТИТЕ СВОЕ ПОГРУЖЕНИЕ</div>
      <div class="block-odin-description">Осветите свое погружение с помощью новых беспроводных наушников Razer
        Hammerhead <br> True Wireless - новейших наушников, призванных доминировать на звуковой сцене. С этой
        <br> беспроводной гарнитурой, созданной для ослепления сиянием RGB-подсветки и <br> оснащенной функцией
        активного шумоподавления ANC и игровым режимом с низкой
        <br> задержкой 60 мс, вы будьте готовы к невероятному качеству звука.
      </div>
      <div class="block-odin-img">
        <img src="../assets/razer-chroma-rgb-logo.png" alt="">
      </div>
    </div>
    <div class="block-dva">
      <div class="block-dva-title">ПОДДЕРЖКА RAZER CHROMA™ RGB</div>
      <div class="block-dva-description">С 16,8 миллионами цветов и набором эффектов на выбор, подчеркните свой стиль и
        выделитесь из толпы с помощью
        <br> совершенных беспроводных наушников с гибкой настройкой.
      </div>
      <div class="block-dva-dva">
        <div class="block-dva-dva-title">ИГРОВОЙ РЕЖИМ С НИЗКОЙ ЗАДЕРЖКОЙ 60 МС</div>
        <div class="block-dva-dva-description">Включите игровой режим, чтобы активировать лучшую производительность Razer Hammerhead True Wireless во время игр на
          <br> устройствах Bluetooth для более безупречной работы.
        </div>
      </div>
    </div>
    <div class="block-tri"></div>
    <div class="block-chitiri">
      <div class="block-dva-dva-title">ТЕХНОЛОГИЯ АКТИВНОГО ШУМОПОДАВЛЕНИЯ ANC</div>
      <div class="block-dva-dva-description">Если вы слушаете любимые треки, играете или смотрите фильм, устраните все отвлекающие факторы с помощью активного
        <br> шумоподавления, которое обнаруживает и нейтрализует нежелательные окружающие шумы.
      </div>
    </div>
    <div class="block-pyat"></div>
    <div class="block-shest">
      <div class="block-shest-title">ВНУТРИКАНАЛЬНЫЙ ДИЗАЙН</div>
      <div class="block-shest-description">Получите удобную и надежную вставку в ухо, которая обеспечивает улучшенную шумоизоляцию с нашим новым дизайном.
        <br> Включает вкладыши дополнительных размеров для индивидуального комфорта.</div>
    </div>
    <div class="block-sem">
      <div class="block-sem-title">ENC МИКРОФОНЫ С ДВОЙНЫМ ПОДАВЛЕНИЕМ ОКРУЖАЮЩИХ ШУМОВ</div>
      <div class="block-sem-description">Благодаря умным микрофонам, которые обнаруживают, идентифицируют и снижают нежелательный фоновый шум, голосовая
        <br> связь с Razer Hammerhead True Wireless теперь четче, чем когда-либо.
      </div>
    </div>
    <div class="block-vosem"></div>
    <div class="block-sem">
      <div class="block-sem-title">МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ НАСТРОЙКИ</div>
      <div class="block-sem-description">Получите максимум удовольствия от наушников с помощью приложения Razer Audio. Изменяйте настройки Razer Chroma™ RGB,
        <br> переназначайте сенсорные жесты, настраивайте эквалайзер и получайте непрерывные улучшения с помощью беспроводных
        <br> обновлений прошивки.
      </div>
    </div>
    <div class="block-devat"></div>
    <div class="block-desat">
      <div class="block-desat-img">
        <img src="../assets/razer-audio-app.png" alt="">
        <img src="../assets/app-store.png" alt="">
        <img src="../assets/google-play.png" alt="">
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: "Hammerhead",
    components: {
      Header,
      Footer
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

