const semesterLabel = document.getElementById('semester');
const semesterDropdown = document.getElementById('semesterDropdown');
const logoutBtn = document.getElementById('logoutBtn');

semesterLabel.addEventListener('mouseover', () => {
  const labelRect = semesterLabel.getBoundingClientRect();
  semesterDropdown.style.display = 'block';
  semesterDropdown.style.left = `${labelRect.left}px`; // Align dropdown with left edge of label
});

semesterLabel.addEventListener('mouseout', () => {
  semesterDropdown.style.display = 'none';
});

semesterDropdown.addEventListener('mouseover', () => {
  semesterDropdown.style.display = 'block';
});

semesterDropdown.addEventListener('mouseout', () => {
  semesterDropdown.style.display = 'none';
});

logoutBtn.addEventListener('click', () => {
  // Implement logout functionality here
});
