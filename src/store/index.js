import {createStore} from "vuex"
import axios from "axios";

export default createStore({
    state: {
        notification: {
            isShow: false,
            message: ''
        },
        offerForm: {
            name: '',
            phone: '',
            email: '',
            city_id: null
        }
    },
    getters: {

    },
    mutations: {
        UPDATE_NOTIFICATION(state, notification) {
            state.notification = notification
        },
        UPDATE_OFFER_FORM(state, form) {
            state.offerForm = form
        },
    },
    actions: {
        clearOfferForm({ commit }) {
            commit('UPDATE_OFFER_FORM', {
                name: '',
                phone: '',
                email: '',
                city_id: null
            })
        },
        async sendForm({ commit }, payload) {
            try {
                const data = {...payload, phone: payload.phone.replace(/[^\d+]/gm, '')}
                const response = await axios.post(' http://hh.autodrive-agency.ru/test-tasks/front/task-7/', data)
                commit('UPDATE_NOTIFICATION', { message: response.data, isShow: true })
            } catch (e) {
                console.log(e)
            }
        }
    }
})
