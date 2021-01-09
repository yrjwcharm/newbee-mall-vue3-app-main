<template>
  <div class="share-box">
    <sHeader name="团队码"/>
    <div class="main">
      <div style=" background: #FFFFFF; display:flex;flex-direction: column;align-items: center;padding-top: 17px; padding-bottom: 65px;">
        <p style="font-size: 14px;color: #999;">分享团队码，成员复制后打开佑健康快速加入。</p>
        <p style="margin-top:13px; width:167px;height:52px;display: flex; background: #F5F6F7;border-radius: 5px;">
          <span  style="font-size: 20px;color: #333333;letter-spacing: 1px;margin: auto;">{{teamCode}}</span>
        </p>
        <p  :data-clipboard-text="teamCode" class="btn" style=" margin-top: 13px; width:79px;height:32px;display: flex; background: #06B48D;
border-radius: 5px;" @click="copy">
          <span style="font-size: 14px;color: #FEFFFF;margin: auto;">复制</span>

        </p>

      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader';
import ClipboardJS from "clipboard";
import {nextTick, reactive,toRefs} from "vue";
import { Toast } from 'vant'
export default {
  name: "ShareTeamCode",
  components: {
    sHeader
  },

  setup(){
    const state = reactive({
      teamCode:'XNRE YQJL',
    })
    const copy=()=> {
      // 一些和DOM有关的东西
      let clipboard = new ClipboardJS(".btn");
      console.log(222,clipboard);
      clipboard.on("success", e => {
        //复制成功
        Toast('复制成功');
        console.log(333,e);
        // Toast('复制成功');
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        console.log("该浏览器不支持自动复制");
        // 释放内存
        clipboard.destroy();
      });
    }

      return{
      ...toRefs(state),
      copy
    }
  }
}
</script>

<style scoped>
.share-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}
</style>
