import { ERouteNames } from '@/router/routeNames';
import type { RouteRecordRaw } from 'vue-router';

// LAYOUTS
import DefaultLayout from '@/layouts/default/Index.vue';

import Race from '@/views/race/_views/Race.vue';
import TestView from '@/views/TestView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        alias: '',
        name: ERouteNames.Race,
        component: Race,
      },
      {
        path: '/test',
        name: 'Test',
        component: TestView,
      },
    ],
  },
];

export default routes;
