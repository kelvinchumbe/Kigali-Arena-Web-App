import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePageComponent";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventInformation from "./common/EventInformation";
import Banner from "./common/BannerComponent";
import Footer from "./common/Footer";
import { connect } from "react-redux";
import { fetchEvents } from "./state/actions/eventsAction";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
  };
};

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const RenderEventInformation = ({ match }) => {
      return (
        <div>
          {/* {console.log(this.props.events)} */}
          {/* <Banner events={this.props.events} /> */}
          <EventInformation
            event={
              this.props.events.events.filter(
                (event) => parseInt(match.params.eventId, 10) === event.id
              )[0]
            }
          />
        </div>
      );
    };

    return (
      <div>
        <Banner events={this.props.events} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage events={this.props.events} />}
          />
          <Route
            exact
            path="/events"
            component={() => <EventsPage events={this.props.events} />}
          />
          <Route path="/events/:eventId" component={RenderEventInformation} />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainComponent)
);
