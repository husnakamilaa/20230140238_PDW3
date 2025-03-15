// Handling navigation clicks to show the relevant section
document.getElementById('home').addEventListener('click', function() {
    showSection('home-section');
});
document.getElementById('about').addEventListener('click', function() {
    showSection('about-section');
});
document.getElementById('contact').addEventListener('click', function() {
    showSection('contact-section');
});

// Function to show the relevant section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}

// Show home section by default
showSection('home-section');
