import React, { useEffect, useState } from "react";
import "./blogCard.css";
import { auth, db } from "../../firebase";
import { useLayoutEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const DashboardBlogCard = ({ setsize }) => {
	const [blogs, setblogs] = useState([]);
	const [idarr, setidarr] = useState([]);

	// function getBlogs() {
	// 	let blog = [];
	// 	let ids = [];
	// 	db.collection("blogs")
	// 		.doc(auth.currentUser?.uid)
	// 		.collection("blog")
	// 		.onSnapshot((snapshot) => {
	// 			snapshot.docs.map((doci) => {
	// 				ids.push(doci.id);
	// 				console.log(doci.id, doci.data());
	// 				blog.push(doci.data());
	// 			});
	// 		});
	// 	setsize(blog.length);
	// 	setblogs(blog);
	// 	setidarr(ids);
	// }

	async function ki() {
		let i = 0;
		const response = db
			.collection("blogs")
			.doc(auth.currentUser?.uid)
			.collection("blog");
		const data = await response.get();
		data.docs.forEach((item) => {
			i++;
			console.log(item.data());
			setblogs([...blogs, item.data()]);
			setidarr([...idarr, item.id]);
		});
		setsize(Math.ceil(i / 3));
	}

	useLayoutEffect(() => {
		setTimeout(() => {
			ki();
		}, 2000);
		return () => {
			setblogs([]);
			setidarr([]);
		};
	}, []);
	// const title = "dfdf";

	return (
		<div>
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
			<div className="courses-container">
				{blogs.map((item, idx) => {
					return (
						<div key={idx + 1} className="course" style={{ width: "90%" }}>
							<div className="course-preview">
								<h6 onClick={() => console.log(blogs)}>{item.Date}</h6>
								<h2>{item.title}</h2>
							</div>
							<div className="course-info">
								<div className="progress-container"></div>
								<h6>{item.text.slice(0, 150)}</h6>
								<button
									className="btnii"
									onClick={() => {
										toast.success("Blog Deleted!!");
									}}
								>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DashboardBlogCard;
