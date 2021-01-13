<template>
  <div class="styled" :style="styleObj.bgColorFill ? bgColor : null">
    <div class="styled__image" :style="styledImage"></div>
    <h4 v-if="styleObj.coverTitle" class="styled__title">
      <span class="styled__title-span" :style="styledTitle">{{ styleObj.coverTitle }}</span>
    </h4>
    <div class="styled__content">
      <slot v-if="front" name="front"></slot>
      <slot v-if="back" name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    styleObj: {
      type: Object,
      required: true
    },
    front: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgColor() {
      return `background: linear-gradient(${this.styleObj.themeColor || 'transparent'}, ${this.styleObj.themeColor2 || 'transparent'});`
    },
    styledImage() {
      return `background-image: linear-gradient(to right, ${this.styleObj.themeColor || 'transparent'}, ${this.styleObj.themeColor2 || 'transparent'}), url(${this.styleObj.coverImg});`
          + `height: ${400 * 0.35}px;`;
    },
    styledTitle() {
      return `background-image: linear-gradient(to right bottom, ${this.convertHexToRGB(this.styleObj.themeColor)}, ${this.convertHexToRGB(this.styleObj.themeColor2)});`;
    },
  },
  methods: {
    convertHexToRGB: function (hex, alpha = 0.87) {
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
.styled {
  height: 100%;

  &__image {
    background-size: cover;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }

  &__title {
    font-size: 1.5rem;
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
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
    }
  }

  &__content {
    position: absolute;
    top: 44%;
  }
}
</style>