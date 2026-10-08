// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (3 images)
const slides = [
{ src: 'images/image_011.jpg',
 alt: 'brooklyn bridge',
 caption:"At the pinnacle of civilization,"
},
{ src: 'images/image_012.jpg',
 alt: 'chinatown street',
 caption:"bombarded and overwhelmed,"
},
{ src: 'images/image_013.jpg',
 alt: 'street intersection',
 caption:"caught at the intersection of greatness and mediocrity."
},
{ src:"images/image_014.jpg",
alt:"met painting",
caption:"Art mirrors reality and reality mirrors art, "
},
{ src:"images/image_015.jpg",
alt:"the met",
caption:"yet stuck between the panels of the glass ceiling."
},
{ src:"images/image_016.jpg",
alt:"stage",
caption:"Lost and drowning in the sea"
},
{ src:"images/image_017.jpg",
alt:"boat",
caption:"imposter syndrome filling my sails."
},
{ src:"images/image_018.jpg",
alt:"nyc streets",
caption:"Ashore in the city that never sleeps,"
},
{ src:"images/image_019.jpg",
alt:"man standing",
caption:"time speeds through consciousness,"
},
{ src:"images/image_20.jpg",
alt:"blurry lights",
caption:"swallowed in reality."
}	
];// JavaScript Document
let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});
// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);