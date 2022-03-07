import React from 'react';
import Navbar from './User Components/Navbar'
import CoursesList from './User Components/CourseList';
import {CoursesContainer} from './../../components/Styles'

const userCourse = () => {
return (
	<div>
	<Navbar />
	<CoursesContainer>
	<CoursesList />
	</CoursesContainer>
	</div>
);
};

export default userCourse;
