<script>
import Vue from 'vue';
import FlipFlopCard from '@/flip-flop-card.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FlipFlopCard
  },
  data() {
    return {
      styledCardFront: {
        coverImg: 'https://images.unsplash.com/photo-1608903837898-17a1f38bbf6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
        coverTitle: 'Styled card',
        themeColor: '#64ce87',
        themeColor2: '#188d65',
      },
      styledCardBack: {
        coverImg: 'https://images.unsplash.com/photo-1608903837898-17a1f38bbf6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
        coverTitle: 'Hello! I\'m back!',
        themeColor: '#5eadcd',
        themeColor2: '#126b8e',
        bgColorFill: true
      }
    }
  }
});
</script>

<template>
  <div id="app">
    <flip-flop-card :elevation="8" direction="horizontal">
      <template slot="front">
        <div class="container basic-card">
          <h1>vue-flip-flop-card</h1>
          <h2>horizontal flip</h2>
        </div>
      </template>
      <template slot="back">
        <div class="container basic-card">
        </div>
      </template>
    </flip-flop-card>

    <flip-flop-card :elevation="8" direction="vertical">
      <template slot="front">
        <div class="container basic-card">
          <h1>vue-flip-flop-card</h1>
          <h2>vertical flip</h2>
        </div>
      </template>
      <template slot="back">
        <div class="container basic-card">
          <h2>vertical flip</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae cumque et!</p>
        </div>
      </template>
    </flip-flop-card>

    <flip-flop-card :elevation="8" :styled-front="styledCardFront" :styled-back="styledCardBack">
      <template slot="front">
        <div class="styled-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores dolor
            excepturi quisquam
            reiciendis temporibus tenetur, veniam! Autem commodi, deleniti dolor esse eveniet excepturi laborum
            minima, porro saepe sint, sit!</p>
        </div>
      </template>
      <template slot="back">
        <div class="styled-card">
          <p>Different content</p>
        </div>
      </template>
    </flip-flop-card>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  margin: 10% auto;
}

.basic-card {
  padding: 12px;
}

.styled-card {
  p {padding: 6px;}
}
</style>