import favourites from "./modules/favourites";
import basket from "./modules/basket";
import orders from "./modules/orders";
import search from "./modules/search";
import redirect from "./modules/redirect";

export const state = () => ({
    uploads: "http://cdn.tujjor.org"
});
export const mutations = {};
export const actions = {};

export const modules = {
    favourites,
    basket,
    orders,
    search,
    redirect
};
