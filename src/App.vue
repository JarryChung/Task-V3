<template>
  <header-bar />
  <router-view class="router-wrapper" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from './components/HeaderBar';

export default defineComponent({
  name: 'App',

  components: {
    HeaderBar
  },

  setup() {
    return {
    };
  }
});
</script>

<style lang="less" scoped>
.router-wrapper {
  padding: @box-padding;
}
</style>
