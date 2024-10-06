<template>
    <div class="loading-screen">
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Loading",
  };
  </script>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    font-size: 2rem;
  }
  </style>
  