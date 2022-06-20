import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import PostsView from '../views/PostsView.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import ProfileView from '../views/ProfileView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: LogoutView,
    },
    {
        path: '/registration',
        name: 'Registration',
        component: RegistrationView,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileView,
    },
    {
        path: '/posts/:post_id',
        name: 'PostDetails',
        component: PostDetailsView,
    },
    {
        path: '/creatpost',
        name: 'CreatePost',
        component: CreatePostView
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export { routes };

export default router