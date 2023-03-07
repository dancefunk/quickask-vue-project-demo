<template>
  <div>
    <h1>{{ msg }}</h1>

    <van-button type="success" @click="demo">发送接口请求</van-button>

    <van-button type="primary">主要按钮</van-button>

    <van-tag type="success">标签</van-tag>

    <van-switch v-model="check" />

    <router-link to="/user/base/index"
      >路由跳转 - 跳转到会员中心界面</router-link
    >

    <van-area title="标题" :area-list="areaList" />
  </div>
</template>

<script>
//引入vantUI框架的地区数据
import { areaList } from '@vant/area-data';

export default {
  async created() {
    //设置cookie
    this.$cookies.set('LoginUser', '用户信息');

    //获取cookie
    console.log(this.$cookies.get('LoginUser'));

    //删除
    this.$cookies.remove('LoginUser');

    //调用自定义插件
    console.log(this.$demo());
  },
  data() {
    return {
      msg: 'Hello Vue 3 + Vite',
      check: true,
      areaList,
    };
  },
  methods: {
    demo() {
      //接口请求
      var result = await this.$api.ProductIndex();
      console.log(result);
    },
  },
};
</script>
