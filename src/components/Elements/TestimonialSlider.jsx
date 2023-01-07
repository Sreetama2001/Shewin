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
            text="Some of the most persistent misconceptions about periods are that irregularity every month is normal, that super-heavy cycles are just part of “the curse,” that severe period pain is something everyone with a period experiences, and that you can’t get pregnant while menstruating. None of these are true."
            author="Dr. Geri Hewitt"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="It is important for clinicians to have an understanding of the menstrual patterns of adolescent girls, the ability to differentiate between normal and abnormal menstruation, and the skill to know how to evaluate the adolescent girl patient, Regular cycles with the absence of excessive bleeding and/or pain are signs of wellness."
            author="Dr. Geri Hewitt"

          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="For decades, the connection between menstruation and overall health was largely unrecognized. Primary caregivers and other non-OB-GYN physicians did not routinely ask about period details. Women didn’t always know how or when to bring period issues to doctors."
            author="Dr Starre Julia Vartan"

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