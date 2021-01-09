<template>
  <div class="name-box">
    <s-header name="实名认证"/>
    <div class="main">
      <p style="font-size: 16px;margin-top: 30px;">拍摄/上传你的二代身份证</p>
      <div style="display: flex; margin-top: 20px; border: 2px dashed #DCE0EB;width: 172px; height: 169px;">
<!--        <input  type="file" ref="frontRef" v-if="false" accept="image/*" @change="changeFile">-->
        <van-uploader style="margin: auto"  capture="camera" v-if="!front" accept="image/*" :max-size="2 * 1024 * 1024" @oversize="onOversize" :after-read="afterFrontRead" />
        <img :src="front" style="margin: auto;" alt="" v-if="front">
      </div>
      <p class="idCardBtn">
        <span style="margin: auto;font-size: 14px;color: #06B48D;">身份证正面</span>
      </p>
      <div style="display:flex;border: 2px dashed #DCE0EB;width: 172px; height: 169px;">
        <van-uploader style="margin: auto"  capture="camera" v-if="!back" accept="image/*" :max-size="2 * 1024 * 1024" @oversize="onOversize" :after-read="afterBackRead" />
        <img :src="back" style="margin: auto;" alt="" v-if="back">
      </div>

      <p class="idCardBtn">
        <span style="margin: auto;font-size: 14px;color: #06B48D;">身份证反面</span>
      </p>      <!--      <p style="font-size: 13px;color: #999;margin-top: 10px;">-->
      <!--        <span></span>-->
      <!--        <span style="margin-left: 10px;"></span>-->
      <!--      </p>-->

    </div>
    <div class="footer">
      <div style="display: flex;height:40px;background: #06B48D;" @click="submit">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {reactive, ref, toRefs} from "vue";
import {useRouter} from "vue-router";
import {Toast} from "vant";

export default {
  name: "NameVerify",
  props: {},
  components: {
    sHeader
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      front: '',
      back: '',

    })
    const goBack = () => {
      router.go(-1)
    }
    const afterFrontRead=(file)=>{
      // 此时可以自行将文件上传至服务器
      const {content} =file;
      state.front = content;
    }
    const afterBackRead=(file)=>{
      // 此时可以自行将文件上传至服务器
      const {content} =file;
      state.back = content;
    }
    const onOversize=(file)=> {
      console.log(file);
      Toast('文件大小不能超过 500kb');
    }
    const submit = () => {
        goBack();
    }
    const goTo = (r, query) => {
      router.push({path: r, query: query || {}})
    }
    return {
      ...toRefs(state),
      submit,
      goTo,
      goBack,
      afterFrontRead,
      afterBackRead,
      onOversize,
    }
  }
}
</script>

<style scoped>
.name-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}

.main {
  display: flex;
  flex: 1;
  background: #FEFFFF;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
}

.idCardBtn {
  margin-top: 15px;
  margin-bottom: 15px;
  /*width: 150px;*/
  /*height: 40px;*/
  display: flex;
  /*border: 1px solid #E5E5E5;*/
  /*border-radius: 20px;*/
}
</style>
