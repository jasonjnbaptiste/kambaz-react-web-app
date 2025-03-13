import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import ProtectedFacultyComponent from "../../ProtectedFacultyComponent";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export default function AssignmentsControls() {
    const { pathname } = useLocation();
    return(
        <div id="wd-assignments-controls" className="text-nowrap">
        <InputGroup className="me-2 float-end">
            <FormGroup className="me-2 float-end" controlId="wd-search-assignment">
                <InputGroup>
                    <CiSearch className="position-relative me-2" style={{ bottom: "-10px" }}/>
                    <FormControl type="search" placeholder="Search..."/>
                </InputGroup> 
            </FormGroup>
        </InputGroup>
        <ProtectedFacultyComponent>
            <Link 
                to={`${pathname}/${uuidv4()}`} 
                className="btn btn-lg btn-danger me-1 float-end" 
                id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                Assignment
            </Link>
        </ProtectedFacultyComponent>
        <Button variant="light" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
            Group
        </Button>
        </div>
    );}