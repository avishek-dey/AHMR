const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');

  // Add background color when scrolled
  if (window.scrollY > 550) {
    navbar.classList.remove('bg-black/10');
    navbar.classList.add('bg-brand-color-3'); // Change this color as needed
  } else {
    navbar.classList.remove('bg-brand-color-3');
    navbar.classList.add('bg-black/10');

  }
});
