import http from '../../../Courses-http'

class CoursesDataService{

    getAll() {
        return http.get("/getAll");
      }

      findByTitle(title) {
        return http.get(`/getbyTitle?title=${title}`);
      }

      enroll(data) {
        return http.post("/enroll", data);
      }

      viewEnrolled(userid){
        return http.get(`/viewenrolled?userid=${userid}`);
      }

      deleteEnrolled(courseid, userid){
        return http.delete(`/deletecourse?courseid=${courseid}&userid=${userid}`);
      }


}

export default new CoursesDataService();