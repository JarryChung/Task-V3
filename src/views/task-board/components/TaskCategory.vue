<template>
  <div class="task-category-wrapper" :style="wrapperStyle">
    <h2 class="title" :style="titleStyle">{{ title }}</h2>
    <vue-draggable-next
      :list="taskList"
      group="task"
      itemKey="id"
      :sort="true"
      @change="onChangeCategory"
    >
      <task-item
        v-for="(task, index) in filterTaskList"
        :key="task.id"
        :task="task"
        :deleteFn="() => deleteTask(index)"
      />
    </vue-draggable-next>
  </div>
</template>

<script lang="ts">
import { computed, PropType, defineComponent } from 'vue';
import TaskItem from '@/components/TaskItem'
import { VueDraggableNext } from 'vue-draggable-next'
import { Task } from '@/assets/json/tasks'

interface DragChangeEvent {
  added?: { element: Task },
  removed?: { element: Task }
}

export default defineComponent({
  props: {
    taskList: { type: Array as PropType<Task[]>, required: true },
    filterTaskList: { type: Array as PropType<Task[]>, required: true },
    type: { type: Number, required: true },
    title: { type: String, default: '未分类' },
    color: { type: String, default: '#eee' }
  },

  emits: ['delete'],

  components: {
    TaskItem,
    VueDraggableNext
  },

  setup(props, { emit: emits }) {
    const wrapperStyle = computed(() => ({
      border: `1px solid ${props.color}`
    }))
    const titleStyle = computed(() => ({
      backgroundColor: props.color
    }))

    const deleteTask = (index: number) => {
      emits('delete', index);
    }

    const onChangeCategory = (ev: DragChangeEvent) => {
      // 更新 task 的类别
      if (ev.added) {
        ev.added.element.type = props.type
      }
    }

    return {
      wrapperStyle,
      titleStyle,
      deleteTask,
      onChangeCategory
    };
  }
});
</script>

<style lang="less" scoped>
.task-category-wrapper {
  border-radius: 4px;
  .title {
    margin: 0;
    font-size: 18px;
    padding: 4px 4px;
  }
}
</style>
