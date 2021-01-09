<template>
  <div style="background:#fff; " @click="event">
    <div
         :class="isBorder&&'border'" style="display: flex;align-items: center; justify-content: space-between;  margin-left: 10px;margin-right: 10px;height:45px;">
      <p style="display: flex;flex-direction: row;align-items: center">
        <img :src="img" alt="" style="width:20px; height:20px">
        <span style=" margin-left: 10px; font-size: 16px;color: #333333;letter-spacing: 0.36px;">{{ title }}</span>
      </p>
      <img :src="forward" alt="" style="width: 9px;height:17px;">
    </div>
  </div>
</template>

<script>
import {reactive, onMounted, ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: "ListRow",
  props: {
    title: {
      type: String,
      default: ''
    },
    event: {
      type: Function,
      default: () => {
        return Function;
      },
    },
    isBorder:{
      type:Boolean,
      default:true
    },
    img: {
      type: String,
      default: ''
    },
    forward: {
      type: String,
      default: '',
    }
  },
  setup(props) {

  },
  methods: {}
}
</script>

<style scoped lang="less">
@import '../common/style/mixin';
.border{
  .border-1px(#eee);
}
</style>
