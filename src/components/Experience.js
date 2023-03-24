import { Component } from "react";

class Experience extends Component {
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
					<h2 className="form-header">Practical experience</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-layout">
							<div className="form-column">
								<label>Company name:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="text" name="companyName"
									required
								></input>
								<label>Position title:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="text" name="positionTitle"
									required
								></input>
							</div>
							<div className="form-column">
								<label>From:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="date" name="employmentStart" 
									required
								></input>
								<label>To:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="date"
									name="employmentEnd"
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
					<h2 className="form-header">Practical experience</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-layout">
							<div className="form-column">
								<label>Company name:</label>
								<input
									value={this.state.companyName}
									onChange={this.handleChange}
									type="text" name="companyName"
									required
								></input>
								<label>Position title:</label>
								<input
									value={this.state.positionTitle}
									onChange={this.handleChange}
									type="text" name="positionTitle"
									required
								></input>
							</div>
							<div className="form-column">
								<label>From:</label>
								<input
									value={this.state.employmentStart}
									onChange={this.handleChange}
									type="date"
									name="educationStart"
									required
								></input>
								<label>To:</label>
								<input
									value={this.state.employmentEnd}
									onChange={this.handleChange}
									type="date"
									name="employmentEnd"
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
					<h2 className="form-header">Practical experience</h2>
					<form onSubmit={this.handleValueEdit}>
						<div className="form-display">
							<div className="form-column-display">
								<span className="name-display">Company name:</span>{this.state.companyName}
								<span className="name-display">Position title:</span>{this.state.positionTitle}
							</div>
							<div className="form-column-display">
								<span className="name-display">From:</span>
								{this.state.employmentStart}
								<span className="name-display">To:</span>
								{this.state.employmentEnd}
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

export default Experience;