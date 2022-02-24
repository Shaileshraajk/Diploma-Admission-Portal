import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/home' activestyle>
            Diploma Admission
        </NavLink>
		<NavLink to='/institute' activeStyle>
			Institute
		</NavLink>
		<NavLink to='/course' activeStyle>
			Enroll Course
		</NavLink>
		<NavLink to='/courseenrolled' activeStyle>
			View Enrolled Course
		</NavLink>
        
        <NavLink to='/logout' activeStyle>
			Logout
		</NavLink>
        
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
