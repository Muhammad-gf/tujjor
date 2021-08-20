export default {
    actions: {
        async fetchRegion(ctx, { token }) {
            const regions = await this.$axios
                .$get("region/all", {
                    haeders: {
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
            ctx.commit("setRegions", regions.data);
            return regions;
        },

        async createOrder(ctx, { token, amount, address, products }) {
            const res = await this.$axios
                .$post("order/create", {
                    headers: {
                        token: token
                    },

                    amount: amount,
                    address: address,
                    products: products
                })
                .then(res => {
                    if (res.success) {
                        return res;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
            return res;
        }
    },

    mutations: {
        resetOrderSetts(state) {
            state.order.amount = null;
            state.order.address.region = state.order.address.district = state.order.address.address =
                "";
            state.order.products = [];
        },

        setRegions(state, data) {
            state.regions = data;
        },

        updateOrderProduct(state, { products, amount }) {
            state.order.products = products;
            state.order.amount = amount;
        },

        updateOrderAddress(state, { add }) {
            state.order.address = add;
        }
    },

    state() {
        return {
            order: {
                amount: null,
                address: {
                    region: "",
                    district: "",
                    address: "",
                    phone: ""
                },
                products: []
            },

            regions: {}
        };
    },

    getters: {
        orderAmount(state) {
            return state.order.amount;
        },

        orderAddress(state) {
            return state.order.address;
        },

        orderProducts(state) {
            return state.order.products;
        },

        orderAll(state) {
            return state.order;
        },

        allRegions(state) {
            return state.regions;
        }
    }
};
