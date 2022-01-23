<script lang="ts">
import '@/styles/index.css'
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
