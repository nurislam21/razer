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

      <q-carousel-slide :name="1"
                        img-src="https://static.razer.ru/235668/razer-blackwidow-v3-mini-hyperspeed-hero-photo.jpg"/>
      <q-carousel-slide :name="2"
                        img-src="https://static.razer.ru/237614/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-4.jpg"/>
      <q-carousel-slide :name="3"
                        img-src="https://static.razer.ru/235739/razer-blackwidow-v3-mini-hyperspeed-1500x1000-01.jpg"/>
      <q-carousel-slide :name="4"
                        img-src="https://static.razer.ru/237616/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-6.jpg"/>
      <q-carousel-slide :name="5"
                        img-src="https://static.razer.ru/237617/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-1.jpg"/>
      <q-carousel-slide :name="6"
                        img-src="https://static.razer.ru/235743/razer-blackwidow-v3-mini-hyperspeed-1500x1000-05.jpg"/>
    </q-carousel>
  </div>
  <div class="bgbuy">
    <div class="buy">
      <div class="buy-title">
        <div class="buy-title-raz">Razer BlackWidow V3 Mini HyperSpeed (Green Switch) Phantom Edition</div>
        <span>Артикул: RZ03-03892000-R3M1</span>
      </div>
      <div class="buy-price">
        <div class="buy-price-rub">17 990 <img src="../assets/rub.svg" alt=""></div>
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
          <span>Купи сейчас за 4498 ₽, плати потом Долями.</span>
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
  <div class="texts">
    <div class="texts-lime">
      СВОБОДА В ФОРМЕ
    </div>
    <div class="texts-gray">Достаточно компактная для любого окружения и достаточно универсальная для любых <br>
      настроек - это Razer BlackWidow V3 Mini HyperSpeed. Наслаждайтесь безупречной игрой в
      <br> элегантном корпусе с беспроводной 65% механической игровой клавиатурой с идеальным <br> балансом формы и
      функций.
    </div>
    <div class="texts-img">
      <img src="../assets/hyperspeed-i.png" alt="">
    </div>
    <div class="texts-keyboard">
      <div class="texts-keyboard-title">Также доступна в новом варианте</div>
      <div class="texts-keyboard-description">RAZER BLACKWIDOW V3 MINI HYPERSPEED - PHANTOM EDITION</div>
      <img src="../assets/keyboard.png" alt="">
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-video
      class="absolute-full"
      src="https://www.youtube.com/watch?v=Ybp9NsmTA2o"
      />
    </div>
    </div>
    <div class="texts-text">
      <div class="texts-lime">65% ФОРМ-ФАКТОР</div>
      <div class="texts-keyboard-title">Для элегантной и компактной производительности</div>
      <div class="texts-gray">Без функционального ряда, домашнего кластера и цифрового блока, эта клавиатура похожа на
        60% клавиатуру, но с одним
        <br> ключевым отличием - у нее все еще есть клавиши со стрелками. Сохраняя большую функциональность при
        сохранении
        <br> компактности, Razer BlackWidow V3 Mini HyperSpeed идеально подходит для минималистичных или небольших
        сетапов, где в
        <br> приоритете пространство рабочего места.
      </div>
      <img src="../assets/asdasd.png" alt="">
    </div>
    <div class="texts-image">
      <div class="texts-lime">ТЕХНОЛОГИЯ БЕСПРОВОДНОЙ СВЯЗИ RAZER™ HYPERSPEED</div>
      <div class="texts-keyboard-title">Для игр с минимальной задержкой</div>
      <div class="texts-gray">Эта беспроводная 65% механическая игровая клавиатура оснащена нашей самой передовой
        беспроводной технологией для игр
        <br> с малой задержкой и сверхчувствительностью ввода - это стало возможным благодаря оптимизированному
        протоколу
        <br> передачи данных, сверхбыстрой радиочастоте и плавному переключению частот в самых шумных средах, насыщенных
        <br> данными. Благодаря поддержке нескольких устройств упростите настройку своего сетапа, подключив беспроводную
        мышь и
        <br> клавиатуру к одному адаптеру - функцию, которую можно активировать в наших последних периферийных
        устройствах Razer HyperSpeed.
      </div>
    </div>
    <div class="texts-icons">
      <div style="margin-top: 10px;" class="texts-lime">3 ВИДА ПОДКЛЮЧЕНИЯ</div>
      <div class="texts-cocacola">
        <div class="texts-icons-item">
          <img src="../assets/hyperspeed-i.png" alt="">
          <div class="texts-icons-item-lime">БЕСПРОВОДНОЕ <br> ПОДКЛЮЧЕНИЕ RAZER™ <br> HYPERSPEED</div>
          <div class="texts-icons-item-gray">Для непрерывных игр с минимальной <br> задержкой</div>
        </div>
        <div class="texts-icons-item">
          <img src="../assets/bluetooth.png" alt="">
          <div class="texts-icons-item-lime">BLUETOOTH</div>
          <div class="texts-icons-item-gray">Подключение и переключение между 3 <br> устройствами</div>
        </div>
        <div class="texts-icons-item">
          <img src="../assets/usbc.png" alt="">
          <div class="texts-icons-item-lime">USB-C</div>
          <div class="texts-icons-item-gray">Через съемный кабель (идет в <br> комплекте)</div>
        </div>
      </div>
    </div>
    <div class="texts-keyboardmouse">
      <div class="texts-lime">ПОДДЕРЖКА НЕСКОЛЬКИХ УСТРОЙСТВ RAZER™ HYPERSPEED</div>
      <div class="texts-gray">Оптимизируйте свой сетап и освободите порт USB, подключив беспроводную мышь и клавиатуру
        через один адаптер - функцию,
        <br> которую можно активировать в нашей последней линейке беспроводных устройств с поддержкой Razer HyperSpeed.
      </div>
      <img src="../assets/mishka.png" alt="">
    </div>
    <div class="texts-keyboardmouse">
      <div class="texts-lime">КОЛПАЧКИ КЛАВИШ С БОКОВОЙ РАЗМЕТКОЙ</div>
      <div style="margin-bottom: 40px;" class="texts-gray">Выберите модель клавиатуры с колпачками клавиш, которые
        подойдут вам, оба варианта кейкапов оснащены боковой
        <br> разметкой дополнительных функций для более удобного использования при выполнении команд и ориентирования в
        горячих
        <br> клавишах.
      </div>
      <img src="../assets/blackwidow-v3-mini-hyperspeed-keycaps-sideprints-desktop.jpg" alt="">
    </div>
  <div class="specifications">
    <h4 class="specifications-title">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h4>
    <div class="specifications-li">
      <li> Механические переключатели Razer™</li>
      <li> Элегантный и компактный 65% форм-фактор</li>
      <li> Беспроводное подключение Razer™ HyperSpeed и Bluetooth</li>
      <li> Механические переключатели Razer™</li>
      <li> Элегантный и компактный 65% форм-фактор</li>
      <li> Беспроводное подключение Razer™ HyperSpeed (2,4 ГГц), Bluetooth или USB-C</li>
      <li> Настраиваемая подсветка Razer Chroma™ RGB с 16,8 миллионами цветовых оттенков</li>
      <li> Гибридная встроенная память и облачное хранилище - до 5 профилей</li>
      <li> ABS колпачки клавиш двойного литья</li>
      <li> Поддержка нескольких устройств Razer™ HyperSpeed ​</li>
      <li> Ресурс нажатия клавиш 80 миллионов</li>
      <li> N-key roll over, любое количество одновременно нажатых клавиш</li>
      <li> Полностью программируемые клавиши с записью макросов на лету</li>
      <li> Опция игрового режима</li>
      <li> Частота опроса 1000 Гц (Ultrapolling)</li>
      <li> Алюминиевый корпус</li>
    </div>
  </div>
  <Footer/>
</template>

<script>
  import Header from "./Header";
  import Footer from "./Footer";
  import {defineComponent, ref} from 'vue'

  export default defineComponent({
    name: "Keyboard",
    components: {
      Header,
      Footer
    },
    setup() {
      return {
        slide: ref(1, 'Rihanna'),
      }
    },
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

