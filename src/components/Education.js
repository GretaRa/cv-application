import { Component } from "react";

class Education extends Component {
	render() {
		return (
      <div>
				<h3 className="form-header">Education</h3>
				<form>
          <div className="form-layout">
            <div className="form-column">
              <label>School name:</label>
              <input type="text" name="schoolName" placeholder="Private lessons"></input>
              <label>Title of study:</label>
              <input type="text" name="studyTitle" placeholder="Mathematics"></input>
            </div>
            <div className="form-column">
              <label>From:</label>
              <input type="date" name="educationStart" ></input>
              <label>To:</label>
              <input type="date" name="educationEnd"></input>
            </div>
          </div>
          <button className="form-submit" type="submit">Save</button>
				</form>
			</div>
		);
	}
}

export default Education;