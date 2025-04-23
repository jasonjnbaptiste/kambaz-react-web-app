import { useState } from "react";
import { FormControl, FormLabel, FormSelect } from "react-bootstrap";
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor";
import TrueFalseQuestion from "./TrueFalseQuestions";
import FillInTheBlankQuestionEditor from "./FillInTheBlankQuestionEditor";

export default function QuestionEditor() {
  const [type, setType] = useState("multi-choice");
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  }

  return (
    <div>
      <table>
        <tr>
          <td>
            <FormControl id="wd-title" defaultValue="New Question" style={{ width: "150px" }}/>
          </td>
          <td style={{ paddingLeft: "10px" }}>
            <FormSelect id="wd-type" style={{ width: "250px" }} onChange={handleTypeChange}>
              <option value="multi-choice">Multiple Choice</option>
              <option value="true-false">True/False</option>
              <option value="fill-blank">Fill in the Blank</option>
            </FormSelect>
          </td>
          <td style={{ paddingLeft: "10px" }}>
            <FormLabel htmlFor="wd-points"><b>pts:</b></FormLabel>
          </td>
          <td>
            <FormControl id="wd-points" style={{ width: "50px" }}/>
          </td>
        </tr>
      </table>
      <br /> <hr />
      <div>
        {type == "multi-choice" && (
          <div>
            <MultipleChoiceQuestionEditor />
          </div>
        )}
        {type == "true-false" && (
          <div>
            <TrueFalseQuestion />
          </div>
        )}
        {type == "fill-blank" && (
          <div>
            <FillInTheBlankQuestionEditor />
          </div>
        )}
      </div>
    </div>
  )
}