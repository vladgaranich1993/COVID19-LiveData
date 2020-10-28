import Vue from "vue";
import Vuex from "vuex";
import { GlobalData, Country, FieldsBE, State } from "../models";

Vue.use(Vuex);

const globalData: GlobalData = {
  NewConfirmed: 0,
  TotalConfirmed: 0,
  NewDeaths: 0,
  TotalDeaths: 0,
  NewRecovered: 0,
  TotalRecovered: 0
};

const state: State = {
  globalData: globalData,
  countriesData: [],
  countriesNames: []
};

export default new Vuex.Store({
  state,
  actions: {
    async fetchAllData({ commit }): Promise<void> {
      const res = await fetch("https://api.covid19api.com/summary");
      const data: FieldsBE = await res.json();
      commit("updateGlobalData", data.Global);
      commit("updateCountries", data.Countries);
      commit(
        "updateCountriesNames",
        data.Countries.map((i: Country) => {
          return i.Country;
        })
      );
    }
  },
  mutations: {
    updateGlobalData(state, data: GlobalData): void {
      state.globalData = data;
    },
    updateCountries(state, data: Array<Country>): void {
      state.countriesData = data;
    },
    updateCountriesNames(state, data: Array<string>): void {
      state.countriesNames = data;
    }
  },
  getters: {
    getGlobalData(state): GlobalData {
      return state.globalData;
    },
    getCountries(state): Array<Country> {
      return state.countriesData;
    },
    getCountriesNames(state): Array<string> {
      return state.countriesNames;
    }
  }
});
