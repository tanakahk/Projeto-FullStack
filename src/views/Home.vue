<template>
  <h2>Hi {{ auth.state.username }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useAuth from '@/modules/auts';

export default defineComponent({
  setup() {
    const auth = useAuth();
    return {
      auth,
    };
  },
});
</script>
