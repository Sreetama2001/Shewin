import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogShow.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const BlogShow = () => {
	const { id } = useParams();
	const [data, setdata] = useState({});
	async function getpost() {
		const docRef = doc(db, "AllBlogs", `${id}`);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			setdata(docSnap.data());
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}

	useEffect(() => {
		getpost();
	}, []);

	return (
		<div>
			<div className="cont" style={{ background: "white" }}>
				<h1
					className="head h1_"
					style={{ color: "#F65AA8", textAlign: "center", paddingTop: "20px" }}
				>
					{data.title}
				</h1>
				<hr />
				<article className="post">
					<div
						style={{
							background: "white",
							// display: "flex",
							// alignItems: "center",
							// justifyContent: "center",
						}}
					>
						
					</div>
					<div className="post__container">
						<div className="post__content">
							<header>
								<span
									onClick={getpost}
									className="post__category"
									style={{ color: "#677077" }}
								>
									{data.name}
								</span>{" "}
								<br />
								<time className="post__time" style={{ color: "#677077" }}>
									{data.Date}
								</time>
							</header>
							<p
								className="post__text p_"
								style={{ color: "black", fontSize: "17px" }}
							>
								{data.text}
							</p>
                        </div>
                        <Link to={"/"}>
						<div className="post__link a_" style={{width:"20%"}}>
							<Link to={"/"}>Go To Home</Link>
						</div>
                        </Link>
					</div>
				</article>
			</div>
		</div>
	);
};

export default BlogShow;
