<template>
  <h2>Hi {{ auth.state.username }}</h2>
  <h1>Welcome to SAOIF skill record store !</h1>
  <div class="storeAlignContainer">
    <div class="centralizeItens">
      <div style="width: 100%; margin-left: 35px">
        <h2 class="section-header">Skills Record disponíneis para compra:</h2>
      </div>
      <div v-for="sr in frame.state.sr" :key="sr.id">
        <frame :sr="sr" />
      </div>
    </div>
  </div>
  <div>
    <button class="buttoon" @click="frame.actions.loadSr(15, false)">
      <strong>Load Skill Record</strong>
    </button>
  </div>
</template>

<script lang="ts">
import Frame from '@/components/Frame.vue';
import useAuth from '@/modules/auts';
import useFrame from '@/modules/frame';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Frame },
  setup() {
    const frame = useFrame();
    const auth = useAuth();

    if (!frame.state.srFirstTimeLoaded) {
      frame.actions.loadSr(15, true);
      frame.mutations.srFirstTimeLoaded(true);
    }

    return {
      auth,
      frame,
    };
  },
});
</script>
<style scoped>
.section-header {
  text-align: initial;
  margin-top: 50px;
}
.storeAlignContainer {
  justify-content: center;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
}

.centralizeItens {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  max-width: 1500px;
}
.buttoon {
  margin-top: 50px;
  border-radius: 10px;
  font-size: 35px;
  font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  background-color: #0071e3;
  color: white;
  padding: 10px;
}
</style>
