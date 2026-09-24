// Select the text element
const overlayText = document.querySelector(".overlay-text");

// Select the full-page image container
const fullPageImage = document.querySelector(".full-page-image");

fullPageImage?.addEventListener("click", () => {
  if (overlayText?.style.display === "none" || overlayText?.style.display === "") {
	overlayText.style.display = "block"; // Show the text box
	} else {
	overlayText.style.display = "none"; // Otherwise, hide the text box
	}
})