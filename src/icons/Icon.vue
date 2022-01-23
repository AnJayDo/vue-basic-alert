<template>
  <svg
    :style="
      'height: ' + iconSize * 0.6 + 'px; width: ' + (iconSize * 0.6 + 2) + 'px;'
    "
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    class="icon-svg"
  >
    <path 
      v-if="checkIcon('success')"
      :stroke="iconColor"
      :fill="iconType == 'regular' ? 'transparent' : iconColor"
      :stroke-width="iconType == 'regular' ? '40px' : '0'"
      stroke-alignment="inside"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="" 
      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
    </path>
    <path
      v-if="checkIcon('info')"
      :stroke="iconColor"
      :fill="iconType == 'regular' ? 'transparent' : iconColor"
      :stroke-width="iconType == 'regular' ? '50px' : '0'"
      stroke-alignment="centre"
      stroke-linecap="round"
      stroke-linejoin="round"
      class=""
      d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
    ></path>
    <path
      v-if="checkIcon('error')"
      :stroke="iconColor"
      :fill="iconType == 'regular' ? 'transparent' : iconColor"
      :stroke-width="iconType == 'regular' ? '30px' : '0'"
      stroke-alignment="centre"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
    ></path>
    <path
      v-if="checkIcon('close')"
      :stroke="iconColor"
      :fill="iconColor"
      :stroke-width="iconType == 'regular' ? '30px' : '0'"
      stroke-alignment="outside"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
    ></path>
    <path 
      v-if="checkIcon('warning')"
      :stroke="iconColor"
      :fill="iconType == 'regular' ? 'transparent' : iconColor"
      :stroke-width="iconType == 'regular' ? '50px' : '0'"
      stroke-alignment="centre" 
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z">
    </path>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: String,
    iconColor: { type: String, default: "#ffffff" },
    iconType: String,
    iconSize: Number,
  },
  data() {
    return {
      viewBox: "0 -50 200 600",
    };
  },
  methods: {
    checkIcon(iconToCheck: String) {
      if (this.icon == iconToCheck) return true;
      return false;
    },
    changeViewbox() {
      switch (this.icon) {
        case "success": {
          this.viewBox = "0 0 512 512";
          break;
        }
        case "close": {
          this.viewBox = "-89 0 500 500";
          break;
        }
        case "error": {
          this.viewBox = "-89 0 500 500";
          break;
        }
        case "info": {
          this.viewBox = "0 -50 180 600";
          break;
        }
        case "warning": {
          this.viewBox = "0 -30 192 580";
          break;
        }
        
        default:
          break;
      }
    }
  },
  created() {
    this.changeViewbox()
  },
  watch: {
    icon() {
      this.changeViewbox()
    },
  },
});
</script>
