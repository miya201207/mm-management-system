<template>
<div class="login-container">
    <el-form
      class="login-form"
      autocomplete="on"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">{{'麦青汇堂食点餐结算系统'}}</h3>
        <!--<lang-select class="set-language"></lang-select>-->
      </div>

      <el-form-item class="account-container" prop="account">
        <i class="account-icon"></i>
        <input
          class="account-input"
          name="account"
          type="text"
          v-model="loginForm.account"
          placeholder="请输入用户名"
        >
      </el-form-item>

      <el-form-item class="password-container" prop="password">
        <i class="password-icon"></i>
        <input
          class="password-input"
          name="password"
          type="password"
          @keyup.enter="handleSubmit"
          v-model="loginForm.password"
          placeholder="请输入密码"
        >
      </el-form-item>

      <el-form-item class="code-container" prop="code">
        <i class="code-icon"></i>
        <input
          class="code-input"
          name="text"
          type="text"
          @keyup.enter="handleSubmit"
          v-model="loginForm.code"
          placeholder="请输入图形验证码"
        >
        <img src alt>
      </el-form-item>

      <div class="login-button-container">
        <el-button
          class="login-button"
          type="button"
          :loading="logining"
          @click.native.prevent="handleSubmit"
        >登入</el-button>
      </div>
    </el-form>
  </div>


</template>

<script>
export default {
  name: 'HelloWorld',
   data() {
    return {
      logining: false,
      loginForm: {
        account: "",
        password: ""
      },
      loginRules: {
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(ev) {
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       this.logining = true;
    //       let loginParams = {
    //         userName: this.loginForm.account,
    //         password: this.loginForm.password,
    //         code: this.loginForm.password
    //       };
    //       requestLogin(loginParams).then(res => {
    //         this.logining = false;
    //         if (res) {
    //           sessionStorage.token = res;
    //           this.$router.push({
    //             path: ""
    //           });
    //           // this.$router.push({ path: '/main' });
    //         } else {
    //           this.$message({
    //             message: "用户名或密码错误！",
    //             type: "error"
    //           });
    //         }
    //       });
    //     } else {
    //       this.$message({
    //         message: "请输入登录账户或密码！",
    //         type: "warning"
    //       });
    //       return false;
    //     }
	//   });
	  this.$router.push({
             path: "/home"
        });
 		}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.clearfix {
  overflow: auto;
  zoom: 1;
}
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  .login-form {
    float: right;
    margin: 120px 250px 0 0;
    width: 500px;
    height: 510px;
    background: rgba(153, 153, 153, 0.4) 0 0 no-repeat;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .title-container {
    position: relative;
    .title {
      border-bottom: 1px solid #00c7c8;
      font-size: 30px;
      color: #fff;
      line-height: 60px;
      text-align: center;
      font-family: "Microsoft YaHei", serif;
    }
  }
  .el-form-item {
    overflow: hidden;
    margin-top: 25px;
    border-radius: 10px;
    input {
      outline: none;
      float: left;
      border-radius: 50px;
      height: 40px;
      padding: 5px 10px;
      width: 70%;
      font-size: 16px;
      color: #333;
    }
    .account-icon {
      float: left;
      width: 22px;
      height: 24px;
      margin: 18px 15px 0 25px;
    }
  }
  .password-container {
    .password-icon {
      float: left;
      width: 22px;
      height: 24px;
      margin: 18px 15px 0 25px;
    }
  }
  .code-container {
    .code-icon {
      float: left;
      width: 22px;
      height: 24px;
      margin: 18px 15px 0 25px;
    }
    input {
     display: inline-block;
	 width: 36% !important;
	margin-right: 15px;
    }
    img {
      background: #fff;
      width: 30%;
      display: inline-block;
      vertical-align: middle;
      height: 50px;
	  border-radius:50px;
    }
  }

  .login-button-container {
    height: 78px;
    margin-top: 45px;
    .login-button {
      outline: none;
      display: block;
      width: 75%;
      text-align: center;
      color: #fff;
      font-size: 24px;
      background-color: #00c7c8;
      border-radius: 50px;
      margin: 0 auto;
      height: 50px;
    }
    a:hover {
      text-decoration: none;
    }
  }
}
</style>
