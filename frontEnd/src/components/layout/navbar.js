import React, { useState } from 'react';
import Icons from '../../assets/Icons';

const Navbar = () => {
	const initialState = { backgroundColor: '#f1f3f4' };
	const [active, setactive] = useState(false);
	const [listmode, setlistmode] = useState(false);
	const [cancel, setcancel] = useState(false);
	const [state] = useState(initialState);

	const click = () => {
		setactive(true);
		setcancel(true);
	};
	const out = () => {
		setactive(false);
	};
	const handleSearch = (evt) => {
		evt.preventDefault();
		setactive(false);
		setcancel(false);
	};
	const ShowListMode = () => {
		setlistmode(true);
	};
	const ShowGridMode = () => {
		setlistmode(false);
	};
	const color = '#4f4f4fd2';
	return (
		<div className="dp-f nav-bar  ">
			<div className="keep-icon dp-f ">
				<div className="list-3 icon">
					<Icons focusable="false" name="Menu" className="icons-n" color={color} />
				</div>
				<div className="name-page">
					<a href="" className="dp-f">
						<img
							className="img "
							src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
							srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
							alt=""
							aria-hidden="true"
							style={{ width: '40px', height: '40px' }}></img>
						<span className="span ">
							<h6>Keep</h6>
						</span>
					</a>
				</div>
			</div>
			<div
				className={active ? 'active search-div' : 'search-div '}
				style={state}
				onFocus={click}
				onBlur={out}>
				<form action="" method="get" className="dp-f" onSubmit={() => alert('submitted')}>
					<button className="icon  search-icon ">
						<Icons
							focusable="false"
							viewBox="-8 -8 40 40"
							name="Search"
							className="icons-n  "
							color={color}
						/>
					</button>
					<div className="research ">
						<input type="text" placeholder="Research" />
					</div>
					{cancel ? (
						<button className="cancel-icon icon" onClick={(e) => handleSearch(e)}>
							<Icons focusable="false" name="Cross" size="10" className="icons-n" color={color} />
						</button>
					) : (
						''
					)}
				</form>
			</div>
			<div className="dp-f icons-end">
				<div className="dp-f refresh-mode">
					<div className="icon">
						<Icons focusable="false" name="Refresh" className="icons-n  " color={color} />
					</div>
					{listmode ? (
						<button className="icon" onClick={ShowGridMode}>
							<Icons focusable="false" name="ListMode" className="icons-n  " color={color} />
						</button>
					) : (
						<button className="icon" onClick={ShowListMode}>
							<Icons focusable="false" name="GridMode" className="icons-n  " color={color} />
						</button>
					)}

					<div className="   icon">
						{' '}
						<Icons focusable="false" name="Settings" className="icons-n" color={color} />
					</div>
				</div>
				<div className="  dp-f user-show ">
					<div className="   icon">
						<Icons focusable="false" name="Mult" className="icons-n" color={color} />
					</div>
					<div className=" circle  icon">
						<Icons focusable="false" name="UserCircle" className="icons-n" color={color} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
