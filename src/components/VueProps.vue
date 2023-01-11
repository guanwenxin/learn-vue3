<script>
import { ref, onMounted } from "vue";
import router from '../router/index'
export default {
  name: "VueProps",
  props: ["lang"], // 1.声明
  setup(props, context) {
    // 通过setup prop获取到
    console.log(props.lang);
    const dom = ref(null);
    onMounted(() => {
      console.log("dom", dom.value);
    });
    function sendEvent() {
      context.emit("context-type", { type: "vue3" });
    }
    function goToAbout() {
      router.push('/about')
    }
    return {
      sendEvent,
      dom,
      goToAbout,
    };
  },
};
</script>

<template>
  <n-button ref="dom1" @click="sendEvent">点击通过emit发送事件给父级</n-button>
  <n-button @click="goToAbout">跳转路由</n-button>
  {{ lang }}
</template>