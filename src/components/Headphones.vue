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

      <q-carousel-slide :name="1" img-src="https://static.razer.ru/237628/blackshark-v2-pro-white-1500x1000-1-v2.jpg"/>
      <q-carousel-slide :name="2" img-src="https://static.razer.ru/237699/blackshark-v2-pro-white-1500x1000-2.jpg"/>
      <q-carousel-slide :name="3" img-src="https://static.razer.ru/237700/blackshark-v2-pro-white-1500x1000-3.jpg"/>
      <q-carousel-slide :name="4" img-src="https://static.razer.ru/237701/blackshark-v2-pro-white-1500x1000-4.jpg"/>
      <q-carousel-slide :name="5" img-src="https://static.razer.ru/237702/blackshark-v2-pro-white-1500x1000-5.jpg"/>
      <q-carousel-slide :name="6" img-src="https://static.razer.ru/237703/blackshark-v2-pro-white-1500x1000-6-v2.jpg"/>
    </q-carousel>
  </div>
  <div class="bgbuy">
    <div class="buy">
      <div class="buy-title">
        <div class="buy-title-raz">Razer BlackShark V2 Pro - White Edition</div>
        <span>Артикул: RZ04-03220300-R3M1</span>
      </div>
      <div class="buy-price">
        <div class="buy-price-rub">16 990 <img src="../assets/rub.svg" alt=""></div>
      </div>
      <div class="buy-btn">
        <p @click="addtoCart">В КОРЗИНУ</p>
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
          <span>Купи сейчас за 4248 ₽, плати потом Долями</span>
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
  <div class="fanta">
    <div class="fanta-title">ЗВУК КИБЕРСПОРТА. БЕЗ ОГРАНИЧЕНИЙ.</div>
    <div class="fanta-description">Если ваше призвание — соревнование, обыграйте соперников с помощью Razer BlackShark
      <br> V2 Pro — главной
      игровой гарнитуры для киберспорта. Благодаря технологии Razer™
      <br> HyperSpeed ​​Wireless, гарнитура представляет собой тройную угрозу за счет максимальной <br> четкости
      микрофона, аудио и звукоизоляции и является идеальным оружием, которое вам
      <br> нужно для достижения успеха на самых высоких уровнях игры.
    </div>
    <div class="fanta-img">
      <img src="../assets/discord-certified-black-badge.png" alt="">
    </div>
  </div>
  <div class="black">
    <div class="black-odin">
      <div class="black-odin-title">ДОСТУПНЫ В ЦВЕТАХ:</div>
      <div class="black-odin-item">
        <div class="black-odin-item-black">Black</div>
        <div class="black-odin-item-white">| White |</div>
        <div class="black-odin-item-da">Rainbow Six Siege</div>
      </div>
    </div>
    <div class="black-dva">
      <div class="black-dva-title">БЕСПРОВОДНАЯ СВЯЗЬ RAZER™ HYPERSPEED</div>
      <div class="black-dva-description">Эта беспроводная гарнитура для киберспорта отличается высокоскоростной
        передачей данных и чрезвычайно низкой
        <br> задержкой, а также ведущим в отрасли беспроводным соединением на частоте 2,4 ГГц для обеспечения звука без
        потерь,
        <br> который всегда будет синхронизирован с вашей игрой.
      </div>
      <div class="black-dva-img">
        <img src="../assets/hyperspeed-logo-ru.png" alt="">
      </div>
    </div>
    <div class="black-tri">
      <div class="black-tri-title">50ММ ДИНАМИКИ RAZER™ TRIFORCE ИЗ ТИТАНА</div>
      <div class="black-tri-description">Совершенно новая запатентованная конструкция предоставляет нашим инженерам
        возможность настраивать каждый
        <br> динамик так, как если бы их было три, что позволяет индивидуально воспроизводить высокие, средние и низкие
        звуковые
        <br> частоты для получения более богатых высоких частот, более яркого звука и мощных басов.
      </div>
      <div class="black-tri-description">
        В Razer BlackShark V2 Pro применяются диафрагмы с титановым покрытием, которые придают дополнительную ясность
        <br> любому вокалу, который вы слышите, так что любой звук, который вы принимаете, всегда четкий и чистый.
      </div>
      <div class="black-dva-img">
        <img src="../assets/titaniumdrivers-logo-ru.png" alt="">
      </div>
    </div>
    <div class="black-chitiri">
      <div class="black-chitiri-title">
        СУПЕРКАРДИОИДНЫЙ МИКРОФОН RAZER™ HYPERCLEAR
      </div>
      <div class="black-chitiri-description">
        Диаграмма направленности съемного микрофона диаметром 9,9 мм имеет большее подавление шума по бокам по сравнению
        <br> с обычным кардиоидным микрофоном и истинно воссоздает ваш голос благодаря чувствительности к низким
        частотам и
        <br> открытому корпусу микрофона, предназначенному для минимального препятствия. Поддерживает Razer Synapse 3
        для доступа
        <br> к расширенным настройкам микрофона.
      </div>
      <div class="black-dva-img">
        <img src="../assets/hyperclear-logo-ru.png" alt="">
      </div>
    </div>
    <div class="black-pyat">
      <div class="black-pyat-title">
        РАСШИРЕННОЕ ПАССИВНОЕ ШУМОПОДАВЛЕНИЕ
      </div>
      <div class="black-pyat-description">
        Эта беспроводная киберспортивная гарнитура подавляет шум, от радостной толпы до гула вашего снаряжения, с
        помощью
        <br> специальных закрытых чашек наушников, которые полностью закрывают ваши уши, а мягкие амбушюры образуют
        идеальное
        <br> уплотнение для большей звукоизоляции
      </div>
    </div>
    <div class="black-shest">
      <div class="black-shest-title">
        АМБУШЮРЫ С ПОТОКОВЫМ ПЛЕТЕНИЕМ И ПЕНОЙ С ЭФФЕКТОМ ПАМЯТИ
      </div>
      <div class="black-shest-description">
        Наш новый воздухопроницаемый материал сводит к минимуму накопление пота и тепла при контакте с кожей, а
        улучшенная
        <br> плотность ультрамягкой пены значительно снижает давление гарнитуры.
      </div>
    </div>
    <div class="black-sem">
      <div class="black-sem-item">
        <div class="black-sem-item-block">
          <img src="../assets/Screenshot1.png" alt="">
          <div>СЪЕМНЫЙ МИКРОФОН</div>
        </div>
        <div class="black-sem-item-block">
          <img src="../assets/Screenshot2.png" alt="">
          <div>ЛЕГКИЙ ДИЗАЙН ВСЕГО 320Г</div>
        </div>
        <div class="black-sem-item-block">
          <img src="../assets/Screenshot3.png" alt="">
          <div>УПРАВЛЕНИЕ НА ГАРНИТУРЕ</div>
        </div>
      </div>
    </div>
    <div class="black-vosem">
      <div>ЗНАКОМЬТЕСЬ С РАЗНООБРАЗИЕМ RAZER BLACKSHARK V2</div>
    </div>
  </div>
  <div class="specificationsss">
    <h4 class="specificationsss-title">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h4>
    <div class="specificationsss-li">
      <li> Беспроводная связь Razer™ HyperSpeed для звука без потерь и беспроводных игр с минимальной задержкой</li>
      <li> 50мм титановые динамики Razer ™ TriForce для высококачественного звучания</li>
      <li> Суперкардиоидный микрофон Razer ™ HyperClear для сверхчеткого качества передачи голоса и расширенного управления микрофоном</li>
      <li> Расширенное пассивное шумоподавление для непрерывной сосредоточенности</li>
      <li> Амбушюры с потоковым плетением и пеной с эффектом памяти для премиального комфорта</li>
      <li> Диапазон частот: 12 - 28,000Гц</li>
      <li> Сопротивление: 32Oм на 1кГц</li>
      <li> Чувствительность (@ 1кГц): 100dBSPL/мВт,1кГц</li>
      <li> Динамики: настраиваемые динамические 50мм динамики</li>
      <li> Диаметр внутренней чашки наушника: 65x40мм</li>
      <li> Тип подключения: 2,4ГГц беспроводное и 3,5мм</li>
      <li> Длина кабеля: 1.3м</li>
      <li> Приблизительный вес: 320г</li>
      <li> Овальные амбушюры: воздухопроницаемые c пеной с эффектом памяти</li>
      <li> Диапазон частот: 100Гц- 10кГц</li>
      <li> Отношение сигнал-шум: 60д</li>
      <li> Чувствительность (@ 1кГц): -42 ± 3дБ</li>
      <li> Шаблон захвата: однонаправленный</li>
      <li> Регулировка баланса громкости</li>
      <li> Кнопка включения/выключения микрофона</li>
      <li> Устройства с 3.5мм аудио разъемом</li>
      <li> Устройства со свободным USB портом</li>


    </div>
  </div>
  <Footer/>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: "Headphones",
    data(){
      return{
        headphone:{
          title: 'Razer BlackShark V2 Pro - White Edition',
          articul: 'RZ04-03220300-R3M1',
          price: '16 990',
          type: 'headphones',
          image:'https://static.razer.ru/237696/800x600-razer-blackshark-v2-pro-white-product-promo.png',
          id:3
        },
      }
    },
    methods:{
      addtoCart:function () {
        this.$store.dispatch('cart/addtoCart',this.headphone);
        this.$router.push('/basket')
      }
    },
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
