<template>
  <div class="add-box">
    <sHeader name="添加成员"/>
    <div class="main">
      <div style="height: 35px;line-height: 35px;">
        <span style=" margin-left:12px; font-size: 13px;color: #333333;">邀请成员加入</span>
      </div>
      <listRow :img="require('@/assets/enterprise/wx.svg')" title="微信邀请" :forward="require('@/assets/enterprise/forward.svg')"/>
      <listRow :img="require('@/assets/enterprise/erweima.svg')" title="团队二维码邀请" :forward="require('@/assets/enterprise/forward.svg')"/>
      <listRow  :onClick="()=>goTo('/share-team-code',{})" :img="require('@/assets/enterprise/team_id.svg')" title="查看团队码" :forward="require('@/assets/enterprise/forward.svg')"/>

    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import listRow from '@/components/ListRow'
import { useRouter } from 'vue-router'
export default {
  name: "AddMember",
  components:{
    sHeader,
    listRow
  },
  setup(){
    const router = useRouter();
    const goBack = () => {
      router.go(-1)
    }

    const goTo = (r, query) => {
      router.push({ path: r, query: query || {} })
    }
    return{
      goTo,
      goBack
    }


  }
}
</script>

<style scoped>
  .add-box{
    display: flex;
    flex-direction: column;
    flex:1;
    background: #f3f7f7;
  }
</style>
