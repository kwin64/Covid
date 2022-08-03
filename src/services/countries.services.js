import axios from "axios";
import { API_COVID_URL } from "../config";
import { v4 as uuid } from "uuid";

const getDataCountries = async () => {
  const { data } = await axios.get(`${API_COVID_URL}/countries`);
  data.map((country) => (country.id = uuid()));
  return data;
};

const getCases = async () => {
  const { data } = await axios.get(`${API_COVID_URL}/all`);
  return data;
};
export default {
  getDataCountries,
  getCases,
};
