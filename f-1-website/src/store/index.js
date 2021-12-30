import axios from 'axios'
import { createStore } from 'vuex';

const currentYear = 2021
const APIURL = "http://ergast.com/api/f1/" + currentYear + "/drivers";
const xmlConverter = require('xml-js');

const state = {
    driverStats: []
}

const getters = {
    allDriverStats: (state) => state.driverStats
}

const actions = {
    async setAllDriverStats(state) {
        axios.get(APIURL)
            .then(response => {
                state.commit('SET_DRIVER_STATS', xmlConverter.xml2json(response.data, {compact: true, spaces: 4}));
                console.log(xmlConverter.xml2json(response.data, {compact: true, spaces: 4}))
            })
            .catch(error => {
               console.log(error);
            });
    },
}

const mutations = {
    SET_DRIVER_STATS(state, driverStats) {
        state.driverStats = driverStats
    }
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})