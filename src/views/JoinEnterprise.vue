<template>
  <div class="join-box">
    <sHeader name="假如你的企业/组织/团队"/>
    <div class="main">
      <div style="height: 55px;line-height: 55px;">
        <span style="margin-left:10px;font-size: 20px;color: #333333;">加入你的企业/组织/团队</span>
      </div>
      <div @click="()=>goTo('/team-code-join',{})" style="padding-left: 10px;padding-right: 10px;">
        <div style="display: flex;height:80px;background: #fff;flex-direction: column;justify-content: center ">
          <div style="display: flex;flex-direction: row;align-items: center;padding-left: 15px;">
            <img src="@/assets/enterprise/team.svg" alt="" style=" width: 49px;height: 49px;">
            <span style="margin-left: 11px;font-size: 18px;color: #333333;">通过团队码加入</span>
          </div>
        </div>
        <div style=" margin-top:15px; display: flex;height:80px;background: #fff;flex-direction: column;justify-content: center ">
          <div style="display: flex;flex-direction: row;align-items: center;padding-left: 15px;">
            <img src="@/assets/enterprise/team.svg" alt="" style="width: 49px;height: 49px;">
            <span style=" margin-left: 11px; font-size: 18px;color: #333333;">面对面扫码加入</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {reactive,toRefs,onMounted} from "vue";
import {useRouter} from 'vue-router'
export default {
  name: "JoinEnterprise",
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
      router.go(-1)
    }

    const goTo = (r, query) => {
      router.push({ path: r, query: query || {} })
    }
    return{
      ...toRefs(state),
      goTo,
      goBack
    }

  }
}
</script>

<style scoped>
.join-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}
</style>
