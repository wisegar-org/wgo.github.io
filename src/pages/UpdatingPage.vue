<style>
.update {
  background-image: url("../assets/on-update.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
}
</style>
<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row justify-between update" :style="divStyle">
      <div class="text-center items-center"></div>
      <div class="q-pt-xl text-center items-center">
        <img
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          style="width: 150px; height: 150px"
        />
        <div class="text-h3 text-white text-center">
          <a
            class="text-h3 text-white text-center"
            href="https://github.com/wisegar-org"
            >wisegar.org su github.com</a
          >
        </div>
        <div class="text-h6 text-white text-center">site under update</div>
      </div>
      <div class="text-center items-center"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UpdatingPage",
  components: {},
  setup() {
    const screenH = screen.availHeight - screen.availHeight * 0.2;
    const divStyle = `height: ${screenH}px;`;
    return { screenH, divStyle };
  },
});
</script>
