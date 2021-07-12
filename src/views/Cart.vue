<template>
  <h2>Hi {{ auth.state.username }}</h2>

  <h1>Welcome to SAOIF skill record store !</h1>
  <h2 class="section-header">Skills Record compradas:</h2>
  <div class="storeAlignContainer">
    <div class="centralizeItens">
      <div v-for="sr in frame.state.mySr" :key="sr.id">
        <frame :sr="sr" />
      </div>
    </div>
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

    frame.actions.loadMySr();

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
  margin-top: 50px ;
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
</style>
