<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-6 text-center"><h3>Welcome to Webtimizer!</h3></div>
    </div>
    <div class="row justify-center">
      <div class="col-4">
        <q-file
          v-model="model"
          multiple
          filled
          label="Click here to upload images or drag and drop them."
        >
          <template #prepend>
            <q-icon name="cloud_upload" @click.stop />
          </template>
        </q-file>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
