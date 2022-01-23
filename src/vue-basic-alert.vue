<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/icons/Icon.vue'

interface DataInterface {
  isHide: Boolean;
  status: Boolean;
  iconSize: number;
  position: string;
  alertType: string;
  iconType: string;
  header: string;
  message: string;
}

export default defineComponent({
  name: 'VueBasicAlert', 
  props: {
    width: {type: Number},
    duration: {type: Number, default: 300},
    closeIn: {type: Number, default: null},
  },
  components: {
    Icon
  },
  data(): DataInterface {
    return {
      position: "top right",
      status: false,
      isHide: false,
      iconSize: 35,
      iconType: 'solid',
      alertType: 'info',
      header: 'Some Information',
      message: 'This is the information of something you may know',
    };
  },
  methods: {
    showAlert(alertType: string, alertMessage: string, alertHeader?: string, options?: { iconSize?: number, iconType?: string , position?: string}): void {
      this.alertType = alertType
      this.header = alertHeader?alertHeader:alertType.toUpperCase()
      this.message = alertMessage
      if(options) {
        this.position = options.position?options.position:"top right"
        this.iconSize = options.iconSize?options.iconSize:35
        this.iconType = options.iconType==="regular"?"regular":"solid"
      } else {
        this.iconType = "solid"
      }
      setTimeout(() =>{ 
        this.status = true
      }, 50)
      if(this.closeIn) {
        setTimeout(() => this.closeAlert(), this.closeIn)
      }
    },
    closeAlert() {
      this.isHide = true
      setTimeout(() => {
        this.isHide = false
        this.status = false
        this.iconSize = 40
        this.header = ''
        this.message = ''
      }, this.duration)
    }
  },
});
</script>

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
  margin: 0px;
  border: none;
  border-radius: 6px;
  opacity: 0;
  background: #fff;
  box-shadow: 0px 0px 16px 0px #d3d3d3;
  text-align: center;
  z-index: 1000000;
  padding: 10px;
}
.vue-alert.top {
  top: 20px;
}
.vue-alert.bottom {
  bottom: 20px;
}
.vue-alert.center {
  right: 50%;
}
.vue-alert.top.center {
  transform: translate(50%, -100%);
  max-width: calc(100vw - 60px);
}
.vue-alert.bottom.center {
  transform: translate(50%, 100%);
  max-width: calc(100vw - 60px);
}
.vue-alert.right {
  transform: translate(100%, 0px);
  max-width: calc(100vw - 60px);
  right: 20px;
}
.vue-alert.left {
  transform: translate(-100%, 0px);
  max-width: calc(100vw - 60px);
  left: 20px;
}
.vue-alert.active {
  opacity: 1;
  transform: translate(0px, 0px);
}
.vue-alert.center.active {
  opacity: 1;
  transform: translate(50%, 0%);
}
.vue-alert > .alert-container {
  display: flex;
  position: relative;
  width: 100%;
}
.vue-alert > .alert-container .alert-color-bar {
  min-height: 65px;
  height: auto;
  min-width: 5px;
  border-radius: 2px;
  margin-right: 10px;
}
.vue-alert > .alert-container .alert-icon {
  display: flex;
  margin: auto 16px auto 6px;
}
.vue-alert > .alert-container .alert-icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: auto;
}
.vue-alert > .alert-container .alert-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
}
.vue-alert > .alert-container .alert-icon-box.success,
.vue-alert > .alert-container .alert-color-bar.success {
  background-color: var(--success-green);
}
.vue-alert > .alert-container .alert-icon-box.info,
.vue-alert > .alert-container .alert-color-bar.info {
  background-color: var(--info-blue);
}
.vue-alert > .alert-container .alert-icon-box.error,
.vue-alert > .alert-container .alert-color-bar.error {
  background-color: var(--error-red);
}
.vue-alert > .alert-container .alert-icon-box.warning,
.vue-alert > .alert-container .alert-color-bar.warning {
  background-color: var(--warning-yellow);
}
.vue-alert > .alert-container .alert-close {
  display: flex;
  margin: 0px 6px;
}
.vue-alert > .alert-container .alert-close-button {
  padding: 6px;
  margin: auto;
  border-radius: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vue-alert > .alert-container .alert-close-button:hover {
  background-color: #ffffff;
  filter: drop-shadow(0px 1px 3px gainsboro) brightness(0.95);
}
.vue-alert > .alert-container .alert-content > * {
  text-align: left;
  margin: 2px 4px;
  padding-right: 6px;
}
.vue-alert > .alert-container .alert-content > h5.alert-head {
  font-size: 16px;
  font-weight: 600;
  color: #4b4b4b;
}
.vue-alert > .alert-container .alert-content > p.alert-message {
  font-size: 14px;
  min-width: fit-content;
  font-weight: bold;
  line-height: 1.3;
  color: #bcbcbc;
}
</style>

<template>
  <div class="vue-alert" :class="!status?`${position?position:'top right'}`:`${position?position:'top right'} ${isHide?'':'active'}`" :style="`width: ${width?width:400}px;transition: all ${status?duration:0}ms ease-in-out;`">
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
