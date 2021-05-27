// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import colors from 'vuetify/lib/util/colors'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/aos@next/dist/aos.css'
  });
  
  const opts = { 
    theme: { 
      dark: true,
        themes: {
          dark: {
            base: colors.purple.base,
            background: '#1d1f29',
            m1: '#080C12',
            m2: '#101822',
            m3: '#101822',
            m4: '#676fa2',
            primary: '#21CFF3',
            accent: '#FF4081',
            secondary: '#ffe18d',
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#FB8C00',
            error: '#FF5252'
          },
          light: {
            base: colors.purple.base,
            background: '#FFFFFF',
            m1: '#FFFFFF',
            m2: '#ffffff',
            m3: '#FFFFFF',
            m4: '#f6f3e1',
            primary: '#1976D2',
            accent: '#e91e63',
            secondary: '#30b1dc',
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#FB8C00',
            error: '#FF5252'
          }
        },
  
    }
   } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}