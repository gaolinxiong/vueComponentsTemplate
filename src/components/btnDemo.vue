<template>
  <div class="btn">
    <button>{{text}}321</button>
  </div>
</template>

<script>
export default {
  name: 'btn', // 组件的name属性（后面有提到这里有个坑）
  props: {
    text: { // 文本
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.btn {
  background-color: blue;
}
</style>
