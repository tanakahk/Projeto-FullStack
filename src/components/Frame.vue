<template >
  <div>
    <skill-constructor @click="modalStatus = true" :url="sr.url" />
    <modal
      :modalStatus="modalStatus"
      :sr="sr"
      @modal-close="modalStatus = false"
    />
  </div>
</template>

<script lang="ts">
import useFrame from '@/modules/frame';
import { defineComponent, ref } from 'vue';
import Modal from './Modal.vue';
import SkillConstructor from './SkillConstructor.vue';

export default defineComponent({
  components: { SkillConstructor, Modal },
  props: {
    sr: { type: Object, required: true },
  },
  setup() {
    const frame = useFrame();
    const modalStatus = ref(false);

    const modalStatusOpen = (url: string) => {
      console.log('modal aberto', url);
      // frame.mutations.setSrId(url);
    };

    return {
      frame,
      modalStatusOpen,
      modalStatus,
    };
  },
});
</script>

<style scoped>
</style>
