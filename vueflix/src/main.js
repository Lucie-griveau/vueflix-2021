import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import Home from './components/Home'
import Movie from './components/Movie'
import MovieCreation from "./components/MovieCreation";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    // { path: '/', component: App, name: 'Home' },
    { path: '/', component: Home, name: 'Home', props: true },
    { path: '/admin', component: MovieCreation, name: 'Admin', props: true },
    { path: '/movie/:id', component: Movie, name: 'Movie', props: true },
]

const router = new VueRouter({ //instancier la VueRouter (from 'vue-router')
    routes // short for `routes: routes`
})

new Vue({
    render: h => h(App),
    router,
    vuetify,
}).$mount('#app')

