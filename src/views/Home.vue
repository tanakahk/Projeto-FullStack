<template>
  <h2>Hi {{ auth.state.username }}</h2>

  <div>
    <frame />
  </div>
</template>

<script lang="ts">
import Frame from '@/components/Frame.vue';
import useAuth from '@/modules/auts';
import useFrame from '@/modules/frame';
import { defineComponent, toRefs, reactive } from 'vue';

export default defineComponent({
  components: { Frame },
  setup() {
    const frame = useFrame();
    const auth = useAuth();
    const state = reactive({});

    return {
      ...toRefs(state),
      auth,
      frame,
    };
  },
});
</script>
<style scoped>
</style>
