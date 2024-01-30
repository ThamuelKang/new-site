<template>
  <div class="work" v-for="project in project" :key="project.id">
    <router-link :to="{ name: 'WorkDetails', params: { id: project.id } }">

      <p class = "tooltip">View Project</p>
      <img :src="project.image" alt="Project image" class="project-image">

    </router-link>

    <div class="project-info">
      <div class="project-title">
        <h3>{{ project.title }}</h3>
        <h3 class="category">{{ project.category }}</h3>
      </div>

      <p>{{ project.description }} <router-link
          :to="{ name: 'WorkDetails', params: { id: project.id } }"><strong>View Project</strong></router-link></p>
    </div>
  </div>
</template>
  

<script>
import projectData from '../projects.json'

export default {
  data() {
    return {
      project: projectData
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/variables.scss";


.work {
  border: 1px $black solid;
  margin: 0 0 48px 0;
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr;
  grid-gap: 0;
}


img.project-image {
  display: block;
  object-fit: cover;
}
.tooltip {
  display: hidden;
  position: absolute;
  background-color: black;
  font-size: 24px;
  color: white;
  font-weight: 600;

}
.work:hover {
  opacity: .5;
  transition: opacity 150ms ease-in-out;
}

.project-info {
  display: grid;
  width: 100%;
  grid-template-columns: .5fr 1fr;
  border-top: 1px solid $black;
  margin: -1px 0 0 0;
}

.project-title {
  background-color: $black;
  padding: 24px;
}

h3 {
  font-size: 16px;
  margin: 0 0 12px 0;
  color: white;
}

h3.category {
  font-style: italic;
  font-weight: 400;
  margin: 0;
  font-size: 14px;
}

p {
  padding: 24px;
}

a {
  color: black;
}

@media only screen and (max-width: 1100px) {
  .project-info {
    grid-template-columns: 1fr;
  }

  img.project-image {
    height: auto;
  }

  .work {
    min-width: 480px;
    margin: 0 16px 24px 16px;
  }

  .work:first-child {
    margin: 0 16px 24px 32px;
  }

  .work:last-child {
    margin: 0 32px 24px 16px;
  }
}

@media only screen and (max-width: 550px) {
  .work {
    min-width: calc(100% - 36px);
    margin: 0 12px 24px 12px;
  }

  .work:first-child {
    margin: 0 12px 16px 16px;
  }

  .work:last-child {
    margin: 0 16px 16px 12px;
  }
}
</style>
  