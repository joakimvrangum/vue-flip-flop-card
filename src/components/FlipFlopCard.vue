<template>
  <div
      class="flip-flop-card"
      :style="{'height': height + 'px', 'width': width + 'px'}"
  >
    <div class="flip-flop-card__front">
      <slot name="front"></slot>
    </div>

    <div class="flip-flop-card__back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipFlopCard',
  props: {
    height: {
      type: Number,
      default: 450
    },
    width: {
      type: Number,
      default: 350,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-flop-card {
  background-color: transparent;
  position: relative;
  perspective: 1000px;
  -moz-perspective: 1000px;

  &__front,
  &__back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: transform .6s ease;
    transform-style: preserve-3d;
  }

  &__front {
  }

  &__back {
    transform: rotateY(180deg);
  }

  &:hover &__front {
    transform: rotateY(-180deg);
  }
  &:hover &__back {
    transform: rotateY(0);
  }
}
</style>