import Vue from 'vue'
import { directive } from 'v-click-outside'

Vue.directive('click-outside', directive)
Vue.use(directive, { inject: true })
