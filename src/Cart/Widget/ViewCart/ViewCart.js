import { useEffect, useState } from 'react';
import { tap } from 'rxjs';
import { CartService } from '../../../Services';
import { useNavigate } from 'react-router-dom';

function ViewCartWidget() {
	const currency = '$';
	const [cart, setCart] = useState({ totalItems: 0, totalPrice: 0 });
	const navigate = useNavigate();

	useEffect(() => {
		const cartSubscription$ = CartService.$cart()
			.pipe(
				tap((items) => {
					const totalItems = items.reduce(
						(acc, item) => acc + item.quantity,
						0
					);
					const totalPrice = items.reduce(
						(acc, item) => acc + item.price * item.quantity,
						0
					);
					setCart({ totalItems, totalPrice });
				})
			)
			.subscribe();

		return () => {
			cartSubscription$.unsubscribe();
		};
	}, []);

	function handleGotoCartClick() {
		console.log('Handle goto cart clicked');
		navigate('/cart');
	}

	return (
		<div
			tabIndex={0}
			className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
		>
			<div className="card-body">
				<span className="font-bold text-lg">{cart.totalItems} Items</span>
				<span className="text-info">
					Subtotal: {cart.totalPrice}
					{currency}
				</span>
				<div className="card-actions">
					<button
						className="btn btn-primary btn-block"
						onClick={() => handleGotoCartClick()}
					>
						View cart
					</button>
				</div>
			</div>
		</div>
	);
}

export const ViewCart = ViewCartWidget;
