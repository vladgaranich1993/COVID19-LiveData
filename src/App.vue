<template>
  <div id="app" class="container">
    <h1>COVID19 Data</h1>
    <vue-basic-autocomplete
      v-model="result"
      :options="getCountriesNames"
      input-class="form-control"
    />
    <button
      @click="isTableVisible = !isTableVisible"
      class="btn btn-info my-2 float-right"
    >
      Change View
    </button>
    <data-table
      v-if="isTableVisible"
      :global-data="getGlobalData"
      :countries="countries"
    />
    <column-chart
      v-else
      :countries="countries"
      :selected-country="result"
    />
  </div>
</template>

<script lang="ts">
import { Action, Getter } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import DataTable from "./components/DataTable.vue";
import ColumnChart from "./components/ColumnChart.vue";
import { GlobalData, Country } from "./models";

@Component({
  components: {
    DataTable,
    ColumnChart
  }
})
export default class App extends Vue {
  isTableVisible = true;

  result = "";

  get countries() {
    if (this.result) {
      return this.getCountries.filter(
        country => this.result === country.Country
      );
    }
    return this.getCountries;
  }

  @Action("fetchAllData")
  fetchAllData!: () => void;

  @Getter("getGlobalData")
  public getGlobalData!: GlobalData;

  @Getter("getCountriesNames")
  public getCountriesNames!: Array<string>;

  @Getter("getCountries")
  public getCountries!: Array<Country>;

  async mounted() {
    await this.fetchAllData();
  }
}
</script>
