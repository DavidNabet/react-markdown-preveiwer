import React from "react";
import {marked} from "marked";

function Preview({ state }) {

	return (
		<div
			className="md-previewer"
			dangerouslySetInnerHTML={{ __html: marked(state) }}
		></div>
	);
};

export {Preview as default}