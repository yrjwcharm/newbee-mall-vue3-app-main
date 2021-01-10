<template>
  <div class="status-box">
    <sHeader name="''"/>
    <div class="main">
      <div style="background: #FEFFFF;border-radius: 10px; padding-top: 44px;padding-bottom: 28px;">
        <div style="display: flex;flex-direction: column;align-items: center">
          <img src="@/assets/enterprise/checked.svg" style="width: 65px;height:65px;" alt="">
          <p style="margin-top: 8px; font-size: 18px;color: #333333;">申请已提交</p>
          <p style="margin-top:8px; font-size: 14px;color: #999;">正在等待管理员审核</p>
        </div>
        <p style="margin-left: 9px; margin-top:118px; display:flex;flex-direction: row;align-items: center">
          <img src="@/assets/enterprise/message.png" style="width: 12px;height: 12px;" alt="">
          <span style="margin-left: 3px;font-size: 12px;color: #06B48D;">温馨提示</span>
        </p>
        <p style=" margin-top:5px; margin-left: 9px;font-size: 12px;color: #999999;">1. 我们承诺，资质审核时间最长不超过48个小时；</p>
        <p style="margin-left: 9px;font-size: 12px;color: #999999;">2. 审核成功之后，我们将会系统发送一条系统消息通知到您，</p>
        <p style="margin-left: 9px;font-size: 12px;color: #999999;">注意打开系统通知哦～</p>
      </div>
    </div>
    <div  class="footer">
      <div style="display: flex;height:50px;background: #06B48D;" @click="submit">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {reactive, toRefs, onMounted} from "vue";
import {useRouter} from 'vue-router'

export default {
  name: "ApplyStatus",
  components: {
    sHeader
  },
  setup(){
    const router = useRouter()
    const state = reactive({

    })
    onMounted(async () => {

    })

    const goBack = () => {
      router.go(-4)
    }

    const goTo = (r, query) => {
      router.push({path: r, query: query || {}})
    }
    const submit = () => {
      goBack();
    }
    return{
      ...toRefs(state),
      goTo,
      goBack,
      submit
    }

  }
}
</script>

<style scoped lang="less">
.status-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}

.main {
  padding: 11px 10px 0 10px;
  display: flex;
  flex-direction: column;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
}

</style>
