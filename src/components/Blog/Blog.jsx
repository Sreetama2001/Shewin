import React, { useEffect, useState } from "react";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import "./blog.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
// import { get } from "react-scroll/modules/mixins/scroller";
const Blog = () => {
	const [data, setdata] = useState([]);
	const getData = async () => {
		let temp = [];
		const querySnapshot = await getDocs(collection(db, "AllBlogs"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			temp.push(doc.data());
		});
		setdata(temp);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<TopNavbar />
			<div className="main">
				<div class="container_i">
					{data.map((item, idx) => (
						<div class="card" key={idx+1}>
							<div class="card__header">
								<img
									onClick={() => console.log(data)}
									src="https://mindindia.org/public/uploads/blog/613f08cf0aaa0_tmpphphkkqhm.jpg"
									alt="card__image"
									class="card__image img"
									width="600"
								/>
							</div>
							<div class="card__body">
                                <span class="tag tag-blue">{item.tag}</span>
                                <h4>{item.title}</h4>
								<p>
									{item.text}
								</p>
							</div>
							<div class="card__footer">
								<div class="user">
									<img
										src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
                                        alt="user__image"
                                        width={25}
										class="user__image"
									/>
									<div class="user__info">
                                        <h5>{item.name}</h5>
                                        <small>{item.date}</small>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Blog;
