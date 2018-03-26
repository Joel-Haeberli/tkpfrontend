<template>
  <div id="app">
    <router-link to="/about">about</router-link>
    <router-link to="/pics">pics</router-link>
    <router-link to="/home">home</router-link>
    <router-view/>
    <footer>
      <p>
        app brought to you by <a href="https://github.com/Joel-Haeberli">Joel-Haeberli</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

footer {
  display: block;
  height: 10%;
  width: 100%;
  background-color: black;
  color: white;
  bottom: 0%;
  margin-top: 2%;

}
</style>
