export const moduleTip = {
  namespaced: true,
  state() {
    return {
      currency: "EUR",
      bill: 0.0,
      tip: 10,
      billDividedBy: 2,
    }
  },
  mutations: {
    setCurrency(state, value) {
      state.currency = value
    },
    setBill(state, value) {
      state.bill = value
    },
    setTip(state, value) {
      state.tip = parseInt(value)
    },
    setBillDividedBy(state, value) {
      state.billDividedBy = parseInt(value)
    },
  },
  actions: {
    handleChangeCurrency(context, currency) {
      if (currency === "USD") {
        context.commit("setCurrency", "EUR")
      } else {
        context.commit("setCurrency", "USD")
      }
    },
  },
  getters: {
    getCurrency(state) {
      return state.currency
    },
    getBill(state) {
      return state.bill
    },
    getTip(state) {
      return state.tip
    },
    getBillDividedBy(state) {
      return state.billDividedBy
    },
  },
}
