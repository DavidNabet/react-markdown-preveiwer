import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview";

function App() {
	const [state, setState] = useState("");

	const handleChange = (e) => {
		setState(e.target.value);
	};

	return (
		<div className="container">
			<h2>React Previewer Markdown</h2>
			<a
				href={`https://guides.github.com/features/mastering-markdown/`}
				target="_blank"
				rel="noreferrer"
			>
				Comment marche le markdown ?
			</a>
			<div className="wrapper--preview">
				<div className="md-translate">
					<textarea
						value={state}
						placeholder="Ecrivez en markdown"
						onChange={handleChange}
					></textarea>
				</div>
				<Preview state={state} />
			</div>
		</div>
	);
}

export default App;
