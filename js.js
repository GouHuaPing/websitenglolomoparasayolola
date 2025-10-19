const env = document.getElementById('env');
const letter = document.getElementById('letter');
const openBtn = document.getElementById('openBtn');
const sealBtn = document.getElementById('sealBtn');
const hearts = document.getElementById('hearts');

function toggleOpen() {
  const opened = env.classList.toggle('open');
  if (opened) {
    setTimeout(() => letter.classList.add('open'), 420);
    openBtn.textContent = 'Close Letter';
    createHearts();
  } else {
    letter.classList.remove('open');
    openBtn.textContent = 'Open Letter';
    clearHearts();
  }
}

function resetSeal() {
  env.classList.remove('open');
  letter.classList.remove('open');
  openBtn.textContent = 'Open Letter';
  clearHearts();
}

openBtn.addEventListener('click', toggleOpen);
sealBtn.addEventListener('click', resetSeal);

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

let heartInterval;
function createHearts() {
  clearHearts();
  for (let i = 0; i < 14; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = rand(20, 80) + '%';
    h.style.top = rand(40, 85) + '%';
    h.style.animationDelay = rand(0, 1200) + 'ms';
    h.style.transform = `translate(-50%,40vh) scale(${rand(0.6, 1)})`;
    h.style.opacity = 0;
    hearts.appendChild(h);
  }
  heartInterval = setInterval(() => {
    const h = document.createElement('div');
    h.className = 'heart';
    h.style.left = rand(20, 80) + '%';
    h.style.top = rand(40, 85) + '%';
    h.style.animationDelay = '0ms';
    hearts.appendChild(h);
    const all = hearts.querySelectorAll('.heart');
    if (all.length > 40) all[0].remove();
  }, 700);
}

function clearHearts() {
  clearInterval(heartInterval);
  hearts.innerHTML = '';
}

openBtn.addEventListener('keyup', (e) => { if (e.key === 'Enter') toggleOpen(); });
sealBtn.addEventListener('keyup', (e) => { if (e.key === 'Enter') resetSeal(); });

document.addEventListener('DOMContentLoaded', () => {
  env.style.transform = 'rotateX(6deg)';
  setTimeout(() => env.style.transform = 'rotateX(0deg)', 700);
});
