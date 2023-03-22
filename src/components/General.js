import { Component } from "react";
import "./../style/form.css";

class General extends Component {

	render() {
		return (
			<div>
				<h2 className="form-header">Personal information</h2>
				<form>
          <div className="form-layout">
            <div className="form-column">
              <label>First name:</label>
              <input type="text" name="firstName" placeholder="Ada"></input>
              <label>Email:</label>
              <input type="email" name="email" placeholder="lovelace@pigeonmail.com"></input>
            </div>
            <div className="form-column">
              <label>Last name:</label>
              <input type="text" name="lastName" placeholder="Lovelace"></input>
              <label>Phone number:</label>
              <input type="text" name="phoneNumber" placeholder="123123"></input>
            </div>
          </div>
          <button className="form-button" type="submit">Save</button>
				</form>
			</div>
		);
	}
}

export default General;
