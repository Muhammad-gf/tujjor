export default {
    actions: {
        async searchProduct(ctx, { page, limit }) {
            const res = await this.$axios
                .$post("product/filter?page=" + page + "&limit=" + limit, {
                    category: ctx.state.searchBody.category,
                    brand: ctx.state.searchBody.brand,
                    search: ctx.state.searchBody.search,
                    sort: ctx.state.searchBody.sort,
                    start: ctx.state.searchBody.start,
                    end: ctx.state.searchBody.end,
                    shop: ctx.state.searchBody.shopId
                })
                .then(response => {
                    console.log("fetch searching", response);
                    if (response.success) {
                        console.log("search", response);
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
            return res;
        },

        async productCount(ctx) {
            const res = await this.$axios
                .$post("product/count", {
                    category: ctx.state.searchBody.category,
                    brand: ctx.state.searchBody.brand,
                    search: ctx.state.searchBody.search,
                    sort: ctx.state.searchBody.sort,
                    start: ctx.state.searchBody.start,
                    end: ctx.state.searchBody.end,
                    shop: ctx.state.searchBody.shopId
                })
                .then(response => {
                    console.log("brand", response);
                    if (response.success) {
                        console.log("brand", response);
                        return response;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(err => console.error(err));
            return res;
        }
    },

    mutations: {
        setSearchTxt(state, data) {
            state.searchBody.search = data;
        },

        pushSearchCategory(state, data) {
            state.searchBody.category.push(data);
        },

        setSearchSort(state, data) {
            state.searchBody.sort = data;
        },

        setSearchBrand(state, data) {
            state.searchBody.brand = data;
        },

        setSearchPriceStart(state, data) {
            state.searchBody.start = data;
        },

        setSearchPriceEnd(state, data) {
            state.searchBody.end = data;
        },

        setSearchMainCategory(state, data) {
            state.searchBody.mainCategory = data;
        },

        setSearchChildCategory(state, data) {
            state.searchBody.childCategory = data;
        },

        setSearchShopId(state, data) {
            state.searchBody.shopId = data;
        },

        resetSearchSettings(state) {
            state.searchBody.category = [];
            state.searchBody.brand = [];
            state.searchBody.search = "";
            state.searchBody.sort = "";
            state.searchBody.start = null;
            state.searchBody.end = null;
            state.searchBody.mainCategory = {};
            state.searchBody.childCategory = {};
            state.searchBody.shopId = "";
        },

        resetSearchCategory(state) {
            state.searchBody.category = [];
            state.searchBody.mainCategory = {};
            state.searchBody.childCategory = {};
        }
    },

    state() {
        return {
            searchBody: {
                category: [],
                brand: [],
                search: "",
                sort: "",
                start: null,
                end: null,
                mainCategory: {},
                childCategory: {},
                shopId: ""
            }
        };
    },

    getters: {
        searchBody(state) {
            return state.searchBody;
        },

        searchBodyTxt(state) {
            return state.searchBody.search;
        }
    }
};
