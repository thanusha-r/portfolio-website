// ===== NAVBAR TOGGLE (Mobile) =====
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 10, 26, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 10, 26, 0.85)';
  }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#c084fc';
    }
  });
});

// ===== CONTACT FORM =====
function sendMessage() {
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const msg = document.getElementById('msgInput').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !msg) {
    feedback.style.color = '#f87171';
    feedback.textContent = '⚠️ Please fill in all fields!';
    return;
  }

  if (!email.includes('@')) {
    feedback.style.color = '#f87171';
    feedback.textContent = '⚠️ Please enter a valid email!';
    return;
  }

  feedback.style.color = '#86efac';
  feedback.textContent = `✅ Thanks ${name}! I'll get back to you soon.`;

  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('msgInput').value = '';

  setTimeout(() => { feedback.textContent = ''; }, 4000);
}

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply animation to cards
document.querySelectorAll('.skill-card, .project-card, .info-card, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== TYPING EFFECT FOR HERO ROLE =====
const roles = ['Frontend Developer', 'UI Enthusiast', 'React Learner', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.querySelector('.hero-role');

function typeRole() {
  const current = roles[roleIndex];

  if (!isDeleting) {
    roleEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeRole, 1800);
      return;
    }
  } else {
    roleEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeRole, isDeleting ? 60 : 100);
}

typeRole();
