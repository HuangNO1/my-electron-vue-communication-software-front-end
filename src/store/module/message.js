import {
    UPDATE_ALL_MESSAGE,
    ADD_A_MESSAGE
} from '../mutations-types/message'

// 战暂时不支持 撤回消息
const friend = {
    state: {
        messages: [],
    },
    mutations: {
        [UPDATE_ALL_MESSAGE](state, messages) {
            state.messages = messages;
        },
        [ADD_A_MESSAGE](state, item) {
            state.messages.push(item)
        }
    },
    actions: {},
    getters: {}
}

export default friend;