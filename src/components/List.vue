<template>
  <div style="background: #fff;padding-left: 10px;padding-right: 10px;">
    <div :style="`display: flex;flex-direction: column;justify-content: center; height:45px;border-bottom:${border?'2px':0} solid #eee;`">
      <div style="display:flex;flex-direction: row;align-items: center;justify-content: space-between">
        <p style="font-size: 16px;color: #333333;">{{label}}</p>
        <p style="align-items: center;display: flex;">
        <span :style="`margin-right:${isArrow?'4px':0}; font-size: 16px;color:${color};`">{{value}}</span>
          <img v-if="isArrow" src="@/assets/enterprise/forward.svg" alt="" style="width: 9px;height: 17px;">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props:{
    label:{
      type:String,
      default:'',
    },
    value:{
      type:String,
      default: '',
    },
    isArrow:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'#999999'
    },
    border:{
      type:Boolean,
      default:true
    }

  }

}
</script>

<style scoped>

</style>
