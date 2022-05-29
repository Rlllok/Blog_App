<template>
    <body>
        <Card>
            <template #title>
                <h1>Log In</h1>
            </template>
            <template #content>
                <p v-if="error_text">{{error_text}}</p>
                <form>
                    <InputText type="email" placeholder="Email" required v-model="email" style="margin-right: .5em"/>
                    <InputText type="password" placeholder="Password" required v-model="password"/>
                <div class="submit">
                    <Button label="Log In" style="margin-top: .5em" @click="login"/>
                </div>
                </form>
            </template>
        </Card>
    </body>
</template>



<script>
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
    components: {
        InputText,
        Card,
        Button,
    },
    data() {
        return {
            email: "",
            password: "",
            error_text: "",
        }
    },

    methods: {
        login() {
            this.$store.dispatch('userLogin', {
                email: this.email,
                password: this.password,
            }).then(() => {
                this.$router.push({name: 'Home'})
            }).catch(error => {
                this.error_text = error.response.data.non_field_errors[0]
                console.log(error)
            })
        }
    }
}
</script>


<style scoped>

</style>