/// Select the video element and the text box
const videoPlayer = document.getElementById("videoPlayer");
const textBox = document.getElementById("textBox");

// Array of video sources for toggling
const videoSources = ["videos/gettingBurned.mp4", "videos/compress2mp4.mp4","videos/compress3.mp4","videos/compress4.mp4","videos/compress5.mp4"];

// Current video index, starting with the first video
let currentVideoIndex = 0;

// Array to store the playback time for each video
const videoTimes = [0, 0, 0, 0, 0];
var isSoundEnabled = false;

function getRandomIndex() {
	let newIndex;
	do {
		newIndex = Math.floor(Math.random() * videoSources.length);
	} while (newIndex === currentVideoIndex);
	return newIndex;
}

function toggleVideo() {
	
	if (isSoundEnabled === false) {
		videoPlayer.muted = false;
		isSoundEnabled = true;
}
videoTimes[currentVideoIndex] = videoPlayer.currentTime;
currentVideoIndex = getRandomIndex();
	
videoPlayer.src = videoSources[currentVideoIndex];
videoPlayer.load();
videoPlayer.currentTime = videoTimes[currentVideoIndex];
videoPlayer.play();
}
// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);