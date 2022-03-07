import React, { Component } from "react";
import CoursesDataService from "../CourseService-User/CoursesService-User";
import { Link } from "react-router-dom";

export default class CoursesList extends Component{
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveCourses = this.retrieveCourses.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveCourse = this.setActiveCourse.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
    
        this.state = {
          courses: [],
          currentCourse: null,
          currentIndex: -1,
          searchTitle: ""
        };
      }

      componentDidMount() {
        this.retrieveCourses();
      }

      onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
    
        this.setState({
          searchTitle: searchTitle
        });
      }

      retrieveCourses() {
        CoursesDataService.getAll()
          .then(response => {
            this.setState({
                courses: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      refreshList() {
        this.retrieveCourses();
        this.setState({
            currentCourse: null,
          currentIndex: -1
        });
      }

      setActiveCourse(course, index) {
        this.setState({
            currentCourse: course,
          currentIndex: index
        });
      }

      searchTitle() {
        this.setState({
          currentTutorial: null,
          currentIndex: -1
        });
    
        CoursesDataService.findByTitle(this.state.searchTitle)
          .then(response => {
            this.setState({
                courses: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      render() {

        const { searchTitle, courses, currentCourse, currentIndex } = this.state;
        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={this.onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={this.searchTitle}
                        >
                            Search
                        </button>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 class="text-white bg-dark">Courses List</h4>

                    <ul className="list-group">
                        {courses &&
                            courses.map((course, index) => (
                                <li
                                    className={
                                        "list-group-item"+
                                        (index===currentIndex ? " active" : "")
                                    }
                                    onClick={() => this.setActiveCourse(course, index)}
                                    key={index}
                                >
                                    {course.title}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentCourse ? (
                        <div>
                            <h4 class="text-warning">Course</h4>
                            <div class="p-3 mb-2 bg-success text-white">
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}
                                {currentCourse.title}
                            </div>
                            <div class="p-3 mb-2 bg-success text-white">
                                <label>
                                    <strong>Description:</strong>
                                </label>{" "}
                                {currentCourse.course_desc}
                            </div>
                        </div>
                    ):(
                        <div class="p-3 mb-2 bg-warning text-dark">
                            <strong>Please click on a Course...</strong>
                        </div>
                    )}
                </div>
            </div>

        )

      }

}
