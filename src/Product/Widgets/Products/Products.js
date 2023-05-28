import { useEffect, useState } from 'react';
import { tap, take } from 'rxjs';
import PropTypes from 'prop-types';
import { ProductCard } from '../ProductCard';
import { ProductService } from '../../../Services';

function ProductsWidget({ maxItemsPerSection }) {
	const [product, setProducts] = useState([]);

	const maxItem = maxItemsPerSection;

	useEffect(() => {
		const productsSubscription$ = ProductService.$products()
			.pipe(
				take(1),
				tap((products) => setProducts(products))
			)
			.subscribe();

		return () => {
			productsSubscription$.unsubscribe();
		};
	}, []);

	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold mb-4">Products</h1>
			<span className={`flex flex-row flex-wrap gap-4`}>
				{product.map((product, index) => (
					<ProductCard {...product} key={index}></ProductCard>
				))}
			</span>
			<div />
			{maxItem}
		</div>
	);
}

export const Products = ProductsWidget;

ProductsWidget.propTypes = {
	maxItemsPerSection: PropTypes.number
};
