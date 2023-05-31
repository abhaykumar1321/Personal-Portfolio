const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const toggleBtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

const form = document.querySelector('form');
const submitBtn = document.querySelector('button[type="submit"]');
const confirmation = document.querySelector('.confirmation');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  // send form data to server using fetch or XMLHttpRequest
  confirmation.textContent = `Thank you, ${name}! We have received your message and will get back to you at ${email} as soon as possible.`;
  form.reset();
});

// hide confirmation message initially
confirmation.style.display = 'none';

submitBtn.addEventListener('click', () => {
  confirmation.style.display = 'block';
});

