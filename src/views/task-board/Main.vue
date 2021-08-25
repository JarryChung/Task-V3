<template>
  <div class="task-board-wrapper">
    <task-category
      class="task-category"
      v-for="(taskList, key) of filterTasks"
      :key="key"
      :task-list="task[key]"
      :filter-task-list="taskList"
      :type="+key"
      :title="taskCategoryTitle[key]"
      :color="taskCategoryColor[key]"
      @delete="(index) => onDeleteTask(index, key)"
    />

    <add-task @add="onAddTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, onMounted } from 'vue';
import TaskCategory from './components/TaskCategory.vue';
import AddTask from './components/AddTask.vue';
import { useSearchKey } from '@/helpers/hooks';
import { TASK_CACHE_KEY, TASK_TYPE } from '@/helpers/constants'
import { tasks, Task } from '@/assets/json/tasks'

export const taskCategoryTitle = {
  [TASK_TYPE.UNCATEGORIZED]: '未分类',
  [TASK_TYPE.IMPORTANT_URGENT]: '重要且紧急',
  [TASK_TYPE.NOT_IMPORTANT_URGENT]: '不重要但紧急',
  [TASK_TYPE.IMPORTANT_NOT_URGENT]: '重要但不紧急',
  [TASK_TYPE.NOT_IMPORTANT_NOT_URGENT]: '不重要不紧急'
};

export default defineComponent({
  name: 'TaskBoard',

  components: {
    TaskCategory,
    AddTask
  },

  setup() {
    const originTask = {
      [TASK_TYPE.UNCATEGORIZED]: tasks.filter(t => t.type === TASK_TYPE.UNCATEGORIZED),
      [TASK_TYPE.IMPORTANT_URGENT]: tasks.filter(t => t.type === TASK_TYPE.IMPORTANT_URGENT),
      [TASK_TYPE.NOT_IMPORTANT_URGENT]: tasks.filter(t => t.type === TASK_TYPE.NOT_IMPORTANT_URGENT),
      [TASK_TYPE.IMPORTANT_NOT_URGENT]: tasks.filter(t => t.type === TASK_TYPE.IMPORTANT_NOT_URGENT),
      [TASK_TYPE.NOT_IMPORTANT_NOT_URGENT]: tasks.filter(t => t.type === TASK_TYPE.NOT_IMPORTANT_NOT_URGENT)
    }
    const task = reactive({
      [TASK_TYPE.UNCATEGORIZED]: originTask[TASK_TYPE.UNCATEGORIZED],
      [TASK_TYPE.IMPORTANT_URGENT]: originTask[TASK_TYPE.IMPORTANT_URGENT],
      [TASK_TYPE.NOT_IMPORTANT_URGENT]: originTask[TASK_TYPE.NOT_IMPORTANT_URGENT],
      [TASK_TYPE.IMPORTANT_NOT_URGENT]: originTask[TASK_TYPE.IMPORTANT_NOT_URGENT],
      [TASK_TYPE.NOT_IMPORTANT_NOT_URGENT]: originTask[TASK_TYPE.NOT_IMPORTANT_NOT_URGENT]
    })
    watch(task, () => {
      const taskList = Object.values(task).flat();
      localStorage.setItem(TASK_CACHE_KEY, JSON.stringify(taskList));
    }, { deep: true })

    const { searchKey } = useSearchKey();
    const filterTasks = computed(() => {
      const k = searchKey.value;
      const filterTask = (task: Task) => k === '' || task.content.includes(k);
      return {
        [TASK_TYPE.UNCATEGORIZED]: task[TASK_TYPE.UNCATEGORIZED].filter(t => filterTask(t)),
        [TASK_TYPE.IMPORTANT_URGENT]: task[TASK_TYPE.IMPORTANT_URGENT].filter(t => filterTask(t)),
        [TASK_TYPE.NOT_IMPORTANT_URGENT]: task[TASK_TYPE.NOT_IMPORTANT_URGENT].filter(t => filterTask(t)),
        [TASK_TYPE.IMPORTANT_NOT_URGENT]: task[TASK_TYPE.IMPORTANT_NOT_URGENT].filter(t => filterTask(t)),
        [TASK_TYPE.NOT_IMPORTANT_NOT_URGENT]: task[TASK_TYPE.NOT_IMPORTANT_NOT_URGENT].filter(t => filterTask(t))
      }
    })

    const taskCategoryColor = {
      [TASK_TYPE.UNCATEGORIZED]: '#d9d9d9',
      [TASK_TYPE.IMPORTANT_URGENT]: '#ff4d4f',
      [TASK_TYPE.NOT_IMPORTANT_URGENT]: '#ffa940',
      [TASK_TYPE.IMPORTANT_NOT_URGENT]: '#bae637',
      [TASK_TYPE.NOT_IMPORTANT_NOT_URGENT]: '#36cfc9'
    }

    const onAddTask = (content: string) => {
      if (!content) {
        return;
      }

      const now = Date.now()
      task[TASK_TYPE.UNCATEGORIZED].push({
        id: now,
        content,
        type: 0,
        time: now / 1000 | 0
      })
    }

    const onDeleteTask = (index: number, key: number) => {
      task[key].splice(index, 1);
    }

    onMounted(() => {
      const cache = localStorage.getItem(TASK_CACHE_KEY);
      if (cache) {
        const taskList: Task[] = JSON.parse(cache);
        const props = Object.values(TASK_TYPE);
        props.forEach(p => (task[p] = taskList.filter(t => t.type === p)));
      }
    })

    return {
      task,
      filterTasks,
      taskCategoryTitle,
      taskCategoryColor,
      onAddTask,
      onDeleteTask
    };
  }
});
</script>

<style lang="less" scoped>
.task-board-wrapper {
  display: flex;
  justify-content: space-between;
  .task-category {
    width: 20%;
    margin: 0 4px;
  }
}
</style>
