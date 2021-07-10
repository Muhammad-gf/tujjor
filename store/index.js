import favourites from "./modules/favourites";
import basket from "./modules/basket";
import orders from "./modules/orders";

export const state = () => ({
    uploads: "http://cdn.tujjor.org"
});
export const mutations = {};
export const actions = {};

export const modules = {
    favourites,
    basket,
    orders
};
