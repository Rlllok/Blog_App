<template>
  <body>
    <Card>
      <template #title>
          <h2>{{data.title}}</h2>
          <h4>Author: {{data.owner}}</h4>
          <Button label="Delete Post" icon="pi pi-times" class="p-button-danger" v-if="this.$store.state.username === data.owner" @click="deletePost" />
      </template>
      <template #content>
          <p>{{data.content}}</p>
      </template>
      <template #footer>
      <Panel style="margin-top: .5em">
        <template #header>
            <h1>Comments</h1>
        </template>
        <!-- <div v-if="this.$store.getters.loggedIn"> -->
          <form class="post-form" @submit.prevent="addComment">
            <Textarea class="content" type="text" placeholder="Comment" style="width: 15em" required v-model="new_comment_text"/>
            <div class="submit">
              <Button label="Add Comment" icon="pi pi-plus" v-if="this.$store.getters.loggedIn" @click="addComment" style="margin-top: .5em"/>
            </div>
          </form>
        <!-- </div> -->
        <div class="comments" v-for="comment in comments" :key="comment.id">
          <h4>{{comment.owner}}</h4>
          <Button label="Delete Comment" icon="pi pi-times" class="p-button-danger" v-if="this.$store.state.username === comment.owner" @click="deleteComment(comment.id)"/>
          <p>{{comment.text}}</p>
        </div>
      </Panel>
      </template>
    </Card>
  </body>
</template>

<script>
import {getAPI} from '../backend_api'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import Card from 'primevue/card'

export default {
  components: {
    Button,
    Card,
    Panel,
    Textarea,
  },
  data () {
    return {
      data: "",
      post_id: this.$route.params.post_id,
      comments: [],
      new_comment_text: "",
    }
  },
  mounted (){
    this.get_PostDetails();
    this.get_CommentsData();
  },

  methods: {
    get_PostDetails () {
      getAPI('/posts/'+this.post_id+'/').then(response => this.data = response.data)
    },
    get_CommentsData() {
      getAPI('/posts/'+this.post_id+'/comments/').then(response => this.comments = response.data)
    },
    deletePost(){
      getAPI.delete('/posts/'+this.post_id+'/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
        console.log(response)
        this.$router.push({name: "Home"})
      }).catch(error => {
          console.log(error)
      })
    },
    deleteComment(id){
      getAPI.delete('/comments/'+id+'/', { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
        console.log(response)
        this.get_PostDetails();
        this.get_CommentsData();
      }).catch(error => {
          console.log(error)
      })
    },
    addComment() {
      getAPI.post('/comments/', {
          text: this.new_comment_text,
          post: this.post_id
      },{ headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
          console.log(response);
          this.get_PostDetails();
          this.get_CommentsData();
      }).catch(error => {
          console.log(error)
      })
    }
  }
}

</script>

<style scoped>

</style>