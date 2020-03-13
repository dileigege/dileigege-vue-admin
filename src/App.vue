<!--
 * @Description: 模块
 * @Author: DA-HUA
 * @Date: 2020-02-10 16:54:56
 * @LastEditTime: 2020-03-13 20:52:53
 * @LastEditors: 小刀
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
#app{
  height: 100%;
}
</style>
