import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  next();
});

// SET PAGE TITLE
const DEFAULT_TITLE = 'Horse Racing';
router.afterEach((to) => {
  nextTick(() => {
    document.title = typeof to.meta.title === 'string' ? `${to.meta.title}` : DEFAULT_TITLE;
  });
});

export default router;
