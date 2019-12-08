import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'home',
        component: Home,
        redirect: '/home/hot',
        children: [{
            path: 'hot',
            name: 'hot',
            meta: {
                showTaBar: true
            },
            component: () =>
                import ("@/views/Home/Children/Hot/Hot")
        }, {
            path: 'box',
            name: 'box',
            component: () =>
                import ("@/views/Home/Children/Box")
        }, {
            path: 'dress',
            name: 'dress',
            component: () =>
                import ("@/views/Home/Children/Dress")
        }, {
            path: 'ele',
            name: 'ele',
            component: () =>
                import ("@/views/Home/Children/Ele")
        }, {
            path: 'food',
            name: 'food',
            component: () =>
                import ("@/views/Home/Children/Food")
        }, {
            path: 'general',
            name: 'general',
            component: () =>
                import ("@/views/Home/Children/General")
        }, {
            path: 'man',
            name: 'man',
            component: () =>
                import ("@/views/Home/Children/Man")
        }, {
            path: 'mbaby',
            name: 'mbaby',
            component: () =>
                import ("@/views/Home/Children/Mbaby")
        }, {
            path: 'shirt',
            name: 'shirt',
            component: () =>
                import ("@/views/Home/Children/Shirt")
        }]
    },
    {
        path: '/me',
        name: 'me',
        component: () =>
            import ("@/views/Me/Me"),
        meta: {
            showTaBar: true
        }
    },
    {
        path: '/recomment',
        name: 'recomment',
        component: () =>
            import ("@/views/Recomment/Recomment"),
        meta: {
            showTaBar: true
        }
    },
    {
        path: '/chat',
        name: 'chat',
        component: () =>
            import ("@/views/Chat/Chat"),
        meta: {
            showTaBar: true
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ("@/views/Search/Search"),
        meta: {
            showTaBar: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("@/views/Login/Login")
    },
    {
        path: "/setting",
        name: "setting",
        component: () =>
            import ("@/views/Me/MeSetting")
    },
    {
        path: "/detail",
        name: "detail",
        component: () =>
            import ("@/views/Me/UserDetail")
    },
    {
        path: '/',
        redirect: '/home'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router