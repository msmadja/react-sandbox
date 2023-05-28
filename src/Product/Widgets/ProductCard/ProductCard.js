import PropTypes from 'prop-types';

function ProductCardWidget({ id, image, name, price }) {
	const currency = '$';

	return (
		<div className="card w-96 bg-base-100 shadow-md">
			<div className="card-body">
				<div className="rounded-lg p-4 w-100" key={id}>
					<img src={image} alt={name} className="w-full mb-4" />
					<h2 className="text-xl font-bold mb-2">{name}</h2>
					<p className="text-gray-600 mb-2">
						{price}
						{currency}
					</p>
				</div>
				<div className="card-footer">
					<button className="btn btn-primary text-white px-4 py-2 rounded">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

export const ProductCard = ProductCardWidget;

ProductCardWidget.propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number
};
