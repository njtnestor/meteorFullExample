// Import client startup through a single index entry point

import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
import routerFactory from './config-routes';

Vue.use(VueTracker);

// Main app
import App from '/imports/ui/layouts/MainLayout.vue';

//import '/imports/methods/UpdatePixelColor';

Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create();
  new Vue({
    router,
    render: h => h(App),
  }).$mount('app');
});