<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav"><h1 class="mui-title">获取密码</h1></header>
        <div class="mui-content">
            <div class="ui-tooltips ui-tooltips-warn" v-if="formError">
                <div class="ui-tooltips-cnt ui-border-b">
                    <i></i>
                    {{errmsg}}
                </div>
            </div>
            <form class="mui-input-group" id="form-1">
                <div class="mui-input-row">
                    <label>QQ号</label>
                    <input type="text" class="mui-input-clear" placeholder="请输入QQ号" v-model="qq_id" />
                </div>
                <div class="mui-input-row">
                    <label>暗号</label>
                    <input type="password" class="mui-input-password" placeholder="请输入解得的暗号" v-model="password" />
                </div>
                <div class="g-recaptcha">
                    <vue-recaptcha
                        sitekey="6LdbfOUUAAAAAD8K-FFMBwpVf1M1j1yauRAPT-OI"
                        :loadRecaptchaScript="true"
                        @verify="onCaptchaVerified"
                        @expired="onCaptchaExpired"
                    ></vue-recaptcha>
                </div>
                <div class="ui-btn-wrap"><button class="ui-btn-lg ui-btn-primary" type="button" @click="verifyForm">确定</button></div>
            </form>
        </div>
    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
const axios = require('axios').default;
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: { VueRecaptcha },
    data() {
        return {
            formError: false,
            recaptcha: false,
            qq_id: '',
            password: '',
            errmsg: '',
        };
    },
    methods: {
        verifyForm() {
            let that = this;
            var check = true;
            mui("#form-1 input").each(function() {
                //若当前input为空，则alert提醒 
                if(!this.value || this.value.trim() == "") {
                    var label = this.previousElementSibling;
                    that.errmsg = (label.innerText + "不允许为空");
                    that.formError = true;
                    check = false;
                    return false;
                }
            });
            if (check) {
                that.formError = false;
                if (!this.recaptcha) {
                    mui.alert('请先进行人机验证');
                    return false;
                } else {
                    axios
                          .get('https://debbie.upset.fun/api/getPasscode')
                          .then(response => (console.log(response)))
                }
            }
            
        },
        onCaptchaVerified() {
            this.recaptcha = true;
        },
        onCaptchaExpired() {
            this.recaptcha = false;
        }
    }
};
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
>>> .g-recaptcha > div > div {
    margin: 10px auto 0 auto;
}
label {
    text-align: left;
}
.ui-tooltips {
    text-align: left;
}
</style>
