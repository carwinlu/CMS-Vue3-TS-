# CMS 项目搭建

## Category

### 技术栈
● 打包：webpack
● 状态管理：vuex、VueRouter
● 基本语言框架 Vue3、TS

### 项目环境搭建
1. 项目格式化工具
   1. .editoeconfig 文件
   2. Prettier
   3. Eslint
   4. gitHusky
2. 项目提交规范化
   1. Commitizen & commitlint
3. 第三方库集成
   1. vue.config.js 配置别名
   2. vueRouter
   3. vuex
   4. element-plus
      1. 整体导入
      2. 局部导入
   5. axios
      1. axios 的封装及其必要性
4. 不同环境下的配置
   1. 手动配置
   2. vue-cli 配置


### 登录页面搭建
实现步骤
1. 基础页面实现，样式，el 组件
2. 登录的正则配置
3. 登录按键的基础逻辑
   1. 在 panel 中监听点击并调用 account 组件中的登录逻辑和方法
4. 是否记住密码
   1. localStorage 的封装 in `src/utils/cache.ts`
      1. getCache()
      2. setCache()
      3. delCache()
      4. clearCache()
5. 发送网络请求
   1. 什么请求？
      1. 用户登录
         1. 验证 token
         2. 或生成 token
         3. 本地保存 token
      2. 用户菜单（方便后续渲染
      3.
   2. 在哪请求？
      1. **service/login**中发送请求，
      2. 因为数据是多组件公用的，所以在**store/login**中获得请求的结果
      3. 并本地保存数据（token、userInfo、userMenu
   3. **整体登录逻辑**
      1. 在 service 中写请求函数
      2. 在 store 中发送请求并处理数据

### Main页面搭建

1. 整个的文件结构

   ```md
   |-- components

   |-- nav-main(放左侧导航栏的文件)
   |-- src
   |--nav-main.vue
   |--index.ts(主要的文件导出文件)

   |-- nav-header（头部导航栏的文件）

   |-- views
   |-- main
   |-- main.vue(主要导入文件)

        |-- config
            相关配置文件
        |-- hooks
            相关使用生命周期函数或者reative的配置文件
        |-- cpns
            分为多个组件
            |-- login-panel.vue

            |-- login-account.vue
            |-- login-phone.vue
                实现登录验证的逻辑及正则提醒
   ```
#### RBAC(role base accsess control)

动态路由组件：

1. 注册全部路由
2. 不同角色注册不同路由表
3. 根据菜单动态生成路由映射
   1. 在哪里配置动态路由
      1. store/router 的路由守卫都可以
   2. 在 store 中配置
      1. 先加载所有路由
         1. require.context('路径',Boolean，正则);
         2. 返回合规的文件路径，Boolean：是否递归查找
      2. 根据获取菜单选择

#### 页面搭建
1. 搜索框组件封装
- 基本样式实现
- 可根据传入 props 配置所需表单内容
  1. 可自定义 input 框的类型
  2. 可自定义样式
     1. label-width...
     2. margin\padding\width
  3. 样式抽离
-search&重置按钮监听
  1. formData的动态决定
  2. 使用v-model的原始版本去监听formData的改动，保持数据单向；


2. 面包屑

3. table组件封装
   -store & request：请求（用户菜单）的数据
   -使用 el 的 table 组件：传入两个 props：menu 的数据、每个 column 的参数整合（listProps[]）；生成表格
   -调整表格样式
   -对表格的某些列进行特殊处理：如转化为一个加粗或者 button、又或者对数据进行处理
      1. 通过插槽进行状态按钮管理、时间转换
      2. 可选项
         1. 序号列
         2. 选择列
         3. 数据增删列
      3. header & footer 插槽

4. echarts封装
