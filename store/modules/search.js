export default {
    actions: {
        async searchProduct(ctx, { page, limit }) {
            const res = await this.$axios
                .$post("product/filter?page=" + page + "&limit=" + limit, {
                    ...ctx.state.searchBody
                })
                .then(response => {
                    if (response.success) {
                        console.log("search", response);
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

        pushSearchBrand(state, data) {
            state.searchBody.brand.push(data);
        },

        pushSearchSort(state, data) {
            state.searchBody.sort += data;
        },

        setSearchPriceStart(state, data) {
            state.searchBody.start = data;
        },

        setSearchPriceEnd(state, data) {
            state.searchBody.end = data;
        },

        resetSearchSettings(state) {
            state.searchBody.search = [];
            state.searchBody.brand = [];
            state.searchBody.search = "";
            state.searchBody.sort = "";
        }
    },

    state() {
        return {
            searchBody: {
                category: [],
                brand: [],
                search: "",
                sort: ""
            }
        };
    },

    getters: {
        searchBody(state) {
            return state.searchBody;
        },

        searchBodyTxt(state) {
            return state.searchBody.sort;
        }
    }
};
