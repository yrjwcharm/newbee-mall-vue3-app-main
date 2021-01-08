<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->

<template>
  <div class="categray">
    <div>
      <s-header :name="'所在行业'"></s-header>
      <div style="display: flex;height: 50px">
        <van-search
            v-model="value"
            shape="round"
            style="flex:1;font-size: 14px; color: #999999;"
            placeholder="请输入搜索关键词"
            input-align="center"
        />
      </div>
      <div class="search-wrap" ref="searchWrap">
        <list-scroll :scroll-data="categoryData" class="nav-side-wrapper">
          <ul class="nav-side">
            <li
                v-for="item in categoryData"
                :key="item.categoryId"
                v-text="item.categoryName"
                :class="{'active' : currentIndex == item.categoryId}"
                @click="selectMenu(item.categoryId)"
            ></li>
          </ul>
        </list-scroll>
        <div class="search-content">
          <list-scroll :scroll-data="categoryData">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <template v-for="(category, index) in categoryData">
                  <div class="swiper-slide" v-if="currentIndex == category.categoryId" :key="index">
                    <!-- <img class="category-main-img" :src="category.mainImgUrl" v-if="category.mainImgUrl"/> -->
                    <div class="category-list" v-for="(products, index) in category.secondLevelCategoryVOS"
                         :key="index">
                      <p class="catogory-title">{{ products.categoryName }}</p>
                      <div class="product-item" v-for="(product, index) in products.thirdLevelCategoryVOS" :key="index"
                           @click="selectProduct(product)">
                        <!--                        <img src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" class="product-img"/>-->
                        <p v-text="product.categoryName"
                           :class="index%2==0?'product-title border-right':'product-title'"></p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </list-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, onMounted, ref, toRefs} from 'vue'
import {useRouter} from 'vue-router'
import sHeader from '@/components/SimpleHeader'
import listScroll from '@/components/ListScroll'
import {getCategory} from "@/service/good";
import {Toast} from 'vant'

export default {
  components: {
    listScroll,
    sHeader,
  },
  setup() {
    const router = useRouter()
    // composition API 获取 refs 的形式
    const searchWrap = ref(null)
    const value = ref('');
    const onSearch = (val) => {
      Toast(val);
    };
    const onCancel = () => {
      Toast('取消');
    };
    const state = reactive({
      categoryData: [
        {
          categoryId: 15,
          categoryLevel: 1,
          categoryName: '互联网/信息技术',
          secondLevelCategoryVOS: [
            {
              categoryId: 17,
              categoryLevel: 2,
              categoryName: "互联网信息技术",
              parentId: 15,
              thirdLevelCategoryVOS: [
                {
                  categoryId: 20,
                  categoryLevel: 3,
                  categoryName: "计算机软件"
                }, {
                  categoryId: 21,
                  categoryLevel: 3,
                  categoryName: "硬件设施服务"
                }, {
                  categoryId: 22,
                  categoryLevel: 3,
                  categoryName: "电子商务"
                }, {
                  categoryId: 23,
                  categoryLevel: 3,
                  categoryName: "游戏"
                }, {
                  categoryId: 24,
                  categoryLevel: 3,
                  categoryName: "企业应用"
                }, {
                  categoryId: 25,
                  categoryLevel: 3,
                  categoryName: "即时通讯"
                }, {
                  categoryId: 26,
                  categoryLevel: 3,
                  categoryName: "英音视频"
                }, {
                  categoryId: 27,
                  categoryLevel: 3,
                  categoryName: "社交网络"
                }, {
                  categoryId: 28,
                  categoryLevel: 3,
                  categoryName: "网络安全"
                }, {
                  categoryId: 29,
                  categoryLevel: 3,
                  categoryName: "软件开发"
                }, {
                  categoryId: 30,
                  categoryLevel: 3,
                  categoryName: "系统集成"
                }, {
                  categoryId: 31,
                  categoryLevel: 3,
                  categoryName: "电信运营服务"
                }, {
                  categoryId: 32,
                  categoryLevel: 3,
                  categoryName: "广播电视传输"
                }, {
                  categoryId: 33,
                  categoryLevel: 3,
                  categoryName: "卫星传输服务"
                }, {
                  categoryId: 34,
                  categoryLevel: 3,
                  categoryName: "信息技术咨询"
                }, {
                  categoryId: 35,
                  categoryLevel: 3,
                  categoryName: "其他软件服务"
                }, {
                  categoryId: 36,
                  categoryLevel: 3,
                  categoryName: "其他互联网"
                },
              ]
            }
          ]
        },
        {
          categoryId: 16, categoryName: '教育行业', categoryLevel: 1,
          secondLevelCategoryVOS: [
            {
              categoryId: 67,
              categoryLevel: 2,
              categoryName: "教育行业",
              parentId: 16,
              thirdLevelCategoryVOS: [
                {
                  categoryId: 76,
                  categoryLevel: 3,
                  categoryName: "学前教育"
                }, {
                  categoryId: 77,
                  categoryLevel: 3,
                  categoryName: "初中等教育"
                }, {
                  categoryId: 78,
                  categoryLevel: 3,
                  categoryName: "中等职业教育"
                }, {
                  categoryId: 79,
                  categoryLevel: 3,
                  categoryName: "高等职业教育"
                }, {
                  categoryId: 80,
                  categoryLevel: 3,
                  categoryName: "高等教育"
                }, {
                  categoryId: 81,
                  categoryLevel: 3,
                  categoryName: "教育培训结构"
                }
              ]
            },
          ]
        },
        {categoryId: 17, categoryName: '制造业', categoryLevel: 1,},
        {categoryId: 18, categoryName: '贸易/批发/零售', categoryLevel: 1,},
        {categoryId: 19, categoryName: '房地产产业', categoryLevel: 1,},
        {categoryId: 20, categoryName: '建筑业', categoryLevel: 1,},
        {categoryId: 21, categoryName: '金融业', categoryLevel: 1,},
        {categoryId: 22, categoryName: '服务业', categoryLevel: 1,},
        {categoryId: 23, categoryName: '运输/物流/仓储', categoryLevel: 1,},
      ],
      currentIndex: 15
    })

    onMounted(async () => {
      // let $screenHeight = document.documentElement.clientHeight
      // console.log('searchWrap.value', searchWrap.value)
      // searchWrap.value.style.height = $screenHeight - 100 + 'px'
      // Toast.loading('加载中...')
      // const {data} = await getCategory()
      // console.log(333, data);
      // Toast.clear()
      // state.categoryData = data
    })

    const goHome = () => {
      router.push({path: 'home'})
    }
    const selectMenu = (index) => {
      state.currentIndex = index
    }
    const selectProduct = (item) => {
      console.log('item', item.categoryId)
      // router.push({ path: '/product-list', query: { categoryId: item.categoryId } })
    }
    return {
      ...toRefs(state),
      goHome,
      selectMenu,
      selectProduct,
      searchWrap,
      value,
    }
  }
}
</script>
<style lang="less" scoped>
@import '../common/style/mixin';

.categray {
  .category-header {
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    .fj();
    .wh(100%, 50px);
    line-height: 50px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 15px;
    color: #656771;
    z-index: 10000;

    &.active {
      background: @primary;
    }

    .icon-left {
      font-size: 25px;
      font-weight: bold;
    }

    .header-search {
      display: flex;
      width: 80%;
      height: 20px;
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: #F7F7F7;
      border-radius: 20px;

      .nbSearch {
        padding: 0 10px 0 20px;
        font-size: 17px;
      }

      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }

    .icon-More {
      font-size: 20px;
    }
  }
}

.search-wrap {
  .fj();
  width: 100%;
  //margin-top: 50px;
  border-top: 2px solid #F6F6F6;

  .nav-side-wrapper {
    width: 30%;
    height: 100%;
    overflow: hidden;

    .nav-side {
      width: 100%;
      .boxSizing();

      li {
        width: 100%;
        height: 63px;
        background: #F5F6F9;
        border-bottom-width: 2px;
        border-bottom-color: #fff;
        border-bottom-style: solid;
        text-align: center;
        line-height: 63px;
        font-size: 14px;
        border-left-width: 0;

        &.active {
          color: #06B48D;
          background: #fff;
          border-left-width: 2px;
          border-left-color: #06B48D;
          border-left-style: solid;
        }
      }
    }
  }

  .search-content {
    width: 70%;
    height: 100%;
    //padding: 0 10px;
    background: #fff;
    .boxSizing();

    .swiper-container {
      width: 100%;

      .swiper-slide {
        width: 100%;

        .category-main-img {
          width: 100%;
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 0;
          width: 100%;

          .catogory-title {
            width: 100%;
            height: 19px;
            padding-left: 10px;
            line-height: 19px;
            font-size: 12px;
            color: #999999;
            background: #F5F6F9;
          }

          .product-item {
            width: 50%;
            text-align: center;
            font-size: 14px;
            margin-top: 12px;
            margin-bottom: 10px;
          }

          .border-right {
            border-right: 1px solid #F5F6F9;
          }
        }
      }
    }
  }
}

.fade-out-enter-active, .fade-out-leave-active {
  // transition: opacity 0.5s;
}

.fade-out-enter, .fade-out-leave-to {
  // opacity: 0;
}
</style>
