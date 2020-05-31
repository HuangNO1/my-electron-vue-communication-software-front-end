import {
    UPDATE_USER_USERNAME,
    UPDATE_USER_EMAIL,
    UPDATE_USER_PHONE,
    UPDATE_ALL_USER_DATA
} from '../mutations-types/user'

const user = {
    state: {
        username: "",
        email: "",
        phone: "",
        password: "",
    },
    mutations: {
        [UPDATE_USER_USERNAME](state, username) {
            state.username = username;
        },
        [UPDATE_USER_EMAIL](state, email) {
            state.email = email;
        },
        [UPDATE_USER_PHONE](state, phone) {
            state.phone = phone;
        },
        [UPDATE_ALL_USER_DATA](state, user) {
            state.username = user.username;
            state.email = user.email;
            state.phone = user.phone;
        },
    },
    actions: {},
    getters: {}
}

export default user;