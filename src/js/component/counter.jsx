import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'

const Counter = (props) => {

	const secondsPad = props.seconds.padStart(5, "0");

	const valores = secondsPad.split("");

	return (
		<div className="fs-1 d-flex justify-content-center row container-fluid bg-black text-light">
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center"> <FontAwesomeIcon className="my-auto" icon={faClock} /></div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [0]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [1]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [2]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [3]}</div>
			<div className="col-1 bg-white bg-opacity-10 mb-2 mt-2 mx-2 rounded border border-2 d-flex justify-content-center">{valores [4]}</div>
		</div>
	);
};

export default Counter;
