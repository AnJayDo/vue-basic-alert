<script lang="ts">
import { defineComponent } from 'vue';
import VueAlert from '@/vue-alert.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueAlert
  }
});
</script>

<template>
  <div id="app">
    <vue-alert />
  </div>
</template>
