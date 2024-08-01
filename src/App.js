import './App.css';
import Editor from './components/editor';

import { useEffect, useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
	const [html, setHtml] = useLocalStorage('html', '');
	const [css, setCss] = useLocalStorage('css', '');
	const [js, setJs] = useLocalStorage('js', '');
	const [srcDoc, setSrcDoc] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
				<html>
					<head>
					<style>${css}</style>
					</head>
					<body>${html}</body>
					<script>${js}</script>
				</html>
			`);
		}, 250);

		return () => clearTimeout(timeout);
	}, [css, html, js]);

	return (
		<div className="App">
			<div className="editor-wrapper">
				<div className="app-top_panel panel">
					<Editor
						displayName="HTML"
						language="xml"
						value={html}
						onChange={setHtml}
					/>
					<Editor
						displayName="CSS"
						language="css"
						value={css}
						onChange={setCss}
					/>
					<Editor
						displayName="JS"
						language="javascript"
						value={js}
						onChange={setJs}
					/>
				</div>
				<div className="app-bottom_panel panel">
					<iframe
						srcDoc={srcDoc}
						title="output"
						sandbox="allow-scripts"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
