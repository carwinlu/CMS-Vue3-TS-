# Main

<img src='./img/mainPage.png'/>

## 实现步骤

1. 基础页面结构搭建
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
   ```

   ```
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

   el-plus menu 的结构

   ``` html
   <!-- el-menu 里面可以写菜单相关样式，及绑定open之类操作 -->
   <el-menu>
        <el-sub-menu index="1">
          <!-- 一级菜单内容 -->
          <template #title>
            <!-- <el-icon><location /></el-icon> -->
            <span>Navigator One</span>
          </template>

          <!-- <el-menu-item-group title="Group One"> 分组 -->
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          <!-- </el-menu-item-group> -->
            <el-menu-item index="1-3">item three</el-menu-item>
            <!-- 每个item外面套一个sub-menu代表可以展开 -->
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <!-- 如果到达el-menu-item 就是没有展开啦 -->
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
          <!-- <el-icon><document /></el-icon> -->
          <span>Navigator Three</span>
        </el-menu-item>

        <el-menu-item index="4">
          <!-- <el-icon><setting /></el-icon> -->
          <span>Navigator Four</span>
        </el-menu-item>
        
      </el-menu>
      ```

## RBAC

(role base accsess control)

动态路由组件
方案：

1. 注册全部路由
2. 不同角色注册不同路由表
3. 根据菜单动态生成路由映射
   1. 在哪里配置动态路由
      1. store/router的路由守卫都可以
   2. 在store中配置
      1. 先加载所有路由
         1. require.context('路径',Boolean，正则);
         2. 返回合规的文件路径，Boolean：是否递归查找
      2. 根据获取菜单选择

### 为什么配置完刷新页面就not-found？

执行顺序：

1. vueRouter：app.user(router) -> install(){} ->获取当前path -> router.routes ->
2. setupStore() ->注册动态路由
3. 路由守卫回调

## header 搭建

### 面包屑

## 页面搭建

### 高级组件封装

#### 搜索框

* 实现内容：

  <img src='./img/main-search-component.png'>

  * 基本样式实现


  * 可根据传入props配置所需表单内容
    1. 可自定义input框的类型
    2. 可自定义样式
       1. label-width...
       2. margin\padding\width
    3. 样式抽离
    4. Q：怎么把我们写el-form的属性提醒作为类型提出来呢？这样就不用写一堆lineWidth这种了
   
   
  * 怎么动态绑定Form-item的default-active？
    1. 根据我的route去匹配menu，得到名字
    2. 面包屑可根据同一思路：
       1. 在此基础上，获取上级组件名字
