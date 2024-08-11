// Assuming the button element has an id of "join-btn-button"
const joinButton = document.getElementById("join-btn-button");

// Add hover effect (optional, as it's already implemented in CSS)
joinButton.addEventListener("mouseover", () => {
  joinButton.style.backgroundColor = "black";
  joinButton.style.color = "orangered";
});

joinButton.addEventListener("mouseout", () => {
  joinButton.style.backgroundColor = "orangered";
  joinButton.style.color = "white";
});

// Add click event listener
joinButton.addEventListener("click", () => {
  // Add your desired functionality here
  console.log("Button clicked!");
  // Example: Redirect to a join page
  // window.location.href = "join_page.html";
});
