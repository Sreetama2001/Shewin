import axios from "axios";
import { useState } from "react";
// import fetch  from 'node-fetch';
async function moodGuesser(message) {
	// const response = axios
	// 	.post("http://127.0.0.1:8000/mood",

	// 		 message

	// 		// Headers: {
	// 		// 	"Access-Control-Allow-Origin": "*",

	// 		// 	"Access-Control-Allow-Headers":
	// 		// 	"Origin, X-Requested-With, Content-Type, Accept",
	// 		// 	"Content-Type": "application/json",
	// 		// },
	// 	)
	// 	.then(function (response) {
	// 		// handle success
	// 		console.log(response.data);
	// 	})
	// 	.catch(function (error) {
	// 		// handle error
	// 		console.log(error);
	// 	})
	// 	.then(function () {
	// 		// always executed
	// 	});

	// const options = {
	// 	url: "http://127.0.0.1:8000/mood",
	// 	method: "POST",
	// 	headers: {
	// 		Accept: "application/json",
	// 		"Content-Type": "application/json;charset=UTF-8",
	// 	},
	// 	data: {
	// 		input_mood: "I am not feeling good",
	// 	},
	// };

	// const response = axios(options).then((response) => {
	// 	console.log(response.status);
	// });

	const [data, setData] = useState("");
	const config = {
		method: "post",
		url: `http://localhost:8000/mood?input_mood=${message}`,
		headers: {},
	};

	const response = axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			// console.log(JSON.stringify(response.data.reply));
			setData(response.data.reply);
		})
		.catch(function (error) {
			console.log(error);
		});

	return data;
}

const API = {

	GetChatbotResponse: async (message) => {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				if (message === "hi" || message === "hello" || message === "hey")
					resolve(
						"Here I am  your Moody bot ! I can analyse ur mood as you write "
					);
				else {
					const data = moodGuesser(message);
					console.log();
					// resolve();
					// console.log(moodGuesser(message));
				}
			}, 1000);
		});
	},
};

export default API;
