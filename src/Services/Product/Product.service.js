import { of } from 'rxjs';

function _$products() {
	return of([
		{
			id: 1,
			name: 'Nike Air Max',
			image:
				'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/32e90900-2918-4715-a6c8-c2b9eb82d172/revolution-6-running-shoes-9FQ8QD.png',
			price: 99.99
		},
		{
			id: 2,
			name: 'Nike Air Flow',
			image:
				'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&w=1000&q=80',
			price: 149.99
		},
		{
			id: 3,
			name: 'Nike Blue Sport Orange',
			image:
				'https://w7.pngwing.com/pngs/563/712/png-transparent-nike-free-shoe-sneakers-nike-flywire-nike-sports-shoes-blue-sport-orange.png',
			price: 179.99
		},
		{
			id: 4,
			name: 'Nike Air Splash',
			image:
				'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&w=1000&q=80',
			price: 189.99
		},
		{
			id: 5,
			name: 'Nike Air Jordan Something',
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOa1XUYbBE4A4_OVgikhYAbb64GVLVvUcliixQjckgGBSiTuM_Q5kdtTnBAVhPOhkNU1o&usqp=CAU',
			price: 206.99
		},
		{
			id: 6,
			name: 'Nike Womens Free-3',
			image:
				'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/350da6ea-c22d-420b-8f0f-6f13bced759a/pegasus-39-road-running-shoes-kmZSD6.png',
			price: 105.99
		},
		{
			id: 7,
			name: 'Nike Pegasus',
			image:
				'https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/z/9/z925830005-11683542787.jpg',
			price: 150.0
		}
	]);
}

export const ProductService = {
	$products: _$products
};
