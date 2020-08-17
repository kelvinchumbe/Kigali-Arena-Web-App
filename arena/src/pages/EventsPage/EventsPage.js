import React, { Component } from "react";
import Banner from "../../common/BannerComponent";
import RenderEvents from "../../common/RenderEvents";
import Footer from "../../common/Footer";
import { Button } from "reactstrap";

class EventsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      no_events: 9,
    };

    this.displayMoreEvents = this.displayMoreEvents.bind(this);
  }

  displayMoreEvents() {
    const curr_no_events = this.state.no_events;
    this.setState({
      no_events: curr_no_events + 3,
    });
  }

  render() {
    const { no_events } = this.state;

    return (
      <div>
        {/* <Banner events={this.props.events} /> */}

        <div className="main-content">
          <div className="section-title">
            <h2> UPCOMING EVENTS</h2>
            <div className="line"></div>
          </div>

          <RenderEvents events={this.props.events} no_of_events={no_events} />

          <div className="add-events">
            <Button onClick={this.displayMoreEvents}>
              <span className="fa fa-plus"></span> View all Events
            </Button>
          </div>
        </div>
        {/* <div className="bottom-content">
          <Footer />
        </div> */}
      </div>
    );
  }
}

export default EventsPage;
