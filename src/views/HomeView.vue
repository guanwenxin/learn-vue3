<script>
import { msg, printMsg, noteMsg } from '../biz/people'
import VueProps from '../components/VueProps.vue'
import { score } from '../biz/watch'
import { ref, onMounted, onUnmounted, reactive } from 'vue'
export default {
  components: {
    VueProps,
  },
  setup() {
    // 所有的基础数据类型响应式都需要使用ref提供，并且读写的时候，需要使用value
    // 模板当中不需要的原因是，模板渲染函数中进行了处理
    const count = ref(10)
    const people = reactive({
      name: 'pjw',
      age: 90,
    })
    // 在组件的mounted生命周期中执行函数
    onMounted(() => {
      console.log(count.value)
      setInterval(() => count.value--, 1000)
    })
    onUnmounted(() => {
      console.log('这个组件被销毁了')
    })
    function receive(value) {
      console.log('此数据来自于子组件', value)
    }
    // setup函数中，如果需要绑定至模板
    // 需要在setup函数中进行return
    return {
      count,
      people,
      msg,
      printMsg,
      noteMsg,
      score,
      receive,
    }
  }
}
</script>

<template>
  <!-- 做了处理 -->
  <main>我就是想看看vue3的新特性{{ count }}</main>
  <div>{{ people.name }}</div>
  <n-input v-model:value="people.name"></n-input>
  <div>{{ msg }}</div>
  <n-button @click="printMsg">点击打印MSG的值</n-button>
  <div>计算属性: {{ noteMsg }}</div>
  <div>{{ score }}</div>
  <hr/>
  <div>下面是子组件</div>
  <VueProps lang="English" @context-type="receive"></VueProps>
</template>
