<template>
  <div class="cards-card">
    <div class="cards-card-img">
      <img :src=product.images alt="">
    </div>
    <div class="cards-card-text">
      <div class="cards-card-text-title">{{product.title}}</div>
      <div class="cards-card-text-description">{{product.descriptionShort}}</div>

      <div class="cards-card-text-price">
        <div class="cards-card-text-price-title">
          <div>{{product.price}} рублей</div>
          В наличии
        </div>
        <div  class="cards-card-text-price-info">
          <p>Подробнее</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BlockItem",
      props:{
          product:{
            type:Object
          }
      }
    }
</script>

<style scoped>

</style>
