import './styles/index.css';
import App from './components/App.svelte';

import { mount } from 'svelte';

// eslint-disable-next-line
// const app = new App({
//   target: document.querySelector('#app'),
// });

const app = mount(App, {
  target: document.querySelector('#app'),
});