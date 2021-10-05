import VueRouter from "vue-router"
import Vue from "vue";
import Home from "../components/Home";
import MovieCreation from "../components/MovieCreation";
import Movie from "../components/Movie";

Vue.use(VueRouter)

const routes = [
    // { path: '/', component: App, name: 'Home' },
    { path: '/', component: Home, name: 'Home', props: true },
    { path: '/admin', component: MovieCreation, name: 'Admin', props: true },
    { path: '/movie/:id', component: Movie, name: 'Movie', props: true },
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
    routes // short for `routes: routes`
})

export default router