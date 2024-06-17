import React from "react";

const Counter = (props) => {

	const secondsPad = props.seconds.padStart(5, "0");

	const valores = secondsPad.split("");

	return (
		<div className="text-center">
			<div className="" >{valores [0]}</div>
			<div className="">{valores [1]}</div>
			<div className="">{valores [2]}</div>
			<div className="">{valores [3]}</div>
			<div className="">{valores [4]}</div>
		</div>
	);
};

export default Counter;
