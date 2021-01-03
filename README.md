# vue-flip-flop-card

<p>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/v/vue-flip-flop-card.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/l/vue-flip-flop-card.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/dt/vue-flip-flop-card.svg" alt="Downloads"></a>
</p>

This is my first attempt making a reusable npm-module, and is mainly an exercise in understand how to package SFC (SingleFileComponent) via rollup, as well and maintaining and documenting on npm.

### Preview

[placeholder gif] - [placeholder gif] - [placeholder gif]

### Installation

```bash
npm install vue-flip-flop-card --save
```

### Getting started

Within a Vue project, add these lines in your main.js or index.js

```js
import Vue from 'vue';
import FlipFlopCard from 'vue-flip-flop-card';

Vue.use(FlipFlopCard);
```

### Example usage

Component usage with just bare <u>**slots**</u> for custom content:

```vue
<flip-flop-card>
<slot name="front">
  <h2>Front</h2>
</slot>
<slot name="back">
  <div class="container" style="background-color: #4d9193">
    <h2>Back</h2>
  </div>
</slot>
</flip-flop-card>
```

**Notes**; within the slot, wrapping the content in a `<div>` with a class named `container` will automatically apply full
height of the card.

Component usage with <u>**styled card**</u>;

```vue
<template>
  <flip-flop-card
      :styled-front="optionsFrontCard"
      :styled-back="optionsBackCard"
  ></flip-flop-card>
</template>
```
Example options set in object;
```vue
<script>
export default {
  data() {
    return {
      optionsFrontCard: {
        coverImg: 'https://images.unsplash.com/photo-1608903837898-17a1f38bbf6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
        coverTitle: 'Hello, there!',
        themeColor: '#64ce87',
        themeColor2: '#188d65',
      },
      optionsBackCard: {
        bgFillColor: true
      }
    }
  }
}
</script>
```

### Props

Prop | Type | Default Value | Description
:---: | :---: | :---: | ---
**height** | *Number* | *450* | Height of the card in pixels
**width** | *Number* | *350* | Width of the card in pixels
**direction** | *String* (enum) | *horizontal* | Direction of the flip, either; horizontal or vertical
**disabled** | *Boolean* | *false* | Disabled the flip effect of the card
**speed** | *Number* | *5* | A calculated speed on the transition flip-effect. Values between 1-10; with 1 being fastest and 10 being slowest.
**elevation** | *Number* | *0* | The border box-shadow effect.
**styled-front** | *Object* | - | See _Styled card_ documentation
**styled-back** | *Object* | - | See _Styled card_ documentation 

Props are also documented within component, and can be found using the documentation shortcut in your IDE, such
as `Ctrl + Q` in Jetbrains' Webstorm.

### Styled card

The styled card is a pre-styled card where you pass in a set of options (as an object) that help theme how the card
looks. The styled card consists of a header/cover image, title heading, and color styles for displaying content. The
content is set via either the  

Property | Option | Datatype | Description
:---: | :---: | :---: | ---
**coverImg** | url | String | Optional link to image for displaying as cover image
**coverTitle** | title | String | A styled title caption to go with the header image
**themeColor** | color | String | Optional color overlay-effect for shading cover image 
**themeColor2** | color | String | Optional alternative color for applying a linear-gradient shade


### Changelog

Placeholder

### License

This package is open source and released under the MIT Licence.