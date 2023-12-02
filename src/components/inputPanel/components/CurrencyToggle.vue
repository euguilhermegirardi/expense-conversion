<script>
export default {
  name: "CurrencyToggle",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  methods: {
    handleChangeCurrency(currency) {
      this.$emit("update:modelValue", currency)
    },
  },
}
</script>

<template>
  <label class="currency-toggle" for="currency-toggle">
    <input
      id="currency-toggle"
      class="currency-toggle__input"
      type="checkbox"
      :value="modelValue"
      @change="handleChangeCurrency($event.target.value)"
    />
    <span class="currency-toggle__slider" />
  </label>
</template>

<style lang="scss" scoped>
.currency-toggle {
  display: inline-block;
  position: relative;
  width: 70px;
  height: 35px;

  &__input {
    display: none;
  }

  &__slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background: repeating-linear-gradient(
      45deg,
      var(--color-violet),
      var(--color-violet) 1px,
      var(--color-medium-aquamarine) 1px,
      var(--color-medium-aquamarine) 4px
    );
    border-radius: 3px;
    transition: 0.4s;
    -webkit-transition: 0.4s;
  }

  &__slider:before {
    position: absolute;
    content: "";
    height: 35px;
    width: 36px;
    left: 0px;
    bottom: 0px;
    background-color: var(--color-dark-blue);
    border-radius: 3px;
    transition: 0.6s;
    -webkit-transition: 0.6s;
  }

  &__input:checked + &__slider {
    background-color: var(--color-magenta);
  }

  &__input:focus + &__slider {
    box-shadow: 0 0 1px var(--color-magenta);
  }

  &__input:checked + &__slider:before {
    transform: translateX(35px);
    -webkit-transform: translateX(35px);
    -ms-transform: translateX(35px);
  }
}
</style>
