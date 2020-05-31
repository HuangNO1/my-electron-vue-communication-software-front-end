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
            state.messages.push(messages);
        },
        [ADD_A_MESSAGE](state, item) {
            // 遍歷所有 Message
            for (let i = 0; i < state.messages.length; i++) {
                // 如果 toId 一樣 推進去
                if (state.messages[i][0].toId === item.toId) {
                    state.messages[i].push(item);
                }
            }
        }
    },
    actions: {},
    getters: {}
}

export default friend;