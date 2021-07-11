<template>
  <div class="div">
    <img class="main-frame" src="@/assets/mainFrameHybridYStar.png" />

    <img class="skill-image" :src="url" />

    <img class="sr-bakground" src="@/assets/srBackground.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    url: { type: String },
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
  width: 250px;
  height: 250px;
  top: -275px;
  z-index: -1;
}

.sr-bakground {
  position: relative;
  width: 250px;
  height: 250px;
  opacity: 75%;
  top: -540px;
  z-index: -2;
}
</style>
