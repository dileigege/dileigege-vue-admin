<!--
 * @Description: 首页 栏目 模块
 * @Author: 前端-晓
 * @Date: 2020-03-13 11:04:54
 * @LastEditTime: 2020-04-01 12:21:04
 * @LastEditors: 项目组长
 -->
<template>

    
  <el-row :gutter="20" class="card clearfix">
     <el-col :span="4" class="function-Attributes clearfix">
          <p>员工张某，上午好</p>
          <el-button type="primary" round size="small" class="butonStyle">
            创建项目
            <i class="el-icon-s-tools el-icon--right"></i>
          </el-button>
          <el-button type="primary" round size="small" class="butonStyle">
            考情状态
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
    </el-col>
    <el-col :span="14" class="function-Show clearfix">
       
          <p class="p">
            {{ nowDate + ' ' + nowTime + ' ' + nowWeek }}
            <span>我的项目:{{namefield}}</span>
          </p>
          <div class="showUl clearfix">
            <div class="showLi" v-for="(item, index) in myproject" :key="index">
              <p class="litask">{{item.litask}}</p>
              <p class="litaskNumer">{{item.litaskNumer}}</p>
              <p class="extension" v-show="item.extensionNumer > 0">
                {{item.extension}}
                <span>{{item.extensionNumer}}</span>
              </p>
            </div>
          </div>
    </el-col>
    <el-col :span="5" class="function-charts clearfix">  
          <p>详情</p>
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :type="activity.type"
                :color="activity.color"
                :timestamp="activity.timestamp"
              >{{activity.content}}</el-timeline-item>
            </el-timeline>
          </div>
   </el-col>

      <el-col :span="24" class="card-wrap" v-show="show">
        <p class="micter">图例分析 -- 饼状图例 </p>
        <ve-ring 
         :data="chartData"
         :settings="chartSettings"
         height="300px">
         </ve-ring>
      </el-col>

        <div class="PushBox">
            <i class="el-icon-s-marketing" @click="change"></i>
        </div>
  </el-row>
  
</template>

<script>
export default {
  name: "homebox",
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期
      show: true,
      namefield: " DA-HUA后端管理系统", //项目名称
      myproject: [
        //项目数据
        {
          litask: "我的任务",
          litaskNumer: 105,
          extension: "已延期",
          extensionNumer: 5
        },
        { litask: "项目阶段 ", litaskNumer: 2 },
        { litask: "完成任务 ", litaskNumer: 45 },
        { litask: "今天任务", litaskNumer: 6 },
        { litask: "审核任务", litaskNumer: 3 }
      ],
      activities: [
        {
          content: "项目建立I",
          timestamp: "2018-04-12 20:46",
          color: "#0bbd87"
        },
        {
          content: "项目更改",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        }
      ],
      chartData: {
        columns: ["日期", "任务量"],
        rows: [
          { 日期: "第一阶段", 任务量:105 },
          { 日期: "第二阶段", 任务量: 175 },
          { 日期: "第三阶段", 任务量: 230 },
          { 日期: "第四阶段", 任务量: 100 },
          { 日期: "第五阶段", 任务量: 195 },
          { 日期: "第六阶段", 任务量: 240 }
        ]
      }
    };
  },
  methods: {
    // 日期开始
    currentTime() {
      setInterval(this.getDate, 500);
    },
    getDate: function() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      if (week == 1) {
        this.nowWeek = "星期一";
      } else if (week == 2) {
        this.nowWeek = "星期二";
      } else if (week == 3) {
        this.nowWeek = "星期三";
      } else if (week == 4) {
        this.nowWeek = "星期四";
      } else if (week == 5) {
        this.nowWeek = "星期五";
      } else if (week == 6) {
        this.nowWeek = "星期六";
      } else {
        this.nowWeek = "星期日";
      }
      _this.nowTime = hh + ":" + mf;
      _this.nowDate = yy + "年" + mm + "月" + dd;
    },
    // 日期结束
    // 显示隐藏
    change() {
      this.show = !this.show;
    }
  },
  mounted() {
    // 调用日期触发
    this.currentTime();
  },
  // 销毁定时器 重新触发
  beforeDestroy: function() {
    if (this.getDate) {
      console.log("销毁定时器");
      clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>

<style lang='less' scoped>
.card {
  background-color: #fff;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 3px 0 9px #eee;
  position: relative;
  
    .function-Attributes {
      float: left;
      border-right: 1px #f9f9f9 solid;
      .butonStyle {
        display: block;
        margin: 15px;
        padding: 8px 20px;
        background-color: #2375ff;
        box-shadow: 0 2px 6px #2375ff;
      }
      p {
        text-align: right;
        color: #848484;
        margin-top: 10px;
        padding-right: 25px;
      }
    }
    .function-Show {
      float: left;
      border-right: 1px #f9f9f9 solid;
      .p {
        margin-left: 15px;
        padding: 10px;
        color: #848484;
        span {
          font-weight: 600;
          margin-left: 15px;
          color: #2375ff;
        }
      }
      .showUl {
        .showLi {
          float: left;
          padding: 5px 20px;
          text-align: center;
          .litask {
            font-size: 12px;
            color: #101010;
            height: 20px;
          }
          .litaskNumer {
            font-size: 26px;
            color: #101010;
            font-weight: 700;
            height: 40px;
          }
          .extension {
            background-color: #ff9d9d;
            padding: 5px 10px;
            border-radius: 3px;
            color: #ff6565;
            font-weight: 700;
          }
        }
      }
    }
    .function-charts {
      float: left;
      margin-left: 15px;
      p {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .block {
        float: left;
        .el-timeline-item {
          position: relative;
          padding-bottom: 10px;
        }
      }
    }
      .PushBox {
        position: absolute;
        right: 25px;
        i {
          font-size: 15px;
          padding: 5px;
          margin-left: 25px;
          background-color: #2375ff;
          color: #f9f9f9;
          border-radius: 50%;
          box-shadow: 0 2px 6px #2375ff;
        }
        // background-color: #eee;
      }
  .card-wrap {
    background-color: #eee;
    margin-top: 15px;
    padding: 5px;
  .micter{
    display: inline-block;
    padding: 5px  10px;
    color: #f9f9f9;
    background-color: #2375ff;
    border-radius: 5px;
  }
}
}

</style>
