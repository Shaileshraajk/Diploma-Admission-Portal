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
        <NavLink to='/userprofile' activestyle>
            User Profile
        </NavLink>
		<NavLink to='/userinstitute' activeStyle>
			Institute
		</NavLink>
		<NavLink to='/usercourse' activeStyle>
			Enroll Course
		</NavLink>
		<NavLink to='/courseenrolled' activeStyle>
			View Enrolled Course
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
