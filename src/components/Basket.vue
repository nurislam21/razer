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
<!--  <div class="goods">-->
<!--    <div class="goods-text">-->
<!--      <div class="goods-text-title">В Вашей корзине пока нет товаров</div>-->
<!--      <div class="goods-text-btn">ПЕРЕЙТИ В МАГАЗИН</div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="purchase">
    <div class="purchase-da">
      <div class="purchase-text">
        <div>ТОВАРЫ</div>
      </div>
      <div class="purchase-block">
      <div class="purchase-block-img">
        <img src="../assets/keyboord.png" alt="">
      </div>
      <div class="purchase-block-text">
        <div class="purchase-block-text-title">Razer BlackWidow V3 Mini HyperSpeed (Yellow Switch) <br> Phantom Edition</div>
        <div class="purchase-block-text-articul">Артикул: RZ03-03891900-R3M1</div>
        <div class="purchase-block-text-stock">В наличии</div>
      </div>
      <div class="purchase-block-papa">
        <div class="purchase-block-papa-amount">
          -  <p>1</p>  +
        </div>
        <div class="purchase-block-papa-price">
          <div class="purchase-block-papa-price-number">
            <div class="purchase-block-papa-price-number-price">
              13 999 <img src="../assets/rub.svg" alt=""> <img style="width: 13px; height: 17px; margin-top: 2px; margin-left: 10px;" src="../assets/cross.png" alt="">
            </div>
          </div>
          <div class="purchase-block-papa-price-btn">
            ОТЛОЖИТЬ
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="purchase-order">
      <div class="purchase-order-text">ЗАКАЗ</div>
      <div class="purchase-order-bg">
        <div class="purchase-order-bg-text">
          <div class="purchase-order-bg-text-s"><span>Товары:</span> 1</div>
          <div style="margin-top: 60px; font-size: 18px" class="purchase-order-bg-text-s"><span>Итого:</span> 13 999 ₽</div>
        </div>
        <div class="purchase-order-bg-line"></div>
        <div class="purchase-order-bg-buttons">
          <div class="purchase-order-bg-buttons-input">
            <input v-model="input" class="purchase-order-bg-buttons-input-da" type="text" placeholder="Введите промокод">
            <button @click="changeisClick" :class="isGreen ? 'purchase-order-bg-buttons-input-btn green' : 'purchase-order-bg-buttons-input-btn'"><img src="../assets/check.png" alt=""></button>
        </div>
          <div v-if="isClick" class="purchase-order-bg-buttons-input">
            <input v-model="input2" class="purchase-order-bg-buttons-input-da" type="text" placeholder="Введите E-mail">
            <button :class="isGreen2 ? 'purchase-order-bg-buttons-input-btn green' : 'purchase-order-bg-buttons-input-btn'"><img src="../assets/check.png" alt=""></button>
          </div>
          <div class="purchase-order-bg-buttons-btn ">
            ОФОРМИТЬ ЗАКАЗ
          </div>

        </div>
      </div>
    </div>

  </div>
  <Footer style="height: 282px"/>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import {defineComponent , ref} from 'vue'
  export default defineComponent({
    name: "Basket",
    components: {
      Header,
      Footer,
    },
    setup () {
      return {
        text: ref(''),
      }
    },
    data(){
      return{
        input:'',
        input2:'',
        isGreen: false,
        isGreen2: false,
        isClick: false,
      }
    },
    watch:{
      input(){
        if (this.input){
          this.isGreen = true
        }
        else {
          this.isGreen = false
        }
      },
      input2(){
        if (this.input2){
          this.isGreen2 = true
        }
        else {
          this.isGreen2 = false
        }
      },
    },
    methods:{
      changeisClick(){
        if (this.isGreen){
          this.isClick = true
        }
      }
    }
  })
</script>

<style scoped>

</style>
