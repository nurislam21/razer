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
        <div class="buy-title-raz"> {{products.title}}</div>
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
    <div class="text-one-description">Сделайте мир своим офисом с Razer Pro Click Mini — идеальной мышью для эффективной
      работы в дороге. Благодаря бесшумным щелчкам и удобной форме в компактном корпусе этот маленький помощник идеально
      дополнит ваш рабочий день, где бы вы ни находились.
    </div>

     <h2 class="text-one-title">ПОБЕЖДАЙТЕ НА РАБОТЕ</h2>
    <div class="text-one-description">Сделайте мир своим офисом с Razer Pro Click Mini — идеальной мышью для эффективной работы в дороге. Благодаря бесшумным щелчкам и удобной форме в компактном корпусе этот маленький помощник идеально дополнит ваш рабочий день, где бы вы ни находились.</div>
    <h2 class="text-one-title">МАКСИМАЛЬНАЯ ПРОДУКТИВНОСТЬ. МИНИМАЛЬНЫЙ ШУМ</h2>
    <div class="text-one-description">Бесшумные механические переключатели этой мыши позволят вам и окружающим вас в
      офисе или дома работать в тишине без отвлекающих факторов, а ее сверхпрочная конструкция обеспечит ресурс до 15
      миллионов щелчков.
    </div>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse1.jpg" alt="">
  </div>
  <div class="text-two">
    <h2 class="text-two-title">АБСОЛЮТНАЯ ПОРТАТИВНОСТЬ</h2>
    <div class="text-two-description">Элегантный и стильный корпус мыши легко поместится в рюкзак или портфель, что
      позволит вам максимально повысить продуктивность и эффективность работы независимо от того, находитесь ли вы в
      офисе или дома.
    </div>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse2.jpg" alt="">
  </div>
  <div class="text-three">
    <h2 class="text-three-title">НЕПРИНУЖДЕННАЯ НАВИГАЦИЯ</h2>
    <div class="text-three-description">Колесо прокрутки обеспечивает удобную навигацию: вы можете переключаться между
      режимом свободного вращения, если просматриваете длинные веб-страницы или документы, и режимом тактильной
      прокрутки, когда нужна точность прокрутки, а также использовать наклонное нажатие колеса для прокрутки по
      горизонтали.
    </div>
  </div>
  <div class="mouseimgs">
    <img src="../assets/mouse3.jpg" alt="">
    <img src="../assets/mouse4.jpg" alt="">
    <img src="../assets/mouse5.jpg" alt="">
  </div>
  <div class="textimgs">
    <div class="textimgs-item">ТАКТИЛЬНЫЙ РЕЖИМ</div>
    <div class="textimgs-item" style="width: 300px">РЕЖИМ СВОБОДНОГО ВРАЩЕНИЯ</div>
    <div class="textimgs-item">БОКОВЫЕ НАКЛОНЫ</div>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse6.jpg" alt="">
  </div>
  <div class="text-four">
    <h2>ВСЯ МОЩЬ ПРИ ДЛИТЕЛЬНОЙ РАБОТЕ</h2>
    <p>2 беспроводных режима</p>
    <span>Эта сверхлегкая мышь создана для повседневной работы, чтобы проработать всю рабочую неделю и дольше.</span>
  </div>
  <div class="icons">
    <div class="icons-item">
      <img src="../assets/blututh.png" alt="">
      <div>ДО 725 ЧАСОВ</div>
      <p>Измерено с 2 щелочными AA батареями</p>
    </div>
    <div class="icons-item">
      <img src="../assets/lightning.png" alt="">
      <div>ДО 465 ЧАСОВ</div>
      <p>Измерено с 2 щелочными AA батареями</p>
    </div>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse7.jpg" alt="">
  </div>
  <div class="text-five">
    <div>РАБОТАЕТ С 1 ИЛИ 2 БАТАРЕЙКАМИ ТИПА АА</div>
    <p>Для работы требуется только одна батарея типа АА – выберите экстра лёгкость с одной батареей типа АА или
      увеличьте время
      <br> автономной работы с двумя батареями типа АА.</p>
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse8.jpg" alt="">
  </div>
  <div class="text-six">
    <h2>ТЕХНОЛОГИЯ БЕСПРОВОДНОГО ПОДКЛЮЧЕНИЯ RAZER™ HYPERSPEED</h2>
    <p>Благодаря применению передовой в отрасли беспроводной технологии, наслаждайтесь быстрой и надежной <br>производительностью,
      которая обеспечивает вам большую свободу и эффективность работы, сохраняя при этом рабочее
      <br> пространство свободным от кабелей. С помощью беспроводного передатчика, предназначенного для подключения <br>
      беспроводной мыши и клавиатуры, вы можете еще больше упростить настройку и освободить один USB-порт на вашем ПК
      или
      <br> ноутбуке для других устройств.</p>
    <img src="../assets/lightning.png" alt="">
    <img src="../assets/lightning1.png" alt="">
  </div>
  <div class="mouseimg">
    <img src="../assets/mouse9.jpg" alt="">
  </div>
  <div class="specificationss">
    <h4 class="specificationss-title">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h4>
    <div class="specificationss-li">
      <li> Стильная и компактная конструкция</li>
      <li> Два режима беспроводной связи: 2,4 ГГц и Bluetooth 5.1 LE</li>
      <li> Оптический сенсор Razer 5G 12 000 DPI</li>
      <li> До 725 часов (Bluetooth) и до 465 часов (беспроводной режим 2.4 ГГц) автономной работы</li>
      <li> Бесшумные механические переключатели мыши</li>
      <li> Возможность подключения до 4 устройств</li>
      <li> Передовой оптический сенсор Razer™ 5G с истинным разрешением 12 000 DPI</li>
      <li> Скорость перемещения мыши до 300 дюймов в секунду и максимальное ускорение до 35g</li>
      <li> Частота опроса: 1000 Гц</li>
      <li> 7 индивидуально программируемых кнопок</li>
      <li> Бесшумные механические переключатели мыши с ресурсом в 15 млн нажатий</li>
      <li> Симметричная, стильная и компактная форма</li>
      <li> Наклоняемое колесо прокрутки Razer™ HyperScroll с поддержкой четырех действий, а также режимами свободного вращения и тактильной прокрутки</li>
      <li> Регулировка чувствительности «на лету» (стандартные уровни чувствительности: 400 / 800 / 1600 (по умолчанию) / 3200 / 6400 DPI)</li>
      <li> Боковые резиновые вставки для надежного хвата мыши</li>
      <li> Встроенная память настроек DPI (до 5 уровней чувствительности)</li>
      <li> Режим Razer HyperShift для назначения кнопкам второй функции</li>
      <li> Запоминание подключений к 4 устройствам (1 для Razer™ HyperSpeed 2,4 ГГц и 3 для Bluetooth)</li>
      <li> Один беспроводной передатчик Razer™ HyperSpeed для нескольких устройств: подключите эту мышь и клавиатуру Razer Pro Type V2 к одному беспроводному передатчику</li>
      <li> Программа управления настройками Razer Synapse 3</li>
      <li> Ножки мыши из 100% фторопласта (PTFE)</li>
      <li> Питание от 1 или 2 AA батареек, используйте только алкалиновые (щелочные) батарейки и не смешивайте старые батареи с новыми</li>
      <li> Длина: 100.2 мм / 3.94 дюйма</li>
      <li> Размеры: 100 x 63 x 34 мм (длина x ширина x высота)</li>
      <li> Вес: 98 г (с 1 AA батарейкой), 111 г (с 2 AA батарейками)</li>

    </div>
  </div>

  <Footer/>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: "Mouse",
    components: {
      Header,
      Footer
    },
    setup() {
      return {
        slide: ref(1)
      }
    },
    data () {
      return {
        productType: '',
        products: [
          {
            title: 'Razer Pro Click Mini',
            articul: 'RZ01-03990100-R3G1',
            price: '6 190',
            type: 'mouse'
          },
          {
            title: 'keyboard Razer Pro Click Mini',
            articul: 'keyboard RZ01-03990100-R3G1',
            price: '17 990',
            type: 'keyboard'
          },
          {
            title: 'Razer BlackShark V2 Pro - White Edition',
            articul: 'RZ04-03220300-R3M1',
            price: '16 990',
            type: 'headphones'
          },
          {
            title: 'Razer Hammerhead True Wireless (2021)',
            articul: 'RZ12-03820100-R3G1',
            price: '13 490',
            type: 'hammer'
          },
        ]
      }
    },
    computed: {
    },
    created() {
      this.productType = this.$route.query.product
      console.log(this.$route.query.product)
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
