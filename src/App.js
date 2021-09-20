import "./App.css";
import Preview from "./components/Preview";

function App() {
	return (
		<div className="container">
			<h2>React Previewer Markdown</h2>
			<div className="wrapper--preview">
				<div className="md-translate">
					<textarea></textarea>
				</div>
				<Preview />
			</div>
		</div>
	);
}

export default App;
