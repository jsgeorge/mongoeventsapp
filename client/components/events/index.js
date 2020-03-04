import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import { getEvents } from "../../actions/eventActions";
import EventItem from "./item";

class EventsPage extends Component {
  componentDidMount() {
    // this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    //if (!this.props.auth.isAuthenticated) this.props.history.push("/");
    return (
      <div>
        <Link to="/events/new" className="btn btn-primary">
          Add Event
        </Link>

        <h3>Events</h3>
        {/* {events.list ? (
          <div>
            {this.props.events.list.map(event => (
              <EventItem key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <p>No current events</p>
        )} */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    events: state.events
  };
}
export default connect(mapStateToProps)(withRouter(EventsPage));
