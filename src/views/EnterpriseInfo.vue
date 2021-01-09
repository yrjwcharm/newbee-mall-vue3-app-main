<template>
  <div class="info-box">
    <sHeader name="企业信息"/>
    <div class="main">
      <div class="main_header">
        <div style="display: flex;align-items: center">
          <img src="@/assets/enterprise/enterprise.png" alt="">
          <div style="margin-left: 9px;">
            <span style="font-size: 18px;color: #333333;">北京中科软科技有限公司</span>
            <div class="certification_bg" style="margin-top: 6px;">
              <span style="position: relative;left:20px; font-size: 11px;color: #FFFFFF;">未认证</span>
            </div>
            <p style="margin-top: 14px;">
              <span style="font-size: 13px;">主管理员：</span>
              <span style="font-size: 13px;color: #060000;">王琰龙</span>
            </p>
          </div>
        </div>
      </div>
      <span style="
                margin-top: 10px;
                margin-bottom: 6px;
                margin-left: 10px;
                font-size: 13px;
                color: #333333;"
      >
          我在该企业的信息
        </span>
      <list label="姓名" value="闫瑞锋"/>
      <list label="电话" value="18311410379" :border=false />
      <div style="background: #fff;margin-top: 10px; padding-left: 10px;padding-right: 10px;">
        <div style="display: flex;flex-direction: column;justify-content: center; height:66px;border-bottom: 1px solid #eee;">
          <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-between">
            <div>
              <p style="font-size: 16px;color: #333333;">添加成员</p>
              <p style="font-size: 14px;color: #999999;">添加成员加入企业/团队</p>
            </div>
            <img src="@/assets/enterprise/forward.svg" alt="" style="width: 9px;height: 17px;">
          </div>
        </div>
      </div>
      <list label="企业认证" value="审核中" :border=false :isArrow=true color="#06B48D" :myClick="goToEnterpriseVerify"/>
      <div @click="exitEnterprise" style="margin-top: 10px; background: #FEFFFF;display: flex;height: 47px;">
        <span style="margin: auto;font-size: 16px;color: #F42424;">解散企业</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader"
import list from "@/components/List"
import {reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
import {Dialog} from "vant";

export default {
  name: "EnterpriseInfo",
  props: {},
  components: {
    sHeader,
    list,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      username: '王琰龙',
      phone: '18311410379',
    })
    const goToEnterpriseVerify =()=>{
      router.push('/verify',{})
    }
    const exitEnterprise=()=>{
        Dialog.confirm({
          title: '确认退出企业吗？',
        }).then(() => {

        }).catch(() => {
          // on cancel
        });

    }
    return {
      ...toRefs(state),
      goToEnterpriseVerify,
      exitEnterprise
    }

  }

}
</script>

<style scoped>
.info-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}

.main {
  display: flex;
  flex-direction: column;
}

.main_header {
  margin-top: 11px;
  padding-left: 10px;
  display: flex;
  height: 103px;
  background: #FEFFFF;
}

.certification_bg {
  /*line-height:60px;*/
  width: 60px;
  height: 18px;
  background: url("../assets/enterprise/certification.png") no-repeat;
  background-size: cover;
}
</style>
