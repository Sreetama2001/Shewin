import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import {MdScreenShare , MdTrackChanges,MdVolunteerActivism} from 'react-icons/md';
import {FaNetworkWired ,FaBlogger, FaBuilding} from 'react-icons/fa';
import {BsFillPatchExclamationFill} from 'react-icons/bs';

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <FaBlogger size={50} color={"#E52F8A"} />;
      break;
    case "monitor":
      getIcon = <MdTrackChanges size={50} color={"#E52F8A"} />;
      break;
    case "browser":
      getIcon = <BsFillPatchExclamationFill size={50} color={"#E52F8A"} />;
      break;
    case "printer":
      getIcon = <MdVolunteerActivism size={50} color={"#E52F8A"} />;
      break;
    default:
      getIcon = <MdScreenShare size={50} color={"#E52F8A"} />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;