<template>
    <body>
        <Card>
            <template #title>
                <h1>New Post</h1>
            </template>
            <template #content>
                <p v-if="error_text">{{error_text}}</p>
                <form>
                    <div>
                        <InputText type="text" placeholder="Title" required v-model="title" style="margin-bottom: .5em"/>
                    </div>
                    <div>
                        <Textarea class="content" type="text" placeholder="Content" required v-model="content"/>
                    </div>
                <div class="submit">
                    <Button label="Create New Post" icon="pi pi-plus" style="margin-top: .5em" @click="handleSubmit"/>
                </div>
                </form>
            </template>
        </Card>
    </body>
</template>


<script>
import {getAPI} from '../backend_api'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {

    components: {
        InputText,
        Textarea,
        Card,
        Button,
    },
    data() {
        return {
            title: "",
            content: "",
        }
    },
    methods: {
        handleSubmit() {
            getAPI.post('/posts/', {
                title: this.title,
                content: this.content
            },{ headers: { Authorization: `Bearer ${this.$store.state.accessToken}` } }).then(response => {
                console.log(response.data);
                this.$router.push({name: "Home"})
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.content {
    height: 15em;
    width: 75%;
}
</style>