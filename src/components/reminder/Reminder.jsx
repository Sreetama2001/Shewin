import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./reminder.css";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Reminder() {
	const label = { inputProps: { "aria-label": "Switch demo" } };
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	const userActivity = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				// ...
			} else {
				// User is signed out
				history("/");
				// ...
			}
		});
	};
	const history = useNavigate();
	useEffect(() => {
		userActivity();
	}, []);

	function handleLink() {
		setTimeout(() => {
			history("/track");
		}, 2500);
	}

	return (
		<Box my={5}>
			<Container maxWidth="md">
				<Grid container>
					<Grid
						item
						xs={12}
						style={{ display: "flex", justifyContent: "center" }}
					>
						<Stack direction="row" alignItems="center">
							<Typography
								variant="h4"
								style={{ fontWeight: 800 }}
								align="center"
								color="text.primary"
								gutterBottom
							>
								Priyanka’s Reminders
							</Typography>
							<Box ml={2}>
								<img
									src={
										"https://github.com/BioxMech/embrace/blob/master/src/asset/images/clock.png?raw=true"
									}
									alt="..."
									className="clock-img"
									style={{ width: "40px" }}
								/>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Typography
							style={{ color: "#9867C5" }}
							variant="h4"
							align="center"
							gutterBottom
						>
							<b>PERIOD & FERTILITY</b>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Period is coming
								</Typography>
								<Box>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Fertility is coming
								</Typography>
								<Box>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Ovulation day
								</Typography>
								<Box>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Input your period
								</Typography>
								<Box>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={12}>
						<Typography
							style={{ color: "#9867C5" }}
							variant="h4"
							align="center"
							gutterBottom
						>
							<b>LIFESTYLE</b>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Meditation reminder
								</Typography>
								<Box>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Sleep early reminder
								</Typography>
								<Box style={{ textAlign: "center" }}>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>
					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h6"
									align="center"
									color="text.primary"
									gutterBottom
									style={{ fontWeight: 400 }}
								>
									Drink water reminder
								</Typography>
								<Box>
									<Switch
										{...label}
										defaultChecked
										style={{ color: "#ff4081" }}
									/>
								</Box>
							</Stack>
						</Container>
					</Grid>

					<Grid item xs={12}>
						<Container maxWidth="sm">
							<Box mt={3} style={{ textAlign: "center" }}>
								<Button
									onClick={() => {
										handleClick();
										handleLink();
									}}
									variant="contained"
									style={{ backgroundColor: "#9867C5", color: "white" }}
								>
									Set Reminder
								</Button>
							</Box>
							<Snackbar
								open={open}
								autoHideDuration={6000}
								onClose={handleClose}
								anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							>
								<Alert
									onClose={handleClose}
									severity="success"
									sx={{ width: "100%" }}
								>
									You will be reminded!
								</Alert>
							</Snackbar>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Reminder;
