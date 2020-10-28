<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Country } from "../models";
import { Bar } from "vue-chartjs";

@Component({
  extends: Bar
})
export default class ColumnChart extends Vue {
  @Prop({ type: String, required: true })
  selectedCountry!: string;

  @Prop({ type: Array, required: true })
  countries!: Array<Country>;

  private renderChart!: (chartData: any, options?: any) => void; 

  get activeCases() {
    return this.countries.map(country => country.TotalConfirmed);
  }

  get countryNames() {
    return this.countries.map(country => country.Country);
  }

  get totalDeaths() {
    return this.countries.map(country => country.TotalDeaths);
  }

  get totalRecovered() {
    return this.countries.map(country => country.TotalRecovered);
  }

  get chartOptions() {
    return {
      labels: this.countryNames,
      datasets: [
        {
          label: "Total Active Cases",
          backgroundColor: "#eb7434",
          data: this.activeCases
        },
        {
          label: "Total Deaths",
          backgroundColor: "#eb3a34",
          data: this.totalDeaths
        },
        {
          label: "Total Recovered",
          backgroundColor: "#6eeb34",
          data: this.totalRecovered
        }
      ]
    };
  }

  @Watch('selectedCountry')
  onCountryChange() {
    this.renderChart(
      this.chartOptions,
      { responsive: true, maintainAspectRatio: false }
    );
  }

  mounted() {
    this.renderChart(
      this.chartOptions,
      { responsive: true, maintainAspectRatio: false }
    );
  }
}
</script>

