import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
	return (
		<Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
			<SidebarHeader className="flexSpaceCenter">
				<div className="flexNullCenter">
					<LogoIcon />
					<h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
						fanatic
					</h1>
				</div>
				<CloseBtn
					onClick={() => toggleSidebar(!sidebarOpen)}
					className="animate pointer"
				>
					<CloseIcon />
				</CloseBtn>
			</SidebarHeader>

			<UlStyle className="flexNullCenter flexColumn">
				<li className="semiBold font15 pointer">
					<Anc
						onClick={() => toggleSidebar(!sidebarOpen)}
						className="whiteColor"
						style={{ padding: "10px 15px" }}
						to="/"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Home
					</Anc>
				</li>
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeclassName="active"
						className="whiteColor"
						style={{ padding: "10px 15px" }}
						to="services"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Services
					</Link>
				</li>
				<li className="semiBold font15 pointer">
					<Anc
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeclassName="active"
						className="whiteColor"
						style={{ padding: "10px 15px" }}
						to="/track"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Trackers
					</Anc>
				</li>
				<li className="semiBold font15 pointer">
					<Anc
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeclassName="active"
						className="whiteColor"
						style={{ padding: "10px 15px" }}
						to="/blog"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Blog
					</Anc>
				</li>
				<li className="semiBold font15 pointer">
					<Anc
						onClick={() => toggleSidebar(!sidebarOpen)}
						className="whiteColor"
						style={{ padding: "10px 15px" }}
						to="/donate"
					>
						Donate
					</Anc>
				</li>
				<li className="semiBold font15 pointer">
					<Link
						onClick={() => toggleSidebar(!sidebarOpen)}
						activeclassName="active"
						className="whiteColor"
						style={{ padding: "10px 15px" }}
						to="contact"
						spy={true}
						smooth={true}
						offset={-60}
					>
						Contact
					</Link>
				</li>
			</UlStyle>
			<UlStyle className="flexSpaceCenter">
				<li className="semiBold font15 pointer">
					<Anc
						to="/"
						style={{ padding: "10px 30px 10px 0" }}
						className="whiteColor"
					>
						Log in
					</Anc>
				</li>
				<li className="semiBold font15 pointer flexCenter">
					<Anc
						to={"/appointment"}
						className="radius8 lightBg"
						style={{ padding: "10px 15px" }}
					>
						Book Appointment
					</Anc>
				</li>
			</UlStyle>
		</Wrapper>
	);
}

const Wrapper = styled.nav`
	width: 400px;
	height: 100vh;
	position: fixed;
	top: 0;
	padding: 0 30px;
	right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
	z-index: 9999;
	@media (max-width: 400px) {
		width: 100%;
	}
`;
const SidebarHeader = styled.div`
	padding: 20px 0;
`;
const CloseBtn = styled.button`
	border: 0px;
	outline: none;
	background-color: transparent;
	padding: 10px;
`;
const UlStyle = styled.ul`
	padding: 40px;
	li {
		margin: 20px 0;
	}
`;
