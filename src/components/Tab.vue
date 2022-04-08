<template>
  <div
    class="tab-content d-flex justify-between"
    v-show="title == selectedTitle"
  >
    <div
      class="tab-content_col"
      v-for="project in projects"
      :key="project.title"
    >
      <div class="gallery-item tac">
        <div class="g-img-item">
          <img
            class="img-fluid"
            :src="`gallery/${project.image}`"
            :alt="`${project.title}`"
          />
          <a class="eyes" :href="`gallery/${project.image}`">
            <svg viewBox="0 0 576 512">
              <path
                d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"
              />
            </svg>
          </a>
        </div>

        <div class="g-text-item">
          <h4>{{ project.title }}</h4>
          <p>client project</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");
    const projects = ref([
      {
        title: "3D helmet design",
        image: "project-1.jpg",
        category: "vector",
      },
      {
        title: "2D vinyl design",
        image: "project-2.jpg",
        category: "vector",
      },
      {
        title: "creative poster design",
        image: "project-3.jpg",
        category: "raster",
      },
      {
        title: "embosed logo design",
        image: "project-4.jpg",
        category: "raster",
      },
      {
        title: "3D disposable bottle",
        image: "project-5.jpg",
        category: "ui/ux",
      },
      {
        title: "3D logo design",
        image: "project-6.jpg",
        category: "ui/ux",
      },
    ]);

    return {
      selectedTitle,
      projects,
    };
  },
};
</script>

<style scoped>
.tab-content {
  padding: 0 15px;
  flex-wrap: wrap;
}
.tab-content_col {
  width: calc((100% - 60px) / 3);
  margin-top: 55px;
}
.gallery-item {
  position: relative;
  border-radius: 5px;
}
.g-img-item,
.g-img-item .img-fluid {
  width: 100%;
  height: 100%;
}
.g-img-item:hover:before {
  opacity: 0.7;
}
.g-img-item:hover .eyes {
  opacity: 1;
}
.gallery-item:hover .g-text-item h4 {
  color: var(--clr-primary);
}
.g-img-item:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 98.2%;
  opacity: 0;
  transition: all 0.25s linear;
  z-index: 2;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    var(--clr-primary),
    var(--clr-secondary)
  );
}
.g-img-item .eyes {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 3;
}
.g-img-item .eyes svg {
  fill: #fff;
  width: 70px;
  height: 70px;
}
.g-text-item h4 {
  color: var(--vt-c-black-soft);
  margin-top: 20px;
  transition: all 0.25s linear;
  font-size: 1.5em;
  text-transform: capitalize;
}
.g-text-item p {
  text-transform: capitalize;
}
</style>