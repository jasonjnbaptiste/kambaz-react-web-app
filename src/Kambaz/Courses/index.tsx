import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import {Navigate, Route, Routes, useParams, useLocation} from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment } from "./Assignments/reducer";
import Quizzes from "./Quizzes";
import QuizDetails from "./Quizzes/Details";
import QuizDetailsEditor from "./Quizzes/Editor";
import { QuizQuestionsEditor } from "./Quizzes/Editor";
import QuestionEditor from "./Quizzes/QuestionEditor";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid, aid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [assignmentName, setAssignmentName] = useState("");
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split("/")[4]}
        </h2> <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
              <div className="flex-fill">
                <Routes>
                  <Route path="/" element={<Navigate to="Home" />} />
                  <Route path="Home" element={<Home />} />
                  <Route path="Modules" element={<Modules />} />
                  <Route path="Assignments" element={<Assignments />} />
                  <Route path="Assignments/:aid" element={< AssignmentEditor addAssignment={() => {
                    dispatch(addAssignment({_id: aid, title: assignmentName}));
                    setAssignmentName("");
                  }}/>} />
                  <Route path="People" element={<PeopleTable />} />
                  <Route path="Quizzes" element={<Quizzes />} />
                  <Route path="Quizzes/:qid" element={<QuizDetails />} />
                  <Route path="Quizzes/:qid/edit/details" element={<QuizDetailsEditor />} />
                  <Route path="Quizzes/:qid/edit/questions" element={<QuizQuestionsEditor />} />
                  <Route path="Quizzes/:qid/edit/questions/new-question" element={<QuestionEditor />} />
                </Routes>
              </div>
        </div>
      </div>
  );}