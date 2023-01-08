import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import { Link } from "react-router-dom";

export default function Services() {
	return (
		<Wrapper id="services">
			{/* <div className="lightBg" style={{ padding: "50px 0" }}>
				<div className="container">
					<ClientSlider />
				</div>
			</div> */}
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Helpful Services</h1>
						<p className="font13">
							We are stand out as an integrated platform to provide healthcare
							solutions for deprived and helpless women around the world
							<br />
							Our platform can be used in several cases and can impact lives of
							several young girls.
						</p>
					</HeaderInfo>
					<ServiceBoxRow className="flex">
						<ServiceBoxWrapper>
							<ServiceBox
								icon="roller"
								title="Blogs on Health & Hygiene"
								subtitle="Menstrual hygiene is still not discussed openly and many of us feel shy to talk about it, So learn about it from out blogs.You can also contribute your blogs. Check out blogs for more."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="monitor"
								title="Mood and Cycle tracker"
								subtitle="Cycle Tracker provides your 3 month predicted period cycle, So that you can prepare for your period earlier! We provide you a mood analysis and try to control your mood swings by diverting you to memes and jokes. "
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="browser"
								title="Get Notified"
								subtitle="Sometimes we skip our meals , yoga classes or forget drinking water. Here our notifier will send you emails so that you get prior notifications about the them."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="printer"
								title="Easy doctor's appointment"
								subtitle="We use google maps to get the gynaecologist's location incase of severe period pain or other problems. Select the nearest gynae location and book an appointment with a form."
							/>
						</ServiceBoxWrapper>
					</ServiceBoxRow>
				</div>
				<div className="lightBg">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<h4 className="font15 semiBold">
									Share your stories through us to the world
								</h4>
								<h2 className="font40 extraBold">Let's end Period Stigma</h2>
								<p className="font12">
									Sign Up and start contributing your first own blog on health
									and hygiene. Here at Shewin we respect privacy so you can opt
									stay anynomous or privately share the story to us .
								</p>
								<ButtonsRow
									className="flexNullCenter"
									style={{ margin: "30px 0" }}
								>
									<div style={{ width: "190px" }}>
										<Link to="/login">
											<FullButton title="Share the world" />
										</Link>
									</div>
									<div style={{ width: "190px", marginLeft: "15px" }}>
										<Link to= "/contact">
											<FullButton title="Share only to Us" border />
										</Link>
									</div>
								</ButtonsRow>
							</AddLeft>
							<AddRight>
								<AddRightInner>
									<div className="flexNullCenter">
										<AddImgWrapp1 className="flexCenter">
											<img
												src={
													"https://user-images.githubusercontent.com/73426684/211125718-db9bf865-19bc-48cf-ba4d-8ce4772f63ee.jpg"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp1>
										<AddImgWrapp2>
											<img
												src={
													"https://img.freepik.com/free-vector/girl-power-reproductive-system-concept_23-2148658188.jpg?w=1060&t=st=1673055245~exp=1673055845~hmac=db1b2a8914e263895b52c5e91dcadd63e91d589d2ef85a9f30061f9b310161a0"
												}
												alt="Girl_power"
											/>
										</AddImgWrapp2>
									</div>
									<div className="flexNullCenter">
										<AddImgWrapp3>
											<img
												src={
													"https://i.pinimg.com/564x/84/27/2d/84272de2b92637a1508453cf97d82283.jpg"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp3>
										<AddImgWrapp4>
											<img
												src={
													"https://user-images.githubusercontent.com/73426684/211125598-97104550-8729-4b70-9eed-292edf632379.jpg"
												}
												alt="Stop_the_Stigma"
											/>
										</AddImgWrapp4>
									</div>
								</AddRightInner>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const ServiceBoxRow = styled.div`
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;
const ServiceBoxWrapper = styled.div`
	width: 20%;
	margin-right: 5%;
	padding: 80px 0;
	@media (max-width: 860px) {
		width: 100%;
		text-align: center;
		padding: 40px 0;
	}
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 100px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;
const AddRightInner = styled.div`
	width: 100%;
`;
const AddImgWrapp1 = styled.div`
	width: 48%;
	margin: 0 6% 10px 6%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp2 = styled.div`
	width: 30%;
	margin: 0 5% 10px 5%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp3 = styled.div`
	width: 20%;
	margin-left: 40%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp4 = styled.div`
	width: 30%;
	margin: 0 5%auto;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
