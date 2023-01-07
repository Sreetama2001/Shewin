import React from "react";
import "./blogCard.css";

const DashboardBlogCard = ({title , date , text , id}) => {
	return (
		<div>
			<div class="courses-container">
				<div class="course" style={{width:"90%"}}>
					<div class="course-preview">
                        <h6>{date}</h6>
                        <h2>{title}</h2>
					</div>
					<div class="course-info">
						<div class="progress-container">
						</div>
                        <h6>{text}</h6>
						<button class="btnii">Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardBlogCard;
