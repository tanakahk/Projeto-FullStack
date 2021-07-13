<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link v-if="!isLogedIn" to="/login">Login</router-link>
    <a v-else href="#" @click="logout">Logout</a>
  </div>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import useAuth from '@/modules/auts';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const auth = useAuth();

    if (!auth.state.token) {
      router.push({ name: 'Login' });
    }

    watch(
      () => route.path,
      () => {
        if (!auth.state.token) {
          router.push({ name: 'Login' });
        }
      },
    );

    // if (auth.state.token) {
    //   router.push({ name: 'Home' });
    // }

    const isLogedIn = computed(() => auth.state.token);
    const username = computed(() => auth.state.username);

    const logout = () => {
      const res = auth.mutations.logout();
      if (res) {
        router.push({ name: 'Login' });
      }
    };
    return {
      isLogedIn,
      logout,
      username,
    };
  },
});
</script>

<style lang="scss">
.html,
body {
  background-color: #102149;
  background-size: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
