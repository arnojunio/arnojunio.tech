import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home'
import axios from 'axios'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'blog.list',
        component: () =>
            import ("../pages/BlogShow.vue")
    },
    {
        path: '/editcode',
        name: 'edit.code',
        component: () =>
            import ("../pages/EditCode.vue")
    },
    {
        path: '/blog/:slug',
        name: 'blog.show',
        component: () =>
            import ("../pages/BlogDetail.vue"),
        props: route => ({...route.params, slug: route.params.slug }),
        beforeEnter(to, from) {
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .get(`/api/artigo/`, { params: { slug: to.params.slug } })
                    .then((response) => {
                        if (response.data.code == 403) {
                            return {
                                name: "NotFound",
                                params: { pathMatch: to.path.split("/").slice(1) },
                                query: to.query,
                                hash: to.hash,
                            }
                        }
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            });
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ("../components/About.vue")
    },
    {
        path: '/termos-e-condicoes',
        name: 'terms.show',
        component: () =>
            import ("../pages/Terms.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
            import ("../pages/NotFound.vue"),
    },
]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
        linkActiveClass: 'app-active-link',
        scrollBehavior(to, from, savedPosition) {
            return savedPosition || new Promise((resolve) => {
                setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
            })
        }
    })
    /*
    router.beforeResolve((to, from, next) => {
        // If this isn't an initial page load.
        if (to.name) {
            // Start the route progress bar.
            NProgress.start()
        }
        next()
    })*/
    /*
    router.afterEach((to, from) => {
        // Complete the animation of the route progress bar.
        //NProgress.done()

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/acesso/`)
                .then(response => {})
                .catch(function(error) {
                    console.error(error);
                });
        })

    })*/

export default router