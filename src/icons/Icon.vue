<template>
    <svg :style="'height: '+iconSize*0.6+'px; width: '+iconSize*0.6+'px;'" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" class="icon-svg" >
        <path 
            v-if="checkIcon('info')"
            :stroke="iconColor" 
            :fill="iconType=='regular'?'transparent':iconColor"
            :stroke-width="iconType=='regular'?'50px':'0'" stroke-location="center"
            class=""
            d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z">
        </path>
        <path 
            v-if="checkIcon('close')"
            :stroke="iconColor" 
            :fill="iconType=='regular'?'transparent':iconColor"
            :stroke-width="iconType=='regular'?'50px':'0'" stroke-location="center"
            d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z">
        </path>
    </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        icon: String,
        iconColor: {type: String, default: "#ffffff"},
        iconType: String,
        iconSize: Number
    },
    data() {
        return({
            viewBox: "0 -50 200 600"
        })
    },
    methods: {
        checkIcon(iconToCheck: String) {
            if(this.icon == iconToCheck) return true
            return false
        }
    },
    created() {
        if(this.icon === "close") {
            this.viewBox = "-80 0 500 500"
        }
    }
})
</script>
