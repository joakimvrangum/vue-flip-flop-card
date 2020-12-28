<script>
import Vue from 'vue';
import VueFlipFlopCard from '@/vue-flip-flop-card.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueFlipFlopCard
  }
});
</script>

<template>
  <div id="app">
    <vue-flip-flop-card />
  </div>
</template>
