import { Component } from "react";

class Experience extends Component {
	render() {
		return (
      <div>
				<h2 className="form-header">Practical experience</h2>
				<form>
          <div className="form-layout">
            <div className="form-column">
              <label>Company name:</label>
              <input type="text" name="companyName"></input>
              <label>Position title:</label>
              <input type="text" name="positionTitle"></input>
            </div>
            <div className="form-column">
              <label>From:</label>
              <input type="date" name="educationStart" ></input>
              <label>To:</label>
              <input type="date" name="educationEnd"></input>
            </div>
          </div>
          <button className="form-button" type="submit">Save</button>
				</form>
			</div>
		);
	}
}

export default Experience;