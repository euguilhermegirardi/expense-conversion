<script setup>
import CurrencyToggle from "./components/CurrencyToggle.vue"
import InputRange from "./components/InputRange.vue"
</script>

<template>
  <form class="input-panel">
    <div class="input-panel__container">
      <span>EUR</span>
      <CurrencyToggle />
      <span>USD</span>
    </div>

    <div
      class="input-panel__container input-panel__container--value"
    >
      <label class="input-panel__value-label">Valor</label>
      <div class="input-panel__value-container">
        <p class="input-panel__currency">€</p>
        <input
          id="inputNumber"
          class="input-panel__value-input"
          type="number"
          placeholder="Ex: 210.25"
        />
      </div>
    </div>

    <div
      class="input-panel__container input-panel__container--column"
    >
      <div class="input-panel__range-label-container">
        <label class="input-panel__range-label"
          >Gorjeta:
          <span class="input-panel__range-tip"> 13% </span>
        </label>
      </div>

      <InputRange />
    </div>

    <div
      class="input-panel__container input-panel__container--column"
    >
      <div class="input-panel__range-label-container">
        <label class="input-panel__range-label"
          >Pessoas:
          <span class="input-panel__range-tip"
            >13%</span
          ></label
        >
      </div>

      <InputRange />
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

  &__currency {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 22px;
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
