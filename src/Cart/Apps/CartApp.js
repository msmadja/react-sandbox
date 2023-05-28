import { useEffect, useState } from 'react';
import { CartService } from '../../Services';
import { tap } from 'rxjs';

function Cart() {
	const currency = '$';
	const [cart, setCart] = useState({
		totalItems: 0,
		totalPrice: 0,
		items: []
	});

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
					setCart({ totalItems, totalPrice, items });
				})
			)
			.subscribe();

		return () => {
			cartSubscription$.unsubscribe();
		};
	}, []);

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

			{cart.items.map((item, index) => (
				<div key={index} className="flex flex-col">
					<div className="flex rounded-md shadow-md mb-4">
						<img
							src={item.image}
							alt="Product 1"
							className="h-24 w-24 rounded-md object-cover"
						/>

						<div className="flex flex-col justify-between ml-4 py-2">
							<h2 className="text-lg font-bold">{item.name}</h2>
							<p className="text-gray-600">
								Price: {currency}
								{item.price}
							</p>
							<div className="flex items-center">
								<input
									type="number"
									disabled={true}
									value={item.quantity}
									className="w-20 rounded-md border border-gray-300 py-1 px-2"
								/>
								<button className="btn btn-primary ml-2">Remove</button>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className="flex justify-between mt-8">
				<p className="text-xl font-semibold">
					Total: {currency}
					{cart.totalPrice}
				</p>
				<button className="btn btn-primary">Checkout</button>
			</div>
		</div>
	);
}

export const CartApp = Cart;
