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
        <NavLink to='/admindashboard' activestyle>
            Diploma Admission
        </NavLink>
		<NavLink to='/institute' activeStyle>
			Institute
		</NavLink>
		<NavLink to='/course' activeStyle>
			Course
		</NavLink>
        <NavLink to='/students' activeStyle>
            Students
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
