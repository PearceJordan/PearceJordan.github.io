// Function to toggle the dropdown
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    
    // Toggle the display of the dropdown content
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
// Function to toggle the dropdown
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    
    // Toggle the display of the dropdown content
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}