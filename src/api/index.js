import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchCovidData = async (country) => {
	let changeURL = url;

	if (country) {
		changeURL = `${url}/countries/${country}`;
	}

	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(changeURL);
		const modData = {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
		return modData;
	} catch (error) {
		console.log(error.message);
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		const modData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			recovered: dailyData.total,
			date: dailyData.reportDate,
		}));

		return modData;
	} catch (error) {
		console.log(error.message);
	}
};

export const countriesApi = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${url}/countries`);

		return countries.map((c) => c.name);
	} catch (error) {
		console.log(error.message);
	}
};
