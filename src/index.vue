<template>
  <btn-demo v-bind="$attrs"></btn-demo>
</template>

<script>
import btnDemo from './components/btnDemo.vue';
export default {
  name: 'glxBtn',
  components: {
    btnDemo
  },
  data () {
    return {
    }
  }
}
</script>
