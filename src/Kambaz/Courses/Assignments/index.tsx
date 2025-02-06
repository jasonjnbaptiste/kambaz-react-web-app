import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";


export default function Assignments() {
    return (
      <div className="rounded-0" id="wd-assignments">
        <AssignmentsControls />
        <br></br><br></br><br></br>
        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              <IoMdArrowDropdown className="me-2 fs-3" /> ASSIGNMENTS <AssignmentsControlButtons />
              </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> 
              <LuNotebookPen className="me-2 fs-3" /> 
              <a href="#/Kambaz/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
                A1 - ENV + HTML
              </a>
              <br></br>Multiple Modules |<b> Not available until</b> May 6 at 12:00am | <br></br>
              <b>Due</b> May 13 at 11:59pm | 100pts
              <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3" /> 
              <a href="#/Kambaz/Courses/1234/Assignments/124"
               className="wd-assignment-link" >
                A2 - CSS + BOOTSTRAP
              </a>
              <br></br>Multiple Modules |<b> Not available until</b> May 13 at 12:00am | <br></br>
              <b>Due</b> May 20 at 11:59pm | 100pts
              <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen className="me-2 fs-3" /> 
              <a href="#/Kambaz/Courses/1234/Assignments/125"
               className="wd-assignment-link" >
                A3 - JAVASCRIPT + REACT
              </a> 
              <br></br>Multiple Modules |<b> Not available until</b> May 20 at 12:00am | <br></br>
              <b>Due</b> May 27 at 11:59pm | 100pts 
              <AssignmentControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          </ListGroup>
      </div>
  );}  