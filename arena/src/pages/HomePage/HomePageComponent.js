import React, { Component, useState } from "react";
import Banner from "../../common/BannerComponent";
import RenderEvents from "../../common/RenderEvents";
// import EventCard from "../../common/EventCard";
import Footer from "../../common/Footer";
import { apiUrl } from "../../utils/config";
import {
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { Link } from "react-router-dom";

class RenderGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeIndex: 0,
      animating: false,
    };

    this.setActiveIndex = this.setActiveIndex.bind(this);
    this.setAnimating = this.setAnimating.bind(this);
  }

  componentDidMount() {
    fetch(apiUrl + "images")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          images: data,
        });
      });
  }

  setActiveIndex(index) {
    this.setState({
      activeIndex: index,
    });
  }

  setAnimating(animate) {
    this.setState({
      animating: animate,
    });
  }

  render() {
    const { activeIndex, animating } = this.state;

    const next = () => {
      if (animating) return;
      const nextIndex =
        activeIndex === this.state.images.length - 1 ? 0 : activeIndex + 1;
      this.setActiveIndex(nextIndex);
    };

    const previous = () => {
      if (animating) return;
      const nextIndex =
        activeIndex === 0 ? this.state.images.length - 1 : activeIndex - 1;
      this.setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
      if (animating) return;
      this.setActiveIndex(newIndex);
    };

    return (
      <div className="gallery">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={this.state.images}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {this.state.images.map((image) => {
            return (
              <CarouselItem
                onExiting={() => this.setAnimating(true)}
                onExited={() => this.setAnimating(false)}
                key={image.id}
              >
                <img src={image.url} alt={image.name} />
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    );
  }
}

const RenderMap = () => {
  return (
    <>
      <div className="direction">
        <h2>Get to Kigali Arena</h2>
        <h3>KG 17 AVE | Next to Amahoro Stadium</h3>
        <button>GET DIRECTION</button>
      </div>

      <div className="map">
        <img src={apiUrl + "/images/map-to-arena.png"} />
      </div>
    </>
  );
};

const HomePage = (props) => {
  return (
    <div>
      {/* {console.log(props.events)} */}
      {/* <Banner events={props.events} /> */}

      <div className="main-content">
        <div className="section-title">
          <h2> UPCOMING EVENTS</h2>
          <div className="line"></div>
        </div>

        <RenderEvents events={props.events} no_of_events={6} />

        <div className="add-events">
          <Link to="/events">
            <Button>
              <span className="fa fa-plus"></span> View all Events
            </Button>
          </Link>
        </div>

        <div className="section-title">
          <h2> GALLERY</h2>
          <div className="line"></div>
        </div>

        <RenderGallery />
      </div>
      <div className="bottom-content">
        <RenderMap />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
