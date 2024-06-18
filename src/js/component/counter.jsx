import React from "react";

const Counter = (props) => {

	const secondsPad = props.seconds.padStart(6, "0");

	const valores = secondsPad.split("");

	return (
		<div className="fs-1 d-flex justify-content-center row container-fluid bg-black text-light">
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{<i class="fa-solid fa-clock"></i> [0]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [1]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [2]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [3]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [4]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [5]}</div>
		</div>
	);
};

export default Counter;
