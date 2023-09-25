/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const density ='compact';
const hideDetails = true;
const variant = "outlined";
const flat = true;
const border = true;
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VCard: { flat, border },
    VTextField: { density, hideDetails, variant },
    VBtn:{ variant },
    VSelect: { density, hideDetails, variant },
    VPagination: { density, totalVisible: 5 },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
