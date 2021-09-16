export default {
    actions: {
        async fetchRegion(ctx) {
            const regions = await this.$axios
                .$get("region/all")
                .then(response => {
                    if (response.success) {
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));

            console.log("regions", regions);
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

        updateOrderAllProducts(state, { products2 }) {
            state.orderAllProducts = products2;
        },

        updateOrderAddress(state, { add }) {
            state.order.address = add;
        },
        orderProduct(state, data) {
            state.allProduct = data;
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

            orderAllProducts: ["0"],

            regions: {},
            allProduct: null
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
        allProduct(state) {
            return state.allProduct;
        },
        orderAllProducts(state) {
            return state.orderAllProducts;
        },

        orderAll(state) {
            return state.order;
        },

        allRegions(state) {
            return state.regions;
        }
    }
};
