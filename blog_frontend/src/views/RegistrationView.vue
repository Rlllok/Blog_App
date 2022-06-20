<template>
    <body>
        <Card>
            <template #title>
                <h1>Registration</h1>
            </template>
            <template #content>
                <form class="register-form" @submit.prevent="handleSubmit">
                    <li v-for="(val, index) in errors" :key="val.id">
                        {{index}}: {{ val[0] }} 
                    </li>
                    <InputText class="registration-email" type="email" placeholder="Email" required v-model="email" style="margin-right: .5em"/>
                    <InputText class="registration-username" type="username" placeholder="Username" required v-model="username" style="margin-right: .5em"/>
                    <InputText class="registration-password" type="password" placeholder="Password" required v-model="password" style="margin-right: .5em"/>
                    <InputText class="registration-fullname" type="fullname" placeholder="Full Name" required v-model="full_name" style="margin-right: .5em"/>
                    <InputText class="registration-birthdate" type="date" placeholder="Birth Date" required v-model="birth_date" style="margin-right: .5em"/>
                    <InputText class="registration-bio" type="bio" placeholder="Bio" required v-model="bio" style="margin-right: .5em"/>
                    <div class="submit">
                        <Button class="reg-btn" label="Create Account" style="margin-top: .5em" @click="handleSubmit"/>
                    </div>
                </form>
            </template>
        </Card>
    </body>
</template>


<script>
import {getAPI} from '../backend_api'
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
            username: "",
            password: "",
            full_name: "",
            birth_date: "",
            bio: "",
            errors: {},
        }
    },

    methods: {
        handleSubmit() {
            getAPI.post('/api/register/', {
                email: this.email,
                username: this.username,
                password: this.password,
                full_name: this.full_name,
                birth_date: this.birth_date,
                bio: this.bio,
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                this.errors = error.response.data
                console.log(error)
            })
        }
    }
}
</script>


<style scoped>

</style>