<template>
  <div class="hello">
    <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title">获取密码</h1>
        </header>
        <div class="mui-content">
            <div class="ui-tooltips ui-tooltips-warn">
                <div class="ui-tooltips-cnt ui-border-b">
                    <i></i>无法连接服务器，请检查你的网络设置。
                </div>
            </div>
            <form class="mui-input-group" id="form-1">
                <div class="mui-input-row">
                    <label>QQ号末4位</label>
                    <input type="text" class="mui-input-clear" placeholder="请输入QQ号的末4位">
                </div>
                <div class="mui-input-row">
                    <label>暗号</label>
                    <input type="password" class="mui-input-password" placeholder="请输入解得的暗号">
                </div>
                <script src="https://www.recaptcha.net/recaptcha/api.js?hl=zh-CN" async defer></script>
                <div class="g-recaptcha" data-sitekey="6LdbfOUUAAAAAD8K-FFMBwpVf1M1j1yauRAPT-OI" data-callback="recaptchaSuccess"></div>
                <div class="ui-btn-wrap">
                    <button class="ui-btn-lg ui-btn-primary" type="button" onclick="verify()">
                        确定
                    </button>
                </div>
                
            </form>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
