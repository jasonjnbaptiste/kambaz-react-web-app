import { Button, FormControl, FormGroup, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function AssignmentsControls() {
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
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
            Assignment
        </Button>
        <Button variant="light" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
            Group
        </Button>
        </div>
    );}