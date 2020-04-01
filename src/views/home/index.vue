<!--
 * @Description: Layout组件
 * @Author: Fore-Zhang
 * @Date: 2020-03-27 19:10:42
 * @LastEditTime: 2020-04-01 11:49:08
 * @LastEditors: 项目组长
 -->
<!--  -->
<template>
<el-row :gutter="22">
  <el-col :span="17"> <homebox/></el-col>
  <el-col :span="7"> <homepic/> </el-col>
</el-row>
</template>
<script>

import  homebox from './comments/homebox'; 
import  homepic from './comments/homepic';
export default {
  name: 'homeapp',
  components: {
  homebox,
  homepic
  },
  data() {
    return {}
  }
}
</script>
<style lang='less' scoped>
</style>
