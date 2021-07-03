export default {
    actions: {
        async fetchFavouritesId(ctx, token) {
            const res = await this.$axios
                .$get("/like/count", {
                    headers: {
                        token: token
                    }
                })
                .then(response => {
                    if (response.success) {
                        return response.data;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => {
                    console.error(error);
                });

            ctx.commit("updateFavouritesId", res);
        },

        async fetchFavourites(ctx, token) {
            const res = await this.$axios
                .$get("/like/all", {
                    headers: {
                        token: token
                    }
                })
                .then(response => {
                    if (response.success) {
                        return response.data;
                    } else {
                        throw new Error("Could not save data!");
                    }
                })
                .catch(error => console.error(error));

            ctx.commit("updateFavourites", res);
        }
    },

    mutations: {
        updateFavourites(state, data) {
            state.favourites.favourites = data;
        },

        updateFavouritesId(state, data) {
            state.favourites.favouritesId = data;
        },

        pushFavourites(state, data) {
            state.favourites.favouritesId.push(data);
        },

        pushFavouritesId(state, data) {
            state.favourites.favouritesId.push(data);
        },

        deleteFavourites(state, data) {
            state.favourites.favourites = state.favourites.favourites.filter(
                res => res._id !== data
            );
        },

        deleteFavouritesId(state, data) {
            state.favourites.favouritesId = state.favourites.favouritesId.filter(
                res => res._id !== data
            );
        },

        deleteAllFavourites(state) {
            state.favourites.favourites = [];
        },

        deleteAllFavouritesId(state) {
            state.favourites.favouritesId = [];
        }
    },

    state() {
        return {
            favourites: {
                favouritesId: [],
                favourites: []
            }
        };
    },

    getters: {
        allFavourites(state) {
            return state.favourites.favourites;
        },

        allFavouritesId(state) {
            return state.favourites.favouritesId;
        }
    }
};
