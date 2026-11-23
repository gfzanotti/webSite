const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('solid', scrollY > 60);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

document.getElementById('y').textContent = new Date().getFullYear();

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('open')));

const lb = document.createElement('div');
lb.className = 'lb';
lb.innerHTML = '<img alt="">';
document.body.appendChild(lb);
lb.addEventListener('click', () => lb.classList.remove('on'));
addEventListener('keydown', e => e.key === 'Escape' && lb.classList.remove('on'));
document.querySelectorAll('.g img').forEach(img => img.addEventListener('click', () => {
  lb.firstChild.src = img.src;
  lb.classList.add('on');
}));
