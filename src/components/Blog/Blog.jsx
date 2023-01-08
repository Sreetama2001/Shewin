import React, { useEffect, useState } from "react";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import "./blog.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import { get } from "react-scroll/modules/mixins/scroller";
const Blog = () => {
	const navigate = useNavigate();
	const [idi, setidi] = useState([]);
	const [data, setdata] = useState([]);
	const getData = async () => {
		let temp = [];
		let ids = [];
		const querySnapshot = await getDocs(collection(db, "AllBlogs"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			ids.push(doc.id);
			temp.push(doc.data());
		});
		setidi(ids);
		setdata(temp);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<TopNavbar />
			<div className="main">
				<div className="container_i">
					{data.map((item, idx) => (
						<div className="card_blog" key={idx + 1}>
							<div className="card__header">
								<img
									onClick={() => navigate(`/blog/${idi[idx]}`)}
									src="https://mindindia.org/public/uploads/blog/613f08cf0aaa0_tmpphphkkqhm.jpg"
									alt="card__image"
									style={{ cursor: "pointer" }}
									className="card__image img"
									width="600"
								/>
							</div>
							<div className="card__body">
								<span className="tag tag-blue">{item.tag}</span>
								<h4>{item.title}</h4>
								<p>{item.text.slice(0, 200)}</p>
							</div>
							<div className="card__footer">
								<div className="user">
									<img
										src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
										alt="user__image"
										width={25}
										className="user__image"
									/>
									<div className="user__info">
										<h5>{item.name}</h5>
										<small>{item.date}</small>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Blog;
