import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
	const [name, setname] = useState("");
	const [email, setemail] = useState("");

	function sendMail() {
		emailjs
			.send(
				"service_hesknwi",
				"template_kfsp0h8",
				{ name: name, email: email },
				"gP8sKnDLte9gp24k2"
			)
			.then(function (response) {
				console.log("SUCCESS!", response.status, response.text);
				toast.success("Query Registered :) ");
				setemail("");
			})
			.catch((err) => {
				toast.error("Invalid Email or Server Error");
			});
	}

	return (
		<Wrapper id="contact">
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 5000,
					style: {
						background: "#FA4C86",
						color: "#fff",
					},

					// Default options for specific types
					success: {
						duration: 3000,
						theme: {
							primary: "#FA4C86",
							secondary: "black",
						},
					},
				}}
			/>
			{/* <div
				className="container"
				style={{
					background: "#FA4C86",
					padding: "20px 20px",
					borderRadius: "15px",
				}}
			></div> */}
			<div className="lightBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Let's get in touch</h1>
						<p className="font13">
							We are happy to hear doubts and suggestions
						</p>
					</HeaderInfo>
					<div className="row" style={{ paddingBottom: "30px" }}>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<Form>
								<label className="font13">First name:</label>
								<input
									type="text"
									onChange={(e) => setname(e.target.value)}
									id="fname"
									name="fname"
									className="font20 extraBold"
								/>
								<label className="font13">Email:</label>
								<input
									type="text"
									onChange={(e) => setemail(e.target.value)}
									id="email"
									name="email"
									className="font20 extraBold"
								/>
								<label className="font13">Subject:</label>
								<input
									type="text"
									id="subject"
									name="subject"
									className="font20 extraBold"
								/>
								<textarea
									rows="4"
									cols="50"
									type="text"
									id="message"
									name="message"
									className="font20 extraBold"
								/>
							</Form>
							<SumbitWrapper className="flex">
								<ButtonInput
									type="submit"
									value="Send Message"
									className="pointer animate radius8"
									onClick={sendMail}
									style={{ maxWidth: "220px" }}
								/>
							</SumbitWrapper>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
							<div
								style={{ width: "50%" }}
								className="flexNullCenter flexColumn"
							></div>
							<div style={{ width: "50%" }}>
								<div style={{ marginTop: "-40px" }}>
									<img
										width={400}
										height={400}
										src={
											"https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1662890544~exp=1662891144~hmac=3e16c076295cf3cb34003badb796e6c4faa9b559b8aeadf3e10037c644ffd10a"
										}
										alt="office"
										className="radius6"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	padding: 70px 0 30px 0;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Form = styled.form`
	padding: 70px 0 30px 0;
	input,
	textarea {
		width: 100%;
		background-color: transparent;
		border: 0px;
		outline: none;
		box-shadow: none;
		border-bottom: 1px solid #707070;
		height: 30px;
		margin-bottom: 30px;
	}
	textarea {
		min-height: 100px;
	}
	@media (max-width: 860px) {
		padding: 30px 0;
	}
`;
const ButtonInput = styled.input`
	border: 1px solid #e52f8a;
	background-color: #e52f8a;
	width: 100%;
	padding: 15px;
	outline: none;
	color: #fff;
	:hover {
		background-color: #580cd2;
		border: 1px solid #7620ff;
		color: #fff;
	}
	@media (max-width: 991px) {
		margin: 0 auto;
	}
`;
const ContactImgBox = styled.div`
	max-width: 180px;
	align-self: flex-end;
	margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
	@media (max-width: 991px) {
		width: 100%;
		margin-bottom: 50px;
	}
`;
