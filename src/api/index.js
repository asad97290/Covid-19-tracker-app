import axios from "axios"; // for api request i.e get and post

const baseUrl = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let url = baseUrl;
  if (country) {
    url = `${baseUrl}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    throw err;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    throw err;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${baseUrl}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    throw err;
  }
};
