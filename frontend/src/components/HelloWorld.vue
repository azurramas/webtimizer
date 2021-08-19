<template>
  <q-page class="flex flex-center">
    <q-btn @click="callGo()"> Call Golang </q-btn>
  </q-page>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    callGo() {
      window.backend.basic().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style></style>
