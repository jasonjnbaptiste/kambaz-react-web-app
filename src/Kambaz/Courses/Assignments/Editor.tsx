import { FormControl, FormLabel, FormSelect, Form, Button } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h2>Assignment Name</h2>
        <FormControl id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <FormControl as="textarea" rows={3} />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-points">Points</FormLabel>
            </td>
            <td>
              <FormControl type="text" id="wd-points" value={100} />
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
            </td>
            <td>
              <FormSelect> id="wd-group"
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </FormSelect>
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
            </td>
            <td>
              <FormSelect> id="wd-display-grade-as" 
              <option value="PERCENTAGE">Percentage</option>
              </FormSelect>
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
              <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
            </td>
            <td>
              <FormSelect> id="wd-submission-type" 
              <option value="ONLINE">Online</option>
              </FormSelect>
            </td>
          </tr><br></br>
          <tr>
            <td></td>
            <td align="left" valign="top">
                <FormLabel>Online Entry Options</FormLabel>
                <br/><Form.Check type="checkbox" name="text-entry" id="wd-text-entry"/>
                <FormLabel htmlFor="wd-text-entry">Text Entry</FormLabel>
                <br/><Form.Check type="checkbox" name="website-url" id="wd-website-url"/>
                <FormLabel htmlFor="wd-website-url">Wbsite URL</FormLabel>
                <br/><Form.Check type="checkbox" name="media-recordings" id="wd-media-recordings"/>
                <FormLabel htmlFor="wd-media-recordings">Media Recordings</FormLabel>
                <br/><Form.Check type="checkbox" name="student-annotation" id="wd-student-annotation"/>
                <FormLabel htmlFor="wd-student-annotation">Student Annotation</FormLabel>
                <br/><Form.Check type="checkbox" name="file-upload" id="wd-file-upload"/>
                <FormLabel htmlFor="wd-file-upload">File Uploads</FormLabel>
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
                <FormLabel htmlFor="wd-assign-to">Assign</FormLabel></td>
            <td align="left" valign="top">
                <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel><br />
                <FormControl id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr><br />
          <tr>
            <td />
            <td align="left" valign="top">
                <form>
                <FormLabel htmlFor="wd-due-date"> Due </FormLabel><br />
                <FormControl type="date"
                value="2024-05-13"
                id="wd-due-date"/><br/>
                </form>
            </td>
          </tr><br />
          <tr>
            <td />
            <td align="left" valign="top">
            <form>
                <FormLabel htmlFor="wd-available-from"> Available from </FormLabel><br />
                <FormControl type="date"
                value="2024-05-06"
                id="wd-available-from"/>
            </form>
            </td>
            <td>
            <form>
                <FormLabel htmlFor="wd-available-until"> Until </FormLabel><br />
                <FormControl type="date"
                value="2024-05-20"
                id="wd-available-until"/><br/>
            </form>
            </td>
          </tr><br />
            <tr > 
                <td />
                <td />
                <td align="right" valign="top">
                    <Button variant="secondary">Cancel</Button> <Button variant="danger">Save</Button>
                </td>
            </tr>
        </table>
      </div>
  );}  