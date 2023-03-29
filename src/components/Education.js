import { useState } from "react";
import "./../style/form.css";

const Education = () => {
	const [status, setStatus] = useState("isEdit");

	const initialValues = {
		schoolName: "",
		studyTitle: "",
		educationStart: "",
		educationEnd: "",
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
				<h2 className="form-header">Education</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-layout">
						<div className="form-column">
							<label>School name:</label>
							<input
								value={values.schoolName}
								onChange={handleChange}
								type="text"
								name="schoolName"
								placeholder="Private lessons"
								required
							></input>
							<label>Title of study:</label>
							<input
								value={values.studyTitle}
								onChange={handleChange}
								type="text"
								name="studyTitle"
								placeholder="Mathematics"
								required
							></input>
						</div>
						<div className="form-column">
							<label>From:</label>
							<input
								value={values.educationStart}
								onChange={handleChange}
								type="date"
								name="educationStart"
								required
							></input>
							<label>To:</label>
							<input
								value={values.educationEnd}
								onChange={handleChange}
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

	if (status !== "isEdit") {
		return (
			<div>
				<h2 className="form-header">Education</h2>
				<form onSubmit={handleValueEdit}>
					<div className="form-display">
						<div className="form-column-display">
							<span className="name-display">School name:</span>
							{values.schoolName}
							<span className="name-display">Study title:</span>
							{values.studyTitle}
						</div>
						<div className="form-column-display">
							<span className="name-display">From:</span>
							{values.educationStart}
							<span className="name-display">To:</span>
							{values.educationEnd}
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

export default Education;
