import Fallmart from '../pages/Fallmart/Fallmart';
import Furniture from '../pages/Furniture/Furniture';

const routes = [
	{
		Component: Fallmart,
		key: 'Fallmart',
		path: '/'
	},
	{
		Component: Furniture,
		key: 'Furniture',
		path: '/furniture'
	}
];

export default routes;
