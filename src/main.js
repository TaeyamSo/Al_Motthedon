//BootStrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
//Main CSS file
import './assets/main.css';
//Normalize CSS file
import 'normalize.css';
//FontAwsome Icons Library
import './assets/all.min.css';
// Font Awesome Imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// Add icons to the library
library.add(faMagnifyingGlass,faFacebookF,faXTwitter,faInstagram,faYoutube,faBars);

const app = createApp(App);

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.mount('#app');