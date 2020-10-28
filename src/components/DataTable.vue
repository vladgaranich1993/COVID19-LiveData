<template>
  <table class="table table-hover table-striped">
    <thead class="thead-dark">
      <tr>
        <th>Country:</th>
        <th>Total Active Cases:</th>
        <th>Total Deaths:</th>
        <th>Total Recoveries:</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="country in countries">
        <tr :key="country.CountryCode">
          <th>{{ country.Country }}</th>
          <th>{{ country.TotalConfirmed }}</th>
          <th>{{ country.TotalDeaths }}</th>
          <th>{{ country.TotalRecovered }}</th>
        </tr>
      </template>
      <tr v-if="globalData" class="thead-dark">
        <th>
          Total:
        </th>
        <th>
          {{ globalData.TotalConfirmed }}
        </th>
        <th>
          {{ globalData.TotalDeaths }}
        </th>
        <th>
          {{ globalData.TotalRecovered }}
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { GlobalData, Country } from "../models";

@Component({})
export default class DataTable extends Vue {
  @Prop({ type: Object, required: true })
  globalData!: GlobalData;

  @Prop({ type: Array, required: true })
  countries!: Array<Country>;
}
</script>
