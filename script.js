document.addEventListener("DOMContentLoaded", function () {
    let heyBtn = document.getElementById("heyBtn");
    let revealBtn = document.getElementById("revealBtn");
    let finalMessage = document.getElementById("finalMessage");

    // Function to handle button click or tap
    function goToPage(url) {
        window.location.href = url;
    }

    // Redirect to second page when "Hey" button is clicked (Works for Touch & Click)
    if (heyBtn) {
        heyBtn.addEventListener("click", () => goToPage("revel.html"));
        heyBtn.addEventListener("touchstart", () => goToPage("revel.html"));
    }

    // Redirect to third page when "Reveal" button is clicked (Works for Touch & Click)
    if (revealBtn) {
        revealBtn.addEventListener("click", () => goToPage("final.html"));
        revealBtn.addEventListener("touchstart", () => goToPage("final.html"));
    }

    // Typing effect for final message on third page
    if (finalMessage) {
        setTimeout(() => {  // 🟢 2-second delay before typing starts
            let message = "You're so precious when you smile 🌺💐";
            let i = 0;
            let speed = 150; // Adjusted speed for better visibility

            function typeWriter() {
                if (i < message.length) {
                    finalMessage.innerHTML += message.charAt(i); // Letter-by-letter effect
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }

            typeWriter(); // Start typing effect
        }, 2000);
    }
});

