import React, { useState } from "react";

// Resources
import "../../styles/TrafficLights.scss";

const TraficLights = () => {
	//hooks
	const [color, setColor] = useState("green");

	return (
		<div className="container">
			<div
				onClick={() => setColor("red")}
				className={
					color === "red" ? "red light selected" : "red light"
				}></div>
			<div
				onClick={() => setColor("yellow")}
				className={
					color === "yellow"
						? "yellow light selected"
						: "yellow light"
				}></div>
			<div
				onClick={() => setColor("green")}
				className={
					color === "green" ? "green light selected" : "green light"
				}></div>
		</div>
	);
};

export default TraficLights;
