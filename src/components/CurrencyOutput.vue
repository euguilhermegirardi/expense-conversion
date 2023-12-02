<script>
export default {
  name: "CurrencyOutput",
  props: {
    currency: {
      type: String,
    },
  },
  computed: {
    handleCurrency() {
      let sign = "$"

      switch (this.currency) {
        case "USD":
          sign = "$"
          break
        case "EUR":
          sign = "€"
          break
        case "BRL":
          sign = "R$"
          break
      }

      return sign
    },
  },
}
</script>

<template>
  <span class="currency">{{ handleCurrency }}</span>
</template>

<style lang="scss" scoped>
.currency {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 22px;
  min-width: 18px;
}
</style>
