import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

function Shell({
	appName,
	sidenavRoutes,
	children,
	topNavbarMenuItems,
	handleRouteChangeClick
}) {
	const [toggleMenu, setToggleMenu] = useState(false);
	const location = useLocation();

	function handleRouteClick(item) {
		handleRouteChangeClick(item);
	}

	return (
		<div>
			{location.pathname === '/cart'}
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<button
						tabIndex={0}
						className="btn btn-ghost btn-circle lg:hidden"
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</button>
					<div>
						<a className="btn btn-ghost normal-case text-xl">{appName}</a>
					</div>
				</div>
				<div className="flex-none navbar-end">
					{/* Here PUT navbar items*/}
					{topNavbarMenuItems.map((item, index) => (
						<div
							key={index}
							className={location.pathname === item.path ? 'hidden' : ''}
						>
							{item.children}
						</div>
					))}
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://www.shareicon.net/data/2016/05/24/770137_man_512x512.png" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="drawer drawer-mobile">
				<input
					id="my-drawer-2"
					type="checkbox"
					checked={toggleMenu}
					onChange={() => setToggleMenu(!toggleMenu)}
					className="drawer-toggle hidden"
				/>
				<div className="drawer-content p-4">{children}</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
					<ul className="menu p-4 w-64 max-w-screen-lg bg-base-100 text-base-content">
						{/* Here PUT sidebar items */}
						{sidenavRoutes.map((item) => (
							<li key={item.name}>
								<NavLink
									className={({ isActive }) =>
										isActive ? 'bg-secondary' : 'link'
									}
									to={item.path}
									onClick={handleRouteClick}
								>
									<p className="font-bold uppercase">{item.name}</p>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

let RouteItem = PropTypes.shape({
	name: PropTypes.string,
	path: PropTypes.string
});

let MenuItem = PropTypes.shape({
	name: PropTypes.string,
	children: PropTypes.element,
	path: PropTypes.string
});

Shell.propTypes = {
	appName: PropTypes.string,
	sidenavRoutes: PropTypes.arrayOf(MenuItem),
	topNavbarMenuItems: PropTypes.arrayOf(RouteItem),
	children: PropTypes.element,
	handleRouteChangeClick: PropTypes.func
};

export default Shell;
