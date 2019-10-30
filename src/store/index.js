import Vue from 'vue'
import Vuex from 'vuex'

import {
    getHomeCasula,
    getHomeNav,
    getHomeShopList,
    getRecommentShopList
} from '../api/index';

import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMENT_SHOP_LIST
} from "./mutation-type";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 首页轮播
        homecasual: [],
        // 首页导航图
        homenav: [],
        // 首页商品列表
        homeshoplist: [],
        // 推荐商品列表
        recommendshoplist: []
    },
    mutations: {
        // 添加state数据
        [HOME_CASUAL](state, { homecasual }) {
            state.homecasual = homecasual;
        },
        [HOME_NAV](state, { homenav }) {
            state.homenav = homenav;
        },
        [HOME_SHOP_LIST](state, { homeshoplist }) {
            state.homeshoplist = homeshoplist;
        },
        [RECOMMENT_SHOP_LIST](state, { recommendshoplist }) {
            state.recommendshoplist = recommendshoplist;
        }
    },
    actions: {
        // 获取首页轮播图
        async reqHomeCasula({ commit }) {
            // 异步请求ajax
            const res = await getHomeCasula();
            const homecasual = res.message.data;
            // 调用同步方法 
            commit(HOME_CASUAL, { homecasual });
        },
        // 获取首页导航图
        async reqHomeNav({ commit }) {
            const res = await getHomeNav();
            const homenav = res.message.data;
            commit(HOME_NAV, { homenav });
        },
        // 请求首页商品数据
        async reqHomeShopList({ commit }) {
            const res = await getHomeShopList();
            const homeshoplist = res.message.goods_list;
            commit(HOME_SHOP_LIST, { homeshoplist })
        },
        // 推荐商品列表
        async reqRecommentShopList({ commit }) {
            const res = await getRecommentShopList();
            const recommendshoplist = res.message.data;
            commit(RECOMMENT_SHOP_LIST, { recommendshoplist });
        }
    },
    modules: {}
})