<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './icons/Icon.vue'

interface SampleData {
  status: Boolean;
  iconSize: number;
  alertType: string;
  iconType: string;
  header: string;
  message: string;
}

export default /*#__PURE__*/defineComponent({
  name: 'VueBasicAlert', // vue component name
  props: {
    duration: Number,
    closeIn: Number
  },
  components: {
    Icon
  },
  data(): SampleData {
    return {
      status: false,
      iconSize: 40,
      iconType: 'solid',
      alertType: 'info',
      header: 'Some Information',
      message: 'This is the information of something you may know',
    };
  },
  methods: {
    showAlert(alertType: string, iconSize: number, iconType: string ,alertHeader: string, alertMessage: string): void {
      this.status = true
      this.iconSize = iconSize
      this.iconType = iconType
      this.alertType = alertType
      this.header = alertHeader
      this.message = alertMessage
      if(this.closeIn) {
        setTimeout(() => this.closeAlert(), this.closeIn)
      }
    },
    closeAlert() {
      this.status = false
      setTimeout(() => {
        this.iconSize = 40
        this.header = ''
        this.message = ''
      }, this.duration)
    }
  },
});
</script>

<template>
  <div class="vue-alert" :class="status?'active':''" :style="`transition: all ${duration}ms ease-in-out;`">
    <div class="alert-container">
      <div class="alert-color-bar" :class="alertType"></div>
      <div class="alert-icon">
        <div class="alert-icon-box" :class="alertType" :style="'width: '+iconSize+'px; height: '+iconSize+'px;'">
          <Icon :icon="alertType" :iconSize="iconSize" :iconType="iconType" />
        </div>
      </div>
      <div class="alert-content">
        <h5 class="alert-head">{{header}}</h5>
        <p class="alert-message">{{message}}</p>
      </div>
      <div class="alert-close">
        <div @click="closeAlert" class="alert-close-button" :style="'width: '+iconSize*0.6+'px; height: '+iconSize*0.6+'px;'+`transition: all ${duration}ms ease-in-out;`">
          <Icon icon="close" style="width: 100%;" :iconColor="'#bbbbbb'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  :root {
    --success-green: #2aa36a;
    --info-blue: #2a79c2;
    --error-red: #eb4e2c;
    --warning-yellow: #ffc600;
  }
  .vue-alert * {
    font-family: Arial;
  }
  .vue-alert {
    position: fixed;
    display: block;
    width: 400px;
    margin: 0px;
    border: none;
    top: 20px;
    right: 20px;
    border-radius: 6px;
    opacity: 0;
    background: #fff;
    box-shadow: 0px 0px 16px 0px #d3d3d3;
    text-align: center;
    z-index: 1000000;
    padding: 10px;
    transform: translate(100%, 0px);
    max-width: calc(100vw - 60px);
  }
  .vue-alert.active {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  .vue-alert>.alert-container {
    display: flex;
    position: relative;
    width: 100%;
  }
  .vue-alert>.alert-container .alert-color-bar {
    min-height: 65px;
    height: auto;
    min-width: 5px;
    border-radius: 2px;
    margin-right: 10px;
  }
  .vue-alert>.alert-container .alert-icon {
    display: flex;
    margin: auto 16px auto 6px;
  }
  .vue-alert>.alert-container .alert-icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: auto;
  }
  .vue-alert>.alert-container .alert-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .vue-alert>.alert-container .alert-icon-box.success, .vue-alert>.alert-container .alert-color-bar.success {
    background-color: var(--success-green);
  }
  .vue-alert>.alert-container .alert-icon-box.info, .vue-alert>.alert-container .alert-color-bar.info {
    background-color: var(--info-blue);
  }
  .vue-alert>.alert-container .alert-icon-box.error, .vue-alert>.alert-container .alert-color-bar.error {
    background-color: var(--error-red);
  }
  .vue-alert>.alert-container .alert-icon-box.warning, .vue-alert>.alert-container .alert-color-bar.warning {
    background-color: var(--warning-yellow);
  }
  .vue-alert>.alert-container .alert-close {
    display: flex;
    margin: 0px 6px;
  }
  .vue-alert>.alert-container .alert-close-button {
    padding: 6px;
    margin: auto;
    border-radius: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
  .vue-alert>.alert-container .alert-close-button:hover {
    background-color: #ffffff;
    filter: drop-shadow(0px 1px 3px gainsboro) brightness(0.95);
  }
  .vue-alert>.alert-container .alert-content>* {
    text-align: left;
    margin: 4px 4px;
    padding-right: 6px;
  }
  .vue-alert>.alert-container .alert-content>h5.alert-head {
    font-size: 16px;
    font-weight: 600;
    color: #4b4b4b;
  }
  .vue-alert>.alert-container .alert-content>p.alert-message {
    font-size: 14px;
    min-width: fit-content;
    font-weight: bold;
    line-height: 1.3;
    color: #bcbcbc;
  }
</style>
