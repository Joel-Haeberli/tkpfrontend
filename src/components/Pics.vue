<template>
    <div class="pics">
        <h1>Pics</h1>
        <ul>
            <li v-for="t in thumbnails" :key="t.id">
                <p>{{t.description}} : {{t.price}}</p>
                <img :src='`data:image/png;base64, ${t.data}`' />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Pics',
  
  data() {
      return {
        thumbnails: []
      }
  },

  mounted() {
      console.log("mounted: loading picture");
      this.loadPics()
  },

  methods: {
      loadPics() {
          this.$http.get('http://localhost:9000/thumbnails')
            .then(response => {
                this.thumbnails = response.data;
            })
      }
  }
}
</script>

<style>
</style>