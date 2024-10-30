import DefaultTheme from 'vitepress/theme'
import './docs-theme.css'


import VPCarbonAds from './components/VPCarbonAds.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VPCarbonAds', VPCarbonAds)
  }
}