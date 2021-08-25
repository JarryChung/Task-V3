# Task-V3

> 使用 vue3 与 ts 构建的四象限工作法辅助 app
> 涵盖多种写法，详见代码说明部分

## 开发

- 安装依赖 `yarn install`
- 运行服务 `yarn serve`
- 构建产物 `yarn build`
- lint `yarn lint`

## 代码说明

- _src/views/StatisticsView.vue_ 使用 setup script 语法糖编写
- _src/views/task-board_ 使用 .vue 模版语法 + defineComponent 编写
- _src/components/HeaderBar.tsx_ 使用 .tsx + defineComponent 编写
- _src/components/TaskItem.tsx_ 使用 .tsx 函数式写法，类 react
