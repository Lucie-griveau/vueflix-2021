import VueRouter from "vue-router"
import Vue from "vue";
import Home from "../components/Home";
import Movies from "../components/Movies";
import Movie from "../components/Movie";
import Collections from "../components/Collections";
import Collection from "../components/Collection";
import Admin from "../components/Admin";
import MovieCreation from "../components/MovieCreation";
import CollectionCreation from "../components/CollectionCreation";

Vue.use(VueRouter)

const routes = [
    // { path: '/', component: App, name: 'Home' },
    { path: '/', component: Home, name: 'Home', props: true },

    { path: '/movies', component: Movies, name: 'Movies', props: true },
    { path: '/movie/:id', component: Movie, name: 'Movie', props: true },

    { path: '/collections', component: Collections, name: 'Collections', props: true },
    { path: '/collection/:id', component: Collection, name: 'Collection', props: true },

    { path: '/admin', component: Admin, name: 'Admin', props: true },
    { path: '/admin/add_movie', component: MovieCreation, name: 'MovieCreation', props: true },
    { path: '/admin/add_collection', component: CollectionCreation, name: 'CollectionCreation', props: true },
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
    routes // short for `routes: routes`
})

export default router