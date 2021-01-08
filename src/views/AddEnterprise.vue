<template>
  <div class="add-box">
    <s-header :name="'添加'" :noback="true"></s-header>
    <div style="margin-top: 20px;">
      <listRow :onClick="()=>goTo('/create',{})"  :img="require('@/assets/enterprise/create.png')" title="创建企业、组织、团队" :forward="require('@/assets/enterprise/forward.svg')"/>
      <listRow :img="require('@/assets/enterprise/join_in.png')" title="加入企业/组织/团队" :forward="require('@/assets/enterprise/forward.svg')"/>
      <listRow :img="require('@/assets/enterprise/member.png')" title="添加成员" :forward="require('@/assets/enterprise/forward.svg')"/>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import listRow from '@/components/ListRow'
import { reactive, onMounted, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: "AddEnterprise",
  components: {
    sHeader,
    listRow,
  },
  setup(){
    const router = useRouter()
    const state = reactive({
      user: {}
    })

    onMounted(async () => {
      // const { data } = await getUserInfo()
      // state.user = data
    })

    const goBack = () => {
      router.go(-1)
    }

    const goTo = (r, query) => {
      router.push({ path: r, query: query || {} })
    }

    return {
      ...toRefs(state),
      goBack,
      goTo
    }
  },
}
</script>

<style scoped>
.add-box {
  flex: 1;
  background: #f3f7f7;
}
</style>
