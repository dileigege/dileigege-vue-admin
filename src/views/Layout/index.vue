<!--
 * @Description: Layout组件
 * @Author: Fore-Zhang
 * @Date: 2020-03-27 19:10:42
 * @LastEditTime: 2020-03-28 21:58:32
 * @LastEditors: 项目组长
 -->
<!--  -->
<template>
<el-container>
  <!-- 头部导航开始 -->
  <el-header>
    <layHeader/>
  </el-header>
    <!-- 头部导航结束 -->
    <!-- 内容部分开始 -->
  <el-main>
   <router-view/>
  </el-main>
  <!-- 内容部分结束  -->
  <!-- 尾部部分开始 -->
  <el-footer>      
    <layTopnav/> 
  </el-footer>
  <!-- 尾部部分结束 -->
</el-container>

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
@blue:#2375FF; 
@white:#fff;
@gray:#333333;
.el-container{
  width: 100%;
  .el-header{
   background:linear-gradient(90deg, #0575e6 0%,#021b79 100% );
  line-height: 60px;
}
 .el-main{
   background-color:@white;
 }
 .el-footer{
   position:absolute;
   width: 100%;
  background:linear-gradient(90deg, #0575e6 0%,#021b79 100% );
   bottom: 0;
 }
}

</style>
