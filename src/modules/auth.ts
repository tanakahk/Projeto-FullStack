import axios from 'axios';
import { reactive, readonly } from 'vue';

interface AuthState {
  id: string;
  username: string;
  password: string;
  token: string;
}

interface AuthMutations {
  logout: () => boolean;
}

interface AuthActions {
  login: (inputUsername: string, inputPassword: string) => Promise<boolean>;
}

interface UseAuth {
  state: AuthState;
  mutations: AuthMutations;
  actions: AuthActions;
}

const state: AuthState = reactive({
  id: '',
  username: 'Tanaka',
  password: '',
  token: '',
});

const mutations = {
  login(id: string, username: string, token: string) {
    state.id = id;
    state.username = username;
    state.token = token;
  },

  logout() {
    state.id = '';
    state.username = '';
    state.token = '';
    return true;
  },
};

const actions = {
  async login(inputUsername: string, inputPassword: string) {
    let status = false;
    await axios.post('http://localhost:5000/v1/login', {
      username: inputUsername,
      password: inputPassword,
    }).then((res) => {
      mutations.login(res.data.result.id.toString(), res.data.result.username, res.data.result.token);
      status = true;
    });
    return status;
  },
};

export default function useAuth(): Readonly<UseAuth> {
  return readonly({
    state,
    mutations,
    actions,
  });
}
