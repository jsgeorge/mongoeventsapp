import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        console.log("must be logged in");
        this.props.history.push("/signin");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push("/events");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    console.log("auth in requireAuth", state.auth);
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(withRouter(Authenticate));
}
