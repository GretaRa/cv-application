import { Component } from "react";
import "./../style/form.css";

class General extends Component {
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
					<h2 className="form-header">Personal information</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-layout">
							<div className="form-column">
								<label>First name:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="text"
									name="firstName"
									placeholder="Ada"
									required
								></input>
								<label>Last name:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="text"
									name="lastName"
									placeholder="Lovelace"
									required
								></input>
							</div>
							<div className="form-column">
								<label>Email:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="email"
									name="email"
									placeholder="lovelace@pigeonmail.com"
									required
								></input>
								<label>Phone number:</label>
								<input
									value={value}
									onChange={this.handleChange}
									type="text"
									name="phoneNumber"
									placeholder="123123"
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
					<h2 className="form-header">Personal information</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-layout">
							<div className="form-column">
								<label>First name:</label>
								<input
									value={this.state.firstName}
									onChange={this.handleChange}
									type="text"
									name="firstName"
									placeholder="Ada"
									required
								></input>
								<label>Last name:</label>
								<input
									value={this.state.lastName}
									onChange={this.handleChange}
									type="text"
									name="lastName"
									placeholder="Lovelace"
									required
								></input>
							</div>
							<div className="form-column">
								<label>Email:</label>
								<input
									value={this.state.email}
									onChange={this.handleChange}
									type="email"
									name="email"
									placeholder="lovelace@pigeonmail.com"
									required
								></input>
								<label>Phone number:</label>
								<input
									value={this.state.phoneNumber}
									onChange={this.handleChange}
									type="text"
									name="phoneNumber"
									placeholder="123123"
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
					<h2 className="form-header">Personal information</h2>
					<form onSubmit={this.handleValueEdit}>
						<div className="form-display">
							<div className="form-column-display">
								<span className="name-display">First name:</span>
								{this.state.firstName}
								<span className="name-display">Last name:</span>
								{this.state.lastName}
							</div>
							<div className="form-column-display">
								<span className="name-display">Email:</span>
								{this.state.email}
								<span className="name-display">Phone number:</span>
								{this.state.phoneNumber}
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

export default General;
