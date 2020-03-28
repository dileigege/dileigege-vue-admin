<!--
 * @Description: Layout组件
 * @Author: Fore-Zhang
 * @Date: 2020-03-27 19:10:42
 * @LastEditTime: 2020-03-28 13:25:22
 * @LastEditors: 项目组长
 -->
<!--  -->
<template>
  <div>
    <layTopnav/>
    <layHeader/>
  </div>
</template>
<script>

import  layTopnav from './comments/layTopnav';
import  layHeader from './comments/layHeader';
export default {
  name: 'app',
  components: {
   layTopnav,
   layHeader
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
