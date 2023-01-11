import { ref, watchEffect, watch } from "vue";

// watchEffect
// 根据回调函数中的依赖，自动watch
const score = ref(0);

setTimeout(() => (score.value = 100), 3000);

// watchEffect(() => {
//     console.log(score.value)
// })

watch(score, (newV, oldV) => {
  console.log(`普通watch 新的值：${newV}旧的值${oldV}`);
});

export { score };