<script setup>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';


</script>

<template>
  <main>
    
    <router-view />
  </main>
</template>

<style lang="scss" >
@import '@/assets/variables.scss';


.name {
  cursor: grab;

  height: 24px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid $black;
}

.line {
  margin: 0 2px;
  width: 1.25px;
  height: 100%;
  background-color: $black;
}

h1.name {
  background-color: $black;
  margin: 0 2px;
  padding: 0 8px;
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: $white;
}

p {
  font-size: 14px;
  line-height: 160%;
}

a {
  color: $black;
}

a:visited {
  color: $black;

}

.link {
  text-decoration: underline;
}

.link:hover {
  font-style: italic;
}


::-webkit-scrollbar {
  width: 8px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: $duckYellow;
}

::-webkit-scrollbar-thumb {
  background: $black;
}
</style>
