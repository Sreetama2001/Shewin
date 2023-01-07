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
<<<<<<< HEAD
            text="Some of the most persistent misconceptions about periods are that irregularity every month is normal, that super-heavy cycles are just part of “the curse,” that severe period pain is something everyone with a period experiences, and that you can’t get pregnant while menstruating. None of these are true."
            author="Dr. Geri Hewitt"
=======
            text="Your product is affordable, I love the customizations I can do with it, and it works. I've been a customer of yours for years, so I've seen you grow and have witnessed the changes from minor updates to major updates. Thanks for doing what you do, thanks for building this software, and thanks for the help you give.
            Thanks,"
            author="Micheal Johnathan"
>>>>>>> ba8539966b3fdda239f8acc503080237486dc7b2
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
<<<<<<< HEAD
            text="It is important for clinicians to have an understanding of the menstrual patterns of adolescent girls, the ability to differentiate between normal and abnormal menstruation, and the skill to know how to evaluate the adolescent girl patient, Regular cycles with the absence of excessive bleeding and/or pain are signs of wellness."
            author="Dr. Geri Hewitt"
=======
            text="Another lovely experience is, I changed my host recently, I went through some major transition issues which I was not able to solve. Your customer support from the forum did a amazing job in helping me, I felt your hands holding me all the while in my crisis throughout. Thank you so much!"
            author="Amanda Emerson"
>>>>>>> ba8539966b3fdda239f8acc503080237486dc7b2
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
<<<<<<< HEAD
            text="For decades, the connection between menstruation and overall health was largely unrecognized. Primary caregivers and other non-OB-GYN physicians did not routinely ask about period details. Women didn’t always know how or when to bring period issues to doctors."
            author="Dr Starre Julia Vartan"
=======
            text="Thanks for the all the time and effort you guys put into your products.
I must also say that before I purchased your product I was never happy with support forums. I've used others and had my questions go unanswered for days and even weeks. You guys though have set a standard by which I'll measure everyone else by."
            author="Nia Kalos"
>>>>>>> ba8539966b3fdda239f8acc503080237486dc7b2
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