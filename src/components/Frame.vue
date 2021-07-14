<template >
  <div>
    <skill-constructor @click="modalStatus = true" :url="sr.url" />
    <modal
      :modalStatus="modalStatus"
      :sr="sr"
      :sell="sell"
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
    sell: Boolean,
  },
  setup() {
    const frame = useFrame();
    const modalStatus = ref(false);

    return {
      frame,
      modalStatus,
    };
  },
});
</script>

<style scoped>
</style>
