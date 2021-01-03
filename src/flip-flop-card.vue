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
        <h4 v-if="styledFront.coverTitle" class="styled__title">
          <span class="styled__title-span" :style="styledFrontTitle">{{styledFront.coverTitle}}</span>
        </h4>
        <div class="styled__content">
          <slot name="styled-front-content"></slot>
        </div>
      </div>
    </div>

    <div
        class="flip-flop-card__back"
        :class="[!disabled && direction, disabled && 'disabled']"
        :style="{'transition': transformSpeed, 'box-shadow': elevationEffect}"
    >
      <slot v-if="!styledBack" name="back"></slot>

      <div v-else class="styled">
        <div class="styled__image" :style="styledBackImage"></div>
        <h4 v-if="styledBack.coverTitle" class="styled__title">
          <span class="styled__title-span" :style="styledBackTitle">{{styledBack.coverTitle}}</span>
        </h4>
        <div class="styled__content">
          <slot name="styled-back-content"></slot>
        </div>
      </div>
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
      return `background-image: linear-gradient(to right, ${this.styledFront.themeColor || 'transparent'}, ${this.styledFront.themeColor2  || 'transparent'}), url(${this.styledFront.coverImg});`
          + `height: ${this.height * 0.35}px;`;
    },
    styledFrontTitle() {
      return `background-image: linear-gradient(to right bottom, ${this.convertHexToRGB(this.styledFront.themeColor)}, ${this.convertHexToRGB(this.styledFront.themeColor2)});`;
    },
    styledBackImage() {
      return `background-image: linear-gradient(to right, ${this.styledBack.themeColor || 'transparent'}, ${this.styledBack.themeColor2  || 'transparent'}), url(${this.styledBack.coverImg});`
          + `height: ${this.height * 0.35}px;`;
    },
    styledBackTitle() {
      return `background-image: linear-gradient(to right bottom, ${this.convertHexToRGB(this.styledBack.themeColor)}, ${this.convertHexToRGB(this.styledBack.themeColor2)});`;
    }
  },
  methods: {
    convertHexToRGB: function (hex, alpha=0.87) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
        if (alpha) {
          return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }
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

  .styled {
    &__image {
      background-size: cover;
      background-blend-mode: screen;
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }
    &__title {
      font-size: 1.5em;
      font-weight: 600;
      text-transform: uppercase;
      text-align: right;
      position: absolute;
      top: 30%;
      right: 0;
      &-span {
        padding: 0.7rem 1rem;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }
    }
    &__content {
      position: absolute;
      top: 44%;
    }
  }
}
</style>