<!--
 * @Description: homebox模块
 * @Author: Fore-Zhang
 * @Date: 2020-04-01 10:54:46
 * @LastEditTime: 2020-04-01 17:13:01
 * @LastEditors: 项目组长
 -->

<!--  -->
<template>
  <div class="Timeline">
      <div class="tinetitle">
          <h3>完成状态 </h3>
          <p> DA-HUA后端管理系统任务提交记录 </p>
      </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card class="mic">
            <h4>更新 Github 模板</h4>
            <p>前端  提交于 2020/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card  class="mic">
            <h4> 任务调整 </h4>
            <p>技术部  提交于 2020/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card  class="mic" >
            <h4> 更新数据 </h4>
            <p> 后端 提交于 2020/4/2 20:46</p>
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card  class="fleo" >
            <h4> bug处理  </h4>
            <p> 前端  提交于 2020/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepic",
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.Timeline{
    background-color: #fff;
    padding: 15px;
    box-shadow: 3px 0 9px #eee;
    border-radius: 5px;
    .tinetitle{
        padding-bottom: 15px;
        h3{
            font-size: 18px;
            font-weight: 600;
            color: cornflowerblue;
            text-shadow:1px 0 1px rgb(65, 111, 195);
        }
        p{
            color: #666;
        }
    }
    .block{
        .mic{
            background:linear-gradient(60deg, #9cecfb 0%,#65c7f7 50%,#0052d4 100% );
            color: #fff;
        }
        .fleo{
            background:linear-gradient(90deg, #67b26f 0%,#4ca2cd 100% );
             color: #fff;
        }
    }
}
</style>