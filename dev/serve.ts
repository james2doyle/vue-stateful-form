import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
import EmojiPicker from './EmojiPicker.vue';

Vue.config.productionTip = false;
Vue.component('EmojiPicker', EmojiPicker);

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
