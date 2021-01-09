<template>
  <div  style="background: #FEFFFF;" @click="myClick">
    <div style="
       height: 65px;display: flex;
       flex-direction: column;
       margin-right: 10px;
       margin-left: 10px;
       border-bottom: 1px solid #eee;
       justify-content: center"
    >
      <div style="
        margin-left: 10px;margin-right: 10px;
        display: flex;flex-direction: row;
        align-items: center;">
        <div style="display: flex;flex-direction: row;align-items: center">
          <img :src="icon" alt="" style="width: 20px;height:20px;">
          <div style="margin-left:10px;">
            <p style="font-size: 16px;color: #333333;">{{ title }}</p>
            <p style=" margin-top: 3px; font-size: 12px;color: #999999;">{{ desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListBlock",
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: '',
    },

    desc: {
      type: String,
      default: '',
    },
    myClick: {
      type: Function,
      default: () => {
        return Function
      }
    }
  }
}
</script>

<style scoped>

</style>
