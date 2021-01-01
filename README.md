# vue-flip-flop-card

<p>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/v/vue-flip-flop-card.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/l/vue-flip-flop-card.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-flip-flop-card"><img src="https://img.shields.io/npm/dt/vue-flip-flop-card.svg" alt="Downloads"></a>
</p>

### Preview

### Installation

```bash
npm install vue-flip-flop-card --save
```

### Example usage

Within a Vue project, add these lines in your main.js or index.js

```js
import Vue from 'vue';
import FlipFlopCard from 'vue-flip-flop-card';

Vue.use(FlipFlopCard);
```

Component usage with slots:

```vue

<flip-flop-card>
<slot name="front">
  <h2>Front</h2>
</slot>
<slot name="front">
  <h2>Back</h2>
</slot>
</flip-flop-card>
```

Notes; within the slot, wrapping the content in a <div> with a class named container will automatically apply full
height.

### Props

Placeholder

### Styled card

Placeholder

### License

This package is open source and released under the MIT Licence.