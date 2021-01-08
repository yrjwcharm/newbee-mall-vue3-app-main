<template>
  <div class="create-box">
    <s-header :name="'创建企业'" :noback="true"></s-header>
    <div class="main">
      <p class="title">请创建企业</p>
      <p class="desc">你的信息将被严格保密</p>
      <div style="display: flex; margin-top: 34px; padding-bottom: 10px; border-bottom: 1px solid #EEEEEE;">
        <div>
          <p class="site-enterprise" style="margin-bottom: 5px;">所在企业</p>
          <input ref="nameRef" type="text"
                 style="padding-left: 0; font-size: 18px;color: #999999; " placeholder="请输入企业名称">
        </div>
      </div>
      <ListItem label="所属行业" value="请选择" :onClick="()=>goTo('/selectIndustry',{})"/>
      <ListItem label="人员规模" value="请选择" />
      <ListItem label="职务" value="请选择"/>
      <ListItem label="所在地区" value="中国 北京  海淀"/>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import listRow from '@/components/ListRow'
import {reactive, onMounted, ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import ListItem from "@/components/ListItem";

const {Toast,} = require("vant");

export default {
  name: "CreateEnterprise",
  components: {
    ListItem,
    sHeader
  },
  props: {
    _name: {},
  },
  setup() {
    const router = useRouter()
    const goTo = (r, query) => {
      router.push({ path: r, query: query || {} })
    }
    return {
      goTo
    };
  }
}
</script>

<style scoped lang="less">
.title {
  font-size: 24px;
  color: #333333;
  margin-top: 45px;
}

.desc {
  font-size: 12px;
  color: #999999;
}

.main {
  padding-left: 10px;
  padding-right: 10px;
}

.site-enterprise {
  font-size: 14px;
  color: #333333;
}

</style>
