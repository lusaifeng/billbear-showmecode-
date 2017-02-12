<template>
  <div class="container">
    <news-list></news-list>
  </div>
</template>

<script>
import NewsList from './components/NewsList.vue'
export default {
  name: 'app',
  components: {
    NewsList
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
</style>
