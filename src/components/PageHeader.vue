<template>
  <header class="header-container">
    <v-layout>
      <v-app-bar @change="emits('toggleTheme', darkMode)" id="header">
        <template v-slot:prepend>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <template v-slot:title>
          <v-app-bar-title>
            <img src="@/assets/images/logo-light.png" alt="logo" v-if="!darkMode" class="logo" />
            <img src="@/assets/images/logo-dark.png" alt="logo" v-if="darkMode" class="logo" />
          </v-app-bar-title>
        </template>
        <template v-slot:append>
          <v-btn icon class="icon">
            <v-icon class="mr-10">mdi-heart</v-icon>
          </v-btn>
          <v-switch
            class="d-flex align-center"
            inset
            color="info"
            v-model="darkMode"
            @change="toggleTheme()"
            :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
          ></v-switch>
        </template>
      </v-app-bar>
    </v-layout>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from 'vuetify';

interface ToggleEmits {
  (e: 'toggleTheme', value: boolean): void;
}

const items = [
  { title: 'Alcoholic Cocktails' },
  { title: 'Non-Alcoholic Cocktails' },
  { title: 'Favorites' }
];

const theme = useTheme();
const darkMode = ref(false);
const emits = defineEmits<ToggleEmits>();

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? 'customDarkTheme' : 'customLightTheme';

  console.log(`Current theme is dark? ${theme.global.current.value.dark}`);
};
</script>

<style scoped lang="scss">
.header-container {
  height: 10vw;
}

#header {
  padding: 20px;
  transition:
    color 0.5s,
    background-color 0.5s;
}

.logo {
  margin-left: 25%;
  width: 45%;
}

@media (min-width: 600px) and (max-width: 1023px) {
  .logo {
    margin: 0;
    width: 90%;
  }
}

@media (max-width: 600px) {
  #header {
    padding: 2px;
  }
  .logo {
    margin: 0;
    width: 95%;
  }
  .icon {
    display: none;
  }
}
</style>
