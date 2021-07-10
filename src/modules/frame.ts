// import axios from 'axios';
import { reactive, readonly } from 'vue';

export interface FrameState {
  busy: boolean
  srUrl: string[]
  srCurrent: number
  defaultSrUrl: string
}

const state: FrameState = reactive({
  busy: false,
  srUrl: [],
  srCurrent: 0,
  defaultSrUrl: 'https://github.com/Nayuta-Kani/SAOIF-Skill-Records-Database/blob/master/srimages/sr_icon_l_6100',
});

const mutations = {
  setBusy(value: boolean) {
    state.busy = value;
    if (value === true) {
      console.log('Estou ocupado');
    } else {
      console.log('Estou disponível');
    }
    return true;
  },

  setSrUrl(res: string) {
    state.srUrl.push(res);
    return true;
  },

  // setSrId(id: string) {

  // }
};

const actions = {
  async loadSr(count: number, firstTime: boolean) {
    mutations.setBusy(true);

    if (firstTime) {
      // eslint-disable-next-line no-param-reassign
      count++;
    }

    for (let i = 1; i <= count; i++) {
      let srId = '';
      let res = '';
      if (state.srCurrent < 10) {
        srId = srId.concat('00', state.srCurrent.toString());
      }
      if (state.srCurrent >= 10 && state.srCurrent < 100) {
        srId = srId.concat('0', state.srCurrent.toString());
      }
      if (state.srCurrent >= 100) {
        srId = state.srCurrent.toString();
      }

      res = res.concat(`${state.defaultSrUrl}`, srId, '.png?raw=true');
      mutations.setSrUrl(res);
      state.srCurrent++;
    }

    if (firstTime) {
      state.srUrl.shift();
    }

    // ------------- Para a gente testar os valores ------------- //

    // for (let i = 0; i < state.srUrl.length; i++) {
    //   console.log('srUrl', i, state.srUrl[i]);
    // }
    // for (let i = 0; i < state.srCurrent; i++) {
    //   console.log('state.srCurrent', state.srCurrent);
    // }

    mutations.setBusy(false);
    return true;
  },
};

export default function useFrame(): Readonly<any> {
  return readonly({
    state,
    mutations,
    actions,
  });
}
