<template>
  <!-- <Loading v-if="isLoading" /> -->

  <div class="main-wrapper">
    <main class="main-intro" id="mainContainerHeight">
      <header class="hero">
        <Nav />
        <section class="doodle-container">
          <Doodle />
        </section>

      </header>

      <section class="work">
        <Header />
        <Project />
      </section>
    </main>

    <aside class="illustrator-container">
      <illustration />
    </aside>
  </div>
</template>


<script>
import Loading from '../components/Loading.vue'
import Doodle from '@/components/Doodle.vue'
import Project from '@/components/Project.vue'
import Illustration from '@/components/Illustration.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'


export default {
  components: {
    Project,
    Loading,
    Doodle,
    Illustration,
    Header,
    Nav
  },
}

</script>


<style lang="scss" scoped>
@import "@/assets/variables.scss";

.illustrator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  padding: 12px;
  background-color: $white;
  border-left: 1px solid $black;
}

.main-wrapper {
  background-color: $lightGrey;
  display: grid;
  grid-template-columns: 1fr 400px;
}

.main-intro {
  overflow: auto;
  height: 100vh;
}

header.hero {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 12px 24px 0 12px;
  width: 100%;
  justify-content: space-between;
  gap: 24px;
}

.doodle-container {
  width: 100%;
}

section.work {
  display: flex;
}


@media only screen and (max-width: 1000px) {
  .main-wrapper {
    display: flex;
    flex-direction: column;
  }

  .main-intro {
    height: auto;
    overflow-y: hidden;
  }

  .illustrator-container {
    overflow-y: hidden;
    border-left: 0;
    height: auto;
  }

  header.hero {
    display: flex;
    flex-direction: column;
  }

  .illustrator-container {
    padding: 0;
    width: 100%;
    height: auto;
  }

  .illustrator-container>div {
    padding: 24px;
    display: flex;
    overflow-x: scroll;
    width: 100%;
    gap: 24px;
    position: static;
  }

  section.work {
    display: flex;
    gap: 24px;
    padding: 24px;
  }
}

@media only screen and (max-width: 650px) {
  header.hero {
    padding: 0;
    order: 3;
  }

  .main-intro {
    display: flex;
    flex-direction: column;
  }

  section.work {
    flex-direction: column;
  }

  .doodle-container {
    display: none;
  }

}
</style>
