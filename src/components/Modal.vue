<template>
  <div v-if="modalStatus" class="modal" @click="modalClose">
    <div class="modal-content">
      <span @click="$emit('modal-close')" class="close">&times;</span>
      <h1>Skill ID: {{ sr.id }}</h1>
      <div class="content-inside">
        <skill-constructor :modal="true" :url="sr.url" />
        <div class="content-text">
          <h2 style="display: inline-block; margin-top: 0px">Base Status</h2>
          <div class="status">Attack: {{ sr.atk }}</div>
          <div class="status">HP: {{ sr.hp }}</div>
          <div class="status">Defense: {{ sr.def }}</div>
          <div class="status">Cost: {{ sr.cost }}</div>
          <div class="status">SP: {{ sr.sp }}</div>
          <div class="status">Cooldown: {{ sr.cooldown }}</div>
          <div class="price">
            <strong>${{ sr.price }}</strong>
          </div>
          <div class="div-button">
            <button v-if="!sell" @click="buy(sr)" class="button">Comprar</button>
            <button v-else @click="sell(sr)" class="button">Vender</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useFrame, { Sr } from '@/modules/frame';
import { defineComponent } from 'vue';
import SkillConstructor from './SkillConstructor.vue';

export default defineComponent({
  components: { SkillConstructor },
  props: {
    modalStatus: Boolean,
    sr: { type: Object },
    sell: Boolean,
  },
  emits: ['modal-close'],
  setup(props, { emit }) {
    const frame = useFrame();

    const modalClose = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.className === 'modal') {
        emit('modal-close');
      }
    };

    const buy = (sr: Sr) => {
      frame.actions.buySr(sr);
      emit('modal-close');
    };
    return {
      modalClose,
      buy,
    };
  },
});
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 20px;
  max-width: 80%;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 40px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #f00;
  text-decoration: none;
  cursor: pointer;
}
.content-inside {
  display: flex;
  justify-content: center;
}
.content-text {
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
}
.status {
  font-size: 20px;
}
.price {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0;
  font-size: 25px;
  justify-content: center;
  font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
    Arial, sans-serif;
}
.div-button {
  align-items: center;
}
.button {
  width: 200px;
  padding: 6px;
  border-radius: 10px;
  font-size: 22px;
  font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  background-color: #0071e3;
  color: white;
}
</style>
