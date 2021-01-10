<template>
  <div class="apply-box">
   <sHeader name="提交申请"/>
    <div class="main">
        <div style="padding: 29px 25px 20px 25px; border-radius: 10px; background: #FEFFFF; margin-top:10px;">
          <p style="font-size: 18px;color: #333333;">中科软科技股份有限公司</p>
          <div style="display: flex; margin-top: 27px; padding-bottom: 8px; border-bottom: 1px solid #EEEEEE;">
            <div>
              <p class="site-enterprise" style=" margin-bottom: 10px;">
                <span style="position:relative;top:2px; font-size: 14px;color: #E02020;">*</span>
                <span style="font-size: 14px;color: #2A2A2A;">真实姓名</span>
              </p>
              <input ref="nameRef" v-model="name" type="text"
                     style="padding-left: 0; font-size: 16px;color: #333;  background: transparent "  placeholder="请输入真实姓名">
            </div>
          </div> <div style="display: flex; margin-top: 27px; padding-bottom: 8px; border-bottom: 1px solid #EEEEEE;">
            <div>
              <p class="site-enterprise" style=" margin-bottom: 10px;">
                <span style="position:relative;top:2px; font-size: 14px;color: #E02020;">*</span>
                <span style="font-size: 14px;color: #2A2A2A;">所属部门</span>
              </p>
              <div style="display:flex;flex:1; flex-direction: row;align-items: center">
              <input  readonly v-model="dept" type="text"

                     style="display: flex; flex:1; background: red; padding-left: 0;font-size: 16px;color: #333;"  placeholder="请选择部门">
                <img src="@/assets/enterprise/forward.svg" style="transform: rotate(90deg); width: 9px;height:17px;">
              </div>
            </div>
          </div> <div style="display: flex; margin-top: 27px; padding-bottom: 8px; border-bottom: 1px solid #EEEEEE;">
            <div>
              <p class="site-enterprise" style=" margin-bottom: 10px;">
                <span style="position:relative;top:2px; font-size: 14px;color: #E02020;">*</span>
                <span style="font-size: 14px;color: #2A2A2A;">申请理由</span>
              </p>
              <input ref="nameRef" v-model="reason" type="text"
                     style="padding-left: 0; font-size: 16px;color: #333;  background: transparent "  placeholder="请输入申请理由">
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
  name: "submitApply",
  props:{

  },
  components:{
    sHeader
  },
  setup(){
    const router = useRouter()
    const state = reactive({
          name:'',
          reason:'',
          dept:'',
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

<style scoped lang="less">
  .apply-box{
    display: flex;
    flex-direction: column;
    flex:1;
    background: #f3f7f7;
  }
  .main{
    padding-right: 10px;
    padding-left: 10px;
  }
</style>
