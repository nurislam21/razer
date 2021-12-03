<template>
<Header style="position: fixed; z-index: 99"/>
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
      <template v-for="(info, ind) in slideInfo">
        <q-carousel-slide @click="showDetail(info.type)" :name="ind" :img-src="info.pic" >
          <div class="text">
            <div class="text-title">
              {{info.title}}
            </div>
            <div class="text-description">
              {{info.description}}
            </div>
          </div>
        </q-carousel-slide>
      </template>
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
  <Footer />
</template>
<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
    import {defineComponent,ref} from 'vue'
    export default defineComponent({
        name: "Main",
      components:{
          Header,
        Footer
      },
      setup () {
        return {
          slide: ref(1)
        }
      },
      data() {
          return {
            slideInfo: [
              {
                "title": "Побеждайте на работе.",
                "description": "Razer Pro Click Mini",
                "pic": "https://static.razer.ru/238400/pro-click-mini-gallery-1500x1000-6.jpg",
                "type": "mouse"
              },
              {
                "title": "Беспроводная. 65% формат. Ещё больше подсветки Razer Chroma™ RGB.",
                "description": "Razer BlackWidow V3 Mini HyperSpeed — Phantom Edition",
                "pic": "https://static.razer.ru/237614/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-4.jpg",
                "type": "keyboard"
              },
              {
                "title": "Беспроводная киберспортивная гарнитура. Теперь и в белом.",
                "description": "Razer BlackShark V2 Pro - White Edition",
                "pic": "https://static.razer.ru/237701/blackshark-v2-pro-white-1500x1000-4.jpg",
                "type": "headphones"
              },
              {
                "title": "Выделись из толпы: Bluetooth-гарнитура с настраиваемой подсветкой Razer Chroma™ RGB и активным шумоподавлением ANC.",
                "description": "Razer Hammerhead True Wireless (2021)",
                "pic": "https://static.razer.ru/236989/hammerhead-true-wireless-1500x1000-2.jpg",
                "type": "hammer"
              },
            ],
          }
      },
      methods:{
        showDetail(type){
          this.$router.push({path: `/${type}`, })
        },
      },
      computed:{
        getItems(){
          this.$store.dispatch('items/getItems')
        }
      },
      watch:{
        getItems:function () {
          console.log(this.$store.state.items.items)
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
<!--{-->
<!--"_id": "61a8f988191c9f76cc948c58",-->
<!--"id": 16,-->
<!--"images": [-->
<!--"https://static.razer.ru/236989/hammerhead-true-wireless-1500x1000-2.jpg"-->
<!--],-->
<!--"title": "Выделись из толпы: Bluetooth-гарнитура с настраиваемой подсветкой Razer Chroma™ RGB и активным шумоподавлением ANC.",-->
<!--"category": "hammer",-->
<!--"price": 13490,-->
<!--"__v": 0-->
<!--},-->
<!--{-->
<!--"_id": "61a8f988191c9f76cc948c57",-->
<!--"id": 15,-->
<!--"images": [-->
<!--"https://static.razer.ru/237701/blackshark-v2-pro-white-1500x1000-4.jpg"-->
<!--],-->
<!--"title": "Беспроводная киберспортивная гарнитура. Теперь и в белом.",-->
<!--"category": "headphones",-->
<!--"price": 12990,-->
<!--"__v": 0-->
<!--},-->
<!--{-->
<!--"_id": "61a8f988191c9f76cc948c55",-->
<!--"id": 13,-->
<!--"images": [-->
<!--"https://static.razer.ru/238400/pro-click-mini-gallery-1500x1000-6.jpg"-->
<!--],-->
<!--"title": "Побеждайте на работе.",-->
<!--"category": "mouse",-->
<!--"price": 6990,-->
<!--"__v": 0-->
<!--},-->
<!--{-->
<!--"_id": "61a8f988191c9f76cc948c56",-->
<!--"id": 14,-->
<!--"images": [-->
<!--"https://static.razer.ru/237614/blackwidow-v3-mini-hyperspeed-phantom-1500x1000-4.jpg"-->
<!--],-->
<!--"title": "Беспроводная. 65% формат. Ещё больше подсветки Razer Chroma™ RGB.",-->
<!--"category": "keyboard",-->
<!--"price": 17990,-->
<!--"__v": 0-->
<!--}-->
