<script lang="ts">
import { defineComponent } from "vue";
import readme from './readme.vue';

export default defineComponent({
  name: "ServeDev",
  components: {
    readme
  },
});
</script>

<template>
  <div class="container">
    <h1 class="header">Basic Alert Google Style</h1>
    <p class="paragraph">These are 4 examples with solid icons</p>
    <div class="btn-container">
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            'This is the information of something you may know Success.', // Message of the alert
            'Success 200', // Header of the alert
            { iconSize: 35, // Size of the icon (px)
              iconType: 'solid', // Icon styles: now only 2 styles 'solid' and 'regular'
              position: 'top right' } // Position of the alert 'top right', 'top left', 'bottom left', 'bottom right'
          )
        "
      >
        Click to Success alert
      </button>
      <button
        class="btn text-white info"
        @click="
          $refs.alert.showAlert(
            'info',
            'This is the information of something you may know.'
          )
        "
      >
        Click to Info alert
      </button>
      <button
        class="btn text-white error"
        @click="
          $refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.'
          )
        "
      >
        Click to Error alert
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.'
          )
        "
      >
        Click to Warning alert
      </button>
    </div>
    <p class="paragraph">These are 4 examples with regular icons</p>
    <div class="btn-container">
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            'This is the information of something you may know Success.', // Message of the alert
            'Success 200',
            { iconType: 'regular' }
          )
        "
      >
        Click to Success alert
      </button>
      <button
        class="btn text-white info"
        @click="
          $refs.alert.showAlert(
            'info',
            'This is the information of something you may know.',
            'Info 200',
            { iconType: 'regular' }
          )
        "
      >
        Click to Info alert
      </button>
      <button
        class="btn text-white error"
        @click="
          $refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.',
            'Error 500',
            { iconType: 'regular' }
          )
        "
      >
        Click to Error alert
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.',
            'Warning 400',
            { iconType: 'regular' }
          )
        "
      >
        Click to Warning alert
      </button>
    </div>
    <p class="paragraph">These are 6 examples with different positions</p>
    <div class="btn-container">
      <button
        class="btn text-white info"
        @click="
          $refs.alert.showAlert(
            'info',
            'This is the information of something you may know.',
            'Success 200',
            { iconSize: 35,
              iconType: 'solid', 
              position: 'top left' } 
          )
        "
      >
        Top Left
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning', // There are 4 types of alert: success, info, warning, error
            'This is the information of something you may know Success.', // Message of the alert
            'Warning 200', // Header of the alert
            { iconSize: 35, 
              iconType: 'solid', 
              position: 'top center' }
          )
        "
      >
        Top Center
      </button>
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            'This is the information of something you may know Success.', // Message of the alert
            'Success 200', // Header of the alert
            { iconSize: 35, 
              iconType: 'solid', 
              position: 'top right' }
          )
        "
      >
        Top Right
      </button>
      <button
        class="btn text-white error"
        @click="
          $refs.alert.showAlert(
            'error',
            'This is the information of something you may know ERROR.',
            'Success 200',
            { iconSize: 35, 
              iconType: 'solid',
              position: 'bottom left' }
          )
        "
      >
        Bottom Left
      </button>
      <button
        class="btn text-white success"
        @click="
          $refs.alert.showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            'This is the information of something you may know Success.', // Message of the alert
            'Success 200', // Header of the alert
            { iconSize: 35, 
              iconType: 'solid', 
              position: 'bottom center' }
          )
        "
      >
        Bottom Center
      </button>
      <button
        class="btn text-white warning"
        @click="
          $refs.alert.showAlert(
            'warning',
            'This is the information of something you may know Warning.',
            'Success 200', 
            { iconSize: 35,
              iconType: 'solid', 
              position: 'bottom right' }
          )
        "
      >
        Bottom Right
      </button>
    </div>
    <div class="readme">
      <readme />
    </div>
    <VueBasicAlert ref="alert" />
  </div>
</template>

<style>
.container {
  max-width: 960px;
  display: block;
  margin: auto;
}
h1.header {
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 10px;
  color: gray;
  text-align: center;
  /* border-bottom: solid 2px #80808061; */
  font-size: 1.4rem;
}
p.paragraph {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  font-size: 1.1rem;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px auto;
}
.btn {
  display: block;
  margin: 3px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.text-white {
  color: #fff;
  font-weight: bold;
}
.btn.success {
  background-color: var(--success-green);
}
.btn.success:focus, .btn.success:active, .btn.success:target, .btn.success:visited{
  box-shadow: 0px 0px 5px 1px var(--success-green);
}
.btn.info {
  background-color: var(--info-blue);
}
.btn.info:focus, .btn.info:active, .btn.info:target, .btn.info:visited{
  box-shadow: 0px 0px 5px 1px var(--info-blue);
}
.btn.error {
  background-color: var(--error-red);
}
.btn.error:focus, .btn.error:active, .btn.error:target, .btn.error:visited{
  box-shadow: 0px 0px 5px 1px var(--error-red);
}
.btn.warning {
  background-color: var(--warning-yellow);
}
.btn.warning:focus, .btn.warning:active, .btn.warning:target, .btn.warning:visited{
  box-shadow: 0px 0px 5px 1px var(--warning-yellow);
}
</style>
