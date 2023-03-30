import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import SignInView from '../views/SignInView.vue';
import PopularView from '../views/PopularView.vue';
import FormUpload from '../components/forms/FormUpload.vue';
import FormUpdate from '../components/forms/FormUpdate.vue';
import AdminSummary from '../components/AdminSummary.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/popular',
      name: 'popular',
      component: PopularView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'upload',
          component: FormUpload,
        },
        {
          path: 'update',
          component: FormUpdate,
        },
        {
          path: 'admin-summary',
          component: AdminSummary,
        },
      ],
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
  ],
});

export default router;
