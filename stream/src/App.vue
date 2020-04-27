<template>
  <div id="app">
    <message>Welcome to Stream!</message>
    <message>We're glad you're here.</message>
  </div>
</template>

<script>
import Message from './components/Message.vue'

export default {
  name: 'app',
  components: { Message },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
