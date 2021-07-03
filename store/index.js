import favourites from "./modules/favourites.js";
import basket from "./modules/basket.js";

export const state = () => ({
    uploads: "http://cdn.tujjor.org"
});
export const mutations = {};
export const actions = {};

export const modules = {
    favourites,
    basket
};
