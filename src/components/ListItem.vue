<template>
  <div @click="onClick" style="display: flex; justify-content:space-between;align-items: center; margin-top: 10px; padding-bottom: 10px; border-bottom: 1px solid #EEEEEE;">
    <div>
      <p class="site-enterprise" style="margin-bottom: 5px;">{{label}}</p>
      <p style="font-size: 18px;
             color: #999999;">{{value}}</p>
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
    value:{
      type:String,
      default: '',
    }
  }
}
</script>

<style scoped>

</style>
