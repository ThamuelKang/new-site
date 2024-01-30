<template>
  <div class="main-wrapper">
    <main id="mainContainerHeight">
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
import Doodle from '../components/Doodle.vue'
import Project from '../components/Project.vue'
import Illustration from '../components/Illustration.vue'
import Nav from '../components/Nav.vue'
import Header from '../components/Header.vue'



export default {
  components: {
    Project,
    Doodle,
    Illustration,
    Header,
    Nav
  }
}

</script>
  

<style lang = "scss" scoped>
@import "../assets/variables.scss";

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

main {
  box-sizing: content-box;
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
</style>
