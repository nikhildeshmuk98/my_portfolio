// Pink Ocean Bubbles
const bubbleContainer = document.querySelector(".bubbles");

for (let i = 0; i < 25; i++) {
  const bubble = document.createElement("span");
  const size = Math.random() * 70 + 40; // 40px - 110px
  const posX = Math.random() * window.innerWidth;
  const delay = Math.random() * 10;
  const duration = Math.random() * 10 + 12;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${posX}px`;
  bubble.style.animationDelay = `${delay}s`;
  bubble.style.animationDuration = `${duration}s`;

  // Pink–Ocean tones (soft pastel glow)
  const pinkShades = [
    "hsla(330, 100%, 75%, 0.8)",
    "hsla(340, 90%, 70%, 0.8)",
    "hsla(320, 85%, 65%, 0.8)",
    "hsla(300, 80%, 72%, 0.8)",
    "hsla(280, 70%, 75%, 0.8)"
  ];
  const color = pinkShades[Math.floor(Math.random() * pinkShades.length)];

  bubble.style.background = `radial-gradient(circle at 30% 30%, ${color}, transparent)`;

  bubbleContainer.appendChild(bubble);
}
//home page======!
const roles = [" A Frontend Developer", " A Backend Developer", " A Full Stack Developer"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
      typingElement.textContent = currentRole;
    }

    if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
      typingElement.textContent = currentRole;
    }

    if (j === roles[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === roles.length) i = 0;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 150);
}

typeEffect();
//about section
document.querySelectorAll('.nav-right a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
//skill section 
function showSkillInfo(skill) {
  let info = {
    "Python": "Python is a versatile programming language used for web, AI, and automation.",
    "Flask": "Flask is a lightweight Python framework for web development.",
    "MySQL": "MySQL is a relational database management system used for structured data.",
    "Excel": "Excel is used for data analysis, pivot tables, and financial modeling.",
    "PowerBI": "Power BI is a Microsoft tool for data visualization and business intelligence.",

    "Teamwork": "Teamwork involves working effectively with others to achieve a common goal.",
    "Leadership": "Leadership is about guiding and motivating a team to success.",
    "Public Speaking": "Public speaking is the art of delivering impactful presentations.",
    "Problem Solving": "Problem solving is the ability to analyze and resolve challenges creatively."
  };

  alert(info[skill] || "More details coming soon!");
}
//certification section
// Images list
const images = document.querySelectorAll(".cert-img");
let currentIndex = 0;

function showCert(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Next Button
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showCert(currentIndex);
});

// Prev Button
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showCert(currentIndex);
});

// Auto-Slide (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showCert(currentIndex);
}, 8000);

//contact section
// Contact form submission simulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  this.reset();
});
//light mode and dark mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}
