import xyz from './modules/xyz'
import bc from './modules/bc'
import mapApi from './modules/googleMap'
import { createStore } from 'vuex'
export default createStore({
  modules: { xyz, bc, mapApi }
})
