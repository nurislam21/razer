<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="cards">
    <div class="cards-img5">
      <div class="cards-img5-title">ИГРОВЫЕ КРЕСЛА</div>
      <div class="cards-img5-description">Качественные игровые кресла Razer с регулируемой поясничной опорой, 4D подлокотниками и откидной спинкой.
        <br> Приобретите геймерское кресло уже сейчас в фирменном интернет-магазине производителя в России..</div>
    </div>
    <div class="cards__container">
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/kreslo1.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Iskur — Standart</div>
          <div class="cards-card-text-description">Эргономичное компьютерное кресло с регулируемой спинкой, подлокотниками и дополнительной настраиваемой поясничной опорой</div>

          <div style="margin-top: 63px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>49 990 рублей</div>
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
          <img src="../assets/kreslo2.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Iskur, Black — Standart</div>
          <div class="cards-card-text-description">Эргономичное компьютерное кресло с регулируемой спинкой, подлокотниками и дополнительной настраиваемой поясничной опорой</div>

          <div class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>49 990 рублей</div>
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
          <img src="../assets/kreslo3.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Head Cushion</div>
          <div class="cards-card-text-description">Поддержка шеи и головы для игровых кресел - эргономичный мягкий подголовник из пены с эффектом памяти и покрытием из плюшевого бархатного материала черного цвета.</div>

          <div style="margin-top: 40px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>3 590 рублей</div>
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
          <img src="../assets/kreslo4.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Lumbar Cushion</div>
          <div class="cards-card-text-description">Эргономичная поддержка для идеальной осанки - подушка для кресла с полностью сформированным поясничным изгибом и покрытием из черного бархатного материала.</div>

          <div style="margin-top: 55px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>4 490 рублей</div>
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
    name: "Chairs",
    components: {
      Header,
      Footer
    }
  })
</script>

<style scoped>

</style>
