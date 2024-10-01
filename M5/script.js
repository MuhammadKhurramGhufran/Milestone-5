// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('Download-PDF');

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect input values
  var username = document.getElementById('UserName').value;
  var name = document.getElementById('Name').value;
  var email = document.getElementById('E-Mail').value;
  var phone = document.getElementById('Phone Number').value;
  var education = document.getElementById('Education').value;
  var experience = document.getElementById('Experience').value;
  var skills = document.getElementById('Skills').value;

  // Save form data in localStorage with the username as the key
  var resumeData = {
    name: name,
    email: email,
    phone: phone,
    education: education,
    experience: experience,
    skills: skills
  };
  localStorage.setItem(username, JSON.stringify(resumeData));

  // Generate the resume content dynamically
  var resumeHTML = `
    <h2>Editable Resume</h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
  `;

  // Display the generated resume
  resumeDisplayElement.innerHTML = resumeHTML;

  // Generate a shareable URL with the username only
  var shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

  // Display the shareable link
  shareableLinkContainer.style.display = 'block';
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
  // Use a library like jsPDF or html2pdf.js for better PDF generation
  // For simplicity, using window.print()
  window.print();
});
