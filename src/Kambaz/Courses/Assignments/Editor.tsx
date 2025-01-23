export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h2>Assignment Name</h2>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select> id="wd-group"
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select> id="wd-display-grade-as" 
              <option value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select> id="wd-submission-type" 
              <option value="ONLINE">Online</option>
              </select>
            </td>
          </tr><br></br>
          <tr>
            <td></td>
            <td align="left" valign="top">
                <label>Online Entry Options</label>
                <br/><input type="checkbox" name="text-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br/><input type="checkbox" name="website-url" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Wbsite URL</label>
                <br/><input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br/><input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br/><input type="checkbox" name="file-upload" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr><br></br>
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label></td>
            <td align="left" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label><br />
                <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr><br />
          <tr>
            <td />
            <td align="left" valign="top">
                <form>
                <label htmlFor="wd-due-date"> Due </label><br />
                <input type="date"
                value="2024-05-13"
                id="wd-due-date"/><br/>
                </form>
            </td>
          </tr><br />
          <tr>
            <td />
            <td align="left" valign="top">
            <form>
                <label htmlFor="wd-available-from"> Available from </label><br />
                <input type="date"
                value="2024-05-06"
                id="wd-available-from"/>
            </form>
            </td>
            <td>
            <form>
                <label htmlFor="wd-available-until"> Until </label><br />
                <input type="date"
                value="2024-05-20"
                id="wd-available-until"/><br/>
            </form>
            </td>
          </tr><br />
            <tr > 
                <td />
                <td />
                <td align="right" valign="top">
                    <button>Cancel</button> <button>Save</button>
                </td>
            </tr>
        </table>
      </div>
  );}  