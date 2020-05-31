import {
    UPDATE_ALL_CHANNELS,
    CREATE_A_Channel,
    DELETE_A_CHANNEL,
    ADD_A_CHANNEL,
    EXIT_A_CHANNEL
} from '../mutations-types/channel'

const channel = {
    state: {
        channels: [],
    },
    mutations: {
        [UPDATE_ALL_CHANNELS](state, channels) {
            state.channels = channels;
        },
        [CREATE_A_Channel](state, item) {
            state.channels.push(item)
        },
        [DELETE_A_CHANNEL](state, index) {
            state.channels.splice(index, 1)
        },
        [ADD_A_CHANNEL](state, item) {
            state.channels.push(item)
        },
        [EXIT_A_CHANNEL](state, index) {
            state.channels.splice(index, 1)
        }
    },
    actions: {},
    getters: {}
}

export default channel;