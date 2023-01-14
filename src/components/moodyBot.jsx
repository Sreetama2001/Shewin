import GoogleMapReact from "google-map-react";
import axios from "axios";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Messages from "./moodyBot/Messages";
import BotMessage from "./moodyBot/BotMessage";
import UserMessage from "./moodyBot/UserMessage";
import Input from "./moodyBot/Input";

import API from "../ChatbotAPI";

// import "../assets/scss/components/chatbot.scss"

import "./dashboard/Dashboard.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc } from "firebase/firestore";
import { textAlign } from "@mui/system";
import DashboardBlogCard from "./Sections/DashboardBlogCard";
import Modal from "./Modal/Modal";
import "./Sections/blogCard.css";

const MoodyBot = () => {
	const navigate = useNavigate();
	const [CurrentUser, SetCurrentuser] = useState({});
	const [openModel, setOpenModel] = useState(false);
	const [blogs, setblogs] = useState([]);
	const [idarr, setidarr] = useState([]);
	const [size, setsize] = useState(0);

	const userActivity = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				SetCurrentuser(user);
				// ...
			} else {
				// User is signed out
				navigate("/");
				// ...
			}
		});
	};
	function getBlogs() {
		let blog = [];
		let ids = [];
		db.collection("blogs")
			.doc(auth.currentUser?.uid)
			.collection("blog")
			.onSnapshot((snapshot) => {
				snapshot.docs.map((doci) => {
					ids.push(doci.id);
					// console.log(doci.id, doci.data());
					blog.push(doci.data());
				});
			});
		setsize(blog.length);
		setblogs(blog);
		setidarr(ids);
	}

	useEffect(() => {
		userActivity();
		return () => {
			SetCurrentuser({});
		};
	}, []);

	const [messages, setMessages] = useState([]);

	useEffect(() => {
		async function loadWelcomeMessage() {
			setMessages([
				<BotMessage
					key="0"
					fetchMessage={async () => await API.GetChatbotResponse("hi")}
				/>,
			]);
		}
		loadWelcomeMessage();
	}, []);

	const send = async (text) => {
		const newMessages = messages.concat(
			<UserMessage key={messages.length + 1} text={text} />,
			<BotMessage
				key={messages.length + 2}
				fetchMessage={async () => await API.GetChatbotResponse(text)}
			/>
		);
		setMessages(newMessages);
	};

	return (
		<div className="clinic">
			{/* // Important! Always set the container height explicitly */}
			{/* <div style={{ height: "90vh", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyC1mpaHajUPWU696t2u2xboKThZC-lRnnA" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				></GoogleMapReact>
			</div> */}

			{/* <!-- Banner --> */}
			<a
				href="https://donate.stripe.com/test_eVa8xv6m603J4Za148"
				className="btn w-full btn-primary text-truncate rounded-0 border-0 position-relative"
				style={{ zIndex: "1000", background: "#E52F8A", marginTop: "0px" }}
			>
				<strong>Heya Shewinner : : </strong> Let's contribute to the
				community donate now →
			</a>

			{/* <!-- Dashboard --> */}
			<div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				{/* <!-- Vertical Navbar --> */}
				<nav
					className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
					id="navbarVertical"
				>
					<div className="container-fluid">
						{/* <!-- Toggler --> */}
						<button
							className="navbar-toggler ms-n2"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#sidebarCollapse"
							aria-controls="sidebarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						{/* <!-- Brand --> */}
						<div style={{ marginLeft: "10px" }}>
							<img
								width={70}
								height={70}
								style={{ borderRadius: "100%", margin: "auto" }}
								src={
									CurrentUser.photoURL != null
										? CurrentUser?.photoURL
										: "https://user-images.githubusercontent.com/86917304/189530487-4f2eba29-9268-4801-9f4f-b2a9b03948a1.png"
								}
								alt="..."
							/>{" "}
							<span
								style={{
									fontSize: "1.2rem",
									fontWeight: "700",
									paddingLeft: "50px",
									marginTop: "20px",
									color: "#F65AA8",
									textAlign: "center",
								}}
							>
								{CurrentUser?.displayName}
							</span>
						</div>
						{/* <!-- User menu (mobile) --> */}
						<div className="navbar-user d-lg-none">
							{/* <!-- Dropdown --> */}
							<div className="dropdown">
								{/* <!-- Toggle --> */}
								<a
									href="#"
									id="sidebarAvatar"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div className="avatar-parent-child">
										<img
											alt="Image Placeholder"
											src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
											className="avatar avatar- rounded-circle"
										/>
										<span className="avatar-child avatar-badge bg-success"></span>
									</div>
								</a>
								{/* <!-- Menu --> */}
								<div
									className="dropdown-menu dropdown-menu-end"
									aria-labelledby="sidebarAvatar"
								>
									<Link to="/dashboard" className="dropdown-item">
										Home
									</Link>
									<Link to="/track" className="dropdown-item">
										Period Tracker
									</Link>
									<Link to="/moodtracker" className="dropdown-item">
										Mood Tracker
									</Link>
									<Link to="/blogform" className="dropdown-item">
										BLogs
									</Link>
									<Link to="/profile" className="dropdown-item">
										Profile
									</Link>
									<hr className="dropdown-divider" />
									<a
										href="#"
										onClick={() => auth.signOut()}
										className="dropdown-item"
									>
										Logout
									</a>
								</div>
							</div>
						</div>
						{/* <!-- Collapse --> */}
						<div
							className="collapse navbar-collapse"
							id="sidebarCollapse"
						>
							{/* <!-- Navigation --> */}
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to={"/dashboard"}>
										<i className="bi bi-house"></i> Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/moodtracker">
										<i className="bi bi-bar-chart"></i> Mood Tracker
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={"/blogform"}>
										<i className="bi bi-chat"></i> Blogs
										<span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
											{size}
										</span>
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/track">
										<i className="bi bi-bookmarks"></i> Period Tracker
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={"/nearclinic"}>
										<i className="bi bi-cart-plus"></i> Nearest
										Pharmacy
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={"/nearhospital"}>
										<i className="bi bi-file-medical"></i> Nearest
										Hospital
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to={"/moodybot"}>
										<i className="bi bi-emoji-smile"></i> Moody Bot
									</Link>
								</li>
							</ul>
							{/* <!-- Divider --> */}
							<hr className="navbar-divider my-5 opacity-20" />
							{/* <!-- Navigation --> */}
							<ul className="navbar-nav mb-md-4">
								<li>
									<div
										onClick={() => console.log(blogs)}
										className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
										href="#"
									>
										Gynaecologists
										<span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
											13
										</span>
									</div>
								</li>
								<li>
									<a
										href="#"
										className="nav-link d-flex align-items-center"
									>
										<div className="me-4">
											<div className="position-relative d-inline-block text-white">
												<img
													alt="Image Placeholder"
													src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
													className="avatar rounded-circle"
												/>
												<span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
											</div>
										</div>
										<div>
											<span className="d-block text-sm font-semibold">
												Dr. Marie Claire
											</span>
											<span className="d-block text-xs text-muted font-regular">
												Dr. Paris, FR
											</span>
										</div>
										<div className="ms-auto">
											<i className="bi bi-chat"></i>
										</div>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="nav-link d-flex align-items-center"
									>
										<div className="me-4">
											<div className="position-relative d-inline-block text-white">
												<span className="avatar bg-soft-warning text-warning rounded-circle">
													JW
												</span>
												<span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
											</div>
										</div>
										<div>
											<span className="d-block text-sm font-semibold">
												Michael Jordan
											</span>
											<span className="d-block text-xs text-muted font-regular">
												Bucharest, RO
											</span>
										</div>
										<div className="ms-auto">
											<i className="bi bi-chat"></i>
										</div>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="nav-link d-flex align-items-center"
									>
										<div className="me-4">
											<div className="position-relative d-inline-block text-white">
												<img
													alt="..."
													src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
													className="avatar rounded-circle"
												/>
												<span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
											</div>
										</div>
										<div>
											<span className="d-block text-sm font-semibold">
												Dr Heather Wright
											</span>
											<span className="d-block text-xs text-muted font-regular">
												London, UK
											</span>
										</div>
										<div className="ms-auto">
											<i className="bi bi-chat"></i>
										</div>
									</a>
								</li>
							</ul>
							{/* <!-- Push content down --> */}
							<div className="mt-auto"></div>
							{/* <!-- User (md) --> */}
							<ul className="navbar-nav">
								{/* <li className="nav-item">
									<a className="nav-link" href="#">
										<i className="bi bi-person-square"></i> Account
									</a>
								</li> */}
								<li
									className="nav-item"
									style={{ cursor: "pointer" }}
									onClick={() => auth.signOut()}
								>
									<a className="nav-link" href="#">
										<i className="bi bi-box-arrow-left"></i> Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{/* <!-- Main content --> */}
				<div className="h-screen flex-grow-1 overflow-y-lg-auto">
					{/* <!-- Header --> */}
					<header className="bg-surface-primary border-bottom pt-6">
						<div className="container-fluid">
							<div className="mb-npx">
								<div className="row align-items-center">
									<div className="col-sm-6 col-12 mb-4 mb-sm-0">
										{/* <!-- Title --> */}
										<h1
											className="h2 mb-0 ls-tight"
											style={{ color: "#5C60F5" }}
										>{`Hello , ${CurrentUser?.displayName?.toLowerCase()}`}</h1>
									</div>
									{/* <!-- Actions --> */}
									<div className="col-sm-6 col-12 text-sm-end">
										<div className="mx-n1">
											<button
												onClick={() => setOpenModel(true)}
												className="btn d-inline-flex btn-sm btn-primary mx-1"
												style={{
													background: "#F65AA8",
													color: "white",
													border: "none",
												}}
											>
												<span className=" pe-2">
													<i
														className="bi bi-plus"
														style={{ fontSize: "15px" }}
													></i>
												</span>
												<span>Create Reminder</span>
											</button>
										</div>
									</div>
								</div>
								{/* <!-- Nav --> */}
								<ul className="nav nav-tabs mt-4 overflow-x border-0">
									<li className="nav-item ">
										<a href="#" className="nav-link active">
											Mood Tracker
										</a>
									</li>
									{/* <li className="nav-item">
										<a href="#" className="nav-link font-regular">
											Shared
										</a>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link font-regular">
											File requests
										</a>
									</li> */}
								</ul>
							</div>
						</div>
					</header>
					{/* <!-- Main --> */}
					<main className="py-6 bg-surface-secondary">
						<div className="container-fluid">
							<header className="header">Moody Bot</header>
							<div className="chatbot">
								<Messages messages={messages} />
								<Input onSend={send} />
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default MoodyBot;
