function createSlideshow(containerId) {
  const container = document.getElementById(containerId);
  const slides = container.querySelectorAll('.slide');
  const prevBtn = container.querySelector('.prev');
  const nextBtn = container.querySelector('.next');
  let slideIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  showSlide(slideIndex);
  interval = setInterval(nextSlide, 5000);
}

// Inicialize ambos slideshows
createSlideshow('slideshow-cursos');
createSlideshow('slideshow-projetos');
