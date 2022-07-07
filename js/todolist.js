$('document').ready(function() {
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	var firebaseConfig = {
		apiKey: "AIzaSyANueGIlPh0aSVOS7cKseMKC39xhAsl3JM",
		authDomain: "homepage-c3b5e.firebaseapp.com",
		databaseURL: "https://homepage-c3b5e-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "homepage-c3b5e",
		storageBucket: "homepage-c3b5e.appspot.com",
		messagingSenderId: "313476801849",
		appId: "1:313476801849:web:dec2a5f71d273e05d634e8",
		measurementId: "G-B3XMV4KECF"
	};

	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	doDate();

	function doDate() {
		var str = "";

		var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
		var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

		var now = new Date();

		var leadingZero = now.getMinutes() < 10 ? '0' : ''

		str += now.getHours() + ":" + leadingZero + now.getMinutes() + ":" + now.getSeconds();
		document.getElementById("todaysDate").innerHTML = str;
	}

	setInterval(doDate, 1000);


	// function timeConverter(UNIX_timestamp){
	// 	var a = new Date(UNIX_timestamp * 1000);
	// 	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

	// 	let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
	// 	var year = a.getFullYear();

	// 	// const getOrdinalNum = (number) => {
	// 	// 	let selector;

	// 	// 	if (number <= 0) {
	// 	// 		selector = 4;
	// 	// 	} else if ((number > 3 && number < 21) || number % 10 > 3) {
	// 	// 		selector = 0;
	// 	// 	} else {
	// 	// 		selector = number % 10;
	// 	// 	}

	// 	// 	return number + ['th', 'st', 'nd', 'rd', ''][selector];
	// 	// };

	// 	// var date = a.getDate();
	// 	// console.log(getOrdinalNum(date));
	// 	console.log(date);
	// 	console.log('-------');

	// 	var month = months[a.getMonth()];

	// 	var hour = a.getHours();
	// 	var min = a.getMinutes();
	// 	var sec = a.getSeconds();
	// 	//var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec + ':' + weekday;
	// 	return time;
	// }
	var a = new Date();
	let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var month = months[a.getMonth()];


	var day = a.getDate();



	function getNumberWithOrdinal(n) {
		var s = ["th", "st", "nd", "rd"],
			v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	}



	var year = a.getFullYear();


	var date_1 = '' + weekday + ' ' + getNumberWithOrdinal(day);
	var date_2 = '' + month + ' ' + year;
	console.log(date_1, date_2);

	document.getElementById('line1').innerHTML += date_1;
	document.getElementById('line2').innerHTML += date_2;
	// console.log(timeConverter(Date.now()));
	// console.log(Date.now());
	// console.log(new Date(Date.now()).toTimeString());
	// console.log(new Date(Date.now()).getYear());
	// console.log('-------');

    $('.submit').click(function() {
        writeData();
     });

	$('.button').click(function() {
        $('.form').toggleClass('open');
     });
    

	firebase.database().ref("User").on('value', function(snap) {
		clear();
		console.log('hello');
		eventListeners();

		// console.log(snap);

		// snap.forEach(function(childNodes) {
		// 		function timeConverter(UNIX_timestamp){
		// 	var a = new Date(UNIX_timestamp * 1000);
		// 	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		// 	var year = a.getFullYear();
		// 	var day = a.getDay();
		// 	var month = months[a.getMonth()];
		// 	var date = a.getDate();
		// 	var hour = a.getHours();
		// 	var min = a.getMinutes();
		// 	var sec = a.getSeconds();
		// 	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
		// 	return time;
		// }

		// 	// console.log(timeConverter(childNodes.val().id));

		// 	// var timestamp = childNodes.val().id * 1000;
		// 	// console.log(new Date(timestamp).toTimeString());
		// 	// console.log(new Date(1657133059667).toLocaleTimeString());
		// 	console.log('@@@@@');
		// 	console.log(new Date(childNodes.val().id).toTimeString());
		// 	console.log(childNodes.val().id);



		// });
		snap.forEach(function(childNodes) {



			const newDiv = document.createElement("div");
			newDiv.setAttribute('id', childNodes.val().id);
			newDiv.classList.add("task");
			newDiv.classList.add(childNodes.val().type);

           
            var now = new Date(childNodes.val().id);
            var leadingZero = now.getMinutes() < 10 ? '0' : ''
            console.log(now.getHours() + ":" + leadingZero + now.getMinutes());

			const contentDiv1 = document.createElement("span");
            contentDiv1.classList.add("name");
			contentDiv1.appendChild(document.createTextNode(childNodes.val().name));

			// const contentDiv2 = document.createElement("span");
			// contentDiv2.appendChild(document.createTextNode(childNodes.val().id));

			const contentDiv3 = document.createElement("span");
            contentDiv3.classList.add("desc");
			contentDiv3.appendChild(document.createTextNode(childNodes.val().age));

			const close = document.createElement("div");
            close.classList.add("close");
			

			newDiv.appendChild(contentDiv1);
			 newDiv.appendChild(close);
			newDiv.appendChild(contentDiv3);

			// add the newly created element and its content into the DOM
			const currentDiv = document.getElementById("list");
			currentDiv.appendChild(newDiv);

		});


	});


	function writeData() {
		console.log(Date.now());
		console.log('------------');
		userID = Date.now();
		firebase.database().ref("User/Users" + userID).set({
			id: userID,
			name: document.getElementById("nameField").value,
			age: document.getElementById("ageField").value,
			type: document.querySelector('#datepicker').value
		});

		firebase.database().ref("Backup/Users" + userID).set({
			id: userID,
			name: document.getElementById("nameField").value,
			age: document.getElementById("ageField").value,
			type: document.getElementById('datepicker').value
		});


	}

	function addMarkup() {
		clear();
	}

	function clear() {
		console.log('clear');
		const currentDiv = document.getElementById("list");
		currentDiv.innerHTML = '';
	}

	function eventListeners() {
		console.log('event listeners');
		setTimeout(
			function() {


				$('.task').click(function() {
					// if (confirm('Are you sure you want to delete')) {
					// 	var checkDiv = $(this);

					// 	firebase.database().ref(`/User/Users${checkDiv.attr("id")}`).remove();

					// } else {

					// }
					$(this).toggleClass('disabled')

				});

				$('.close').click(function() {
					if (confirm('Are you sure you want to delete')) {
						var checkDiv = $(this).parent();

						firebase.database().ref(`/User/Users${checkDiv.attr("id")}`).remove();

					} else {

					}


				});

			}, 500);
	}

});