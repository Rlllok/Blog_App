<template>
  <body>
    <!-- <Button label="Create Post" @click="createPost" /> -->
    <button @click="createPost">Sdasd</button>
    <div class="container">
        <h1>POSTS:</h1>
        <div v-for="post in posts" :key="post.id">
          <router-link :to="{name: 'PostDetails', params: {post_id: post.id}}">
            <h4>{{post.title}}</h4>
          </router-link>
            <p>{{post.content}}</p>
        </div>
    </div>
  </body>
</template>

<script>
import {getAPI} from '../backend_api'
import Button from 'primevue/button'

export default {
  components: {
    Button,
  },
  data () {
    return {
      posts: [],
    }
  },
  
  mounted (){
    this.get_Posts();
  },

  methods: {
    get_Posts() {
      getAPI('/posts/',).then(response => this.posts = response.data)
    },
    createPost($event) {
      this.$router.push({name: "CreatePost"})
    }
  }
}

</script>
