import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import FullButton from "../Buttons/FullButton";

export default function TopNavbar() {
	const [sidebarOpen, toggleSidebar] = useState(false);

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
			{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
			<Wrapper
				className="flexCenter animate whiteBg"
				// style={y > 100 ? { height: "60px" } : { height: "80px" }}
			>
				<NavInner className="container flexSpaceCenter">
					<Anc className="pointer flexNullCenter" smooth={true} to={"/"}>
						<LogoIcon />
						<h1 style={{ marginLeft: "3px" }} className="font20 extraBold">
							Shewin
						</h1>
					</Anc>
					<BurderWrapper
						className="pointer"
						onClick={() => toggleSidebar(!sidebarOpen)}
					>
						<BurgerIcon />
					</BurderWrapper>
					<UlWrapper className="flexNullCenter">
						<li className="semiBold font15 pointer hover">
							<Anc style={{ padding: "10px 15px", color: "black" }} to="/">
								Home
							</Anc>
						</li>
						<li className="semiBold font15 pointer hover">
							<Link
								style={{ padding: "10px 15px", color: "black" }}
								to="services"
								spy={true}
								smooth={true}
								offset={-80}
							>
								About
							</Link>
						</li>
						<li className="semiBold font15 pointer hover">
							<Anc
								style={{ padding: "10px 15px", color: "black" }}
								to="/track" // changing this to projects or health services
							>
								Trackers
							</Anc>
						</li>
						{/* <li className="semiBold font15 pointer hover">
							<Link
								activeclassName="active"
								style={{ padding: "10px 15px", color: "black" }}
								to="projects"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Health
							</Link>
						</li> */}
						{/* <li className="semiBold font15 pointer hover">
							<Anc style={{ padding: "10px 15px" , color:"black" }} to="/blog">
								Blogs
							</Anc>
						</li> */}
						<li className="semiBold font15 pointer hover">
							<Anc
								style={{ padding: "10px 15px", color: "black" }}
								to="/blog" // changing this to projects or health services
							>
								Blogs
							</Anc>
						</li>
						<li className="semiBold font15 pointer hover">
							<a
								style={{ padding: "10px 15px", color: "black" }}
								target="_blank"
								href="https://donate.stripe.com/test_eVa8xv6m603J4Za148"
							>
								Donate
							</a>
						</li>
						<li className="semiBold font15 pointer hover">
							<Link
								activeclassName="active"
								style={{ padding: "10px 15px", color: "black" }}
								to="contact"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Contact
							</Link>
						</li>
					</UlWrapper>
					<UlWrapperRight className="flexNullCenter">
						<li className="semiBold font15 pointer hover">
							<Anc
								to="/login"
								style={{
									padding: "10px 30px 10px 0",
								}}
							>
								Log in
							</Anc>
						</li>
						<li className="semiBold font15 pointer hover">
							<Anc
								to="/signup"
								style={{
									padding: "10px 30px 10px 0",
								}}
							>
								Sign Up
							</Anc>
						</li>
						{/* <li className="semiBold font15 pointer hover flexCenter">
							<a
								href="/"
								className="radius8 lightBg"
								style={{ padding: "10px 15px" , color:"black" }}
							>
								Get Started
							</a>
						</li> */}
					</UlWrapperRight>
				</NavInner>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
`;
const NavInner = styled.div`
	position: relative;
	height: 100%;
`;
const BurderWrapper = styled.button`
	outline: none;
	border: 0px;
	background-color: transparent;
	height: 100%;
	padding: 0 15px;
	display: none;
	@media (max-width: 760px) {
		display: block;
	}
`;
const UlWrapper = styled.ul`
	display: flex;
	@media (max-width: 760px) {
		display: none;
	}
`;
const UlWrapperRight = styled.ul`
	@media (max-width: 760px) {
		display: none;
	}
`;
