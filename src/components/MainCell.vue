<template>
  <v-card class="rounded-xl card" :style="dark">
    <template v-slot:title> {{ title }}</template>
    <template v-slot:text>
      <img :src="logo" class="logo" />
    </template>
  </v-card>
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue';

interface PropsCell {
  title: string;
  logo: string;
  emitData: boolean;
}

const props = defineProps<PropsCell>();
const { title, logo, emitData } = toRefs(props);

const dark = computed(() => {
  return {
    backgroundColor: emitData.value ? '#111928' : '#eff2f6',
    color: emitData.value ? '#eff2f6' : '#44403CFF'
  };
});
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  border: 5px solid #4caf50;
  margin-top: 30px;
  width: 35%;
}

.logo {
  width: calc(180px + 5vw);
}

@media (min-width: 600px) and (max-width: 1023px) {
  .card {
    margin-top: 50px;
    width: 45%;
  }
}

@media (max-width: 600px) {
  .card {
    margin-top: 2vh;
    width: 85%;
  }
}
</style>
