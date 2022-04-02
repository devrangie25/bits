const defaultState = () => ({
    parcels: [],
    products: [],
    branches: [],
    user: {},
});

export const mutations = {
    RESET_STATE(state) {
        Object.assign(state, defaultState());
    },
};

export const actions = {
    setState({ commit }) {
        commit("RESET_STATE");
    },
};
