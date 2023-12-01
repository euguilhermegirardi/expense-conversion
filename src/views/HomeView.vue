<script>
import InputPanel from "../components/inputPanel/InputPanel.vue"
import ResultPanel from "../components/resultPanel/ResultPanel.vue"

export default {
  components: { InputPanel, ResultPanel },
  name: "HomeView",
  data() {
    return {
      resultPanel: false,
    }
  },
  methods: {
    handleChangePanel() {
      this.resultPanel = !this.resultPanel
    },
  },
}
</script>

<template>
  <div class="home">
    <header class="home__header">
      <h1>Le/Tip</h1>
    </header>

    <main class="home__content">
      <InputPanel v-if="!resultPanel" />
      <ResultPanel v-else />
    </main>

    <footer class="home__footer">
      <button
        @click="handleChangePanel"
        type="button"
        class="home__button"
      >
        <svg
          :class="[
            'home__icon',
            resultPanel ? 'home__icon--opposite' : '',
          ]"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
          />
        </svg>
      </button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 3rem;

  &__header {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 10rem;

    h1 {
      font-size: 3.5rem;
    }
  }

  &__content {
    flex: 3;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__footer {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    min-height: 7rem;
  }

  &__button {
    outline: none;
    background: none;
    border: none;
  }

  &__icon {
    fill: var(--color-medium-aquamarine);
    background-color: var(--color-violet);
    border-radius: 50%;
    padding: 1px;
    transition: 0.3s;
    transition-timing-function: linear;
  }

  &__icon--opposite {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
</style>
