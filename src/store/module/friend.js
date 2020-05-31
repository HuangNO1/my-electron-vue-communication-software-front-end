import {
    ADD_TO_FRIEND,
    DELETE_FRIEND
} from '../mutations-types/friend'

const friend = {
    state: {
        friends: [],
    },
    mutations: {
        [ADD_TO_FRIEND](state, item) {
            state.friends.push(item);
        },
        [DELETE_FRIEND](state, index) {
            state.friends.splice(index, 1);
        }
    },
    actions: {},
    getters: {}
}

export default friend;