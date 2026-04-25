// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Form Validation
function validateForm() {
  let itemName = document.forms[0]["itemName"].value;
  let description = document.forms[0]["description"].value;
  if (itemName === "" || description === "") {
    alert("Item Name and Description are required!");
    return false;
  }
  alert("Lost item reported successfully!");
  return true;
}

// Image Preview
function previewImage() {
  let file = document.getElementById("photo").files[0];
  let reader = new FileReader();
  reader.onload = function(e) {
    let img = document.getElementById("preview");
    img.src = e.target.result;
    img.style.display = "block";
  }
  reader.readAsDataURL(file);
}

// Search Filter
function filterItems() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let rows = document.querySelectorAll("#itemsTable tr");
  rows.forEach((row, index) => {
    if (index === 0) return;
    let item = row.cells[1].innerText.toLowerCase();
    row.style.display = item.includes(input) ? "" : "none";
  });
}

// Login Validation + Redirect
function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  // Always redirect to homepage after login
  alert("Login successful!");
  window.location.href = "index.html"; 
  return false; // prevent default form action
}

// Signup Validation + Redirect
function validateSignup() {
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  // Always redirect to login page after signup
  alert("Signup successful! Please login.");
  window.location.href = "login.html"; 
  return false; // prevent default form action
}

// Admin Status Update
function updateStatus(btn) {
  let row = btn.parentNode.parentNode;
  row.cells[4].innerText = "Returned";
  alert("Status updated to Returned!");
}
