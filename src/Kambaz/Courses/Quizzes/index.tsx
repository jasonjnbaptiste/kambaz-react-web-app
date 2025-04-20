import { useParams } from "react-router";
import { Link, useLocation } from "react-router-dom"
import * as db from "../../Database";
import QuizzesControls from "./QuizzesControls";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import QuizControlButtons from "./QuizControlButtons";
import { IoRocketOutline } from "react-icons/io5";
import QuizzesControlButtons from "./QuizzesControlButtons";

export default function Quizzes() {
  const { cid } = useParams();
  const quizzes = db.quizzes;
  const { pathname } = useLocation();
  function isNotAvailable(postDate : string) : boolean {
    const currentDate : Date = new Date();
    const postDateDate : Date = new Date(postDate);
    return postDateDate > currentDate;
  }
  function isClosed(dueDate : string) : boolean {
    const currentDate : Date = new Date();
    const dueDateDate : Date = new Date(dueDate);
    return dueDateDate < currentDate;
  }
  return (
    <div className="rounded-0" id="wd-quizzes">
      <QuizzesControls />
      <br></br><br></br><br></br>
      <ListGroup className="rounded-0" id="wd-quizzes">
        <ListGroup.Item className="wd-quiz p-0 mb-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" /> <b>QUIZZES</b> <QuizzesControlButtons />
          </div>
          {quizzes && (
            <ListGroup className="wd-lessons rounded-0">
              {quizzes
                .filter((quiz: any) => quiz.course === cid)
                .map((quiz: any) => (
                  <ListGroup.Item key={`${pathname}/${quiz._id}`} as={Link} to={`${pathname}/${quiz._id}`} 
                    className="wd-lesson p-3 ps-1">
                    <IoRocketOutline style={{color: 'green'}} className="me-2 fs-3" />
                    <b style={{ fontSize: '20px' }}>{quiz.title}</b> <QuizControlButtons />
                    <br></br>{isNotAvailable(quiz.postDateForm) ? <> <b> Not available until</b> {quiz.postDate} </>: 
                                isClosed(quiz.dueDateForm) ? <b> Closed </b> : <b> Available </b>} |
                    <b> Due</b> {quiz.dueDate} | {quiz.points} pts | {quiz.numQuestions} Questions
                    </ListGroup.Item>
              ))}</ListGroup>
            )}
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}