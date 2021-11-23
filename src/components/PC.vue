<template>
  <Header style="position: fixed; z-index: 5"/>
  <div class="pc">
    <div class="pc-text">
      <div>ПЕРИФЕРИЯ</div>
      <p>Самое мощное железо ничего не значит без соответствующей периферии. Вы получите действенное преимущество, когда
        <br> испробуете лучшие в отрасли уровни точности, контроля и погружения.</p>
    </div>
    <div class="pc-blocks">
      <div class="pc-blockss">
        <div @click="mouses" class="pc-blocks-blocks1">
          <div>Мыши</div>
          Узнать больше >
        </div>
        <div @click="keyboards" class="pc-blocks-blocks3">
          <div>Клавиатуры</div>
          Узнать больше >
        </div>
      </div>

      <div class="pc-blockss">
        <div @click="headphone" class="pc-blocks-blocks2">
          <div>Аудио</div>
          Узнать больше >
        </div>
        <div @click="kovrik" class="pc-blocks-blocks4">
          <div>Коврики</div>
          Узнать больше >
        </div>
      </div>

    </div>

    <div @click="kresla" class="pc-kresla">
      <div class="pc-kresla-title">Кресла</div>
      <div class="pc-kresla-description"> Добейтесь идеальной игровой формы во время марафонов игр с Razer Iskur - <br> игровым креслом со встроенной
        эргономичной системой поддержки поясницы.
      </div>
      <div class="pc-kresla-info"> Ознакомиться со всеми моделями кресел ></div>
    </div>
    <div class="pc-cards">
      <div @click="cases" class="pc-cards-card">
        <div>Корпуса</div>
        Узнать больше >
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
    name: "PC",
    components: {
      Header,
      Footer
    },
    methods:{
      mouses(){
        this.$router.push('/pc/mouses')
      },
      headphone(){
        this.$router.push('/pc/headphones')
      },
      keyboards(){
        this.$router.push('/pc/keyboards')
      },
      kovrik(){
        this.$router.push('/pc/mousepads')
      },
      kresla(){
        this.$router.push('/pc/gaming-chairs')
      },
      cases(){
        this.$router.push('/pc/gaming-cases')
      },
    }
  })
</script>

<style scoped>

</style>
