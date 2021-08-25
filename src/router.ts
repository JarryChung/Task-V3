import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TaskBoard from './views/task-board/Main.vue';
import StatisticsView from './views/StatisticsView.vue';

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
    component: StatisticsView
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
