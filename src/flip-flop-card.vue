<template>
  <div
      class="flip-flop-card"
      :style="{ 'height': height + 'px', 'width': width + 'px' }"
  >
    <div
        class="flip-flop-card__front"
        :class="[!disabled && direction, disabled && 'disabled']"
        :style="{'transition': transformSpeed, 'box-shadow': elevationEffect}"
    >
      <slot v-if="!styledFront" name="front"></slot>
      <styled-card v-else :styleObj="styledFront">
        <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
      </styled-card>
    </div>

    <div
        class="flip-flop-card__back"
        :class="[!disabled && direction, disabled && 'disabled']"
        :style="{'transition': transformSpeed, 'box-shadow': elevationEffect}"
    >
      <slot v-if="!styledBack" name="back"></slot>
      <styled-card v-else :styleObj="styledBack">
        <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
      </styled-card>
      </div>
  </div>
</template>

<script>
import StyledCard from "./flip-flop-card-styled";
export default {
  name: 'FlipFlopCard',
  components: {StyledCard},
  props: {
    /**
     * Height of the card in pixels
     * @param {number} height
     */
    height: {
      type: Number,
      default: 450
    },
    /**
     * Width of the card in pixels
     * @param {number} width
     */
    width: {
      type: Number,
      default: 350,
    },
    /**
     * Direction of the flip
     * @param {string} either; horizontal or vertical
     */
    direction: {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return ['horizontal', 'vertical'].indexOf(value.toLowerCase()) !== -1
      }
    },
    /**
     * Disabled the flip effect of the card
     * @param {boolean} false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * A calculated speed on the transition flip-effect
     * @param {number} value between 1-10; 1 being fastest and 10 being slowest
     */
    speed: {
      type: Number,
      default: 5
    },
    /**
     * The border box-shadow effect
     * @param {number} value between 0-10. Default is 0
     */
    elevation: {
      type: Number,
      default: 0
    },
    styledFront: {
      type: Object
    },
    styledBack: {
      type: Object
    }
  },
  computed: {
    transformSpeed() {
      return `transform ${(this.speed / 6.5)}s ease`;
    },
    elevationEffect() {
      return `0 0 12px rgba(173, 173, 173, ${(this.elevation / 10)})`;
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
  -webkit-perspective: 1000px;

  &__front,
  &__back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;

    ::v-deep .container {
      height: 100%;
    }

  }

  &__back {
    &.horizontal {
      transform: rotateY(180deg);
      -moz-transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
    }
    &.vertical {
      -webkit-transform: rotateX(-180deg);
      -moz-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }

  &:hover &__front {
    &.horizontal {
      transform: rotateY(-180deg);
      -moz-transform: rotateY(-180deg);
      -webkit-transform: rotateY(-180deg);
    }
    &.vertical {
      -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
  }
  &:hover &__back {
    &.horizontal {
      transform: rotateY(0);
      -moz-transform: rotateY(0);
      -webkit-transform: rotateY(0);
    }
    &.vertical {
      transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      -webkit-transform: rotateX(0deg);
    }
  }
}
</style>