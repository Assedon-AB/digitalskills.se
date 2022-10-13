import React, { Component } from "react";
import { geoMercator, geoPath } from "d3-geo";

import FAGeoData from "./faregions.geojson";

function convertHex(hexCode, opacity) {
	var hex = hexCode.replace("#", "");

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	var r = parseInt(hex.substring(0, 2), 16),
		g = parseInt(hex.substring(2, 4), 16),
		b = parseInt(hex.substring(4, 6), 16);

	return "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
}

function calcMax(geodata, date) {
	let max = 0;
	max = Object.values(geodata).reduce((acc, prev) => {
		if (prev[date]["num"] > acc) {
			return prev[date]["num"];
		} else {
			return acc;
		}
	}, 0);
	return max;
}

class Map extends Component {
	constructor(props) {
		super(props);

		const max = calcMax(this.props.geodata, this.props.date);

		this.state = {
			mapSize: { width: 0, height: 0 },
			usStates: [],
			FAGeoData: {},
			outputText: "",
			max,
		};
	}

	componentDidMount() {
		this.handleResize();

		this.setState({ usStates: FAGeoData.features });

		window.addEventListener("load", this.handleResize.bind(this));
		window.addEventListener("resize", this.handleResize.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("load", this.handleResize);
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize() {
		this.setState({
			...this.state,
			mapSize: {
				...this.state.mapSize,
				width: 300,
				height: 600,
			},
		});
	}

	drawMap() {
		const { height, width } = this.state.mapSize;
		const projection = geoMercator().fitSize([width, height], FAGeoData);

		const pathGenerator = geoPath().projection(projection);

		this.states = this.state.usStates.map((d, idx) => {
			let fill = "rgba(245, 155, 140, 0.2)";

			let faRegions = d.properties.FANamn.toLowerCase().split("-"); // Splittar för att dubbel fa regioner ska räkna ihop alla inom området.
			faRegions.push(d.properties.FANamn.toLowerCase());
			let count = 0;

			for (const region of faRegions) {
				if (
					this.props.geodata &&
					this.props.geodata.hasOwnProperty(region)
				) {
					if (
						this.props.geodata[region][this.props.date]["num"] > 0
					) {
						count +=
							this.props.geodata[region][this.props.date]["num"];
					}
				}
			}

			const opacity = ((count - 0) / (this.state.max - 0)) * 100; // Normaliserar och får ett värde mellan 1-100
			fill = convertHex("#322882", opacity + 6);

			return (
				<path
					key={"path" + idx}
					d={pathGenerator(d)}
					fill={`${fill}`}
					stroke="white"
					strokeWidth="0.5"
					cursor="pointer"
					className="hover:text-black hover:fill-current"
					onMouseOver={() => this.on_hoover(d.properties.FANamn)}
				/>
			);
		});
	}

	on_hoover(name) {
		try {
			this.setState({
				outputText: `${name}: ${
					this.props.geodata[name.toLowerCase()][this.props.date][
						"num"
					]
				}`,
			});
		} catch (err) {
			this.setState({ outputText: `${name}: 0` });
		}
	}

	render() {
		this.drawMap();
		return (
			<div className="h-max w-max min-w[300px] relative bg-white p-2 rounded-lg shadow-md">
				<p className="text-gray-500 text-xs mb-2 text-center">
					Geografisk överblick på FA-regioner
				</p>
				<div
					className="h-full w-full relative min-w-[300px]"
					style={{ height: 640, width: 300 }}
				>
					<svg
						onMouseLeave={() => this.setState({ outputText: "" })}
						width={"100%"}
						height={"100%"}
						ref={(mapSVG) => (this.mapSVG = mapSVG)}
					>
						<g>{this.states}</g>
					</svg>
				</div>
				<div id="output" className="text-gray-800 relative h-8">
					{this.state.outputText}
				</div>
			</div>
		);
	}
}

export default Map;