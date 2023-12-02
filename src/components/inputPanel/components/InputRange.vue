<script>
export default {
  name: "InputRange",
  props: {
    modelValue: Number,
    min: {
      type: Number,
      default: 2,
    },
    max: {
      type: Number,
      default: 16,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleChangeValue(value) {
      this.$emit("update:modelValue", value)
    },
  },
}
</script>

<template>
  <div class="range">
    <span>{{ min }}</span>
    <input
      class="range__input"
      type="range"
      :value="modelValue"
      :min="min"
      :max="max"
      @change="handleChangeValue($event.target.value)"
    />
    <span>{{ max }}</span>
  </div>
</template>

<style lang="scss" scoped>
.range {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-weight: 500;
    font-size: 15px;
  }

  &__input {
    width: 100%;
    height: 3px;
    background: var(--color-dark-blue);
    border-radius: 10px;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    transition: opacity 0.2s;
    -webkit-transition: 0.2s;
  }

  &__input:hover {
    opacity: 1;
  }

  &__input::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    background: var(--color-magenta);
    border-radius: 10px;
    border-color: var(--color-magenta);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  &__input::-moz-range-thumb {
    width: 5px;
    height: 25px;
    background: var(--color-magenta);
    border-color: var(--color-magenta);
    cursor: pointer;
  }
}
</style>
