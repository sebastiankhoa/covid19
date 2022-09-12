import { Flex, Select, Text } from "@chakra-ui/react";
import { countriesApi } from "api";
import React, { useEffect, useState } from "react";

const CountryPicker = ({ onCountryChange }) => {
	const [countries, setCountries] = useState([]);

	console.log(countries);

	useEffect(() => {
		const fetchCountries = async () => {
			setCountries(await countriesApi());
		};
		fetchCountries();
	}, [setCountries]);

	return (
		<Flex w="100%" direction="column" align="center" my="10">
			<Text fontSize="17pt" fontWeight="700">
				Lựa chọn quốc gia:
			</Text>
			<Select w={{ base: "80%", md: "30%" }} onChange={(e) => onCountryChange(e.target.value)}>
				<option value="">United States</option>
				{countries.map((country, i) => (
					<option key={i} value={country}>
						{country}
					</option>
				))}
			</Select>
		</Flex>
	);
};

export default CountryPicker;
