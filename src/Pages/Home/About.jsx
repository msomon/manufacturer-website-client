import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import store from '../../images/store.jpg'
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about good product.</p>
            </div>
            <p className="mid">
            For your business, too, your customers’ wins are your wins. If you’re a small retailer, this is true not just with your in-store customer service. We want to give best price for all product.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src={store} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
