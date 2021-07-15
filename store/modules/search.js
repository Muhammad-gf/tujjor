import { BIconCartX } from "bootstrap-vue";

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
                    end: ctx.state.searchBody.end
                })
                .then(response => {
                    console.log("searc", response);
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

        resetSearchSettings(state) {
            state.searchBody.search = [];
            state.searchBody.brand = [];
            state.searchBody.search = "";
            state.searchBody.sort = "";
            state.searchBody.start = null;
            state.searchBody.end = null;
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
                end: null
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
