import { sliderProps } from "@/src/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Home5Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <section className="main-slider-area rel z-1">

        {/* DESKTOP */}
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.mainSlider}
          className="main-slider d-none d-lg-block"
        >

          {/* Item 1:  Dream Merchant Intro */}
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/bg01_desk_dreammerch.jpg)",
              }}
            >
              <div className="logic-home">
                <img src="assets/images/logic/ml_happy02.png" class="float-right z-2" alt="Michael Logic in a blue linen suit"/>
              </div>
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title"> Catch Michael Logic™ ... </span>
                  <h2 className="d-none d-lg-block">
                    <span>a wizard for</span>
                    <br /> adding AI to grow your business!
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <a href="contact.html" className="theme-btn style-two">
                      Make a Wish Now <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Item 2:  Dream Merchant Intro */}
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/bg02_desk_dreammerch.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Catch Michael Logic™ ... </span>
                  <h2 className="d-none d-lg-block">
                    <span>a wizard for </span>
                    <br /> implementing enterprise DevOps!
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <a href="contact.html" className="theme-btn style-two">
                      Make a Wish Now <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* ---- e/ of DESKTOP ---- */}

        {/* MOBILE */}
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.mainSlider}
          className="main-slider d-lg-none"
        >

          {/* Item 1:  Dream Merchant Intro */}
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/bg01_mobl_dreammerch.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Catch Michael Logic™ ... </span>
                  <h2>
                    <span>a wizard for</span>
                    <br /> adding AI to grow your business!
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <a href="contact.html" className="theme-btn style-two">
                      Make a Wish Now <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Item 2:  Dream Merchant Intro */}
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/bg02_mobl_dreammerch.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <span className="sub-title">Catch Michael Logic™ ... </span>
                  <h2 className="d-none d-lg-block">
                    <span>a wizard for </span>
                    <br /> implementing enterprise DevOps!
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    <a href="contact.html" className="theme-btn style-two">
                      Make a Wish Now <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* ---- e/ of Mobile ---- */}

        {/* <div className="main-slider-controls">
          <div className="container">
            <div className="main-slider-arrows">
              <button className="main-slider-prev" onClick={this.previous}>
                <i className="fal fa-long-arrow-left" /> prev
              </button>
              <button className="main-slider-next" onClick={this.next}>
                next <i className="fal fa-long-arrow-right" />
              </button>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}
