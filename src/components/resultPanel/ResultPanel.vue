<script>
import { mapGetters } from "vuex"
import { store } from "../../store"
import CurrencyOutput from "../CurrencyOutput.vue"

export default {
  name: "ResultPanel",
  data() {
    return {
      timer: null,
    }
  },
  components: { CurrencyOutput },
  computed: {
    ...mapGetters({
      bill: "moduleTip/getBill",
      currency: "moduleTip/getCurrency",
      total: "moduleTip/getCalculatedTip",
      totalInReal: "moduleTip/getTotalInReal",
      conversionFlag: "moduleTip/getConversionFlag",
    }),
  },
  methods: {
    convert() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        store.dispatch("moduleTip/handleConvertCurrency")
      }, 1000)
    },
  },
  watch: {
    total(tip) {
      console.log("entrou no watch - total")
      if (tip.total != 0) this.convert()
    },
    currency() {
      console.log("entrou no watch - currency")
      if (this.total.total != 0) this.convert()
    },
  },
}
</script>

<template>
  <section class="result-panel">
    <div class="result-panel__container">
      <label class="result-panel__label">Conta</label>
      <p class="result-panel__value">
        <CurrencyOutput :currency="currency" />
        {{ bill }}
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">Gorjeta</label>
      <p class="result-panel__value">
        <CurrencyOutput :currency="currency" />
        {{ total.calculatedTip }}
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">Total</label>
      <p class="result-panel__value">
        <CurrencyOutput :currency="currency" />
        {{ total.total }}
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">Por pessoa</label>
      <p class="result-panel__value">
        <CurrencyOutput :currency="currency" />
        {{ total.perPerson }}
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">em R$</label>
      <p class="result-panel__value">
        <CurrencyOutput currency="BRL" />
        {{ totalInReal }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.result-panel {
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    min-height: 3.5rem;
  }

  &__label {
    font-size: 22px;
  }

  &__value {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 28px;
    color: #940dff;
  }
}
</style>
