<template>
  <div style="position: relative">
    <div style="position: fixed" class="header-bg">
      <div class="header">
        <div class="header-login">
          Войдите
        </div>
        <div class="header-and">
          или
        </div>
        <div class="header-reg">
          Зарегистрируйтесь
        </div>
      </div>

      <div class="navigation">
        <div class="navigation-logo">
          <img src="../assets/razerlogo.svg" alt="">
        </div>
        <div class="navigation-panel">
          <p>ПК</p>
          <p>Мобильные</p>
          <p>Лайфстайл</p>
          <p>Магазин</p>
          <p>Поддержка</p>
        </div>
        <div class="navigation-icons">
          <img src="../assets/search.svg" alt="">
          <img src="../assets/asd.png" alt="">
          <img src="../assets/basket.svg" alt="">
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-carousel
        style="height: 700px"
        animated
        v-model="slide"
        navigation
        navigation-icon="img:https://cdn.quasar.dev/logo-v2/svg/logo.svg"
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide @click="mouse" :name="1" img-src="https://static.razer.ru/238400/pro-click-mini-gallery-1500x1000-6.jpg" >
          <div class="text">
            <div class="text-title">
              Побеждайте на работе.
            </div>
            <div class="text-description">
              Razer Pro Click Mini
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide @click="keyboard" :name="2" img-src="https://static.razer.ru/237614/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-4.jpg" >
          <div class="text">
            <div class="text-title">
              Беспроводная. 65% формат. Ещё больше подсветки Razer Chroma™ RGB.
            </div>
            <div class="text-description">
              Razer BlackWidow V3 Mini HyperSpeed — Phantom Edition
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" img-src="https://static.razer.ru/237701/blackshark-v2-pro-white-1500x1000-4.jpg" >
          <div class="text">
            <div class="text-title">
              Беспроводная киберспортивная гарнитура. Теперь и в белом.
            </div>
            <div class="text-description">
              Razer BlackShark V2 Pro - White Edition
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="https://static.razer.ru/236989/hammerhead-true-wireless-1500x1000-2.jpg" >
          <div class="text">
            <div class="text-title">
              Выделись из толпы: Bluetooth-гарнитура с настраиваемой подсветкой Razer Chroma™ RGB и активным шумоподавлением ANC.
            </div>
            <div class="text-description">
              Razer Hammerhead True Wireless (2021)
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="banners">
      <div class="banners-item">
        <img src="../assets/banner1.jpg" alt="">
        <div class="banners-item-text">
          <p class="banners-item-title">Razer - Лучший подарок!</p>
          <p class="banners-item-description">Руководство ></p>
        </div>
      </div>

      <div class="banners-item">
        <img src="../assets/banner2.jpg" alt="">
        <div class="banners-item-text">
          <p class="banners-item-title">Комфорт ставший легендой.</p>
          <p class="banners-item-description">Razer DeathAdder V2 X HyperSpeed ></p>
        </div>
      </div>

      <div class="banners-item">
        <img src="../assets/banner3.jpg" alt="">
        <div class="banners-item-text">
          <p class="banners-item-title">Максимальные возможности стриминга. Супер четкость</p>
          <p class="banners-item-description">Razer Kiyo X ></p>
        </div>

      </div>

      <div class="banners-item">
        <img src="../assets/banner4.jpg" alt="">
        <div class="banners-item-text">
          <p class="banners-item-title">Звук киберспорта в новом цвете</p>
          <p class="banners-item-description">Razer Blackshark V2 X — Green ></p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-column1">
        <div class="footer-column1-one">
          <div>+8 (800) 200-28-81</div>
          <span>Бесплатно по России</span>
        </div>
        <div class="footer-column1-two">
          <div>+7 (495) 109-87-65</div>
          <span>Пн-Пт 09—22 МСК</span>
          <span>Сб-Вс 12—20 МСК</span>
        </div>
      </div>
      <div class="footer-column2">
        <div>Магазин</div>
        <span>Контакты</span>
        <span>Оформление заказа</span>
        <span>Оплата заказа</span>
        <span>Доставка заказа</span>
      </div>
      <div class="footer-column3">
        <div>Поддержка</div>
        <span>Сервис и гарантия</span>
        <span>Персональные данные</span>
        <span>Положения и условия</span>
      </div>
      <div class="footer-column4">
        <p>Наши ресурсы</p>
        <div class="footer-column4-item">
          <img src="../assets/vk.svg" alt="">
          <span>Vkontakte</span>
        </div>
        <div class="footer-column4-item">
          <img src="../assets/youtube.svg" alt="">
          <span>YouTube Russia</span>
        </div>
        <div class="footer-column4-item">
          <img src="../assets/facebook.svg" alt="">
          <span>Facebook Russia</span>
        </div>
        <div class="footer-column4-item">
          <img src="../assets/insta.svg" alt="">
          <span>Instagram Russia</span>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
    import {defineComponent,ref} from 'vue'
    export default defineComponent({
        name: "Main",
      setup () {
        return {
          slide: ref(1)
        }
      },
      methods:{
        mouse(){
          this.$router.push({path: '/mouse', query: { product: "mouse"}});

          // this.$router.push('/mouse', {params: {id: 'mouse'}});
        },
        keyboard(){

        }
      }
    })
</script>

<style scoped>
.q-pa-md{
  padding: 0;
  position: relative;
}
</style>
