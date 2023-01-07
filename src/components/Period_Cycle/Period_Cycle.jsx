import React, { useState, useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import './tracker.styles.scss';
import TrackPeriod from "./Tracker_Period";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

function Tracker() {
	const [userData, setUserData] = useState(null);
	const [bloodLevel, setBloodLevel] = useState(null);
	const [mood, setMood] = useState(null);
	const [pain, setPain] = useState(null);

	const notLoggedInTracker = (
		<>
			<div>
				<Box py={6}>
					<Container maxWidth="md">
						<Grid container spacing={5}>
							<Grid item xs={12}>
								<Box my={3}>
									<Typography
										variant="h3"
										align="center"
										gutterBottom
										style={{ color: "#9867C5" }}
									>
										Tracking Your Cycle
									</Typography>
									<Typography
										variant="body2"
										align="center"
										color="text.primary"
									>
										Thanks to modern technology, you can now know exactly when
										to throw extra pads in your schoolbag or handbag. Simply key
										your info into our period cycle tracker to see when you
										might be feeling PMS, and when you can expect your period.
										Now you can stay prepared - fuss free!
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Container>
					<Container maxWidth="lg">
						<TrackPeriod />
					</Container>
				</Box>
			</div>
		</>
	);

	return notLoggedInTracker;
}

export default Tracker;
