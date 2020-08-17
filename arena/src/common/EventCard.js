import React from "react";
import { apiUrl } from "../utils/config";
import Card from "@material-ui/core/Card";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import EventInformation from "./EventInformation";

const EventCard = (props) => {
  var date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(Date.parse(props.event.date)));

  date = date.split(" ");
  if (props.event.category === "sports") {
    return (
      <Card className="event-card">
        <div className="team-images">
          <img
            src={apiUrl + "images/" + props.event.images.home + ".png"}
            alt={"Home Team"}
          />
          <img
            src={apiUrl + "images/" + props.event.images.away + ".png"}
            alt={"Away Team"}
          />
        </div>

        <div className="date">
          <h5>{date[0] + " " + date[1].split(",")[0] + " / " + date[2]}</h5>
        </div>

        <div className="title">
          <h4>{props.event.name}</h4>
        </div>

        <div className="bottom-btn">
          <div className="line"></div>

          <div className="bttn">
            <Link to={"/events/" + props.event.id}>
              <Button>GET TICKETS</Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  } else if (props.event.category === "concert") {
    return (
      <Card className="event-card">
        <div className="concert-images">
          <img
            src={apiUrl + "images/" + props.event.images.banner + ".jpg"}
            alt={"Banner Concert"}
          />
        </div>

        <div className="date">
          <h5>{date[0] + " " + date[1].split(",")[0] + " / " + date[2]}</h5>
        </div>

        <div className="title">
          <h4>{props.event.name}</h4>
        </div>

        <div className="bottom-btn">
          <div className="line"></div>

          <div className="bttn">
            <Link to={"/events/" + props.event.id}>
              <Button>GET TICKETS</Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  } else {
    return <div></div>;
  }
};

export default EventCard;
