import { reactive, readonly } from 'vue';
// import axios from 'axios';

export interface Sr {
  id: number
  url: string
}

export interface FrameState {
  busy: boolean
  // srUrl: string[]
  sr: Sr[]
  srCurrent: number
  defaultSrUrl: string
}

const state: FrameState = reactive({
  busy: false,
  // srUrl: [],
  sr: [],
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

  setSr(sr: Sr) {
    const idx = state.sr.findIndex((s) => s.id === sr.id);
    if (idx > -1) {
      state.sr[idx] = sr;
    } else {
      state.sr.push(sr);
    }
    return true;
  },
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

      const idString = res.slice(91, 98);
      const idNumber = parseInt(idString, 10);

      const sr: Sr = {
        id: idNumber,
        url: res,
      };

      mutations.setSr(sr);
      state.srCurrent++;
    }

    if (firstTime) {
      state.sr.shift();
    }

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
