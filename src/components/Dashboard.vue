<template>
  <v-container>
    <div class="head-title">
      <img
        style="animation-delay: 3.5s; animation-duration: 800ms"
        src="@/assets/coronavirus.svg"
      />
      <h1 class="display-2">Covid19</h1>
      <h1 class="title font-weight-light">Realtime Tracking</h1>
    </div>
    <div class="global" align="center">
      <h1 class="title font-weight-light">Select For Country Update</h1>
      <model-select
        class="country-select"
        :options="options"
        @input="changeCountry"
        v-model="selectedCountry"
        placeholder="Select Country"
      ></model-select>
      <v-alert class="mt-5" width="500px" type="error" v-if="countryError"
        >Sorry! The country's information not found.</v-alert
      >
      <div>
        <p class="body-1 mt-5 font-weight-light">
          Last Update: {{ countriesUpdate.lastUpdate }}
        </p>
      </div>
    </div>

    <!-- Local Case -->
    <section class="local">
      <div class="d-inline-flex mx-4">
        <div class="card">
          <h1 class="title font-weight-light">Posifif</h1>
          <p class="display-2">
            {{ countriesUpdate.confirmed | putComma }}
          </p>
          <p class="subtitle-2 font-weight-light">
            +{{ todayInCountries }} Dari hari kemarin
          </p>
        </div>
      </div>
      <div class="d-inline-flex mx-4">
        <div class="card">
          <h1 class="title font-weight-light">Meninggal</h1>
          <p class="display-2">{{ countriesUpdate.deaths | putComma }}</p>
          <p class="subtitle-2 font-weight-light">
            Total {{ countryDeathPercentage }}% Telah Meninggal
          </p>
        </div>
      </div>
      <div class="d-inline-flex mx-4">
        <div class="card">
          <h1 class="title font-weight-light">Sembuh</h1>
          <p class="display-2">{{ countriesUpdate.recovered | putComma }}</p>
          <p class="subtitle-2 font-weight-light">
            Total {{ countryRecoveredPercentage }}% Telah Sembuh
          </p>
        </div>
      </div>
    </section>

    <!-- Global Case -->
    <section class="global">
      <div class="local">
        <h1 class="display-1">Global Case</h1>
        <p class="body-1 font-weight-light">
          Last Update: {{ global.lastUpdate }}
        </p>
      </div>
      <div class="d-inline-flex mx-4">
        <div class="card">
          <h1 class="title font-weight-light">Posifif</h1>
          <p class="display-2">{{ global.confirmed | putComma }}</p>
          <p class="subtitle-2 font-weight-light">
            +{{ todayInGlobal }} Dari hari kemarin
          </p>
        </div>
      </div>
      <div class="d-inline-flex mx-4">
        <div class="card">
          <h1 class="title font-weight-light">Meninggal</h1>
          <p class="display-2">{{ global.deaths | putComma }}</p>
          <p class="subtitle-2 font-weight-light">
            {{ globalDeathPercentage }}% Telah meninggal
          </p>
        </div>
      </div>
      <div class="d-inline-flex mx-4">
        <div class="card">
          <h1 class="title font-weight-light">Sembuh</h1>
          <p class="display-2">{{ global.recovered | putComma }}</p>
          <p class="subtitle-2 font-weight-light">
            {{ globalRecoveredPercentage }}% Telah Sembuh
          </p>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
import countries from "./countries.json";
import { ModelSelect } from "vue-search-select";

export default {
  name: "Dashboard",
  components: {
    ModelSelect,
  },
  data() {
    return {
      data: "",
      todayInCountries: 0,
      countryDeathPercentage: 0,
      countryRecoveredPercentage: 0,
      todayInGlobal: 0,
      globalDeathPercentage: 0,
      globalRecoveredPercentage: 0,
      countryError: false,
      loading: false,
      globalLoading: false,
      global: {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        lastUpdate: "",
      },
      countriesUpdate: {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        lastUpdate: "",
      },
      options: [],
      selectedCountry: {
        value: "",
        text: "",
      },
      baseEndpoint: "https://covid19.mathdro.id/api",
      api_key: "e1d3c93d34463ce8bc5bcdee587d35322b552d0a8323b1bbbe89c557", //Ip location data free
    };
  },
  methods: {
    async locatedCountry() {
      let { data } = await axios.get(
        `https://api.ipdata.co/?api-key=${this.api_key}`
      );
      this.selectedCountry.value = data.country_code;
      this.selectedCountry.text = data.country_name;
      this.changeCountry();
    },
    async getRootData() {
      this.globalLoading = false;
      const response = await axios.get(this.baseEndpoint);
      this.data = response.data;
      // console.log(this.data);
      this.global.confirmed = this.data.confirmed.value;
      this.global.deaths = this.data.deaths.value;
      this.global.recovered = this.data.recovered.value;
      this.global.lastUpdate = moment(this.data.lastUpdate).format(
        "MMMM Do YYYY, h:mm:ss a"
      );
      this.globalLoading = false;
    },
    async getCountries() {
      for (let [text, value] of Object.entries(countries)) {
        this.options.push({ text, value });
      }
    },
    async changeCountry() {
      this.countryRecoveredPercentage = 0;
      this.countryDeathPercentage = 0;
      this.todayInCountries = 0;
      for (let [key] of Object.entries(this.countriesUpdate)) {
        this.countriesUpdate[key] = 0;
      }
      this.countryError = false;
      this.loading = true;

      const { data } = await axios
        .get(`${this.baseEndpoint}/countries/${this.selectedCountry.value}`)
        .catch(() => {
          this.loading = false;
          this.countryError = true;
          setTimeout(() => {
            this.countryError = false;
          }, 5000);
          this.countriesUpdate.confirmed = 0;
          this.countriesUpdate.deaths = 0;
          this.countriesUpdate.recovered = 0;
          this.countriesUpdate.lastUpdate = "";
        });
      const yesterday = moment()
        .subtract(1, "days")
        .startOf("day")
        .format("M-D-YYYY");
      const beforeYesterday = moment()
        .subtract(2, "days")
        .startOf("day")
        .format("M-D-YYYY");
      let yesterdayResponse;
      let beforeYesterdayResponse;
      /* eslint-disable */
      try {
        yesterdayResponse = await axios.get(
          `${this.baseEndpoint}/daily/${yesterday}`
        );
        beforeYesterdayResponse = await axios.get(
          `${this.baseEndpoint}/daily/${beforeYesterday}`
        );
      } catch (error) {
        const tempYesterday = moment()
          .subtract(2, "days")
          .startOf("day")
          .format("M-D-YYYY");
        yesterdayResponse = await axios.get(
          `${this.baseEndpoint}/daily/${tempYesterday}`
        );
        const tempBeforeYesterday = moment()
          .subtract(3, "days")
          .startOf("day")
          .format("M-D-YYYY");
        beforeYesterdayResponse = await axios.get(
          `${this.baseEndpoint}/daily/${tempBeforeYesterday}`
        );
      }
      let yesterdayConfirm = 0;
      let beforeYesterdayConfirm = 0;
      let globalYesterdayConfirm = 0;
      let globalBeforeYesterdayConfirm = 0;
      yesterdayResponse.data.map((data) => {
        globalYesterdayConfirm += Number(data.confirmed);
        if (data.countryRegion == this.selectedCountry.text) {
          yesterdayConfirm += Number(data.confirmed);
        }
      });
      beforeYesterdayResponse.data.map((data) => {
        globalBeforeYesterdayConfirm += Number(data.confirmed);
        if (data.countryRegion == this.selectedCountry.text) {
          beforeYesterdayConfirm += Number(data.confirmed);
        }
      });
      this.loading = false;
      this.countriesUpdate.confirmed = data.confirmed.value;
      this.countriesUpdate.deaths = data.deaths.value;
      this.countriesUpdate.recovered = data.recovered.value;
      this.countriesUpdate.lastUpdate = moment(data.lastUpdate).format(
        "MMMM Do YYYY, h:mm:ss a"
      );

      // count how many affected past yesterday globally
      this.todayInGlobal =
        globalYesterdayConfirm -
        globalBeforeYesterdayConfirm +
        (this.global.confirmed - globalYesterdayConfirm);

      // count how many affected past yesterday selected country
      this.todayInCountries =
        yesterdayConfirm -
        beforeYesterdayConfirm +
        (this.countriesUpdate.confirmed - yesterdayConfirm);

      // count the percentage of recovered rate globally
      this.globalRecoveredPercentage = Math.round(
        (this.global.recovered / this.global.confirmed) * 100
      );

      // count the percentage of recovered rate of selected country
      this.countryRecoveredPercentage = Math.round(
        (this.countriesUpdate.recovered / this.countriesUpdate.confirmed) * 100
      );

      // count the percentage of death rate of globally
      this.globalDeathPercentage = Math.round(
        (this.global.deaths / this.global.confirmed) * 100
      );

      // count the percentage of death rate of selected country
      this.countryDeathPercentage = Math.round(
        (this.countriesUpdate.deaths / this.countriesUpdate.confirmed) * 100
      );
    },
    /* eslint-enabled */
  },
  filters: {
    putComma(number) {
      return Number(number).toLocaleString();
    },
  },
  created() {
    this.getRootData();
    this.getCountries();
    this.locatedCountry();
  },
};
</script>

<style>
.card {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 2.6px solid #8bc5ff;
  padding: 25px 50px;
  color: #84ffff;
}

.head-title {
  margin-bottom: 50px;
  color: #84ffff;
}

.country-select {
  width: 30% !important;
  margin-top: 10px;
}

.global {
  margin: 40px 0;
}
.local {
  margin: 40px 0;
}
</style>