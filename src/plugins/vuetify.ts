// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const customLightTheme: ThemeDefinition = {
  dark: false,
  variables: {},
  colors: {
    background: '#fbfbfb',
    surface: '#fbfbfb',
    primary: '#4CAF50',
    secondary: '#03DAC5',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
};

const customDarkTheme: ThemeDefinition = {
  dark: true,
  variables: {},
  colors: {
    background: '#111928',
    surface: '#111928',
    primary: '#4CAF50',
    secondary: '#03DAC5',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
      customDarkTheme
    }
  }
});
