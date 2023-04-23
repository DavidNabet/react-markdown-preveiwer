import React from 'react';
import { useState, Suspense, lazy } from 'react'
import './App.css'

const Preview = lazy(() => import('./components/Preview'))

function App() {
	const [state, setState] = useState("");

	const handleChange = (e) => {
		setState(e.target.value);
	};

	const handleReset = () => {
		setState("");
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
					<button className="md-reset" onClick={handleReset}>
						Reset
					</button>
				</div>
				<Suspense fallback={<div>loading...</div>}>
					<Preview state={state} />
				</Suspense>
			</div>
		</div>
  )
}

export default App
