export default {
    mutations: {
        setRedirect(state, { link, index }) {
            state.redirect[index] = link;
        },

        resetRedirect(state) {
            state.redirect = {
                1: "",
                2: "",
                3: "",
                4: "",
                5: ""
            };
        }
    },

    state() {
        return {
            redirect: {
                1: "",
                2: "",
                3: "",
                4: "",
                5: ""
            }
        };
    },

    getters: {
        redirectArray(state) {
            return state.redirect;
        }
    }
};
