import { Flex } from "@chakra-ui/react";
import { fetchDailyData } from "api";
import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as Charts, registerables } from "chart.js";
Charts.register(...registerables);

const Chart = ({ database: { confirmed, recovered, deaths }, country }) => {
	const [data, setData] = useState([]);
	// console.log("chart data", data);

	useEffect(() => {
		const fetchData = async () => {
			setData(await fetchDailyData());
		};
		fetchData();
	}, []);

	//Line Chart
	const lineChart = data.length && (
		<Line
			data={{
				labels: data.map(({ date }) => new Date(date).toLocaleDateString()),
				datasets: [
					{
						data: data.map((d) => d.confirmed),
						label: "Ca nhiễm",
						borderColor: "#3333ff",
						fill: true,
					},
					{
						data: data.map((d) => d.deaths),
						label: "Người chết",
						borderColor: "red",
						backgroundColor: "rgba(255, 0, 0, 0.5)",
						fill: true,
					},
					{
						data: data.map((d) => d.recovered),
						label: "Phục hồi",
						borderColor: "green",
						backgroundColor: "rgba(0, 255, 0, 0.5)",
						fill: true,
					},
				],
			}}
		/>
	);
	//Bar char
	const barchart = confirmed && (
		<Bar
			data={{
				labels: ["Đã nhiễm", "Phục hồi", "Tử vong"],
				datasets: [
					{
						label: "Số người",
						backgroundColor: ["rgba(0, 0, 255, 0.5)", "rgba(0, 255, 0, 0.5)", "rgba(255, 0, 0, 0.5)"],
						data: [confirmed.value, recovered.value, deaths.value],
					},
				],
			}}
		/>
	);

	return (
		<Flex w="full" h="max-content" mt="10">
			{country ? barchart : lineChart}
		</Flex>
	);
};

export default Chart;
