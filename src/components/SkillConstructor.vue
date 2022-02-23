<template>
  <div v-if="!modal" class="div">
    <img class="main-frame" src="@/assets/mainFrame.png" alt=''/>

    <img class="skill-image" :src="url" alt=''/>

    <img class="sr-bakground" src="@/assets/srBackground.png" alt=''/>
    <div class="background-of-background"></div>
  </div>
  <div v-else class="div">
    <img class="main-frame-modal" src="@/assets/mainFrame.png" alt=''/>

    <img class="skill-image-modal" :src="url" alt=''/>

    <img class="sr-bakground-modal" src="@/assets/srBackground.png" alt=''/>
    <div class="background-of-background-modal"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    url: { type: String },
    modal: Boolean,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.div {
  height: 300px;
  width: 300px;
}

.main-frame {
  position: relative;
  width: 300px;
  height: 300px;
}

.skill-image {
  position: relative;
  width: 300px;
  height: 300px;
  top: -288px;
  left: -1px;
  clip-path: polygon(52% 1%, 88% 26%, 88% 70%, 66% 82%, 36% 82%, 13% 70%, 13% 27%);
  z-index: -1;
}

.sr-bakground {
  position: relative;
  width: 300px;
  height: 300px;
  opacity: 75%;
  top: -592px;
  left: -2px;
  clip-path: polygon(52% 1%, 88% 26%, 88% 70%, 66% 82%, 36% 82%, 13% 70%, 13% 27%);
  z-index: -2;
}

.background-of-background {
  position: relative;
  width: 300px;
  height: 300px;
  top: -910px;
  background-color: rgb(255, 255, 255);
  clip-path: polygon(52% 6%, 90% 30%, 89% 73%, 66% 87%, 36% 87%, 12% 73%, 14% 29%);
  z-index: -3;
}

.main-frame-modal {
  position: relative;
  width: 300px;
  height: 300px;
  z-index: 4;
}

.skill-image-modal {
  position: relative;
  width: 300px;
  height: 300px;
  top: -288px;
  left: -1px;
  clip-path: polygon(52% 1%, 88% 26%, 88% 70%, 66% 82%, 36% 82%, 13% 70%, 13% 27%);
  z-index: 3;
}

.sr-bakground-modal {
  position: relative;
  width: 300px;
  height: 300px;
  opacity: 75%;
  top: -592px;
  left: -2px;
  clip-path: polygon(52% 1%, 88% 26%, 88% 70%, 66% 82%, 36% 82%, 13% 70%, 13% 27%);
  z-index: 2;
}

.background-of-background-modal {
  position: relative;
  width: 300px;
  height: 300px;
  top: -910px;
  background-color: rgb(255, 255, 255);
  clip-path: polygon(52% 6%, 90% 30%, 89% 73%, 66% 87%, 36% 87%, 12% 73%, 14% 29%);
  z-index: 1;
}
</style>
