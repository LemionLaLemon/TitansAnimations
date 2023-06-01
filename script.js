// Array of websites
var websites = [
  "rock.html",
  "pizzarilla.html",
  "404.html",
  "404.html"
];

// Function to redirect to a random website
function goToRandomWebsite() {
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * websites.length);
  
  // Get the URL corresponding to the random index
  var randomWebsite = websites[randomIndex];
  
  // Redirect the user to the random website
  window.location.href = randomWebsite;
}

// Add click event listener to the button
var randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", goToRandomWebsite);