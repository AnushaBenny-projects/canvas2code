// Get student name from localStorage
const studentName = localStorage.getItem('studentName') || "Student";

// Set dynamic greeting
const greetingEl = document.querySelector('.dashboard-navbar__title h1');
greetingEl.textContent = `Hi ${studentName}`;

// Set profile card name
const profileNameEl = document.querySelector('.profile-card h2');
profileNameEl.textContent = studentName;

// Optional: Add time-based welcome
const hour = new Date().getHours();
let timeGreeting = "Hi";
if (hour < 12) timeGreeting = "Good Morning";
else if (hour < 18) timeGreeting = "Good Afternoon";
else timeGreeting = "Good Evening";
greetingEl.textContent = `${timeGreeting}, ${studentName}`;

// Search functionality for courses
const searchInput = document.querySelector('.search-form__input');
searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const courses = document.querySelectorAll('.course-card');
  courses.forEach(course => {
    const title = course.querySelector('.course-title').textContent.toLowerCase();
    if (title.includes(filter)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
});

