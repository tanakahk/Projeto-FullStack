<template>
  <div class="container" @click="modalClose">
    <div class="content">
      <div class="content-inside">
        <h1>Login:</h1>
        <div v-if="!hasUser">
          <div>User:</div>
          <input
            class="input-text"
            ref="user"
            v-model="username"
            type="text"
            @keyup="userHandler"
            autofocus
          />
        </div>
        <div v-else>
          <div style="margin-top: 10px">Senha</div>
          <input
            class="input-text"
            ref="pass"
            v-model="password"
            type="password"
            @keyup="passHandler"
          />
        </div>
        <button v-if="!hasUser" @click="next" class="button">Next</button>
        <button v-else @click="login" class="button">Enter</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auts';
import {
 defineComponent, Ref, ref, reactive, toRefs,
} from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const auth = useAuth();
    const router = useRouter();
    const user: Ref<HTMLElement | null> = ref(null);
    const pass: Ref<HTMLElement | null> = ref(null);
    const state = reactive({
      username: '',
      password: '',
      hasUser: false,
    });

    const next = async () => {
      if (state.username) {
        state.hasUser = true;
      }
    };

    const login = async () => {
      if (state.username && state.password) {
        const res = await auth.actions.login(state.username, state.password);
        if (res) {
          router.push({ name: 'Home' });
        }
      }
    };

    const userHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && pass.value) {
        pass.value.focus();
      }
    };

    const passHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && state.username && state.password) {
        login();
      }
    };

    return {
      ...toRefs(state),
      login,
      userHandler,
      passHandler,
      user,
      pass,
      next,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  background-image: url(../assets/BackgroundLandscape.png);
  background-size: 100% 100%;
  max-width: 80%;
  min-width: 500px;
  height: 250px;
  margin: auto;
  padding: 40px;
  border: 1px solid #888;
  border-radius: 20px;
}
.content-inside {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.input-text {
  margin-top: 5px;
  display: fixed;
  position: relative;
  top: 0;
  left: 0;
  font-size: 25px;
  border-radius: 20px;
  width: 200px;
}
.button {
  width: 200px;
  margin: 40px 0 10px 0;
  padding: 6px;
  border-radius: 10px;
  font-size: 22px;
  background-color: #0071e3;
  color: white;
}
</style>
