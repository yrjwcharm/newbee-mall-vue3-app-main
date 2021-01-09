<template>
  <div class="verify-box">
    <s-header name="企业认证"/>
    <div class="main">
     <step title="申请人实名认证" desc="需要身份证" :step="step1"  :stepNum=1 :myClick="()=>goTo('/name-verify',{})"/>
      <div style="background: #E5E5E5;width:1px;height: 20px;margin-left: 11.6618%" />
      <step title="填写企业信息" desc="需要营业执照" :step="step2" :stepNum=2 :myClick="()=>goTo('/write-enterprise-info',{})"/>
      <div style="background: #E5E5E5;width:1px;height: 20px;margin-left: 11.6618%"/>
      <step title="上传在职证明" desc="需要公章" :step="step3" :stepNum=3  :myClick="()=>goTo('/upload-incumbency-certification',{})"/>
    </div>
    <div class="footer">
        <div style="display: flex;height:50px;background: #06B48D;" @click="submit">
          <span style="margin: auto;font-size: 16px;color: #FFFFFF;">提交审核</span>
        </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import step from '@/components/Step'
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
export default {
  name: "EnterpriseVerify",
  components:{
    sHeader,
    step
  },
  setup(){
    const router = useRouter();
    const goTo = (r, query) => {
      router.push({ path: r, query: query || {} })
    }
    const state = reactive({
      step1:false,
      step2:false,
      step3:false,
    })
    const submit =()=>{
      goTo('/verify-status',{})
    }

    return{
      ...toRefs(state),
      goTo,
      submit
    }
  }
}
</script>

<style scoped>
  .verify-box{
    display: flex;
    flex-direction: column;
    flex:1;
    background: #f3f7f7;
  }
  .main{
    padding: 26px 16px 0 16px;
    display: flex;
    flex-direction: column;
    flex:1;
  }
  .footer{
    display: flex;
    flex-direction: column;
    flex:1;
    justify-content: flex-end;
  }

</style>
