import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes';
const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />	
			<Routes>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={<Component page={key} />}
					></Route>
				))}
			</Routes>
		</Router>
	);
};

export default AppRouter;
