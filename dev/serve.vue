<script lang="ts">
import { defineComponent } from 'vue';
import VueBasicAlert from '@/vue-basic-alert.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueBasicAlert
  }
});
</script>

<template>
  <div id="app">
    <div class="btn-container">
      <button class="btn text-white success"
          @click="$refs.alert
          .showAlert(
              'success', // There are 4 types of alert: success, info, warning, error
              35, // Size of the icon (px)
              'solid', // Icon styles: now only 2 styles 'solid' and 'regular'
              'Success 200', // Header of the alert
              'This is the information of something you may know Success.' // Message of the alert
          )"
      >
          Click to Success alert
      </button>
      <button class="btn text-white info" @click="$refs.alert.showAlert('info',35,'solid','Info 202','This is the information of something you may know.')">Click to Info alert</button>
      <button class="btn text-white error" @click="$refs.alert.showAlert('error',35,'solid','Error 404','This is the information of something you may know ERROR.')">Click to Error alert</button>
      <button class="btn text-white warning" @click="$refs.alert.showAlert('warning',35,'solid','Warning 101','This is the information of something you may know Warning.')">Click to Warning alert</button>
    </div>
    <vue-basic-alert :duration="300" ref="alert" />
  </div>
</template>

<style>
.btn-container {
  display: flex;
  flex-wrap: wrap;
}
.btn {
    display: block;
    margin: 3px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.text-white {
  color: #fff;
  font-weight: bold;
}
.btn.success {
  background-color: var(--success-green);
}
.btn.info {
  background-color: var(--info-blue);
}
.btn.error {
  background-color: var(--error-red);
}
.btn.warning {
  background-color: var(--warning-yellow);
}
</style>
