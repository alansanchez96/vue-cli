import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import router from '../router';

const storage = createStore({

    state: {
        isAuth: false,
        id: null,
        username: ''
    },
    mutations: {
        setAuthenticate(state, value) {
            state.isAuth = value;
        },
        setId(state, id) {
            state.id = id;
        },
        setUsername(state, username) {
            state.username = username;
        },
        logout(state) {
            state.isAuth = false;
            state.id = null;
            state.username = '';
            localStorage.removeItem('access_token');
            /* router.push('/login'); */
        }
    },
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]

});

export default storage;