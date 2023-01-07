import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Your product is affordable, I love the customizations I can do with it, and it works. I've been a customer of yours for years, so I've seen you grow and have witnessed the changes from minor updates to major updates. Thanks for doing what you do, thanks for building this software, and thanks for the help you give.
            Thanks,"
            author="Micheal Johnathan"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Another lovely experience is, I changed my host recently, I went through some major transition issues which I was not able to solve. Your customer support from the forum did a amazing job in helping me, I felt your hands holding me all the while in my crisis throughout. Thank you so much!"
            author="Amanda Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Thanks for the all the time and effort you guys put into your products.
I must also say that before I purchased your product I was never happy with support forums. I've used others and had my questions go unanswered for days and even weeks. You guys though have set a standard by which I'll measure everyone else by."
            author="Nia Kalos"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}
const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;