<script>
import Vue from 'vue';
import FlipFlopCard from '@/flip-flop-card.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FlipFlopCard
  }
});
</script>

<template>
  <div id="app">
    <flip-flop-card />
  </div>
</template>
