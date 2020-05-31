import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import friend from './module/friend'
import channel from './module/channel'
import message from './module/message'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        friend,
        channel,
        message
    }
})