<template>
  <div id="app">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark" :fluid="true">
      <template #header>
        BootstrapVue
      </template>
      <template #lead>
        This is a simple hero unit, a simple jumbotron-style componet for calling extra attention to featured content or information
      </template>
    </b-jumbotron>
    <div class="arty">Max Beekmans</div>
    <div>Frits</div>
    <About></About>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Projects></Projects>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Projects from './components/Projects.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Projects,
    About
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.jumbotron {
  background-image: url("./assets/headerPicture.jpg");
  background-repeat: no-repeat;
  min-height: 720px;
}
</style>
