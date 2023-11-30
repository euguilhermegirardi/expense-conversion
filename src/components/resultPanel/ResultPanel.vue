<script setup></script>

<template>
  <section class="result-panel">
    <div class="result-panel__container">
      <label class="result-panel__label">Conta</label>
      <p class="result-panel__value">
        <span class="result-panel__value">€</span>
        100.12
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">Gorjeta</label>
      <p class="result-panel__value">
        <span class="result-panel__value">€</span>
        100.12
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">Total</label>
      <p class="result-panel__value">
        <span class="result-panel__value">€</span>
        100.12
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">Por pessoa</label>
      <p class="result-panel__value">
        <span class="result-panel__value">€</span>
        100.12
      </p>
    </div>

    <div class="result-panel__container">
      <label class="result-panel__label">em R$</label>
      <p class="result-panel__value">
        <span class="result-panel__value">R$</span>
        600.12
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
    min-height: 3.5rem;
  }

  &__label {
    font-size: 22px;
  }

  &__value {
    font-weight: 600;
    font-size: 28px;
    color: #940dff;
  }
}
</style>
