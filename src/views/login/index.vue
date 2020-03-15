<!--
 * @Description:  登陆模块
 * @Author: 前端-晓
 * @Date: 2020-03-13 11:03:54
 * @LastEditTime: 2020-03-15 11:21:44
 * @LastEditors: 项目组长
 -->
 <!--  -->
 <template>
   <div class="logon-module">
    <el-form class="logon-form" ref="form" :model="form"  :label-position="labelPosition">
           <div class="lodin-title">DA-HUA后台管理系统 登陆</div>
      <el-form-item  label="用户名">
        <el-input v-model="form.name" placeholder="请输入中文英文"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="form.pwd"  placeholder="请输入6位合法密码"></el-input>
      </el-form-item>
        <el-form-item label="验证码：">
          <el-col :span="14">
                 <el-input class="long-iput"  v-model="form.verify" placeholder="请输入验证码"></el-input>
          </el-col>
           <el-col :offset="1" :span="9">
                     <el-button  round class="button-fler"   @click="ongaincode">获取验证码</el-button>
           </el-col>

      </el-form-item>
      <el-form-item>
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="我已经阅读《用户协议》和《隐私政策》" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item >
        <el-form-item>
        <el-button size="small" round   @click="onSubmit">立即创建</el-button>
  </el-form-item>
    </el-form>
   </div>
 </template>
<script>
export default {
  name: 'Loginapp',
  data () {
    return {
      labelPosition: 'top',
      form: {
        name: '',
        pwd: '',
        verify: '',
        type: []
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    ongaincode () {
      console.log('ongaincode!')
    }
  }
}
</script>

<style>
  .el-form-item {
    margin-bottom: 12px;
}

.el-form--label-top .el-form-item__label {
    padding: 0 0 0px;
}
  /* 表单样式 */
.el-input__inner{
  border-radius: 25px;
}
.el-input__inner:hover{
  border: 0;
  box-shadow: 1px 0 9px #ebebeb;
}

.el-input.is-active .el-input__inner, .el-input__inner:focus {
  box-shadow: 1px 0 9px rgba(64, 160, 255, 0.335);
  border: 0;
  outline: 0;
}
  /* 按钮样式 */
.button-fler{
  border: 0;
  box-shadow: 1px 0 9px #ebebeb;
}
</style>

 <style lang='less' scoped>
 .logon-module{
     height:100%;
     background-color:#eee;
     display: flex;
     justify-content: center;
     align-items: center;
     .logon-form{
       background-color: #fff;
       width: 25%;
       padding: 25px 45px;
       border-radius: 4px;
       box-shadow: 1px 0 9px rgb(0, 0, 0 0.5);
       .lodin-title{
         color:#2375FF;
         font-size: 20px;
         font-weight: 600;
         text-shadow: 1px 0 2px  #999999;
         border-bottom: 1px #f8f8f8 solid;
         padding-bottom: 15px;
       }
     }
 }
 </style>
