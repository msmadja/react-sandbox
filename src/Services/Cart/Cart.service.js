import { of } from 'rxjs';

function $cartItems() {
	return of([
		{
			name: 'Nike Air Max',
			price: 99.99,
			image:
				'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32e90900-2918-4715-a6c8-c2b9eb82d172/revolution-6-running-shoes-9FQ8QD.png',
			quantity: 1
		},
		{
			name: 'Nike Blue Sport Orange',
			price: 179.99,
			image:
				'https://w7.pngwing.com/pngs/563/712/png-transparent-nike-free-shoe-sneakers-nike-flywire-nike-sports-shoes-blue-sport-orange.png',
			quantity: 1
		},
		{
			name: 'Nike Air Splash',
			price: 189.99,
			image:
				'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&w=1000&q=80',
			quantity: 2
		},
		{
			name: 'Nike Pegasus',
			price: 150.0,
			image:
				'https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/z/9/z925830005-11683542787.jpg',
			quantity: 2
		}
	]);
}

export const CartService = {
	$cart: $cartItems
};
