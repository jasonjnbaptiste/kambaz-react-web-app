import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ProtectedFacultyComponent from "../../ProtectedFacultyComponent";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IoEllipsisVertical } from "react-icons/io5";
import * as client from "./client";
import { useState } from "react";
export default function QuizzesControls() {
    const [quizzes, setQuizzes] = useState<any[]>([]);
    const { pathname } = useLocation();
    const createQuiz = async () => {
        const quiz = await client.createQuiz({
            title: "New Quiz",
            course: "CS101"
        });
            setQuizzes([...quizzes, quiz]);
    };
    return(
        <div id="wd-quizzes-controls" className="text-nowrap">
        <InputGroup className="me-2 float-end">
            <FormGroup className="me-2 float-end" controlId="wd-search-quizzes">
                <InputGroup>
                    <CiSearch className="position-relative me-2" style={{ bottom: "-10px" }}/>
                    <FormControl type="search" placeholder="Search..."/>
                </InputGroup> 
            </FormGroup>
        </InputGroup>
        <Button variant="light" size="lg" className="me-1 float-end" id="wd-add-quiz-group">
            <IoEllipsisVertical className="fs-4" />
        </Button>
        <ProtectedFacultyComponent>
            <button onClick={createQuiz} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2" />
                Quiz
            </button>
        </ProtectedFacultyComponent>
        </div>
    );}