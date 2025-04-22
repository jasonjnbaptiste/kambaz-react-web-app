import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import { FormLabel } from "react-bootstrap";
import ProtectedFacultyComponent from "../../ProtectedFacultyComponent";

export default function QuizDetails() {
  const { qid } = useParams();
  const quizzes = db.quizzes;
  const quiz = quizzes.find((quiz) => quiz._id === qid)
  return (
    <div id="wd-quiz-details">
      <h1>{quiz?.title}</h1>
      <ProtectedFacultyComponent>
        <Link  to="./edit/details" className="btn btn-danger wd-edit-quiz-btn">Edit</Link>
      </ProtectedFacultyComponent>
      <table>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-type"><b>Quiz Type</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-type"> {quiz?.details?.type} <> Quiz</> </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-points"><b>Points</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-points"> {quiz?.points} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-group"><b>Assignment Group</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-group"> {quiz?.details?.group} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-shuffle"><b>Shuffle Answers</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-shuffle"> {quiz?.details?.shuffled ? <>Yes</> : <>No</>} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-time"><b>Time Limit</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-time"> {quiz?.details?.timeLimit} <> Minutes</> </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-multi"><b>Multiple Attempts</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-multi"> {quiz?.details?.multiAttempts ? <>Yes</> : <>No</>} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-attempts"><b>Number of Attempts</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-attempts"> {quiz?.details?.multiAttempts ? quiz.details.numAttempts : <>1</>} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-show-correct"><b>Show Correct Answers</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-show-correct"> {quiz?.details?.immediateFeedback ? <>Immediately</> : quiz?.dueDate} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-access-code"><b>Access Code</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-access-code"> {quiz?.details?.accessCode} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-single"><b>One Question at a Time</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-single"> {quiz?.details?.allAtOnce ? <>Yes</> : <>No</>} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-webcam"><b>Webcam Required</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-webcam"> {quiz?.details?.webcamOn ? <>Yes</> : <>No</>} </FormLabel>
          </td>
        </tr>
        <tr>
        <td></td><td></td>
          <td align="right" valign="top">
            <FormLabel htmlFor="wd-lock"><b>Lock Questions After Answering</b></FormLabel>
          </td>
          <td></td><td></td>
          <td>
            <FormLabel type="text" id="wd-lock"> {quiz?.details?.lockQuestions ? <>Yes</> : <>No</>} </FormLabel>
          </td>
        </tr>
        <tr><td></td></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr>
      </table>
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{borderBottom: "solid 1px #000"}}>
            <FormLabel htmlFor="wd-due">
              <b>Due</b>
            </FormLabel>
          </td>
          <td style={{borderBottom: "solid 1px #000"}}>
            <FormLabel htmlFor="wd-for">
              <b>For</b>
            </FormLabel>
          </td>
          <td style={{borderBottom: "solid 1px #000"}}>
            <FormLabel htmlFor="wd-available-from">
              <b>Available from</b>
            </FormLabel>
          </td>
          <td style={{borderBottom: "solid 1px #000"}}>
            <FormLabel htmlFor="wd-until">
              <b>Until</b>
            </FormLabel>
          </td>
        </tr>
        <tr>
          <td>
            <FormLabel type="text" id="wd-due">
              {quiz?.dueDate}
            </FormLabel>
          </td>
          <td>
            <FormLabel type="text" id="wd-for">
              Everyone
            </FormLabel>
          </td>
          <td>
            <FormLabel type="text" id="wd-available-from">
              {quiz?.postDate}
            </FormLabel>
          </td>
          <td>
            <FormLabel type="text" id="wd-until">
              {quiz?.dueDate}
            </FormLabel>
          </td>
        </tr>
      </table>
    </div>
  )
}