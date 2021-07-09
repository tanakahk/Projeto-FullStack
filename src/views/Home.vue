<template>
  <h2>Hi {{ auth.state.username }}</h2>
  <div class="storeContainer">
    <div class="storeAlignContainer">
      <div class="centralizeItens">
        <div v-for="url in urlSr" :key="url">
          <img style="height: 300px; width: 300px" :src="url" />
        </div>
      </div>
    </div>
    <div>
      <button class="buttoon" @click="loadSr(15, false)">
        <strong>Load Skill Record</strong>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auts';
import { defineComponent, toRefs, reactive } from 'vue';

export default defineComponent({
  setup() {
    const auth = useAuth();
    const state = reactive({
      defaultUrl:
        'https://github.com/Nayuta-Kani/SAOIF-Skill-Records-Database/blob/master/srimages/sr_icon_l_6100',
      url: [''],
      urlSr: [''],
      srCurrent: 0,
    });

    const loadSr = (count: number, firstTime: boolean) => {
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

        res = res.concat(`${state.defaultUrl}`, srId, '.png?raw=true');
        state.urlSr.push(res);

        state.srCurrent++;
      }

      if (firstTime) {
        state.urlSr.shift();
        state.urlSr.shift();
      }

      // for (let i = 0; i < state.urlSr.length; i++) {
      //   console.log('urlSr', i, state.urlSr[i]);
      // }
      // for (let i = 0; i < state.srCurrent; i++) {
      //   console.log('state.srCurrent', state.srCurrent);
      // }
    };

    loadSr(15, true);

    return {
      ...toRefs(state),
      auth,
      loadSr,
    };
  },
});
</script>
<style scoped>
.storeContainer {
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  width: 100%;
}

.storeAlignContainer {
  justify-content: center;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
}

.centralizeItens {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  max-width: 1500px;
}

.buttoon {
  margin-top: 50px;
  font-size: 35px;
  border-radius: 10px;
  background-color: rgb(56, 123, 199);
  color: white;
  padding: 10px;
}
</style>
