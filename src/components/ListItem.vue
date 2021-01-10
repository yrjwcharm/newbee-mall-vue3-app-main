<template>
  <div @click="onClick" style="display: flex; justify-content:space-between;align-items: center; margin-top: 10px; padding-bottom: 10px; border-bottom: 1px solid #EEEEEE;">
    <div>
      <p class="site-enterprise" style="margin-bottom: 5px;">{{label}}</p>
      <input ref="nameRef" readonly  type="text" :value="value"
             style="padding-left: 0;font-size: 16px;color: #333;  background: transparent "  :placeholder="placeholder">
    </div>
    <img src="@/assets/enterprise/forward.svg" style="width: 9px;height:17px;">
  </div>
</template>

<script>
export default {
name: "ListItem",
  props:{
    label:{
      type:String,
      default:'',
    },
    onClick:{
      type:Function,
      default: () => {
        return Function;
      },
    },
    placeholder:{
      type:String,
      default:'',
    },
    value:{
      type:String,
      default: '',
    }
  }
}
</script>

<style scoped>

</style>
