import React from 'react';
import { NavLink,useRouteMatch } from 'react-router-dom';
import Icons from '../../assets/Icons';
import SignOutAuth from '../../auth/Google/SignOutAuth';
// import PropTypes from 'prop-types';

const Sidebar = () => {

	let match=useRouteMatch();


	return (
		<div id="sidebar" className="sidebar"  >
			<ul className="ul-list" >
				<NavLink activeClassName="selected" to={`${match.url}/notes`} exact={true}>
					{' '}
					<li>
						<Icons focusable="false" name="Bulb" size="24" />

						<h4 >Notes</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to={`${match.url}/reminders`}>
					{' '}
					<li>
						<Icons focusable="false" name="Notification" size="24" />
         
						<h4 >Reminders</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to={`${match.url}/labels`}>
					{' '}
					<li>
						<Icons focusable="false" name="Label" size="24" />
						<h4 >Labels</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to="/modifyLabels">
					<li>
						<Icons focusable="false" name="Pencil" size="24" />
  
						<h4 >Modify Labels</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to="/archive">
					{' '}
					<li>
						<Icons focusable="false" name="Archive" size="24" />
        
						<h4 >Archive</h4>
					</li>
				</NavLink>{' '}
				<NavLink activeClassName="selected" to="/delete">
					<li>
						<Icons focusable="false" name="Delete" size="24" />
						<h4 >Basket</h4>
					</li>
				</NavLink>
			</ul>
			<br/>
			<ul className="ul-list">
				<div className="li">
					<SignOutAuth/>
				</div>
			</ul>
		</div>
	);
};

export default Sidebar;
