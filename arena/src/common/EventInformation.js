import React from "react";
import Card from "@material-ui/core/Card";
import { Button } from "reactstrap";
import { apiUrl } from "./../utils/config";

const EventInformation = (props) => {
  var card = null;
  var date = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(Date.parse(props.event.date)));

  date = date.split(" ");

  if (props.event.category === "sports") {
    card = (
      <Card className="event-info">
        <div className="team-images-info">
          <div className="home">
            <img
              src={apiUrl + "images/" + props.event.images.home + ".png"}
              alt={"Home Team"}
            />
          </div>

          <div className="away">
            <img
              src={apiUrl + "images/" + props.event.images.away + ".png"}
              alt={"Away Team"}
            />
          </div>
        </div>

        <div className="title">
          <h4>{props.event.name}</h4>
        </div>

        <div className="info-line"></div>

        <div className="bottom">
          <div className="date">
            <h5>
              <div className="date-bold">
                {date[1] + " " + date[2].split(",")[0]}
              </div>
              <div className="date-normal">
                {" | " + date[0].split(",")[0] + " " + props.event.time}
              </div>
            </h5>
          </div>
          <div className="bttn">
            <Button>GET TICKETS</Button>
          </div>
        </div>
      </Card>
    );
  } else if (props.event.category === "concert") {
    card = (
      <Card>
        <div className="event-info">
          <div className="concert-images-info">
            <img
              src={apiUrl + "images/" + props.event.images.banner + ".jpg"}
              alt={"Banner Concert"}
            />
          </div>

          <div className="title">
            <h4>{props.event.name}</h4>
          </div>

          <div className="info-line"></div>

          <div className="bottom">
            <div className="date">
              <h5>
                <div className="date-bold">
                  {date[1] + " " + date[2].split(",")[0]}
                </div>
                <div className="date-normal">
                  {" | " + date[0].split(",")[0] + " " + props.event.time}
                </div>
              </h5>
            </div>
            <div className="bttn">
              <Button>GET TICKETS</Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <div className="main-content">
        <div className="section-title">
          <h2> EVENT INFORMATION</h2>
          {card}
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
