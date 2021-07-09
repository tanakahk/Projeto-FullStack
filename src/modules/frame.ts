// import axios from 'axios';
import { reactive, readonly } from 'vue';

// interface UseTemplate {
//   state: State;
//   mutations: Mutations;
//   actions: Actions;
// }

export interface Sr {
  url: string
}

export interface State {
  sr: Sr[]
  busy: boolean
}

// interface Mutations {}

// interface Actions {}

const state: State = reactive({
  sr: [],
  busy: false,
});

const mutations = {
  setBusy(value: boolean) {
    state.busy = value;
    if (value === true) {
      console.log('Estou ocupado');
    } else {
      console.log('Estou disponível');
    }
  },

};

const actions = {
  async loadSr() {
    mutations.setBusy(true);

    mutations.setBusy(false);
  },
};

export default function useFrame(): Readonly<any> {
  return readonly({
    state,
    mutations,
    actions,
  });
}
