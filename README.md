# Task-V3

> 使用 vue3 与 ts 构建的四象限工作法辅助 app
>
> 涵盖多种写法，详见代码说明部分

[DEMO](https://jarrychung.github.io/Task-V3/)
<video
  width="666"
  controls
  muted
  loop
  preload="none"
  poster="https://user-images.githubusercontent.com/35088591/130968673-5add9925-3985-4002-a603-c57fcd102205.png"
>
  <source
    src="https://user-images.githubusercontent.com/35088591/130968680-95d4c620-ea26-4f01-b885-2ec25af584fe.mov"
    type="video/mp4"
  />
</video>

## 开发

- 安装依赖 `yarn install`
- 运行服务 `yarn serve`
- 构建产物 `yarn build`
- 发布 `yarn deploy`
- lint `yarn lint`

## 代码说明

- _src/views/StatisticsView.vue_ 使用 setup script 语法糖编写
- _src/views/task-board_ 使用 .vue 模版语法 + defineComponent 编写
- _src/components/HeaderBar.tsx_ 使用 .tsx + defineComponent 编写
- _src/components/TaskItem.tsx_ 使用 .tsx 函数式写法，类 react
- 对于 .tsx 文件，采用 [cxs](https://github.com/cxs-css/cxs) 来编写样式，避免新建样式文件
- HeaderBar 中的新增任务功能采用 teleport 实现，对于 teleport target 为 vue 组件内元素的，需要确认其 mounted
- 采用 localStorage 进行本地数据持久化
