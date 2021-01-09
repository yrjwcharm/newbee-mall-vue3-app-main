<template>
  <div class="status-box">
    <sHeader name="企业认证"/>
    <div v-if="auditStatus===1" style="margin-top: 54px;display: flex; flex-direction: column; align-items: center">
      <img src="@/assets/enterprise/audit.svg" style="width: 39px;height:40px;" alt="">
      <p style="margin-top: 8px; font-size: 18px;color: #333333;">审核中…</p>
      <p style="margin-top:8px; font-size: 16px;color: #333333;">提交成功，请等待管理员审核！</p>
      <p style="margin-top:8px; font-size: 12px;color: #999999;">预计 2 个工作日内可完成审核。</p>
    </div>
    <div v-if="auditStatus===2" style="margin-top: 54px;display: flex; flex-direction: column; align-items: center">
      <img src="@/assets/enterprise/checked.svg" style="width: 40px;height:40px;" alt="">
      <p style="margin-top: 8px; font-size: 18px;color: #333333;">审核完成</p>
      <p style="margin-top:8px; font-size: 16px;color: #333333;">恭喜您，企业认证通过</p>
    </div>
    <div v-if="auditStatus===3" style="margin-top: 54px;display: flex; flex-direction: column; align-items: center">
      <img src="@/assets/enterprise/error.svg" style="width: 40px;height:40px;" alt="">
      <p style="margin-top: 8px; font-size: 18px;color: #333333;">审核失败</p>
      <p style="margin-top:8px; font-size: 16px;color: #333333;">很抱歉，您的企业认证失败</p>
      <p style="margin-top:8px; font-size: 12px;color: #999999;">失败原因：在职证明不清晰</p>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {reactive} from "vue";

const {toRefs} = require("vue");

export default {
  name: "VerifyStatus",
  components: {
    sHeader
  },
  setup(){
    const state =reactive({
      auditStatus:3
    })
    return{
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
.status-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #FEFFFF;
}

</style>
