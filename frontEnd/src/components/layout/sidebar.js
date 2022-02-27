import React from 'react';
import { NavLink,useRouteMatch } from 'react-router-dom';
import Icons from '../../assets/Icons';
import SignOutAuth from '../../auth/Google/SignOutAuth';
// import PropTypes from 'prop-types';

const Sidebar = () => {
	const color = '#4f4f4fd2';

	let match=useRouteMatch();
	return (
		<div id="sidebar" className="sidebar"  >
			<ul className="ul-list" >
				<NavLink activeClassName="selected" to={`${match.url}/notes`} exact={true}>
					{' '}
					<li >
						<div className='ic'><Icons focusable="false" name="Bulb"  color={color}  className="side-icon" color={color}/></div>

						 <h4 >Notes</h4> 
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to={`${match.url}/reminders`}>
					{' '}
					<li>
					<div className='ic'><Icons focusable="false" name="Notification"   className="side-icon" color={color}/></div>
         
						<h4 >Reminders</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to={`${match.url}/labels`}>
					{' '}
					<li>
					<div className='ic'><Icons focusable="false" name="Label"   className="side-icon" color={color}/></div>
						<h4 >Labels</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to="/modifyLabels">
					<li>
						<div className='ic'><Icons focusable="false" name="Pencil"   className="side-icon" color={color}/></div>
  
						<h4 >Modify Labels</h4>
					</li>
				</NavLink>
				<NavLink activeClassName="selected" to="/archive">
					{' '}
					<li>
					<div className='ic'><Icons focusable="false" name="Archive"   className="side-icon" color={color}/></div>
        
						<h4 >Archive</h4>
					</li>
				</NavLink>{' '}
				<NavLink activeClassName="selected" to="/delete">
					<li>
					<div className='ic'><Icons focusable="false" name="Delete"   className="side-icon" color={color}/></div>
						<h4 >Basket</h4>
					</li>
				</NavLink>
			</ul>
			<br/>
			<ul className="ul-list">
				<div className="li">
					<SignOutAuth />
				</div>
			</ul>
		</div>
	);
};

export default Sidebar;
