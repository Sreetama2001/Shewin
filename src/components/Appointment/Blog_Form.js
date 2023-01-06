import React, { useEffect, useState } from "react";
// import "../assets/scss/components/BlogForm.scss"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import "./user.css";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
	const navigate = useNavigate();
	const userActivity = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				navigate("/");
				// ...
			}
		});
	};

	useEffect(() => {
		userActivity();
	}, []);
	const [user, setuser] = useState({
		title: "",
		text: "",
		tag: "",
		Date: new Date().toLocaleDateString(),
		Time: new Date().toLocaleTimeString(),
	});

	const handleUserDoc = (e) => {
		e.preventDefault();
		const docRef = addDoc(collection(db, "AllBlogs"), {
			...user,
			name: auth.currentUser?.displayName,
		})
			.then(() => {})
			.catch((err) => {
				console.log(err);
			});

		db.collection("blogs")
			.doc(auth.currentUser?.uid)
			.collection("blog")
			.add(user)
			.then(() => {
				toast.success("Blog published!!!");
			})
			.catch((err) => {
				console.log(err);
			});

		setuser({
			title: "",
			text: "",
			tag: "",
			Date: new Date().toLocaleDateString(),
			Time: new Date().toLocaleTimeString(),
		});
	};

	return (
		<>
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
						<div class="card-image1">
							<h2 class="card-heading">
								Get start with
								<small>Write Your First Blog!!</small>
							</h2>
						</div>
						<form class="card-form" onSubmit={handleUserDoc}>
							<div class="input">
								<input
									type="text"
									class="input-field"
									onChange={(e) => {
										setuser({ ...user, title: e.target.value });
									}}
									required
								/>
								<label class="input-label">Title</label>
							</div>
							<div class="input">
								<textarea
									rows={2}
									cols={3}
									class="input-field"
									onChange={(e) => {
										setuser({ ...user, text: e.target.value });
									}}
									required
								/>
								<label class="input-label">Write your blog</label>
							</div>
							<div class="input">
								<input
									type="text"
									onChange={(e) => {
										setuser({ ...user, tag: e.target.value });
									}}
									class="input-field"
									required
								/>
								<label class="input-label">Write Appropiate Tag's</label>
							</div>
							<div class="action">
								<button class="action-button" type="submit">
									Publish
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogForm;
