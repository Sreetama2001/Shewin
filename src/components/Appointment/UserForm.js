import React, { useEffect, useState } from "react";
// import "../assets/scss/components/userform.scss"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import "./user.css";

const UserForm = () => {
	const [user, setuser] = useState({
		Name: "",
		Age: "",
		Email: "",
		Problems: "",
		Date: "",
		Time: "",
	});

	const handleUserDoc = (e) => {
		e.preventDefault();
		addDoc(collection(db, "Patient"), user)
			.then(() => {
				toast.success(" Your Appoinment is  Booked !!");  // user need to confirm her appointment  
			})
			.catch((err) => {
				console.log(err);
			});

		setuser({
			Name: "",
			Age : "",
			Email: "",
			Problems: "",
			Date: "",
			Time: "",
		});
		setTimeout(() => {
			window.location.href = "/";
		}, 3000);
	};

	return (
		<>
			<TopNavbar />
			<div
				className="main-user"
				style={{ paddingTop: "200px", paddingBottom: "100px" }}
			>
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
				<div
					class="container"
					style={{
						background: "#FA4C86",
						padding: "20px 20px",
						borderRadius: "15px",
					}}
				>
					<div class="card">
						<div class="card-image">
							<h2 class="card-heading">
								Get started
								<small>Let's Book your Appointment</small>
							</h2>
						</div>
						<form class="card-form" onSubmit={handleUserDoc}>   
							<div class="input">
								<input
									type="text"
									class="input-field"
									onChange={(e) => {
										setuser({ ...user, Name: e.target.value });
									}}
									required
								/>
								<label class="input-label">Full name</label> 
							</div>
							<div class="input">
								<input
									type="number"
									min="10"
									max="60"
									class="input-field"
									onChange={(e) => {
										setuser({ ...user, Age: e.target.value });
									}}
									required
								/>
								<label class="input-label">Age in years</label>
							</div>
							<div class="input">
								<input
									type="email"
									onChange={(e) => {
										setuser({ ...user, Email: e.target.value });
									}}
									class="input-field"
									required
								/>
								<label class="input-label">Email Address</label>
							</div>
							<div class="input">
								<input
									type="text"
									onChange={(e) => {
										setuser({ ...user, Problems: e.target.value });
									}}
									class="input-field"
									required
								/>
								<label class="input-label">What's troubling you ?</label>
							</div>
							<div class="input">
								<input
									type="date"
									onChange={(e) => {
										setuser({ ...user, Date: e.target.value });
									}}
									class="input-field"
									required
								/>
								<label class="input-label">Date</label>
							</div>
							<div class="input">
								<input
									type="time"
									onChange={(e) => {
										setuser({ ...user, Time: e.target.value });
									}}
									class="input-field"
									required
								/>
								<label class="input-label">Time</label>
							</div>
							<div class="action">
								<button class="action-button" type="submit">
									Book Your Slot
								</button>
							</div>
						</form>
						<div class="card-info">
							<p>
								By signing up you are agreeing to our{" "}
								<a href="#">Terms and Conditions</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default UserForm;
