import { ref, computed } from "vue";

const msg = ref("这是一个外部的响应式变量");

function printMsg() {
  console.log(msg.value);
}

// 创建计算属性
const noteMsg = computed(() => {
  return `这是computed计算的得到的${msg.value}`;
});

setTimeout(() => {
  msg.value = "我实在一个单独的js文件里面发生的变化";
}, 5000);

export { msg, printMsg, noteMsg };
