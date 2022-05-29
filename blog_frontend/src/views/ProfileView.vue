<template>
    <body>
    <Card>
        <template #title>
            <h1>Profile</h1>
        </template>
        <template #content>
          <table>
            <tr>
              <th>Email:</th>
              <td>{{user_info.email}}</td>
            </tr>
            <tr>
              <th>Username:</th>
              <td>{{user_info.username}}</td>
            </tr>
            <tr>
              <th>Full Name:</th>
              <td>{{user_info.full_name}}</td>
            </tr>
            <tr>
              <th>Bio:</th>
              <td>{{user_info.bio}}</td>
            </tr>
            <tr>
              <th>Birth Date:</th>
              <td>{{user_info.birth_date}}</td>
            </tr>
          </table>
        </template>
    </Card>
  </body>
</template>

<script>
import {getAPI} from '../backend_api'
import Card from 'primevue/card'

export default {
  components: {
    Card,
  },
  data () {
    return {
      user_info: "",
    }
  },
  
  mounted (){
    this.get_UserInfor();
  },

  methods: {
    get_UserInfor () {
        getAPI('/api/user/',
        { headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } })
      .then(response => this.user_info = response.data)
    }
  }
}

</script>

<style scoped>
table th {
  text-align: left;
  width: 100px;
}
</style>