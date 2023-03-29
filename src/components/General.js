import { useState } from "react";
import "./../style/form.css";

const General = () => {
	const [status, setStatus] = useState("isNew");

	const initialValues = {
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
	};

	const [values, setValues] = useState(initialValues);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		setStatus("isSubmitted");
		event.preventDefault();
	};

	const handleValueEdit = (event) => {
		setStatus("isEdit");
		event.preventDefault();
	};

	if (status === "isNew") {
		return (
			<div>
				<h2 className="form-header">Personal information</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-layout">
						<div className="form-column">
							<label>First name:</label>
							<input
								value={values.firstName}
								onChange={handleChange}
								type="text"
								name="firstName"
								placeholder="Ada"
								required
							></input>
							<label>Last name:</label>
							<input
								value={values.lastName}
								onChange={handleChange}
								type="text"
								name="lastName"
								placeholder="Lovelace"
								required
							></input>
						</div>
						<div className="form-column">
							<label>Email:</label>
							<input
								value={values.email}
								onChange={handleChange}
								type="email"
								name="email"
								placeholder="lovelace@pigeonmail.com"
								required
							></input>
							<label>Phone number:</label>
							<input
								value={values.phoneNumber}
								onChange={handleChange}
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
				<form onSubmit={handleSubmit}>
					<div className="form-layout">
						<div className="form-column">
							<label>First name:</label>
							<input
								value={values.firstName}
								onChange={handleChange}
								type="text"
								name="firstName"
								placeholder="Ada"
								required
							></input>
							<label>Last name:</label>
							<input
								value={values.lastName}
								onChange={handleChange}
								type="text"
								name="lastName"
								placeholder="Lovelace"
								required
							></input>
						</div>
						<div className="form-column">
							<label>Email:</label>
							<input
								value={values.email}
								onChange={handleChange}
								type="email"
								name="email"
								placeholder="lovelace@pigeonmail.com"
								required
							></input>
							<label>Phone number:</label>
							<input
								value={values.phoneNumber}
								onChange={handleChange}
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
				<form onSubmit={handleValueEdit}>
					<div className="form-display">
						<div className="form-column-display">
							<span className="name-display">First name:</span>
							{values.firstName}
							<span className="name-display">Last name:</span>
							{values.lastName}
						</div>
						<div className="form-column-display">
							<span className="name-display">Email:</span>
							{values.email}
							<span className="name-display">Phone number:</span>
							{values.phoneNumber}
						</div>
					</div>
					<button className="form-button" type="submit">
						Edit
					</button>
				</form>
			</div>
		);
	}
};

export default General;
