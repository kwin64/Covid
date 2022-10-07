import { makeAutoObservable } from "mobx";
import countriesService from "../services/countries.services";

class Cases {
  casesData = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCasesData(data) {
    this.casesData = data;
  }

  async fetchCasesData() {
    try {
      const data = await countriesService.getCases();
      this.setCasesData(data);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new Cases();
