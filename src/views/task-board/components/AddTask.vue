<template>
  <teleport to="#add-task" v-if="isMounted">
    <div class="add-task">
      <svg class="icon add-task-btn" aria-hidden="true" @click="toggleVisible">
        <use xlink:href="#icon-A"></use>
      </svg>
      <template v-if="isVisible">
        <input class="input" type="text" v-model="taskContent" @keydown.enter="onConfirm">
        <svg class="icon confirm-btn" aria-hidden="true" @click="onConfirm">
          <use xlink:href="#icon-xinzeng"></use>
        </svg>
      </template>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  emits: ['add'],

  setup(_, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });

    const isVisible = ref(false);
    const toggleVisible = () => {
      isVisible.value = !isVisible.value;
    };

    const taskContent = ref('');
    const onConfirm = () => {
      ctx.emit('add', taskContent.value);
      taskContent.value = '';
    }

    return {
      isMounted,
      isVisible,
      toggleVisible,
      taskContent,
      onConfirm
    };
  }
});
</script>

<style lang="less" scoped>
.add-task {
  .add-task-btn {
    margin-right: 8px;
    font-size: 24px;
    user-select: none;
    cursor: pointer;
  }
  .input {
    padding: 0 3px;
    height: 24px;
    width: 200px;
    vertical-align: top;
    margin-top: 6px;
  }
  .confirm-btn {
    font-size: 24px;
    cursor: pointer;
    margin-left: 4px;
  }
}
</style>
