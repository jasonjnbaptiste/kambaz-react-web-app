import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { courses } from "../Database";
import { ListGroup } from "react-bootstrap";
export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  return (
    links.map((link) => (
      <ListGroup id="wd-courses-navigation" className="wd-list-group fs-5 rounded-0">
        <ListGroup.Item key={`/Kambaz/Courses/${course?._id}/${link}`} as={Link} to={`/Kambaz/Courses/${course?._id}/${link}`}
          className={`${pathname.includes(link) ? "text-black" : "text-danger"} border border-0`}>
          {link}
        </ListGroup.Item>
      </ListGroup>
    ))
  );
}