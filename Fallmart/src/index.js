import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);

// // index.js
// import './styles.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './pages/App/App';

// import { BrowserRouter as Router } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );
