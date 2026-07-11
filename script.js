// ==============================
// HAMBURGER MENU
// ==============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==============================
// PAGE LOADER
// ==============================
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 2000);
    }
});

// ==============================
// SCROLL ANIMATION
// ==============================
const cards = document.querySelectorAll(".fashion-card");

if (cards.length > 0) {
    window.addEventListener("scroll", () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < window.innerHeight - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    });
}

// ==============================
// COUNTER
// ==============================
const counter = document.getElementById("counter");

if (counter) {

    let count = 1;
    const target = 10;

    const speed = setInterval(() => {

        counter.innerHTML = count;

        count++;

        if (count > target) {
            clearInterval(speed);
        }

    }, 100);

}

// ==============================
// BACK TO TOP
// ==============================
const mybutton = document.getElementById("backToTopBtn");

if (mybutton) {

    window.addEventListener("scroll", () => {

        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            mybutton.style.display = "flex";
        } else {
            mybutton.style.display = "none";
        }

    });

}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==============================
// FAQ
// ==============================
const faqButtons = document.querySelectorAll(".faq-question");

if (faqButtons.length > 0) {

    faqButtons.forEach(button => {

        button.addEventListener("click", () => {

            const faqItem = button.parentElement;

            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });

            faqItem.classList.toggle("active");

        });

    });

}

// ==============================
// IMAGE SLIDER
// ==============================
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slides.length > 0 && nextBtn && prevBtn) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");

    }

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    });

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    });

}
// ==============================
// CHATBOT
// ==============================

const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("sendBtn");
const success = document.getElementById("success");

// Open Chat
if (chatToggle && chatWindow) {

    chatToggle.addEventListener("click", () => {

        if (chatWindow.style.display === "block") {
            chatWindow.style.display = "none";
        } else {
            chatWindow.style.display = "block";
        }

    });

}

// Close Chat
if (closeChat && chatWindow) {

    closeChat.addEventListener("click", () => {

        chatWindow.style.display = "none";

    });

}

// Send Message
if (sendBtn) {

    sendBtn.addEventListener("click", async (e) => {

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const phone = document.getElementById("phone")?.value.trim();
        const service = document.getElementById("service")?.value;
        const message = document.getElementById("chatInput")?.value.trim();

        if (!name || !email || !service || !message) {

            if (success) {
                success.innerHTML =
                    "❌ Please complete all required fields.";
            }

            return;
        }

        try {

            const response = await fetch("http://localhost:3000/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    service,
                    message
                })

            });

            const result = await response.json();

            if (response.ok) {

                if (success) {
                    success.innerHTML =
                        "✅ " + result.message;
                }

                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("service").selectedIndex = 0;
                document.getElementById("chatInput").value = "";

            } else {

                if (success) {
                    success.innerHTML =
                        "❌ " + result.message;
                }

            }

        } catch (error) {

            console.error(error);

            if (success) {
                success.innerHTML =
                    "❌ An error occurred while submitting your request.";
            }

        }

    });

}