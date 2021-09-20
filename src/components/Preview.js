import marked from "marked";

const Preview = ({ state }) => {
	return (
		<div
			className="md-previewer"
			dangerouslySetInnerHTML={{ __html: marked(state) }}
		></div>
	);
};

export default Preview;
