document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    const storedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];

    storedMessages.push({ name, email, message, date: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(storedMessages));

    document.getElementById('msgStatus').textContent = "Message sent successfully!";
    this.reset();
  } else {
    document.getElementById('msgStatus').textContent = "Please fill all fields.";
  }
});
const typedText = document.querySelector(".typed-text");
const words = ["Frontend Developer", "React Developer", "UI/UX Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 800);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
// Reveal on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}


