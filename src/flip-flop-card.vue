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
      <div v-else class="styled">
        <div class="styled__image" :style="styledFrontImage"></div>
        <h4 class="card__heading">
          <span class="card__heading-span">Styled heading</span>
        </h4>
      </div>
    </div>

    <div
        class="flip-flop-card__back"
        :class="[!disabled && direction, disabled && 'disabled']"
        :style="{'transition': transformSpeed, 'box-shadow': elevationEffect}"
    >
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
        return ['horizontal', 'vertical'].indexOf(value.toLowerCase()) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 5
    },
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
    },
    styledFrontImage() {
      return `background-image: linear-gradient(
        to right,
        ${this.styledFront.themeColor1},
        ${this.styledFront.themeColor2}),
        url(${this.styledFront.headerImage}
      );`;
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

  &__front {
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

  .styled {
    &__image {
      background-size: cover;
      height: 10rem;
      background-blend-mode: screen;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
  }
}
</style>