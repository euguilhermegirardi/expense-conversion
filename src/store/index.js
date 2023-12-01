import { createStore } from "vuex"
import { moduleTip } from "./modules/moduleTip"

export const store = createStore({
  modules: {
    moduleTip,
  },
})
