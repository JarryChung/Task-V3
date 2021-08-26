<template>
  <div class="statistics-view">
    <div class="time">{{ time }}</div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, ref } from 'vue';
import * as echarts from 'echarts';
import { tasks, Task } from '@/assets/json/tasks';
import { taskCategoryTitle } from './task-board/Main.vue';
import { TASK_CACHE_KEY } from '@/helpers/constants';

const getChartData = (tasks: Task[]) => {
  const nameMap: { [prop: number]: number } = {};
  tasks.forEach(task => {
    if (!nameMap[task.type]) {
      nameMap[task.type] = 0;
    }
    nameMap[task.type] += 1;
  });
  const chartData = Object.entries(nameMap).map(([name, value]) => ({ value, name: taskCategoryTitle[+name] }));
  return chartData;
};

let chartInstance: echarts.ECharts;
const initChart = (chartData: { value: number; name: string }[]) => {
  const targetElement = document.getElementById('chart');
  if (targetElement) {
    chartInstance = echarts.init(targetElement);
    chartInstance.setOption({
      legend: {
        top: 'bottom'
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: '占比',
          type: 'pie',
          radius: [50, 250],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          label: {
            show: true,
            formatter: '{b}\n\r{c}({d}%)'
          },
          data: chartData
        }
      ]
    });
  }
};

onMounted(() => {
  const cache = localStorage.getItem(TASK_CACHE_KEY);
  const taskList = cache ? JSON.parse(cache) : tasks;

  const chartData = getChartData(taskList);
  initChart(chartData);
});

onBeforeMount(() => {
  // 需手动销毁 echarts 实例，否则路由切换后二次渲染失败
  chartInstance.dispose();
});

const time = ref(new Date().toString());
setInterval(() => {
  time.value = new Date().toString();
}, 1000);
</script>

<style lang="less" scoped>
.statistics-view {
  .time {
    text-align: center;
  }
  .chart {
    text-align: center;
    width: 99vw;
    height: 88vh;
  }
}
</style>
