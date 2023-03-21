import { Component } from "react";

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: "empty",
			value: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value, status: "active" });
	}

	handleSubmit(event) {
		console.log(this.state.value); 
		this.setState({ status: "submitted" });
		event.preventDefault();
	}

	render() {
		const { status, value } = this.state;

		if (status === "submitted") {
			return (
				<div>
					<h2 className="form-header">Education</h2>
					<form>
						<div className="form-layout">
							<div className="form-column">
								<h3>School name:</h3>
								<p>{value}</p>
								<h3>Title of study:</h3>
								<p>Input</p>
							</div>
							<div className="form-column">
								<h3>From:</h3>
								<p>Date</p>
								<h3>To:</h3>
								<p>Date</p>
							</div>
						</div>
						<button
							disabled={status === "empty"}
							className="form-submit"
							type="submit"
						>
							Save
						</button>
					</form>
				</div>
			);
		}

		return (
			<div>
				<h3 className="form-header">Education</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-layout">
						<div className="form-column">
							<label>School name:</label>
							<input
                value={value}
								onChange={this.handleChange}
								type="text"
								name="schoolName"
								placeholder="Private lessons"
							></input>
							<label>Title of study:</label>
							<input
								type="text"
								name="studyTitle"
								placeholder="Mathematics"
							></input>
						</div>
						<div className="form-column">
							<label>From:</label>
							<input type="date" name="educationStart"></input>
							<label>To:</label>
							<input type="date" name="educationEnd"></input>
						</div>
					</div>
					<button
						disabled={status === "empty"}
						className="form-submit"
						type="submit"
					>
						Save
					</button>
				</form>
			</div>
		);
	}
}

export default Education;
