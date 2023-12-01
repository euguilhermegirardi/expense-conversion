<script>
import { store } from "../../store"
import CurrencyToggle from "./components/CurrencyToggle.vue"
import CurrencyOutput from "./components/CurrencyOutput.vue"
import InputRange from "./components/InputRange.vue"

export default {
  components: {
    CurrencyToggle,
    CurrencyOutput,
    InputRange,
  },
  name: "InputPanel",
  methods: {},
  computed: {
    currency: {
      get() {
        return store.getters["moduleTip/getCurrency"]
      },
      set(currency) {
        store.dispatch(
          "moduleTip/handleChangeCurrency",
          currency
        )
      },
    },
    bill: {
      get() {
        return store.getters["moduleTip/getBill"]
      },
      set(bill) {
        const pattern =
          /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/
        if (pattern.test(bill))
          store.commit("moduleTip/setBill", bill)
      },
    },
    tip: {
      get() {
        return store.getters["moduleTip/getTip"]
      },
      set(tip) {
        store.commit("moduleTip/setTip", tip)
      },
    },
    billDividedBy: {
      get() {
        return store.getters["moduleTip/getBillDividedBy"]
      },
      set(perPerson) {
        store.commit(
          "moduleTip/setBillDividedBy",
          perPerson
        )
      },
    },
  },
}
</script>

<template>
  <form class="input-panel">
    <div class="input-panel__container">
      <span>EUR</span>
      <CurrencyToggle v-model="currency" />
      <span>USD</span>
    </div>

    <div
      class="input-panel__container input-panel__container--value"
    >
      <label class="input-panel__value-label">Valor</label>
      <div class="input-panel__value-container">
        <CurrencyOutput :currency="currency" />
        <input
          id="inputBill"
          class="input-panel__value-input"
          type="number"
          placeholder="Ex: 210.25"
          v-model="bill"
        />
      </div>
    </div>

    <div
      class="input-panel__container input-panel__container--column"
    >
      <div class="input-panel__range-label-container">
        <label
          for="tipInputRange"
          class="input-panel__range-label"
          >Gorjeta:
          <span class="input-panel__range-tip">
            {{ tip }}%
          </span>
        </label>
      </div>

      <InputRange
        id="tipInputRange"
        v-model="tip"
        :min="10"
        :max="20"
      />
    </div>

    <div
      class="input-panel__container input-panel__container--column"
    >
      <div class="input-panel__range-label-container">
        <label
          for="dividedByPersonInputRange"
          class="input-panel__range-label"
        >
          Pessoas:
          <span class="input-panel__range-tip">
            {{ billDividedBy }}
          </span>
        </label>
      </div>

      <InputRange
        id="dividedByPersonInputRange"
        v-model="billDividedBy"
        :min="2"
        :max="16"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.input-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    min-height: 30px;
    width: 100%;
    font-weight: 600;
  }

  &__container--value {
    margin: 1rem 0;
  }

  &__container--column {
    flex-direction: column;
    gap: 10px;
  }

  &__value-label {
    display: flex;
    align-items: flex-end;
    height: 100%;
  }

  &__value-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 5px;
    height: 100%;
  }

  &__value-input {
    border: 1px solid var(--color-dark-blue);
    padding: 8px;
    border-radius: 2px;
    outline: none;
    transition: 0.5s;
    -webkit-transition: 0.5s;
  }

  &__value-input:focus {
    border: 1px solid var(--color-hot-pink);
  }

  &__range-label-container {
    display: flex;
    width: 100%;
  }

  &__range-label {
  }

  &__range-tip {
    font-size: 22px;
  }
}
</style>
