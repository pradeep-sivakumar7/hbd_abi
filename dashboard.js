$(window).on('load', function () {
	$('#liveToast1').fadeOut(500);
	$("#loader").fadeOut(1000);
	$("#content").fadeIn(1000);
});

//music player
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');



// Song titles

const songs = ['Bae',//
	'Dhimu Dhimu',//
	'En-Jeevan',//
	'Ennadi-Maayavi-Nee',//
	'Idhazhin-oram',//
	'Innum-Konjam-Neram',//
	'Kannazhaga',//
	'Maalai-Mangum-Neram',//
	'Manamaganin-Sathiyam',//
	'Marakkavillayae',//
	'Mehabooba',//
	'Mellinamae-Mellinamae',//
	'Munbe-Va',//
	'Naalu-Nimisam',//
	'Naan-Nee',//
	'Naan-Un',//
	'Neeyum-Naanum-Anbe',//
	'Nenjukkul-Peithidum',//
	'NewYork-Nagaram',//
	'Oru-Devadhai',//
	'Pachchai-Nirame',//
	'Partha-Muthal',//
	'Pirai-Thedum',//
	'Pookal-Pookum',//
	'Snehidhane',//
	'Suttum-Vizhi',//
	'Thaarame-Thaarame',//
	'Thalli-Pogathey',//
	'Un-Vizhigalil',//
	'Uyire-Un-Uyirena',//
	'Vaseegara',//
	'Yaanji'//
];
console.log(songs.length);

const artists = ['Anirudh Ravichandar',
	'Harris Jayaraj',
	'G. V. Prakash',
	'Santhosh Narayanan',
	'Anirudh Ravichandar',
	'A. R. Rahman',
	'Anirudh Ravichandar',
	'Ranina Reddy',
	'A. R. Rahman',
	'Anirudh Ravichandar',
	'Ravi Basrur',
	'Harish Ragavendra',
	'A. R. Rahman',
	'G. V. Prakash',
	'Santhosh Narayanan',
	'A. R. Rahman',
	'Hip Hop Thamizha',
	'Harris Jayaraj',
	'A. R. Rahman',
	'Yuvan Shankar Raja',
	'A. R. Rahman',
	'Harris Jayaraj',
	'G. V. Prakash',
	'G. V. Prakash',
	'A. R. Rahman',
	'Harris Jayaraj',
	'Ghibran',
	'A. R. Rahman',
	'Anirudh Ravichandar',
	'Anirudh Ravichandar',
	'Harris Jayaraj',
	'Sam C. S.'
];

let songIndex = 0;
console.log(artists.length);

loadSong(songs[songIndex]);

function loadSong(song) {
	title.innerText = song.replaceAll("-", " ");;
	artist.innerText = artists[songIndex];
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}

// Play
function playSong() {
	musicContainer.classList.add('play');

	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}


// Pause
function pauseSong() {
	musicContainer.classList.remove('play');

	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();
}

// Previous

function prevSong() {
	songIndex--;

	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);

	playSong();
}

// Next

function nextSong() {
	songIndex++;

	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);

	playSong();
}


// Update progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;

}


// Set Progress 
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}

let currentIndex = songIndex;

function clicked(clicked_id) {
	songIndex = clicked_id;
	loadSong(songs[songIndex]);

	const isPlaying = musicContainer.classList.contains('play');

	if ((clicked_id == currentIndex) && isPlaying) {
		pauseSong();
	} else {
		playSong();
	}

	currentIndex = clicked_id
}



// Event Listener

playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
})

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//Time update
audio.addEventListener('timeupdate', updateProgress);


// Set progress
progressContainer.addEventListener('click', setProgress);

// Song ended
audio.addEventListener('ended', nextSong);


function rest() {
	document.getElementById("home").classList.remove("active");
	document.getElementById("music").classList.add("active");
}

function rest1() {
	document.getElementById("home").classList.add("active");
	document.getElementById("music").classList.remove("active");
}


// document.getElementById("num").textContent = `Total Songs : ${songs.length}`;

let show = false;

document.getElementById("viewToggle").onclick = () => {
	if (!show) {
		$("#playlistAll").fadeIn(750);
		// document.getElementById("playlistAll").style.display = "block";
		document.getElementById("viewToggle").innerHTML = "Hide Playlist <span class='btn btn-sm text-white fa-solid fa-angle-down'></span>";
		// display.getElementById("playlistAll").style.transition = "width 2s";
		show = true;
	}
	else {
		$("#playlistAll").fadeOut(750);
		// document.getElementById("playlistAll").style.display = "none";
		document.getElementById("viewToggle").innerHTML = "View Playlist <span class='btn btn-sm text-white fa-solid fa-angle-right'></span>";
		show = false;
	}
}



let g = true;
setInterval(() => {

	let h = document.getElementById("heart");

	if (g) {
		h.style.color = "red";
		g = false;
	}

	else {
		h.style.color = "white";
		g = true;
	}
}, 500)

setInterval(() => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.getElementById("hea").style.color = "#" + randomColor;
}, 1000)