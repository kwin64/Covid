import axios from "axios";
import { API_COVID_URL } from "../config";

const getDataCountries = async () => {
  const { data } = await axios.get(`${API_COVID_URL}/countries`);
  return data;
};

const getCases = async () => {
  const { data } = await axios.get(`${API_COVID_URL}/all`);
  return data;
};

const getDataCurrentCountry = async (country) => {
  const { data } = await axios.get(`${API_COVID_URL}/countries/${country}`);
  return data;
};
export default {
  getDataCountries,
  getCases,
  getDataCurrentCountry,
};
