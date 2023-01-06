import React, { useState } from "react";
import "./SignUp.css";
import { FaGoogle } from "react-icons/fa";
import {
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	const googleLogin = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				navigate("/dashboard");
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const EmailLogin = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				updateProfile(auth.currentUser, {
					displayName: name,
				});
				// ...
				console.log(userCredential.user);
				navigate("/login");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
				// ..
			});
	};
	return (
		<div className="bg">
			<div className="signup">
				<div className="signup-connect">
					<h1 style={{ color: "#E73B91" }}>Login with Google</h1>
					<a href="#" className="btn btn-google" onClick={googleLogin}>
						<FaGoogle style={{ marginRight: "10px" }} /> Sign in with Google
					</a>
				</div>
				<div className="signup-classic" style={{ color: "black" }}>
					<h2 style={{ fontWeight: "600", fontSize: "25px" }}>
						Create Your Account
					</h2>
					<div className="form" style={{ color: "black" }}>
						<fieldset className="username">
							<input
								type="text"
								style={{ color: "black" }}
								placeholder="name"
								onChange={(e) => setname(e.target.value)}
							/>
						</fieldset>
						<fieldset className="email">
							<input
								type="email"
								onChange={(e) => setemail(e.target.value)}
								style={{ color: "black" }}
								placeholder="email"
							/>
						</fieldset>
						<fieldset className="password">
							<input
								type="password"
								style={{ color: "black" }}
								placeholder="password"
								onChange={(e) => setpassword(e.target.value)}
							/>
						</fieldset>
						<button className="btn" onClick={EmailLogin}>
							sign up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
