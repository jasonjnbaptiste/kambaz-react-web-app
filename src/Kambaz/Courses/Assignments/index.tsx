import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import * as db from "../../Database";
import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const { pathname } = useLocation();
  return (
    <div className="rounded-0" id="wd-assignments">
      <AssignmentsControls />
      <br></br><br></br><br></br>
      <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignment p-0 mb-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown className="me-2 fs-3" /> ASSIGNMENTS <AssignmentsControlButtons />
            </div>
            {assignments && (
            <ListGroup className="wd-lessons rounded-0">
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <ListGroup.Item key={`${pathname}/${assignment._id}`} as={Link} to={`${pathname}/${assignment._id}`} 
                    className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> 
                    <LuNotebookPen className="me-2 fs-3" />
                    {assignment.title} <AssignmentControlButtons />
                    <br></br>Multiple Modules |<b> Not available until</b> {assignment.postDate} | <br></br>
                    <b>Due</b> {assignment.dueDate} | {assignment.points}
                    </ListGroup.Item>
              ))}</ListGroup>
            )}</ListGroup.Item>
      </ListGroup>
    </div>
  );}