<!--
 * @Description:  登陆模块
 * @Author: 前端-晓
 * @Date: 2020-03-13 11:03:54
 * @LastEditTime: 2020-03-13 21:13:19
 * @LastEditors: 小刀
 -->
 <!--  -->
 <template>
   <div class="logon-module">
    <el-form class="logon-form" ref="form" :model="form"  :label-position="labelPosition">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
          <el-form-item label="活动名称">
        <el-input v-model="form.verify"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        verify: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
 <style lang='less' scoped>
 .logon-module{
     height:100%;
     background-color:#eee;
     display: flex;
     justify-content: center;
     align-items: center;
     .logon-form{}
 }
 </style>
