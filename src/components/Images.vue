<template>
  <v-row class="text-center justify-center">
    <v-col class="col-md-2 col-sm-4 col-6" :key="image.name" v-for="image in images">
      <div class="hover">
        <v-img class="image" transition="fade-transition" height="8rem" :src="image.min">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="white"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-btn @click="deleteImage(image.path)" class="error" color="error" fab large dark>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    deleteImage(path) {
      this.$store.state.images = this.$store.state.images.filter(image => {
        return image.path !== path;
      });
    }
  },
  computed: {
    images() {
      return this.$store.getters.getImages;
    }
  }
};
</script>

<style scoped>
.hover {
  position: relative;
}

.image {
  transition: all 0.2s ease-in-out;
}

.hover .error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}

.hover:hover .error {
  opacity: 1;
}

.hover:hover .image {
  opacity: 0.4;
}
</style>