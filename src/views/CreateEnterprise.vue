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
                 style="padding-left: 0; font-size: 16px;color: #333; " placeholder="请输入企业名称">
        </div>
      </div>
      <ListItem placeholder="请选择" label="所属行业" :value="industry" :onClick="()=>goTo('/selectIndustry',{})"/>
      <ListItem placeholder="请选择" label="人员规模" :value="scale" :onClick="showScaleListPicker"/>
      <ListItem placeholder="请选择" label="职务" :value="profession" :onClick="showProfessionListPicker"/>
      <ListItem placeholder="请选择" label="所在地区" :value="area" :onClick="showAreaListPicker"/>

      <van-popup v-model:show="showScalePicker" round position="bottom">
        <van-picker
            :columns="persons"
            @cancel="showScalePicker = false"
            @confirm="onConfirm"
        />
      </van-popup>
      <van-popup v-model:show="showProfessionPicker" round position="bottom">
        <van-picker
            :columns="professions"
            @cancel="showProfessionPicker = false"
            @confirm="confirm"
        />
      </van-popup>
      <van-popup v-model:show="showAreaPicker" round position="bottom">
      <van-area title="标题" :area-list="areaList" @cancel="showAreaPicker = false"
                @confirm="areaConfirm"/>
      </van-popup>
    </div>
    <div class="footer">
      <div style="display: flex;height:40px;background: #06B48D;" @click="save">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">保存</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import listRow from '@/components/ListRow'
import {reactive, onMounted, ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import ListItem from "@/components/ListItem";

const {tdist} = require("@/common/js/utils");

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
    const persons = ['1-9', '10-20', '21-50', '51-100', '101-200', '201-500', '501-2000','>2000'];
    const professions =['法人/CEO/负责人','人事主管','行政主管','IT主管','财务主管','市场主管','运营主管','其他主管','员工','其他'];
    const state = reactive({
      industry: '',
      scale:'',
      profession:'',
      area:'',
      showScalePicker: false,
      showProfessionPicker:false,
      showAreaPicker:false,
      coding:'',
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
    });
    onMounted(async ()=>{
      // 省市区列表构造
      let _province_list = {}
      let _city_list = {}
      let _county_list = {}
      tdist.getLev1().forEach(p => {
        _province_list[p.id] = p.text
        tdist.getLev2(p.id).forEach(c => {
          _city_list[c.id] = c.text
          tdist.getLev3(c.id).forEach(q => _county_list[q.id] = q.text)
        })
      })
      state.areaList.province_list = _province_list
      state.areaList.city_list = _city_list
      state.areaList.county_list = _county_list
    })

    const onConfirm = (value) => {
      state.scale = value;
      state.showScalePicker = false;
    };
    const showScaleListPicker = ()=>{
      state.showScalePicker =true;
    }
    const confirm = (value) => {
      state.profession = value;
      state.showProfessionPicker = false;
    };
    const showProfessionListPicker = ()=>{
      state.showProfessionPicker = true;
    }
    const areaConfirm =(value)=>{
      const [province,city,district] =value;
      state.area = province.name+' '+city.name+' '+district.name;
      state.coding = province.code+','+city.code+','+district.code;
      console.log(222,state.coding);
      state.showAreaPicker  = false;
    }
    const showAreaListPicker =()=>{
      state.showAreaPicker =true;
    }
    const save =()=>{
      goTo('/enterpriseInfo',{})
    }

    return {
      ...toRefs(state),
      goTo,
      showProfessionListPicker,
      showScaleListPicker,
      persons,
      professions,
      onConfirm,
      confirm,
      areaConfirm,
      showAreaListPicker,
      save,
    };
  }
}
</script>

<style scoped lang="less">
.create-box{
  display: flex;
  flex-direction: column;
  flex:1
}
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
  display: flex;
  flex:1;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
}

.site-enterprise {
  font-size: 14px;
  color: #333333;
}
.footer{
  display: flex;
  flex-direction: column;
  flex:1;
  justify-content: flex-end;
}

</style>
