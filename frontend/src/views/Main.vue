<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-8 text-center"><h3>Welcome to Webtimizer!</h3></div>
    </div>
    <div class="row justify-center">
      <div
        @dragover="dragOver"
        @dragleave="dragLeave"
        @drop.stop.prevent="drop"
        @click="openFileDialog"
        class="q-pa-md text-center col-7 customInput text-grey-8"
      >
        <q-icon size="80px" name="cloud_upload"></q-icon>
        <div class="q-ml-md text-subtitle1">
          Click here to load your images, or drag and drop them.
        </div>
      </div>
    </div>
    <div :key="img.name" v-for="img in imgs">{{ img }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const imgs = ref([]);

    const addImgs = (res) => {
      imgs.value.push(res);
    };

    const openFileDialog = async () => {
      const res = await window.backend.OpenFileDialog();
      addImgs(res);
    };

    const dragOver = (e) => {
      e.preventDefault();
      e.currentTarget.style.border = "black 1px solid";
    };

    const dragLeave = (e) => {
      e.preventDefault();
      e.currentTarget.style.border = "";
    };

    const drop = (e) => {
      e.preventDefault();
      addImgs(e.dataTransfer.files);
      e.currentTarget.style.border = "";
    };

    return {
      imgs,
      openFileDialog,
      dragOver,
      dragLeave,
      drop,
    };
  },
};
</script>

<style scoped>
.customInput {
  background: #f1f1f1;
  min-height: 8rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.customInput:hover {
  cursor: pointer;
}
</style>
