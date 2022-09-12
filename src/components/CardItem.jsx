import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";

const CardItem = ({ title, kind, time, cases, colorB }) => {
	return (
		<Flex
			direction="column"
			align="center"
			justify="center"
			w="600px"
			h="200px"
			border="1px solid"
			borderColor="gray.300"
			borderBottom="15px solid"
			borderBottomColor={colorB}
			shadow="lg"
			rounded="20px"
			gap="2"
		>
			<Text color="gray.500" fontSize="16pt">
				Số {title}
			</Text>
			<Text fontSize="20pt" fontWeight="600">
				<CountUp start={0} end={kind?.value} duration={5} separator="," />
			</Text>
			<Text color="gray.500" fontSize="17pt">
				{new Date(time).toDateString()}
			</Text>
			<Text fontSize={{ base: "12pt", lg: "14pt" }}>
				Số {title} {cases} COVID-19.
			</Text>
		</Flex>
	);
};

export default CardItem;
