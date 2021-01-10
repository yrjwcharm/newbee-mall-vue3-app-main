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
                   style="padding-left: 0; font-size: 16px;color: #333;  background: transparent "
                   placeholder="请输入真实姓名">
          </div>
        </div>
        <div style="display: flex;flex-direction: column;flex:1; margin-top: 27px; padding-bottom: 8px; border-bottom: 1px solid #EEEEEE;">
          <div style="display: flex;flex-direction: column;">
            <p class="site-enterprise" style=" margin-bottom: 10px;">
              <span style="position:relative;top:2px; font-size: 14px;color: #E02020;">*</span>
              <span style="font-size: 14px;color: #2A2A2A;">所属部门</span>
            </p>
            <div @click="showPicker=true" style="display:flex;flex-direction: row;align-items: center;justify-content: space-between">
              <input readonly v-model="dept" type="text"
                     style="flex:1;display: flex;padding-left: 0;font-size: 16px;color: #333;"
                     placeholder="请选择部门">
              <img src="@/assets/enterprise/forward.svg" style="transform: rotate(90deg); width: 9px;height:17px;">
            </div>
          </div>
        </div>
        <div style="display: flex; margin-top: 27px; padding-bottom: 8px; border-bottom: 1px solid #EEEEEE;">
          <div>
            <p class="site-enterprise" style=" margin-bottom: 10px;">
              <span style="position:relative;top:2px; font-size: 14px;color: #E02020;">*</span>
              <span style="font-size: 14px;color: #2A2A2A;">申请理由</span>
            </p>
            <input ref="nameRef" v-model="reason" type="text"
                   style="padding-left: 0; font-size: 16px;color: #333;  background: transparent "
                   placeholder="请输入申请理由">
          </div>
        </div>
      </div>
      <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
            :columns="deptList"
            @cancel="showPicker = false"
            @confirm="confirm"
        />
      </van-popup>
    </div>
    <div @click="goTo('/apply-status',{})" class="footer">
      <div style="display: flex;height:50px;background: #06B48D;" @click="submit">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">提交申请</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import {reactive, toRefs, onMounted} from "vue";
import {useRouter} from 'vue-router'

export default {
  name: "submitApply",
  props: {},
  components: {
    sHeader
  },
  setup() {
    const deptList =['技术部','财务部','项目部','设计部'];
    const router = useRouter()
    const state = reactive({
      name: '',
      reason: '',
      dept: '',
      showPicker:false
    })

    onMounted(async () => {

    })
    const confirm = (value) => {
      state.dept = value;
      state.showPicker = false;
    };
    const goBack = () => {
      router.go(-1)
    }

    const goTo = (r, query) => {
      router.push({path: r, query: query || {}})
    }
    const submit = () => {

    }
    return {
      ...toRefs(state),
      goTo,
      goBack,
      submit,
      confirm,
      deptList
    }

  }
}
</script>

<style scoped lang="less">
.apply-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}

.main {
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
}
</style>
