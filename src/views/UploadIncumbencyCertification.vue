<template>
  <div class="upload-box">
    <s-header name="上传在职证明"/>
    <div class="main">
      <div style="display: flex; margin-top: 54px; border: 2px dashed #DCE0EB;width: 172px; height: 169px;">
        <!--        <input  type="file" ref="frontRef" v-if="false" accept="image/*" @change="changeFile">-->
        <van-uploader style="margin: auto" capture="camera" v-if="!url" accept="image/*" :max-size="2 * 1024 * 1024"
                      @oversize="onOversize" :after-read="afterRead"/>
        <img :src="url" style="margin: auto;" alt="" v-if="url">
      </div>
      <p class="idCardBtn">
        <span style="margin: auto;font-size: 14px;color: #06B48D;">拍照/上传照片</span>
      </p>
      <div style="width: 76.26666%;height: 68px; margin-bottom:34px;">
        <p style="line-height:17px;font-size: 12px;color: #999;">
          请参考以上在职证明，并手写仅用于佑健康认证字</p>
        <p style="line-height:17px;font-size: 12px;color: #999;">样，加盖企业公章， 所有信息需清晰可见，内容真实
          有效。</p>
        <p style="line-height:17px;font-size: 12px;color: #999;">信息需清晰可见，内容真实有效，不得做任何修改。
        </p>
      </div>
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
  name: "UploadIncumbencyCertification",
  props: {},
  components: {
    sHeader
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      url: '',
    })
    const goBack = () => {
      router.go(-1)
    }
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      const {content} = file;
      state.url = content;
    }
    const onOversize = (file) => {
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
      afterRead,
      onOversize,
    }
  }
}
</script>

<style scoped>
.upload-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}

.main {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: #FEFFFF;
}

.idCardBtn {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 150px;
  height: 40px;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 20px;
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;

}
</style>
