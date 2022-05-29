<template>
  <body>
    <Card>
        <template #title>
            <h1>Posts</h1>
            <Button label="New Post" icon="pi pi-plus" v-if="this.$store.getters.loggedIn" @click="createPost"/>
        </template>
        <template #content>
            <div v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'PostDetails', params: {post_id: post.id}}">
                <h2>{{post.title}}</h2>
            </router-link>
                <h4>Author: {{post.owner}}</h4>
            </div>
        </template>
    </Card>
  </body>
</template>

<script>
import {getAPI} from '../backend_api'
import Button from 'primevue/button'
import Card from 'primevue/card'

export default {
  components: {
    Button,
    Card,
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
    createPost() {
      this.$router.push({name: "CreatePost"})
    }
  }
}

</script>
