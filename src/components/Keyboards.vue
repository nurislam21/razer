<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="cards">
    <div class="cards-img3">
      <div class="cards-img3-title">ИГРОВЫЕ КЛАВИАТУРЫ</div>
      <div class="cards-img3-description">От механических переключателей Razer™, отмеченных множеством наград и разработанных специально для игр, до
        <br> механическо-мембранного гибрида – выбирайте клавиатуру, оснащенную скоростью, точностью и Вашими предпочтениями
        <br> при наборе текста.</div>
    </div>
    <div class="cards__container">
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/keyboard1.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer BlackWidow V3 Mini HyperSpeed (Green Switch)</div>
          <div class="cards-card-text-description">Укороченная беспроводная механическая клавиатура с 65% форм-фактором, беспроводным подключением Razer™ HyperSpeed (2,4 ГГц), Bluetooth, колпачками клавиш двойного литья и подсветкой Razer Chroma™ RGB</div>

          <div style="margin-top: 23px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>16 490 рублей</div>
              В наличии
            </div>
            <div  class="cards-card-text-price-info">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/keyboard2.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer BlackWidow V3 Pro (Yellow Switch)</div>
            <div class="cards-card-text-description">Беспроводная и Bluetooth механическая клавиатура с клавишами двойного литья, кнопками управления медиа и подсветкой Razer Chroma RGB</div>

          <div class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>10 990 рублей</div>
              В наличии
            </div>
            <div  class="cards-card-text-price-info">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/keyboard3.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Pro Type</div>
          <div class="cards-card-text-description">Bluetooth и беспроводная механическая клавиатура на тихих переключателях Razer Orange с ресурсом нажатий клавиш до 80 млн. кликов, белой подсветкой, возможностью подключения до 4-х устройств и клавишами с покрытием soft-touch.
          </div>

          <div style="margin-top: 26px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>12 490 рублей</div>
              В наличии
            </div>
            <div  class="cards-card-text-price-info">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/keyboard4.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer BlackWidow V3, Quartz (Green Switch)</div>
          <div class="cards-card-text-description">Игровая клавиатура с прозрачными механическими переключателями Razer с подсветкой Chroma RGB, PBT клавишами двойного литья, алюминиевым корпусом и эргономичной подставкой под запястья.</div>

          <div style="margin-top: 45px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>16 490 рублей</div>
              В наличии
            </div>
            <div  class="cards-card-text-price-info">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/keyboard5.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Huntsman Mini, Mercury White (Linear Optical Switch - Red)</div>
          <div class="cards-card-text-description">Игровая мини клавиатура с 60% форм-фактором, оптическими переключателями Razer, встроенным профилем памяти и подсветкой 16,8 миллионов цветов.</div>

          <div style="margin-top: 45px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>13 990 рублей</div>
              В наличии
            </div>
            <div  class="cards-card-text-price-info">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/keyboard6.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Cynosa Lite</div>
          <div class="cards-card-text-description">Игровая мембранная клавиатура с подсветкой Razer Chroma</div>

          <div style="margin-top: 80px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>3 999 рублей</div>
              В наличии
            </div>
            <div  class="cards-card-text-price-info">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <Footer />
</template>

<script>
  import {defineComponent} from 'vue'
  import Header from "./Header";
  import Footer from "./Footer";
  export default defineComponent ( {
    name: "Keyboards",
    components: {
      Header,
      Footer
    }
  })
</script>

<style scoped>

</style>
