<template>
  <div class="container" @click="modalClose">
    <div class="content-container">
      <div class="content">
        <h1>Login:</h1>
        <div ref="user" class="user">
          <div style="margin-top: 10px">User:</div>
          <input
            class="input-text"
            ref="userInput"
            v-model="username"
            type="text"
            @keyup="userHandler"
            autofocus
          />
        </div>
        <button ref="userBtn" @click="next" class="button next">Next</button>
        <div ref="pass" class="pass">
          <div style="margin-top: 10px">Senha</div>
          <input
            class="input-text"
            ref="passInput"
            v-model="password"
            type="password"
            @keyup="passHandler"
          />
        </div>
        <button ref="passBtn" @click="login" class="button enter">Enter</button>
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
    const userInput: Ref<HTMLElement | null> = ref(null);
    const userBtn: Ref<HTMLElement | null> = ref(null);
    const pass: Ref<HTMLElement | null> = ref(null);
    const passInput: Ref<HTMLElement | null> = ref(null);
    const passBtn: Ref<HTMLElement | null> = ref(null);
    const state = reactive({
      username: '',
      password: '',
    });

    const login = async () => {
      if (state.username && state.password) {
        const res = await auth.actions.login(state.username, state.password);
        if (res) {
          router.push({ name: 'Home' });
        }
      }
    };

    const next = async () => {
      if (
        state.username
        && user.value
        && userBtn.value
        && pass.value
        && passBtn.value
        && passInput.value
      ) {
        user.value.style.zIndex = '-1';
        user.value.style.position = 'fixed';
        userBtn.value.style.zIndex = '-1';
        userBtn.value.style.position = 'fixed';

        pass.value.style.zIndex = '0';
        pass.value.style.position = 'inherit';
        passBtn.value.style.zIndex = '0';
        passBtn.value.style.position = 'inherit';
        passInput.value.focus();
      }
    };

    const userHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        next();
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
      next,
      user,
      userInput,
      userBtn,
      pass,
      passInput,
      passBtn,
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
.content-container {
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
.content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.user,
.next {
  z-index: 0;
}
.pass,
.enter {
  z-index: -1;
  position: fixed;
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
