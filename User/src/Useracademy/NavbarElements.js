import { FaCalendar } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #b363d4;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 7rem;
height: 100%;
cursor: pointer;
font-size: 1.4rem;
&.active {
	color: #000000;
}
`;

export const Bars = styled(FaCalendar)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
margin-left: -60px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
width: 200px;
/* white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
