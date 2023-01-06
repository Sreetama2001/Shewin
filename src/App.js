import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import Dashboard from "./components/dashboard/Dashboard.js";
// import TrackPeriod from "./components/Period_Cycle/Tracker_Period.jsx";
import SignUp from "./components/login/signUp.jsx";
import Login from "./components/login/Login.jsx";
// import Reminder from "./components/reminder/Reminder.jsx";
import UserForm from "./components/Appointment/UserForm.js";
import BlogForm from "./components/Appointment/Blog_Form.js";
import Blog from "./components/Blog/Blog.jsx";

export default function App() {
	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/dashboard" element={<Dashboard />} />
					{/* <Route path="/track" element={<TrackPeriod />} /> */}
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<Login />} />
					{/* <Route path="/remind" element={<Reminder />} /> */}
					<Route path="/appointment" element={<UserForm />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blogform" element={<BlogForm />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
