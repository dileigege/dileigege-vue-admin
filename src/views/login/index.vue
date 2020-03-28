<!--
 * @Description:  登陆模块
 * @Author: 前端-晓
 * @Date: 2020-03-13 11:03:54
 * @LastEditTime: 2020-03-28 14:30:49
 * @LastEditors: 项目组长
 -->
 <!--  -->
 <template>
  <!--logon-module 开始  -->
  <div>
    <div class="header">
      头部
      </div>
  <div class="logon-module">
    <el-form
      class="logon-form"
      ref="form"
      :model="form"
      :rules="rules"
      :label-position="labelPosition"
    >
      <div class="lodin-title">DA-HUA后台管理系统 登陆</div>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" placeholder="请输入中文英文"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="form.pwd" placeholder="请输入6位合法密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码：" prop="verify">
        <el-col :span="14">
          <el-input class="long-iput" v-model="form.verify" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :offset="1" :span="9">
         
          <el-button
            round
            class="button-fler"
            @click="ongaincode"
            :disabled="!!codeTime"
          >{{ codeTime ? `剩余${codeNumer}秒`: '获取验证码'}}</el-button>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="form.type" prop="type">
          <el-checkbox label="我已经阅读《用户协议》和《隐私政策》" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button size="small" round @click="codeVerification">立即登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>

</template>
<script>
import axios from "axios";
import "@/vender/dt";
export default {
  name: "Loginapp",
  data() {
    return {
      labelPosition: "top",
      form: {
        name: "",
        pwd: "",
        verify: "",
        type: true
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        verify: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        type: [
          { required: true, message: "请阅读用户协议AND隐私条款" },
          { patter: /true/, message: "请阅读用户协议AND隐私条款" }
        ]
      },
      codeTime: null,
      codeNumer: 20
    };
  },
  methods: {
    codeVerification() {
      this.$refs["form"].validate(valid => {
        if (!valid) {
          return;
        }
        // 调用 onSubmit
        this.onSubmit();
      });
    },
    // 提交操作
    onSubmit() {
      axios({
        method: "POST",
        url: "http://106.15.230.31:3000/mock/28/login",
        data: this.form
      })
        // 成功
        .then(res => {
          this.$message({
            message: "登陆成功",
            type: "success "
          });
          this.$router.push({
            name: "home"
          });
        })
        // 失败
        .catch(e => {
          this.$message.error("登陆失败");
        });
      // console.log("submit!");
    },
    // 验证码操作
    ongaincode() {
      this.$message("验证码已发送");

      this.countDown();
      // 验证码
      // axios({
      //   method: "GET",
      //   url: "http://106.15.230.31:3000/mock/22/VerificationCode"
      // }).then(res => {
      //   initGeetest(
      //     {
      //       // 以下配置参数来自服务端 SDK
      //       gt: data.gt,
      //       challenge: data.challenge,
      //       offline: !data.success,
      //       new_captcha: true,
      //       product: "bind"
      //     },
      //     function(captchaObj) {
      //       // 这里可以调用验证实例 captchaObj 的实例方法
      //       captchaObj
      //         .onReady(function() {
      //           //验证码ready之后才能调用verify方法显示验证码
      //             captchaObj.verify(); //显示验证码
      //         })
      //         .onSuccess(function() {
      //           //your code
      //         })
      //         .onError(function() {
      //           //your code
      //         });
      //     }
      //   );
      // });
    },

    // 验证码倒计时
    countDown() {
      // console.log("验证码倒计时")
      this.codeTime = window.setInterval(() => {
        this.codeNumer--;
        if (this.codeNumer <= 0) {
          // 清除定时器
          window.clearInterval(this.codeTime);
          //定时器 还原
          (this.codeNumer = 20), (this.codeTime = null);
        }
      }, 1000);
    }
  }
};
</script>

<style>
.el-form-item {
  margin-bottom: 12px;
}

.el-form--label-top .el-form-item__label {
  padding: 0 0 0px;
}
/* 表单样式 */
.el-input__inner {
  border-radius: 25px;
}
.el-input__inner:hover {
  border: 0;
  box-shadow: 1px 0 9px #ebebeb;
}

.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  box-shadow: 1px 0 9px rgba(64, 160, 255, 0.335);
  border: 0;
  outline: 0;
}
/* 按钮样式 */
.button-fler {
  border: 0;
  box-shadow: 1px 0 9px #ebebeb;
}
</style>

 <style lang='less' scoped>
 .header{
   height: 55px;
   line-height: 55px;
   box-shadow: 1px 0 9px #eeeeee;
 }
.logon-module {
  height: 100%;
  padding: 45px 0;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #36d1dc 0%, #5b86e5 100%);
  .logon-form {
    background-color: #fff;
    width: 25%;
    padding: 25px 45px;
    border-radius: 4px;
    box-shadow: 1px 0 9px rgb(0, 0, 0 0.5);
    .lodin-title {
      color: #2375ff;
      font-size: 20px;
      font-weight: 600;
      text-shadow: 1px 0 2px #999999;
      border-bottom: 1px #f8f8f8 solid;
      padding-bottom: 15px;
    }
  }
  .bomerter{
    position: relative;
    border: 0;
  }
}
</style>
