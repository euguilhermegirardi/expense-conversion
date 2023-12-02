<script>
import { mapGetters } from "vuex"
import { store } from "../../store"
import CurrencyOutput from "../CurrencyOutput.vue"

export default {
  name: "ResultPanel",
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
    convertToReal() {
      store.commit("moduleTip/setConversionFlag", "loading")

      setTimeout(() => {
        store.dispatch("moduleTip/handleConvertCurrency")
      }, 4500)
    },
  },
  watch: {
    conversionFlag(state) {
      console.log(state)
    },
    total(tip) {
      if (tip.total != 0) this.convertToReal()
    },
    currency() {
      if (this.total.total != 0) this.convertToReal()
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
      <div
        class="result-panel__loading-container"
        v-show="conversionFlag === 'loading'"
      >
        <div class="result-panel__loading-spinner"></div>
      </div>

      <p
        class="result-panel__error-msg"
        v-show="conversionFlag === 'error'"
      >
        Something went wrong. Please refresh the page and
        try again.
      </p>

      <p
        class="result-panel__value"
        v-show="conversionFlag === 'done'"
      >
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
    color: var(--color-violet);
  }
  &__loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__loading-spinner {
    border: 4px solid var(--color-hot-pink);
    border-radius: 50%;
    border-top: 4px solid var(--color-violet);
    width: 22px;
    height: 22px;
    animation: spin 1s linear infinite;
  }

  &__error-msg {
    font-size: 1.2rem;
    background-color: var(--color-background-error-msg);
    color: var(--color-error-msg);
    border-radius: 5px;
    padding: 5px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
