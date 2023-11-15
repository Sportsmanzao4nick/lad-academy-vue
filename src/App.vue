<template>
  <div id="app" :style="darkBg">
    <PageHeader
      id="header"
      @toggle-theme="
        (value) => {
          emitData = value;
        }
      "
    />
    <v-container class="container">
      <v-row justify="space-around">
        <MainCell :title="'Alcoholic Cocktails'" :logo="alcoholicLogo" :emitData="emitData" />
        <MainCell
          :title="'Non-Alcoholic Cocktails'"
          :logo="nonAlcoholicLogo"
          :emitData="emitData"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import PageHeader from '@/components/PageHeader.vue';
import MainCell from '@/components/MainCell.vue';
import alcoholicLogo from '@/assets/svg/alcoholic.svg';
import nonAlcoholicLogo from '@/assets/svg/non-alcoholic.svg';

const emitData = ref<boolean>(false);

const darkBg = computed(() => {
  return {
    backgroundColor: emitData.value ? '#111928' : '#eff2f6',
    color: emitData.value ? '#eff2f6' : '#44403CFF'
  };
});
</script>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  transition:
    color 0.5s,
    background-color 0.5s;
}

.container {
  margin-top: 40px;
}

@media (max-width: 600px) {
  .container {
    margin-top: 20px;
  }
}
</style>
