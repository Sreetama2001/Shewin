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
	const [y, setY] = useState(window.scrollY);
	const [sidebarOpen, toggleSidebar] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => setY(window.scrollY));
		return () => {
			window.removeEventListener("scroll", () => setY(window.scrollY));
		};
	}, [y]);

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
			{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
			<Wrapper
				className="flexCenter animate whiteBg"
				style={y > 100 ? { height: "60px" } : { height: "80px" }}
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
						<li className="semiBold font15 pointer">
							<Anc style={{ padding: "10px 15px", color: "#525F7F" }} to="/">
								Home
							</Anc>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								style={{ padding: "10px 15px" }}
								to="services"
								spy={true}
								smooth={true}
								offset={-80}
							>
								About
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Anc
								style={{ padding: "10px 15px" }}
								to="/blog"
							>
								Blog
							</Anc>
						</li>
						<li className="semiBold font15 pointer">
							<Anc
								style={{ padding: "10px 15px", color: "#525F7F" }}
								to="/track"
							>
								Tracker
							</Anc>
						</li>
						{/* <li className="semiBold font15 pointer">
              <Link activeclassName="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Volunteer's
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeclassName="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Job Portal
              </Link>
            </li> */}
						<li className="semiBold font15 pointer">
							<Link
								activeclassName="active"
								style={{ padding: "10px 15px" }}
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
						<li className="semiBold font15 pointer">
							<Anc
								to="/login"
								style={{
									padding: "10px 30px 10px 0",
								}}
							>
								Log in
							</Anc>
						</li>
						<li className="semiBold font15 pointer">
							<Anc
								to="/signup"
								style={{
									padding: "10px 30px 10px 0",
								}}
							>
								Sign Up
							</Anc>
						</li>
						{/* <li className="semiBold font15 pointer flexCenter">
							<a
								href="/"
								className="radius8 lightBg"
								style={{ padding: "10px 15px" }}
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
