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
        },

        async fetchCounBasket(ctx, token) {
            const res = await this.$axios
                .$get("/basket/count", {
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
                .catch(error => {
                    console.error(error);
                });

            ctx.commit("updateCountBasket", res.count);
        },

        async fetchToBasket(ctx, { token, product, param, size, count }) {
            // console.log(token, param, product, size, count);
            const res = await this.$axios
                .$post("basket/create", {
                    headers: {
                        token: token
                    },
                    param: param,
                    product: product,
                    size: size,
                    count: count
                })
                .then(response => {
                    if (response.success) {
                        return response.data;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));

            ctx.dispatch("fetchBasket");
            ctx.commit("pushToBasket", res);
            ctx.commit("increaseCountBasket");
        },

        async updateBasketCount(ctx, { token, id, count }) {
            const res = await this.$axios
                .$put("basket/" + id, {
                    headers: {
                        token: token
                    },
                    count: count
                })
                .then(response => {
                    if (response.success) {
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => console.error(error));
            // this action which i call, needed for work correctly count update function because it based on live count product
            ctx.dispatch("fetchBasket");
            // ctx.dispatch("fetchCounBasket");
        },

        async deleteFromBasket(ctx, { token, id }) {
            const res = await this.$axios
                .$delete("basket/" + id, {
                    headers: {
                        token: token
                    }
                })
                .then(response => {
                    if (response.success) {
                        console.log("delete compilited", res);
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => console.error(error));

            let data = id == "rm/all" ? 0 : id;
            console.log(data);

            ctx.dispatch("fetchBasket");
            // ctx.dispatch("fetchCounBasket");
        }
    },

    mutations: {
        updateBasket(state, data) {
            state.basket.basket = data;
        },

        updateCountBasket(state, data) {
            state.basket.countBasket = data;
        },

        pushToBasket(state, data) {
            state.basket.basket.push(data);
        },

        increaseCountBasket(state) {
            state.basket.countBasket++;
        },

        decreaseCountBasket(state) {
            state.basket.countBasket--;
        },

        basketFilter(state, { product, param, size }) {
            const result = [];
            for (let i = 0; i < state.basket.basket.length; i++) {
                let data = state.basket.basket[i];
                if (
                    data.param._id === param &&
                    data.product._id === product &&
                    data.size._id === size
                ) {
                    result.push(data);
                }
            }

            console.log(state.basket.basket);
            console.log(result);

            state.basket.isIn = result;
        },

        deleteItemFromBasket(state, {}) {
            const result = [];
            for (let i = 0; i < state.basket.basket.length; i++) {
                let data = state.basket.basket[i];
                if (
                    data.param._id === param &&
                    data.product._id === product &&
                    data.size._id === size
                )
                    result.push(data);
            }
        },

        changeCountItem(state, { index, count }) {
            console.log(count, typeof count, index, typeof index);
            state.basket.basket[index].count = count;
        }
    },

    state() {
        return {
            basket: {
                basket: [],
                countBasket: null,
                isIn: null
            }
        };
    },

    getters: {
        allInBasket(state) {
            return state.basket.basket;
        },

        countBasket(state) {
            return state.basket.countBasket;
        },

        isInBasket(state) {
            return state.basket.isIn;
        }
    }
};
