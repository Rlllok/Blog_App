// import Vue from 'vue'
import {createStore} from 'vuex'
import {getAPI} from './backend_api'

// Vue.use(Vuex)
const store = createStore({
    state: {
        refreshToken: null,
        accessToken: null,
        username: null,
    },
    mutations: {
        updateStorage (state, {access, refresh, username}) {
            state.accessToken = access
            state.refreshToken = refresh
            state.username = username
        },
        destroyToken (state) {
            state.accessToken = null
            state.refreshToken = null
        }
    },
    getters: {
        loggedIn (state) {
            return state.accessToken != null
        }
    },
    actions: {
        userLogin (context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/api/login/', {
                    email: usercredentials.email,
                    password: usercredentials.password,
                }).then(response => {
                    context.commit('updateStorage',{ access: response.data.tokens.access, refresh: response.data.tokens.refresh, username: response.data.username }) 
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        userLogout (context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
            } 
        }
    }
})

export default store