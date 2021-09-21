export default {
    actions: {
        async fetchBasket(ctx, token) {
            const res = await this.$axios
                .$get("/basket/all", {
                    headers: {
                        token: token
                    }
                })
                .then(response => {
                    if (response.success) {
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));

            ctx.commit("updateBasket", res.data);

            return res;
        }
    },

    mutations: {
        updateLoggedIn(state) {
            state.loggedIn = this.$auth.loggedIn;
        }
    },

    state() {
        return {
            loggedIn: Boolean
        };
    },

    getters: {
        loggedIn(state) {
            return state.loggedIn;
        }
    }
};
