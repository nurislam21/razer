<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="cards">
    <div class="cards-img6">
      <div class="cards-img6-title">КОМПЬЮТЕРНЫЕ КОРПУСА</div>
      <div class="cards-img6-description">Независимо от того, ищете ли вы всеобъемлющее решение или прочную основу для нестандартной сборки, воплотите в жизнь
        <br> свою мечту о боевой станции с помощью наших решений для игровых настольных ПК, тщательно продуманных и собранных
        <br> для высокопроизводительной игры.</div>
      </div>
    <div class="cards__container">
      <div class="cards-card">
        <div class="cards-card-img">
          <img src="../assets/mini.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Tomahawk Mini-ITX</div>
          <div class="cards-card-text-description">Корпус для игрового ПК со съемными шарнирными боковыми панелями из закаленного стекла, вентилируемой верхней панелью, пылевыми фильтрами, нижней подсветкой Razer Chroma RGB и портами подключения на передней панели для легкого доступа при использовании ваших устройств</div>

          <div style="margin-top: 20px;" class="cards-card-text-price">
            <div class="cards-card-text-price-title">
              <div>17 990 рублей</div>
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
          <img src="../assets/atx.png" alt="">
        </div>
        <div class="cards-card-text">
          <div class="cards-card-text-title">Razer Tomahawk ATX</div>
          <div class="cards-card-text-description">Корпус для игрового ПК со съемными шарнирными боковыми панелями из закаленного стекла, вентилируемой верхней панелью, пылевыми фильтрами, нижней подсветкой Razer Chroma RGB и портами подключения на передней панели для легкого доступа при использовании ваших устройств</div>

          <div style="margin-top: 20px;" class="cards-card-text-price">
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
    </div>
  </div>
  <Footer />
</template>

<script>
  import {defineComponent} from 'vue'
  import Header from "./Header";
  import Footer from "./Footer";
  export default defineComponent ( {
    name: "Cases",
    components: {
      Header,
      Footer
    }
  })
</script>

<style scoped>

</style>
