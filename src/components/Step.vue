<template>
  <div @click="myClick" style="display: flex;flex-direction: column;justify-content: center; height: 88px;
      background: #fff;
      border-radius: 5px;">
    <div style=" display: flex;align-items: center;padding-left: 23px;">
      <img v-if="step" style="width: 34px;height: 34px;" src="@/assets/enterprise/success.png" alt="" />
      <div v-if="!step" style="display: flex;height:34px;width: 34px;border: 2px solid #999999;border-radius:50%;">
        <span style="margin:auto; font-size: 18px;color: #999999;">{{stepNum}}</span>
      </div>
      <div style="margin-left: 22px;">
        <p style="font-size: 16px;color: #333333;">{{title}}</p>
        <p style="font-size: 12px;color: #999999;">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Step",
  props:{
    myClick:{
      type:Function,
      default: () => {
        return Function;
      },
    },
    step:{
      type:Boolean,
      default:false,
    },
    title:{
      type:String,
      default: '',
    },
    desc:{
      type:String,
      default:'',
    },
    stepNum:{
      type:Number,
      default:1,
    }
  },
  setup(){

    return {
    }

  }
}
</script>

<style scoped>

</style>
