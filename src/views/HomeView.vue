<script setup>
import { Icon } from "@iconify/vue"
import InputPanel from "../components/inputPanel/InputPanel.vue"
import ResultPanel from "../components/resultPanel/ResultPanel.vue"
</script>

<template>
  <div class="home">
    <header class="home__header">
      <h1>Le/Tip</h1>
    </header>

    <main class="home__content">
      <!-- <InputPanel /> -->
      <ResultPanel />
    </main>

    <footer class="home__footer">
      <button type="button" class="home__button">
        <Icon
          class="home__icon"
          icon="emojione-monotone:up-arrow"
          width="40"
          height="40"
          :rotate="1"
        />
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
    color: var(--color-medium-aquamarine);
    background-color: var(--color-violet);
    border-radius: 50%;
  }
}
</style>
