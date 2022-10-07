import { makeAutoObservable } from "mobx";
import countriesService from "../services/countries.services";

class Countries {
  dataCountries = null;
  dataCurrentCountry = null;
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  setDataCountries(data) {
    this.dataCountries = data;
  }

  setLoading(value) {
    this.loading = value;
  }

  setDataCurrentCountries(data) {
    this.dataCountries = data;
  }

  fetchDataCountries = async () => {
    try {
      const data = await countriesService.getDataCountries();
      this.setDataCountries(data);
      this.setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  };

  fetchDataCurrentCountry = async (country) => {
    try {
      console.log("fetchDataCurrentCountry");
      const data = await countriesService.getDataCurrentCountry(country);
      this.setDataCurrentCountries(data);
      this.setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  };
}
export default new Countries();
