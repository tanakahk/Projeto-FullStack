<template >
  <div class="storeAlignContainer">
    <div class="centralizeItens">
      <div
        @click="modalStatusOpen(sr)"
        v-for="sr in frame.state.sr"
        :key="sr.id"
      >
        <skill-constructor :url="getImage(sr)" />
        <modal :open="modalOpen" />
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
import useFrame, { Sr } from '@/modules/frame';
import { defineComponent } from 'vue';
import Modal from './Modal.vue';
import SkillConstructor from './SkillConstructor.vue';

export default defineComponent({
  components: { SkillConstructor, Modal },
  setup() {
    const frame = useFrame();

    const getImage = (sr: Sr) => sr.url;

    frame.actions.loadSr(15, true);

    const modalStatusOpen = (url: string) => {
      console.log('modal aberto', url);
      // frame.mutations.setSrId(url);
    };

    return {
      frame,
      modalStatusOpen,
      getImage,
    };
  },
});
</script>

<style scoped>
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
  font-size: 35px;
  border-radius: 10px;
  background-color: rgb(56, 123, 199);
  color: white;
  padding: 10px;
}
</style>
