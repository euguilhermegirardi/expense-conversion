import { convertToReal } from "../../services/convertToReal"
import { calculator } from "../utils/calculator"

export const moduleTip = {
  namespaced: true,
  state() {
    return {
      currency: "EUR",
      bill: 0.0,
      tip: 10,
      billDividedBy: 2,
      totalInReal: 0,
      conversionFlag: "idle",
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
    setConversionFlag(state, value) {
      state.conversionFlag = value
    },
    setTotalInReal(state, value) {
      state.totalInReal = value
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
    handleConvertCurrency(context) {
      context.commit("setConversionFlag", "loading")

      const calculatedTip =
        context.getters["getCalculatedTip"]

      convertToReal(
        calculatedTip.total,
        context.state.currency
      )
        .then((response) => {
          context.commit("setTotalInReal", response)
          context.commit("setConversionFlag", "done")
        })
        .catch((error) => {
          console.error(error)
          context.commit("setConversionFlag", "error")
        })
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
    getTotalInReal(state) {
      return parseFloat(state.totalInReal)
    },
    getConversionFlag(state) {
      return state.conversionFlag
    },
    getCalculatedTip(state) {
      return calculator(
        parseFloat(state.bill),
        state.tip,
        state.billDividedBy
      )
    },
  },
}
