import { Component } from "react";

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: "isNew",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleValueEdit = this.handleValueEdit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		this.setState({ status: "isSubmitted" });
		event.preventDefault();
	}

	handleValueEdit(event) {
		this.setState({ status: "isEdit" });
		event.preventDefault();
	}

	render() {
		const { status, value } = this.state;

		if (status === "isNew") {
			return (
				<div>
					<h2 className="form-header">Education</h2>
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
									required
								></input>
								<label>Title of study:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="text"
									name="studyTitle"
									placeholder="Mathematics"
									required
								></input>
							</div>
							<div className="form-column">
								<label>From:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="date"
									name="educationStart"
									required
								></input>
								<label>To:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="date"
									name="educationEnd"
									required
								></input>
							</div>
						</div>
						<button className="form-button" type="submit">
							Save
						</button>
					</form>
				</div>
			);
		}

		if (status === "isEdit") {
			return (
				<div>
					<h2 className="form-header">Education</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-layout">
							<div className="form-column">
								<label>School name:</label>
								<input
									value={this.state.schoolName}
									onChange={this.handleChange}
									type="text"
									name="schoolName"
									placeholder="Private lessons"
									required
								></input>
								<label>Title of study:</label>
								<input
									value={this.state.studyTitle}
									onChange={this.handleChange}
									type="text"
									name="studyTitle"
									placeholder="Mathematics"
									required
								></input>
							</div>
							<div className="form-column">
								<label>From:</label>
								<input
									value={this.state.educationStart}
									onChange={this.handleChange}
									type="date"
									name="educationStart"
									required
								></input>
								<label>To:</label>
								<input
									value={this.state.educationEnd}
									onChange={this.handleChange}
									type="date"
									name="educationEnd"
								></input>
							</div>
						</div>
						<button className="form-button" type="submit">
							Save
						</button>
					</form>
				</div>
			);
		}

		if (status === "isSubmitted") {
			return (
				<div>
					<h2 className="form-header">Education</h2>
					<form onSubmit={this.handleValueEdit}>
						<div className="form-display">
							<div className="form-column-display">
								<span className="name-display">School name:</span>
								{this.state.schoolName}
								<span className="name-display">Study title:</span>
								{this.state.studyTitle}
							</div>
							<div className="form-column-display">
								<span className="name-display">From:</span>
								{this.state.educationStart}
								<span className="name-display">To:</span>
								{this.state.educationEnd}
							</div>
						</div>
						<button className="form-button" type="submit">
							Edit
						</button>
					</form>
				</div>
			);
		}
	}
}

export default Education;
