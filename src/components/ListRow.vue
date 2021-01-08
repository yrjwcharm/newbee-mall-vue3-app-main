<template>
  <div style="background:#fff; " @click="event">
    <div
        style="display: flex;align-items: center; justify-content: space-between; border-bottom: 1px solid #eee; margin-left: 10px;margin-right: 10px;height: 60px;">
      <p style="display: flex;flex-direction: row;align-items: center">
        <img :src="img" alt="" style="width:18px; height:18px">
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

<style scoped>

</style>
