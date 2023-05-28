import { Theme } from 'react-daisyui';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Shell from './Shell/Shell';
import Home from './Home/Home';
import { ProductsApp } from './Product/Apps/ProductsApp';
import { CartViewTrigger, CartApp } from './Cart';
import './App.css';

function App() {
	const navigate = useNavigate();

	const ShellConfig = {
		appName: 'Nike store',
		topNavbarMenuItems: [
			{
				name: 'Cart',
				children: <CartViewTrigger></CartViewTrigger>,
				path: '/cart'
			}
		],
		sidenavRoutes: [
			{ name: 'Home', path: '/' },
			{ name: 'Men', path: '/men' },
			{ name: 'Women', path: '/women' },
			{ name: 'Kids', path: '/kids' }
		],
		handleRouteChangeClick: (item) => {
			console.log(`Clicked on route ${item.name}`);
			navigate(item.path);
		}
	};

	useEffect(() => {
		/**
		 * TODO: something here
		 */
	});

	return (
		<Theme dataTheme="autumn">
			<Shell {...ShellConfig}>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="men" element={<ProductsApp />} />
					<Route path="women" element={<ProductsApp />} />
					<Route path="kids" element={<ProductsApp />} />
					<Route path="cart" element={<CartApp />} />
				</Routes>
			</Shell>
		</Theme>
	);
}

export default App;
