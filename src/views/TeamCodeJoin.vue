<template>
  <div class="join-box">
    <sHeader name="团队码加入"/>
    <div class="main">
      <p style="font-size: 20px;color: #333333; margin-top: 22px; margin-left: 10px;">通过团队码加入</p>
      <p style=" margin-top: 13px; padding-left:10px;padding-right: 10px;font-size: 14px;color: #333333;line-height: 21px;">
        团队码是团队的唯一标示，请向管理员或者已经在团队中的成员索要团队码
      </p>
      <p style="display:flex; margin-top: 70px; height:36px;" class="border">
        <input  type="text" v-model="teamCode" style=" text-align: center; font-size: 20px;color: #333333;margin:auto;">
<!--        <span style="font-size: 20px;color: #333333;margin:auto;letter-spacing: 8.7px;">{{teamCode}}</span>-->
      </p>
    </div>
    <div @click="goTo('/submit-apply',{})" class="footer">
      <div style="display: flex;height:50px;background: #06B48D;" @click="submit">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">加入团队</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {reactive,toRefs,onMounted} from "vue";
import {useRouter} from 'vue-router'
export default {
  name: "TeamCodeJoin",
  components: {
    sHeader
  },
  setup(){
    const router = useRouter()
    const state = reactive({
        teamCode:'XNRE YQJL'
    })

    onMounted(async () => {

    })

    const goBack = () => {
      router.go(-1)
    }

    const goTo = (r, query) => {
      router.push({path: r, query: query || {}})
    }
    const submit =()=>{

    }
    return{
      ...toRefs(state),
      submit,
      goTo,
      goBack
    }
  }
}
</script>

<style scoped lang="less">
@import "../common/style/mixin";

.join-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fff;
}
.main{
  display: flex;
  flex-direction: column;
  flex:1
}
.footer{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
}
.border {
  .border-1px(#eee);
}
</style>
