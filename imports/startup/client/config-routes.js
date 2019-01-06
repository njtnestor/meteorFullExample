// Import the router
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior
});

// Not found
import Home from '/imports/ui/pages/Home/Home.vue';
import Blog from '/imports/ui/pages/Blog/Blog.vue';
import NotFound from '/imports/ui/pages/NotFound/NotFound.vue';

RouterFactory.configure(router => {
  router.addRoutes([
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog ,
    },
    {
      path: '*',
      component: NotFound,
    }
  ]);
}, -1);

export default routerFactory;