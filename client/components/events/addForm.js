import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import { addEvent } from "../../actions/eventActions";

class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      category: "",
      username: "",
      eventDate: "",
      eventTime: "",
      description: "",
      errors: {},
      isLoading: false,
      invalid: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    // if (this.isValid()) {
    this.setState({ errors: {}, isLoading: true });
    this.props.addEvent(this.state).then(
      res => this.props.history.push("/events"),
      err => this.setState({ errors: err.response.data, isLoading: false })
    );
    // }
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            error={errors.username}
            label="Name"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.name}
            field="name"
          />
          <TextFieldGroup
            error={errors.category}
            label="category"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.category}
            field="category"
          />
          <TextFieldGroup
            error={errors.address}
            label="address"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.address}
            field="address"
          />
          <TextFieldGroup
            error={errors.eventDate}
            label="eventDate"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.eventDate}
            field="eventDate"
          />
          <TextFieldGroup
            error={errors.description}
            label="description"
            onChange={this.onChange}
            //checkUserExists={this.checkUserExists}
            value={this.state.description}
            field="description"
          />
          <div className="form-group">
            <button
              disabled={this.state.isLoading || this.state.invalid}
              className="btn btn-primary btn-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addEvent })(withRouter(AddEventForm));
