import { Component } from "react";

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: "isEditable",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueEdit = this.handleValueEdit.bind(this)
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

  handleValueEdit(event){
    this.setState({status: 'isEditable'});
    event.preventDefault();
  }

	render() {
		const { status, value } = this.state;

		if (status === "isSubmitted") {
			return (
				<div>
					<h2 className="form-header">Education</h2>
					<form onSubmit={this.handleValueEdit}>
						<div className="form-display">
							<div className="form-column-display">
								<h3 className="name-display">{this.state.schoolName}</h3>
								<p>{this.state.studyTitle}</p>
							</div>
							<div className="form-column-display">
								<p>{this.state.educationStart} - {this.state.educationEnd}</p>
							</div>
						</div>
						<button
              className="form-button"
              type="submit"
						>
							Edit
						</button>
					</form>
				</div>
			);
		}

    if (status === "isEditable"){
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
                ></input>
                <label>Title of study:</label>
                <input
                  value={value}
                  onChange={this.handleChange}
                  type="text"
                  name="studyTitle"
                  placeholder="Mathematics"
                ></input>
              </div>
              <div className="form-column">
                <label>From:</label>
                <input
                  value={value}
                  onChange={this.handleChange}
                  type="date"
                  name="educationStart"
                ></input>
                <label>To:</label>
                <input
                  value={value}
                  onChange={this.handleChange}
                  type="date"
                  name="educationEnd"
                ></input>
              </div>
            </div>
            <button 
              className="form-button"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
        
      );
    };
	}
}

export default Education;
