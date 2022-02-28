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
        <NavLink to='/adminprofile' activestyle>
            Admin Profile
        </NavLink>
		<NavLink to='/admininstitute' activeStyle>
			Institute
		</NavLink>
		<NavLink to='/admincourse' activeStyle>
			Course
		</NavLink>
        <NavLink to='/adminstudents' activeStyle>
            Students
        </NavLink>
        <NavLink to='/' activeStyle>
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
