import { ERouteNames } from '@/router/routeNames';
import type { RouteRecordRaw } from 'vue-router';

// LAYOUTS
import DefaultLayout from '@/layouts/default/Index.vue';

import RaceView from '@/views/race/_views/RaceView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        alias: '',
        name: ERouteNames.RaceView,
        component: RaceView,
      },

    ],
  },
];

export default routes;
