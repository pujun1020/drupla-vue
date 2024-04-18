<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { RouterLink, RouterView } from 'vue-router'
import buttom1 from "@/assets/buttomjs/buttom1";
import buttom2style from "@/assets/buttomjs/buttom2";
/* import buttom2 from "@/components/buttom/buttom2.vue"; */
let buttom = ref<string | undefined>();
let buttom2 = ref<string | undefined>();
onMounted(() => {
  buttom.value = buttom1(0);
  buttom2.value = buttom2style(0);
})
</script>

<template>
  <div>
    <div class="sticky-parallax-header-bj-wrapper">
      <div id="sticky-parallax-header">Full-Height Cover Card to Fixed Header</div>
    </div>
    <div class="container container-1920">

      <div class="columns">
        <div class="column column-reverse">
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/1.04213a58.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Cyber Blue</span> <span>2011</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Gnostic Will</span> <span>2012</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/3.b606be87.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>French Kiss</span> <span>2013</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/4.24fd614c.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Half Life</span> <span>2014</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/5.d13f5e61.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Love Boat</span> <span>2015</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/6.786c7db4.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Golden Ray</span> <span>2016</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/7.df95fe5c.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Blame Game</span> <span>2017</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/8.e7faf38e.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Lone Dust</span> <span>2018</span> </figcaption>
          </figure>
        </div>
        <div class="column">
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/9.ea63bab4.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Lucky Wood</span> <span>2019</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/10.57de09c7.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Good Earth</span> <span>2020</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/11.ba790930.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Empty Words</span> <span>2021</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/12.c3a8d893.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Nonage Line</span> <span>2009</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/13.3bd52250.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Blue Hell</span> <span>2010</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/14.b7263516.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Cold Blood</span> <span>2011</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/15.55bda21b.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Tulip Heat</span> <span>2012</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/16.eb88393b.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Red Wrath</span> <span>2013</span> </figcaption>
          </figure>
        </div>
        <div class="column column-reverse">
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/17.3450839a.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Bold Human</span> <span>2014</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/18.763d23f6.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Loyal Royal</span> <span>2015</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/19.be25549f.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Lone Cone</span> <span>2016</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/20.d7a9356b.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Dutch Green</span> <span>2017</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/21.4c8813a5.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Valley Hill</span> <span>2018</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/22.ec97ea6e.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Kale Hale</span> <span>2019</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/23.49e8893a.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Fake Cake</span> <span>2020</span> </figcaption>
          </figure>
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <img src="https://tympanus.net/Development/ColumnScroll/24.057dafba.jpg" alt="" title="" height=""
                width="">
            </div>
            <figcaption class="column__item-caption"> <span>Book Belly</span> <span>2021</span> </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes sticky-parallax-header-move-and-size {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: 50% 100%;
    background-color: #0b1584;
    height: 10vh;
    font-size: 2em;
  }
}

@keyframes sticky-parallax-header-move-and-size2 {
  0% {
    background-position: 50% 0;
  }

  100% {
    height: 10vh;
    margin-bottom: 0px;
  }
}

.sticky-parallax-header-bj-wrapper {
  height: 60vh;
  animation: sticky-parallax-header-move-and-size2 linear forwards;
  animation-timeline: scroll();
  animation-range: 0vh 50vh;
  margin-bottom: 40px;
}

#sticky-parallax-header {
  animation: sticky-parallax-header-move-and-size linear forwards;
  animation-timeline: scroll();
  animation-range: 0vh 50vh;
}

#sticky-parallax-header {
  color: #fff;
  height: 100%;
  width: 100%;
  background-image: url(/free-images.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: soft-light;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: calc(4vw + 1em);
  z-index: 99;
}


.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  max-width: 80em;
  margin: 0 auto;
  position: relative;
  gap: 60px;
  overflow-y: hidden;
  /* 这个值很重要 */
}

.column__item-imgwrap img {
  border-radius: 1em;
  width: 100%;
  height: auto;
  aspect-ratio: 0.75;
  object-fit: cover;
}

.column {
  --column-offset: 10vh;
  display: flex;
  flex-direction: column;
  padding: var(--column-offset) 0;
}



@keyframes adjust-position {
  from {
    transform: translateY(calc(-100% + 100vh));
  }

  to {
    transform: translateY(calc(100% - 100vh));
  }
}

.column-reverse {
  animation: adjust-position linear forwards;
  animation-timeline: scroll(root block);

}
</style>
