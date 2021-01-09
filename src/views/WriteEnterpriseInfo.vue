<template>
  <div class="write-box">
    <sHeader name="填写企业信息"/>
    <div class="main">
      <div style="display: flex;height:36px;line-height: 36px; ">
        <span style="margin-left: 12px;font-size: 13px;color: #999999;">
          请选择证件类型
        </span>
      </div>
      <div v-for="(item,index) in  listItems" :key="index">
        <listBlock :title="item.title"
                   :icon="item.checked?require('@/assets/enterprise/checked.svg'):require('@/assets/enterprise/unchecked.svg')"
                   :desc="item.desc" :myClick="()=>itemClick(item)"/>
      </div>
      <div
          style="background: #FEFFFF;display: flex;padding-top: 18px; padding-bottom:22px; flex-direction: column;justify-content: center;align-items: center">
        <div style="display: flex; border: 2px dashed #DCE0EB;width: 172px; height: 169px;">
          <!--        <input  type="file" ref="frontRef" v-if="false" accept="image/*" @change="changeFile">-->
          <van-uploader style="margin: auto" capture="camera" v-if="!url" accept="image/*" :max-size="2 * 1024 * 1024"
                        @oversize="onOversize" :after-read="afterRead"/>
          <img :src="url" style="margin: auto;" alt="" v-if="url">
        </div>
        <p style="margin-top:19px;font-size: 12px;color: #999999;text-align: center;">证件必须完整清晰且在有效期内，大小不超过 5 MB。
        </p>
        <p style=" font-size: 12px;color: #999999;text-align: center;">（若已办理三证合一，请上传新的营业执照）</p>
        <p class="idCardBtn">
          <span style="margin: auto;font-size: 14px;color: #06B48D;">拍照/上传照片</span>
        </p>
      </div>
      <div style="margin-top: 10px;">
        <van-field
            v-model="enterprise_name"
            label="企业名称"
            placeholder="填写证件上一致的名称"
            input-align="right"
        />
        <van-field
            v-model="creditCode"
            label="统一信用代码"
            placeholder="填写和证件上的一致的号码"
            input-align="right"
        />
        <van-field
            readonly
            clickable
            label="城市"
            v-model="area"
            placeholder="选择城市"
            input-align="right"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" round position="bottom">
          <van-area title="标题" :area-list="areaList" @cancel="showPicker = false"
                    @confirm="onConfirm"/>
        </van-popup>
        <div style="display: flex;height:35px;line-height: 35px; ">
        <span style="margin-left: 12px;font-size: 13px;color: #999999;">
          请填写和营业执照，组织机构代码证等一致的省市
        </span>
        </div>
        <van-field
            v-model="legalPerson"
            label="法定代表人"
            placeholder="请填写法定代表人姓名"
            input-align="right"
        />
      </div>
    </div>
    <div class="footer">
      <div style="display: flex;height:40px;background: #06B48D;" @click="submit">
        <span style="margin: auto;font-size: 16px;color: #FFFFFF;">提交</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import listBlock from '@/components/ListBlock'
import {reactive, toRefs} from "vue";
import {Toast} from 'vant'

const {useRouter} = require("vue-router");

const {onMounted} = require("vue");
const {tdist} = require("@/common/js/utils");
export default {
  name: "WriteEnterpriseInfo",
  components: {
    sHeader,
    listBlock,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      listItems: [{
        title: '多证合一营业执照',
        desc: '原“注册号”字样，调整为18位“统一社会信用码”',
        checked: true
      }, {
        title: '普通营业执照',
        desc: '仍然标识为15位的“注册号”',
        checked: false
      }],
      url: '',
      enterprise_name: '',
      creditCode: '',
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
      area: '',
      coding: '',
      showPicker: false,
      legalPerson: '',
    })
    onMounted(async () => {
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
      const [province, city, district] = value;
      state.area = province.name + '>' + city.name + '>' + district.name;
      state.coding = province.code + ',' + city.code + ',' + district.code;
      state.showPicker = false;
    };
    const goBack = () => {
      router.go(-1)
    }
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      const {content} = file;
      state.url = content;
    }
    const onOversize = (file) => {
      console.log(file);
      Toast('文件大小不能超过 500kb');
    }
    const itemClick = (item) => {

      state.listItems.map(_item => {
        _item.checked = false;
        if (JSON.stringify(item) === JSON.stringify(_item)) {
          _item.checked = true;
        }
      })
    }
    const submit=()=>{
      goBack();
    }
    return {
      ...toRefs(state),
      itemClick,
      onConfirm,
      afterRead,
      onOversize,
      submit,
    }

  }

}
</script>

<style scoped>
.write-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
}
.main{
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f3f7f7;
  padding-bottom: 50px;
}
.idCardBtn {
  margin-top: 13px;
  width: 150px;
  height: 40px;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 20px;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;

}
</style>
