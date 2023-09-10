document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Simulate sending form data to the server (replace with actual AJAX request)
        setTimeout(function() {
            responseDiv.innerHTML = `<p>Thank you, ${name}! Your email (${email}) has been recorded.</p>`;
        }, 1000); // Simulated delay for demonstration
    });
});
