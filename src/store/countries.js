import { makeAutoObservable } from "mobx";
import countriesService from "../services/countries.services";

class Countries {
  dataCountries = null;
  infections = null;
  constructor() {
    makeAutoObservable(this);
  }

  setDataCountries(data) {
    this.dataCountries = data;
  }

  async fetchDataCountries() {
    try {
      const data = await countriesService.getDataCountries();
      this.setDataCountries(data);
      console.log(data);
    } catch (error) {}
  }
}
export default new Countries();
