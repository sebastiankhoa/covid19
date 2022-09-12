import { Container, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { fetchCovidData } from "api";
import { Cards, Chart, CountryPicker } from "./components";
import covid from "./images/image.png";

const App = () => {
	const [data, setData] = useState({});
	const [country, setCountry] = useState("");
	// console.log(data);

	useEffect(() => {
		const fetchData = async () => {
			setData(await fetchCovidData());
		};
		fetchData();
	}, []);

	const handleCountryChange = async (country) => {
		setData(await fetchCovidData(country));
		setCountry(country);
	};

	return (
		<Container maxW="container.lg">
			<Flex w="100%" justify="center" mt="10">
				<Image alt="covid" src={covid} />
			</Flex>
			<Cards data={data} />
			<CountryPicker onCountryChange={handleCountryChange} />
			<Chart
				// @ts-ignore
				database={data}
				country={country}
			/>
		</Container>
	);
};

export default App;
