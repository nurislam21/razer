<template>
    <Header style="position: fixed; z-index: 5;" />
  <div class="cards">
    <div class="cards-img">
      <div class="cards-img-title">ИГРОВЫЕ МЫШИ</div>
      <div class="cards-img-description">От лучшей эргономики до конструкции специально разработанной для жанров FPS или MOBA, выбирайте из полного спектра
        <br> игровых мышей, готовых повысить Ваш уровень игрового процесса.</div>
    </div>
    <div class="button">
      <q-btn @click="category('all')" color="black" label="Все" />
      <q-btn @click="category('mouse')" color="black" label="Мыши" />
      <q-btn @click="category('headphone')" color="black" label="Наушники" />
      <q-btn @click="category('keyboard')" color="black" label="Клавиатуры" />
      <q-btn @click="category('mousepads')" color="black" label="Коврики" />
      <q-btn @click="category('armchair')" color="black" label="Кресла" />
      <q-btn @click="category('corps')" color="black" label="Корпуса" />
  </div>
    <div style="display: flex;flex-wrap:wrap">

    <div v-for="product in filterCategory" :key="product.id" class="cards__container">
      <BlockItem :product="product"/>
<!--    <div class="cards-card">-->
<!--      <div class="cards-card-img">-->
<!--        <img src="../assets/mouse-1.png" alt="">-->
<!--      </div>-->
<!--      <div class="cards-card-text">-->
<!--        <div class="cards-card-text-title">Razer Pro Click</div>-->
<!--        <div class="cards-card-text-description">Эргономичная мышь для продуктивной работы, учебы <br> и игры с Bluetooth и беспроводным подключением, <br> оптическим сенсором 16000 DPI и автономной-->
<!--          <br> работой до 400 часов.</div>-->

<!--        <div class="cards-card-text-price">-->
<!--          <div class="cards-card-text-price-title">-->
<!--            <div>8990 рублей</div>-->
<!--            В наличии-->
<!--          </div>-->
<!--          <div  class="cards-card-text-price-info">-->
<!--            <p>Подробнее</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="cards-card">-->
<!--      <div class="cards-card-img">-->
<!--        <img src="../assets/mouse-2.png" alt="">-->
<!--      </div>-->
<!--      <div class="cards-card-text">-->
<!--        <div class="cards-card-text-title">Razer Basilisk Ultimate & Mouse Dock</div>-->
<!--        <div class="cards-card-text-description">Лучшая беспроводная эргономичная мышь для правой руки с 11 настраиваемыми кнопками, оптическим сенсором 20 000 DPI, расширенными зонами подсветки и работой от аккумулятора до 100 часов</div>-->

<!--        <div class="cards-card-text-price">-->
<!--          <div class="cards-card-text-price-title">-->
<!--            <div>13 990 рублей</div>-->
<!--            В наличии-->
<!--          </div>-->
<!--          <div  class="cards-card-text-price-info">-->
<!--            <p>Подробнее</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="cards-card">-->
<!--      <div class="cards-card-img">-->
<!--        <img src="../assets/mouse-3.png" alt="">-->
<!--      </div>-->
<!--      <div class="cards-card-text">-->
<!--        <div class="cards-card-text-title">Razer Viper Ultimate & Mouse Dock - Mercury</div>-->
<!--        <div class="cards-card-text-description">Самая быстрая беспроводная мышь, весом 74 грамма, с лидирующим в индустрии оптическим сенсором Razer Focus+ с разрешением 20 000 DPI и возможностью работы от аккумулятора до 70 часов.</div>-->

<!--        <div class="cards-card-text-price">-->
<!--          <div class="cards-card-text-price-title">-->
<!--            <div>12 490 рублей</div>-->
<!--            В наличии-->
<!--          </div>-->
<!--          <div  class="cards-card-text-price-info">-->
<!--            <p>Подробнее</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="cards-card">-->
<!--      <div class="cards-card-img">-->
<!--        <img src="../assets/mouse-4.png" alt="">-->
<!--      </div>-->
<!--      <div class="cards-card-text">-->
<!--        <div class="cards-card-text-title">Razer Viper Ultimate & Mouse Dock - Quartz</div>-->
<!--        <div class="cards-card-text-description">Самая быстрая беспроводная мышь, весом 74 грамма, с лидирующим в индустрии оптическим сенсором Razer Focus+ с разрешением 20 000 DPI и возможностью работы от аккумулятора до 70 часов.</div>-->

<!--        <div class="cards-card-text-price">-->
<!--          <div class="cards-card-text-price-title">-->
<!--            <div>12 490 рублей</div>-->
<!--            В наличии-->
<!--          </div>-->
<!--          <div  class="cards-card-text-price-info">-->
<!--            <p>Подробнее</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="cards-card">-->
<!--      <div class="cards-card-img">-->
<!--        <img src="../assets/mouse-5.png" alt="">-->
<!--      </div>-->
<!--      <div class="cards-card-text">-->
<!--        <div class="cards-card-text-title">Razer Viper Ultimate & Mouse Dock</div>-->
<!--        <div class="cards-card-text-description">Самая быстрая беспроводная мышь, весом 74 грамма, с лидирующим в индустрии оптическим сенсором Razer Focus+ с разрешением 20 000 DPI и возможностью работы от аккумулятора до 70 часов.</div>-->

<!--        <div class="cards-card-text-price">-->
<!--          <div class="cards-card-text-price-title">-->
<!--            <div>10 480 рублей</div>-->
<!--            В наличии-->
<!--          </div>-->
<!--          <div  class="cards-card-text-price-info">-->
<!--            <p>Подробнее</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="cards-card">-->
<!--      <div class="cards-card-img">-->
<!--        <img src="../assets/mouse-6.png" alt="">-->
<!--      </div>-->
<!--      <div class="cards-card-text">-->
<!--        <div class="cards-card-text-title">Razer Viper Ultimate & ​​Mouse Dock - Cyberpunk 2077 Edition</div>-->
<!--        <div class="cards-card-text-description">Лучшая беспроводная киберспортивная мышь в эксклюзивном дизайне Cyberpunk 2077, весом 74 грамма, с лидирующим в индустрии оптическим сенсором с разрешением 20 000 DPI и возможностью автономной работы до 70 часов.</div>-->

<!--        <div style="margin-top: 22px;" class="cards-card-text-price">-->
<!--          <div class="cards-card-text-price-title">-->
<!--            <div>16 999 рублей</div>-->
<!--            В наличии-->
<!--          </div>-->
<!--          <div  class="cards-card-text-price-info">-->
<!--            <p>Подробнее</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    </div>
    </div>

  </div>
  <Footer  />
</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex';
  import Header from "./Header";
  import Footer from "./Footer";
  import BlockItem from "./BlockItem";
    export default {
        name: "Mouses",
      data(){
          return{
            categoryItem:''
          }
      },
      components:{
          Header,
        Footer,
        BlockItem
      },
      methods:{
        ...mapActions({
          actionProduct: 'items/setGetters'
        }),
        category(i){
          this.categoryItem = i
        }
      },
      computed:{
        items () {
          console.log(this.$store.getters["items/setGetters"]);
          return this.$store.getters["items/setGetters"];
      },
      filterCategory(){
          if(this.categoryItem === '' || this.categoryItem === 'all'){
            return this.items
          }
          else {
            return this.items.filter((product)=>{
              return product.category === this.categoryItem
            })
          }
      }
    },
      created() {
        this.actionProduct();
        this.$store.dispatch("items/getItems");
        console.log(this.items)
      },
  }
</script>

<style scoped>

</style>
