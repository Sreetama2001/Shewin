import axios from "axios";
// import fetch  from 'node-fetch';
async function moodGuesser(message) {
	// http://tweetmoodchk.d7cgcshfajbxf6dv.eastus.azurecontainer.io/mood

	

	const response = axios
		.get("https://official-joke-api.appspot.com/random_joke")
		.then(function (response) {
			// handle success
			console.log(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});

	return response.data.setup + response.data.punchline;
}

async function getMeme() {
	const response = axios
		.get("https://meme-api.herokuapp.com/gimme/IndianDankMemes")
		.then(function (response) {
			// handle success
			console.log(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});

	return response.data.setup + response.data.punchline;
}

const API = {
	GetChatbotResponse: async (message) => {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				if (message === "hi" || message === "hello" || message === "hey")
					resolve(
						"Here I am  your mood guesser bot , I will send you jokes which will make you happy! Plese type 'joke'. "
					);
				else if (message === "joke") {
					axios
						.get("https://official-joke-api.appspot.com/random_joke")
						.then(function (response) {
							// handle success
							console.log(response.data);
							resolve(response.data.setup + " " + response.data.punchline);
						})
						.catch(function (error) {
							// handle error
							console.log(error);
						});
				} else {
					resolve("Here I am  your mood guesser bot , I will send you jokes which will make you happy! Plese type 'joke'. ");
				}
			}, 1000);
		});
	},
};

export default API;
