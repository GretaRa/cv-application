import { useState } from "react";
import "./../style/form.css";

const Experience = () => {
	const [status, setStatus] = useState("isEdit");

	const initialValues = {
		companyName: "",
		positionTitle: "",
		employmentStart: "",
		employmentEnd: "",
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

	if (status === "isEdit") {
		return (
			<div>
				<h2 className="form-header">Practical experience</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-layout">
						<div className="form-column">
							<label>Company name:</label>
							<input
								value={values.companyName}
								onChange={handleChange}
								type="text"
								name="companyName"
								required
							></input>
							<label>Position title:</label>
							<input
								value={values.positionTitle}
								onChange={handleChange}
								type="text"
								name="positionTitle"
								required
							></input>
						</div>
						<div className="form-column">
							<label>From:</label>
							<input
								value={values.employmentStart}
								onChange={handleChange}
								type="date"
								name="employmentStart"
								required
							></input>
							<label>To:</label>
							<input
								value={values.employmentEnd}
								onChange={handleChange}
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

	if (status !== "isEdit") {
		return (
			<div>
				<h2 className="form-header">Practical experience</h2>
				<form onSubmit={handleValueEdit}>
					<div className="form-display">
						<div className="form-column-display">
							<span className="name-display">Company name:</span>
							{values.companyName}
							<span className="name-display">Position title:</span>
							{values.positionTitle}
						</div>
						<div className="form-column-display">
							<span className="name-display">From:</span>
							{values.employmentStart}
							<span className="name-display">To:</span>
							{values.employmentEnd}
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

export default Experience;
