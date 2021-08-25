import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TaskBoard from './views/task-board/Main.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/task-board'
  },
  {
    path: '/task-board',
    name: 'TaskBoard',
    component: TaskBoard
  },
  {
    path: '/statistics-view',
    name: 'StatisticsView',
    component: () => import(/* webpackChunkName: "statistics-view" */ './views/StatisticsView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
