<script lang="ts">
import { defineComponent } from 'vue';
import VueAlert from '@/vue-basic-alert.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueAlert
  }
});
</script>

<template>
  <div id="app">
    <button @click="$refs.alert.doAlert('info',40,'solid','Header Header','This is the information of something you may know haha.')">Click to alert</button>
    <vue-basic-alert :duration="300" ref="alert" />
  </div>
</template>
