//script joaquin ranges

const sliders = document.querySelectorAll('.slider-input');
const labels = {
  slider1: document.getElementById('destinoLabel'),
  slider2: document.getElementById('personasLabel'),
  slider3: document.getElementById('díasLabel'),
};
const destinoLabel = labels.slider1;
const carousel = document.querySelector('.carousel');
const productCards = document.querySelectorAll('.product-card');

sliders.forEach((slider, index) => {
  slider.addEventListener('input', updateCarousel);
});

function updateCarousel() {
  const destino = sliders[0].value === "0" ? "Playa" : "Montaña";
  destinoLabel.textContent = destino;

  const personas = parseInt(sliders[1].value);
  labels.slider2.textContent = `${personas} persona${personas > 1 ? 's' : ''}`;

  const días = parseInt(sliders[2].value);
  labels.slider3.textContent = `${días} día${días > 1 ? 's' : ''}`;

  productCards.forEach((card) => {
    const cardDestino = card.getAttribute('data-destino');
    const cardPersonas = parseInt(card.getAttribute('data-personas'));
    const cardDías = parseInt(card.getAttribute('data-días'));

    if (cardDestino === destino && cardPersonas === personas && cardDías === días) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

updateCarousel();

//fin script joaquin ranges
