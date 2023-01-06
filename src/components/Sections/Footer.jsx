import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import LogoImg from "../../assets/svg/Logo";

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <img src="https://user-images.githubusercontent.com/86917304/210371198-dc840422-935e-4712-9cf8-f6b6bbf28792.png" width={90} alt="logo" />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" , fontSize:"20px" }}>
                Shewin
              </h1>
            </Link>
            <StyleP className="whiteColor font15">
              © {getCurrentYear()} - <span className="purpleColor font15" style={{cursor:"pointer"}}>Shewin</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
            <BsFillArrowUpCircleFill size={30} color={"white"} />
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;