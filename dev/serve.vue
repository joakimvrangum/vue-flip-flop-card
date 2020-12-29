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
    <flip-flop-card :elevation="8">
      <template slot="front">
        <div class="container" style="background-color: antiquewhite;">

        </div>
      </template>
    </flip-flop-card>
  </div>
</template>
