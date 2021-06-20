import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import { IndexList, IndexSection } from 'mint-ui';

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
//
Vue.use(MintUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
