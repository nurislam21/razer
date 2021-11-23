<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="cards">
    <div class="cards-img4">
      <div class="cards-img4-title">ИГРОВЫЕ КОВРИКИ</div>
      <div class="cards-img4-description">В данном разделе вы найдете коврики для  мышей различных видов, размеров и текстур, которые оптимально подойдут для
        <br> различных видов сенсоров и поспособствуют удобству при игре.</div>
    </div>
    <div class="cards__container">
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/kovrik1.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Sphex V2 Mini</div>
          <div class="cards-card-text-description">Сверхтонкий пластиковый игровой коврик</div>

          <div style="margin-top: 80px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>1 140 рублей</div>
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
          <img src="../assets/kovrik2.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Goliathus Chroma Extended</div>
          <div class="cards-card-text-description">Мягкий тканевый игровой коврик с подсветкой 16,8 млн цветов</div>

          <div class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>5 190 рублей</div>
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
          <img src="../assets/kovrik3.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Goliathus Control Fissure Extended</div>
          <div class="cards-card-text-description">Тканевый мягкий шероховатый игровой коврик</div>

          <div style="margin-top: 80px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>4 000 рублей</div>
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
          <img src="../assets/kovrik4.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Goliathus Speed Cosmic Extended</div>
          <div class="cards-card-text-description">Тканевый мягкий шероховатый игровой коврик</div>

          <div style="margin-top: 100px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>4 000 рублей</div>
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
          <img src="../assets/kovrik5.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Goliathus Chroma</div>
          <div class="cards-card-text-description">Мягкий тканевый игровой коврик с подсветкой 16,8 млн цветов</div>

          <div style="margin-top: 80px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>3 490 рублей</div>
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
          <img src="../assets/kovrik6.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Sphex V3, Small</div>
          <div class="cards-card-text-description">Жесткий игровой коврик толщиной 0.4 мм с гладкой поверхностью из поликарбоната и клейким основанием</div>

          <div style="margin-top: 80px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>1 290 рублей</div>
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
    name: "Mousepads",
    components: {
      Header,
      Footer
    }
  })
</script>

<style scoped>

</style>
