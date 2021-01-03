# vue-flip-flop-card

<p>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/v/vue-flip-flop-card.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/l/vue-flip-flop-card.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/dt/vue-flip-flop-card.svg" alt="Downloads"></a>
</p>

This is my first attempt making a reusable npm-module.

### Preview

[placeholder gif] - [placeholder gif] - [placeholder gif]

### Installation

```bash
npm install vue-flip-flop-card --save
```

### Registration

Within a Vue project, add these lines in your main.js or index.js

```js
import Vue from 'vue';
import FlipFlopCard from 'vue-flip-flop-card';

Vue.use(FlipFlopCard);
```

### Example usage

Component usage with just slots for custom content:

```vue

<flip-flop-card>
<slot name="front">
  <h2>Front</h2>
</slot>
<slot name="front">
  <div class="container" style="background-color: #4d9193">
    <h2>Back</h2>
  </div>
</slot>
</flip-flop-card>
```

Notes; within the slot, wrapping the content in a .div with a class named .container will automatically apply full
height of the card.

### Props

Placeholder

Props are also documented within component, and can be found using the documentation shortcut in your favorite IDE, such
as `Ctrl + Q` in Jebrains Webstorm.

### Styled card

The styled card is a pre-styled card where you can pass in a set of options (as an object) that help theme how the card
looks. The styled card consists of an header image, heading, and color styles for displaying content.

### License

This package is open source and released under the MIT Licence.