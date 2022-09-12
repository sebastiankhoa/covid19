import { Flex } from "@chakra-ui/react";
import React from "react";
import { Dna } from "react-loader-spinner";
import CardItem from "./CardItem";

const Cards = ({ data }) => {
	if (!data)
		return <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />;

	const { confirmed, recovered, deaths, lastUpdate } = data;

	return (
		<Flex
			gap={{ base: "1", md: "6" }}
			direction={{ base: "column", md: "unset" }}
			mt="10"
			align={{ base: "center", md: "unset" }}
		>
			<CardItem title="ca nhiễm" cases="" kind={confirmed} time={lastUpdate} colorB="purple.500" />
			<CardItem title="ca đã hồi phục" cases="từ" kind={recovered} time={lastUpdate} colorB="green.300" />
			<CardItem title="người đã chết" cases="bởi" kind={deaths} time={lastUpdate} colorB="red.300" />
		</Flex>
	);
};

export default Cards;
