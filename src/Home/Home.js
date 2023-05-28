import { Products } from '../Product';
import { CopyToClipboard } from '../Shared';

function Home() {
	const couponCodes = [
		{
			id: 1,
			code: 'SUMMER2023',
			discount: '25% off'
		},
		{
			id: 2,
			code: 'SALE15',
			discount: '15% off'
		},
		{
			id: 3,
			code: 'FREESHIP',
			discount: 'Free Shipping'
		},
		{
			id: 4,
			code: 'FIRST10',
			discount: '10% off'
		},
		{
			id: 5,
			code: 'FLASH50',
			discount: '50% off'
		},
		{
			id: 6,
			code: 'SAVE20',
			discount: '20% off'
		}
	];

	return (
		<div className="md:flex">
			{/* Left Side */}
			<div className="w-full md:w-4/5 rounded-lg p-8">
				<div className=" rounded-lg  p-8">
					<h1 className="text-3xl font-bold mb-8">Coupon Codes</h1>

					<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
						{couponCodes.map((coupon) => (
							<div className="card  shadow-xl" key={coupon.id}>
								<div className="card-body">
									<div className="rounded-lg p-8 gap-4 flex flex-col justify-center items-center">
										<h2 className="text-2xl font-semibold mb-4">
											{coupon.code}
										</h2>
										<p className="text-green-600 font-semibold text-lg">
											{coupon.discount}
										</p>
										<CopyToClipboard textToCopy={coupon.code}></CopyToClipboard>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Right Side */}
			<div className="w-full md:w-1/5 mt-4 md:mt-0 md:ml-4">
				{/* Introduction */}
				<Products maxItemsPerSection={1}></Products>
			</div>
		</div>
	);
}

export default Home;
