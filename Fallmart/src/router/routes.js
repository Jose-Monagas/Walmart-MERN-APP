import Fallmart from '../pages/Fallmart/Fallmart';
import SubcategoryPage from '../pages/SubcategoryPage/SubcategoryPage';

const routes = [
	{
		Component: Fallmart,
		key: 'Fallmart',
		path: '/'
	},
	{
		Component: SubcategoryPage,
		key: 'Furniture',
		path: '/furniture'
	}
];

export default routes;
