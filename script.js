let currentAudio = null; // Variable, um die aktuelle Audiodatei zu speichern
let audioElement = null;
let currentTask = ''; // Variable für die aktuelle Aufgabe

const starsContainer = document.getElementById('stars');
for (let i = 0; i < 70; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = Math.random() * 3 + 'px';
  star.style.height = star.style.width;
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 1 + 's';
  starsContainer.appendChild(star);
}
for (let i = 0; i < 30; i++) {
    const starUnik = document.createElement('div');
    starUnik.className = 'star_unik';
    starUnik.style.width = Math.random() * 3 + 'px';
    starUnik.style.height = starUnik.style.width;
    starUnik.style.left = Math.random() * 103 + '%';
    starUnik.style.top = Math.random() * 103 + '%';
    starUnik.style.animationDelay = Math.random() * 1.2 + 's';
    starsContainer.appendChild(starUnik);
}

const figures = [
    { name: 'Marcus Aurelius', title: 'Roman Emperor & Philosopher', type: 'philosopher', image: 'aurelius.jpg', open: 'aurelius' },
    { name: 'Plato', title: 'Greek Philosopher', type: 'philosopher', image: 'plato.jpg', open: 'plato' },
    { name: 'Aristotle', title: 'Greek Philosopher', type: 'philosopher', image: 'aristoteles.jpg', open: 'aristotle' },
    { name: 'Friedrich Nietzsche', title: 'German Philosopher', type: 'philosopher', image: 'nietzsche.jpg', open: 'nietzsche' },
    { name: 'Julius Caesar', title: 'Roman Emperor', type: 'leader', image: 'cäsar.jpg', open: 'cäsar' },
    { name: 'Leonardo da Vinci', title: 'Renaissance Polymath', type: 'artist', image: 'leonardo.jpg', open: 'leonardo' },
    { name: 'Buddha', title: 'Spiritual Teacher', type: 'spiritual', image: 'buddha.jpg', open: 'buddha' },
    { name: 'Marco Polo', title: 'Venetian Merchant', type: 'explorer', image: 'marco.jpg', open: 'marco' },
    { name: 'James Cook', title: 'British Explorer', type: 'explorer', image: 'cook.jpg', open: 'cook' },
    { name: 'William Shakespeare', title: 'English Playwright', type: 'artist', image: 'shakespeare.jpg', open: 'shapespeare' },
    { name: 'Leonidas', title: 'Spartan King', type: 'leader', image: 'leonidas.jpg', open: 'leonidas' }
];

const carousel = document.getElementById('carousel');
let currentRotation = 0;
const radius = window.innerWidth <= 768 ? 300 : 400; // Smaller radius for mobile


// Touch handling variables
let touchStartX = 0;
let touchEndX = 0;

// Create cards
figures.forEach((figure, index) => {
    const card = document.createElement('div');
    card.className = `card ${figure.type}`;
    
    const angle = (index * (360 / figures.length));
    
    card.style.transform = `
      rotateY(${angle}deg)
      translateZ(${radius}px)
    `;

    card.innerHTML = `
        <div class="card-bg personality-card" data-personality="${figure.name}" onclick="showPhilosopher('${figure.open}')">
            <div class="image-container">
            <img src="${figure.image}" alt="${figure.name}">
            </div>
        </div>
        <div class="card-content">
            <div class="name">${figure.name}</div>
            <div class="title">${figure.title}</div>
        </div>
    `;

    carousel.appendChild(card);
  });

function rotate(direction) {
  const step = 360 / figures.length;
  if (direction === 'left') {
    currentRotation += step;
  } else {
    currentRotation -= step;
  }
  carousel.style.transform = `rotateY(${currentRotation}deg)`;
}

// Touch event handlers
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
  touchEndX = e.touches[0].clientX;
});

document.addEventListener('touchend', () => {
  const swipeThreshold = 48; // Minimum distance for a swipe
  const swipeDistance = touchEndX - touchStartX;
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    // If swipe distance is greater than threshold, rotate
    if (swipeDistance > 0) {
      rotate('left'); // Swipe right
    } else {
      rotate('right'); // Swipe left
    }
  }
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') rotate('left');
  if (e.key === 'ArrowRight') rotate('right');
});





//Philosophers Audio Page
// Personalities and their associated content
const personalities = {
  "Marcus Aurelius": {
    title: "Roman Emperor & Philosopher",
    quotes: [
      '"The universe is change; our life is what our thoughts make it."',
      '"Waste no more time arguing what a good man should be. Be one."',
      '"The best revenge is to be unlike him who performed the injury."',
      '"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."' 
    ],
    tracks: [
      { day: 1, audioFile: 'audio/marcus-aurelius1.mp3' },
      { day: 2, audioFile: 'audio/marcus-aurelius2.mp3' },
      { day: 3, audioFile: 'audio/marcus-aurelius3.mp3' },
      { day: 4, audioFile: 'audio/marcus-aurelius4.mp3' },
      { day: 5, audioFile: 'audio6/marcus-aurelius5.mp3' },
      { day: 6, audioFile: 'audio6/marcus-aurelius6.mp3' },
      { day: 7, audioFile: 'audio6/marcus-aurelius7.mp3' },
      { day: 8, audioFile: 'audio6/marcus-aurelius8.mp3' },
      { day: 9, audioFile: 'audio6/marcus-aurelius9.mp3' },
      { day: 10, audioFile: 'audio6/marcus-aurelius10.mp3' },
      { day: 11, audioFile: 'audio6/marcus-aurelius11.mp3' },
      { day: 12, audioFile: 'audio5/marcus-aurelius12.mp3' },
      { day: 13, audioFile: 'audio5/marcus-aurelius13.mp3' },
      { day: 14, audioFile: 'audio5/marcus-aurelius14.mp3' },
      { day: 15, audioFile: 'audio5/marcus-aurelius15.mp3' },
      { day: 16, audioFile: 'audio4/marcus-aurelius16.mp3' },
      { day: 17, audioFile: 'audio4/marcus-aurelius17.mp3' },
      { day: 18, audioFile: 'audio4/marcus-aurelius18.mp3' },
      { day: 19, audioFile: 'audio4/marcus-aurelius19.mp3' },
      { day: 20, audioFile: 'audio3/marcus-aurelius20.mp3' },
      { day: 21, audioFile: 'audio3/marcus-aurelius21.mp3' },
      { day: 22, audioFile: 'audio3/marcus-aurelius22.mp3' },
      { day: 23, audioFile: 'audio3/marcus-aurelius23.mp3' },
      { day: 24, audioFile: 'audio3/marcus-aurelius24.mp3' },
      { day: 25, audioFile: 'audio2/marcus-aurelius25.mp3' },
      { day: 26, audioFile: 'audio2/marcus-aurelius26.mp3' },
      { day: 27, audioFile: 'audio2/marcus-aurelius27.mp3' },
      { day: 28, audioFile: 'audio2/marcus-aurelius28.mp3' },
      { day: 29, audioFile: 'audio2/marcus-aurelius29.mp3' }
    ]
  },
  "Plato": {
    title: "Greek Philosopher",
    quotes: [
      '"The beginning is the most important part of the work."',       
      '"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."',
      '"Be kind, for everyone you meet is fighting a hard battle."',       
      '"Wise men speak because they have something to say; fools because they have to say something."'  
    ],
    tracks: [
      { day: 1, audioFile: 'audio/platon1.mp3' },
      { day: 2, audioFile: 'audio/platon2.mp3' },
      { day: 3, audioFile: 'audio/platon3.mp3' },
      { day: 4, audioFile: 'audio7/platon4.mp3' },
      { day: 5, audioFile: 'audio7/platon5.mp3' },
      { day: 6, audioFile: 'audio7/platon6.mp3' },
      { day: 7, audioFile: 'audio7/platon7.mp3' },
      { day: 8, audioFile: 'audio8/platon8.mp3' },
      { day: 9, audioFile: 'audio8/platon9.mp3' },
      { day: 10, audioFile: 'audio8/platon10.mp3' },
      { day: 11, audioFile: 'audio8/platon11.mp3' },
      { day: 12, audioFile: 'audio9/platon12.mp3' },
      { day: 13, audioFile: 'audio9/platon13.mp3' },
      { day: 14, audioFile: 'audio9/platon14.mp3' },
      { day: 15, audioFile: 'audio9/platon15.mp3' },
      { day: 16, audioFile: 'audio10/platon16.mp3' },
      { day: 17, audioFile: 'audio10/platon17.mp3' },
      { day: 18, audioFile: 'audio10/platon18.mp3' },
      { day: 19, audioFile: 'audio10/platon19.mp3' },
      { day: 20, audioFile: 'audio11/platon20.mp3' },
      { day: 21, audioFile: 'audio11/platon21.mp3' },
      { day: 22, audioFile: 'audio11/platon22.mp3' },
      { day: 23, audioFile: 'audio11/platon23.mp3' },
      { day: 24, audioFile: 'audio12/platon24.mp3' },
      { day: 25, audioFile: 'audio12/platon25.mp3' },
      { day: 26, audioFile: 'audio12/platon26.mp3' },
      { day: 27, audioFile: 'audio13/platon27.mp3' },
      { day: 28, audioFile: 'audio13/platon28.mp3' },
      { day: 29, audioFile: 'audio13/platon29.mp3' }
    ]
  },
  "Aristotle": {
    title: "Greek Philosopher",
    quotes: [
      '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."',
      '"The whole is greater than the sum of its parts."',
      '"Knowing yourself is the beginning of all wisdom."',
      '"Excellence is never an accident."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio/aristoteles1.mp3' },
      { day: 2, audioFile: 'audio/aristoteles2.mp3' },
      { day: 3, audioFile: 'audio/aristoteles3.mp3' },
      { day: 4, audioFile: 'audio14/aristoteles4.mp3' },
      { day: 5, audioFile: 'audio14/aristoteles5.mp3' },
      { day: 6, audioFile: 'audio14/aristoteles6.mp3' },
      { day: 7, audioFile: 'audio14/aristoteles7.mp3' },
      { day: 8, audioFile: 'audio15/aristoteles8.mp3' },
      { day: 9, audioFile: 'audio15/aristoteles9.mp3' },
      { day: 10, audioFile: 'audio15/aristoteles10.mp3' },
      { day: 11, audioFile: 'audio15/aristoteles11.mp3' },
      { day: 12, audioFile: 'audio16/aristoteles13.mp3' },
      { day: 13, audioFile: 'audio16/aristoteles14.mp3' },
      { day: 14, audioFile: 'audio16/aristoteles15.mp3' },
      { day: 15, audioFile: 'audio17/aristoteles16.mp3' },
      { day: 16, audioFile: 'audio17/aristoteles17.mp3' },
      { day: 17, audioFile: 'audio17/aristoteles18.mp3' },
      { day: 18, audioFile: 'audio17/aristoteles19.mp3' },
      { day: 19, audioFile: 'audio18/aristoteles20.mp3' },
      { day: 20, audioFile: 'audio18/aristoteles21.mp3' },
      { day: 21, audioFile: 'audio18/aristoteles22.mp3' },
      { day: 22, audioFile: 'audio18/aristoteles23.mp3' },
      { day: 23, audioFile: 'audio19/aristoteles24.mp3' },
      { day: 24, audioFile: 'audio19/aristoteles25.mp3' },
      { day: 25, audioFile: 'audio19/aristoteles26.mp3' },
      { day: 26, audioFile: 'audio19/aristoteles27.mp3' },
      { day: 27, audioFile: 'audio20/aristoteles28.mp3' },
      { day: 28, audioFile: 'audio20/aristoteles29.mp3' },
      { day: 29, audioFile: 'audio20/aristoteles30.mp3' },
      { day: 30, audioFile: 'audio20/aristoteles31.mp3' }
    ]
  },
  "Friedrich Nietzsche": {
    title: "German Philosopher",
    quotes: [
      '"He who has a why to live can bear almost any how."',
      '"That which does not kill us makes us stronger."',
      '"There are no facts, only interpretations."',
      '"Without music, life would be a mistake."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio21/nietzsche1.mp3' },
      { day: 2, audioFile: 'audio21/nietzsche2.mp3' },
      { day: 3, audioFile: 'audio21/nietzsche3.mp3' },
      { day: 4, audioFile: 'audio21/nietzsche4.mp3' },
      { day: 5, audioFile: 'audio22/nietzsche5.mp3' },
      { day: 6, audioFile: 'audio22/nietzsche6.mp3' },
      { day: 7, audioFile: 'audio22/nietzsche7.mp3' },
      { day: 8, audioFile: 'audio22/nietzsche8.mp3' },
      { day: 9, audioFile: 'audio23/nietzsche9.mp3' },
      { day: 10, audioFile: 'audio23/nietzsche10.mp3' },
      { day: 11, audioFile: 'audio23/nietzsche11.mp3' },
      { day: 12, audioFile: 'audio23/nietzsche12.mp3' },
      { day: 13, audioFile: 'audio24/nietzsche13.mp3' },
      { day: 14, audioFile: 'audio24/nietzsche14.mp3' },
      { day: 15, audioFile: 'audio24/nietzsche15.mp3' },
      { day: 16, audioFile: 'audio24/nietzsche16.mp3' },
      { day: 17, audioFile: 'audio25/nietzsche17.mp3' },
      { day: 18, audioFile: 'audio25/nietzsche18.mp3' },
      { day: 19, audioFile: 'audio26/nietzsche19.mp3' },
      { day: 20, audioFile: 'audio26/nietzsche20.mp3' },
      { day: 21, audioFile: 'audio26/nietzsche21.mp3' },
      { day: 22, audioFile: 'audio26/nietzsche22.mp3' },
      { day: 23, audioFile: 'audio27/nietzsche23.mp3' },
      { day: 24, audioFile: 'audio27/nietzsche24.mp3' },
      { day: 25, audioFile: 'audio27/nietzsche25.mp3' },
      { day: 26, audioFile: 'audio27/nietzsche26.mp3' },
      { day: 27, audioFile: 'audio28/nietzsche27.mp3' },
      { day: 28, audioFile: 'audio28/nietzsche28.mp3' },
      { day: 29, audioFile: 'audio28/nietzsche29.mp3' }
    ]
  },
  "Julius Caesar": {
    title: "Roman Emperor & Military Commander",
    quotes: [
      '"I came, I saw, I conquered."',
      '"Experience is the teacher of all things."',
      '"It is easier to find men who will volunteer to die than to find those who are willing to endure pain with patience."',
      '"The die is cast."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio29/cäsar1.mp3' },
      { day: 2, audioFile: 'audio29/cäsar2.mp3' },
      { day: 3, audioFile: 'audio29/cäsar3.mp3' },
      { day: 4, audioFile: 'audio29/cäsar4.mp3' },
      { day: 5, audioFile: 'audio30/cäsar5.mp3' },
      { day: 6, audioFile: 'audio30/cäsar6.mp3' },
      { day: 7, audioFile: 'audio30/cäsar7.mp3' },
      { day: 8, audioFile: 'audio30/cäsar8.mp3' },
      { day: 9, audioFile: 'audio31/cäsar9.mp3' },
      { day: 10, audioFile: 'audio31/cäsar10.mp3' },
      { day: 11, audioFile: 'audio31/cäsar11.mp3' },
      { day: 12, audioFile: 'audio31/cäsar12.mp3' },
      { day: 13, audioFile: 'audio32/cäsar13.mp3' },
      { day: 14, audioFile: 'audio32/cäsar14.mp3' },
      { day: 15, audioFile: 'audio32/cäsar15.mp3' },
      { day: 16, audioFile: 'audio32/cäsar16.mp3' },
      { day: 17, audioFile: 'audio33/cäsar17.mp3' },
      { day: 18, audioFile: 'audio33/cäsar18.mp3' },
      { day: 19, audioFile: 'audio33/cäsar19.mp3' },
      { day: 20, audioFile: 'audio33/cäsar20.mp3' },
      { day: 21, audioFile: 'audio34/cäsar21.mp3' },
      { day: 22, audioFile: 'audio34/cäsar22.mp3' },
      { day: 23, audioFile: 'audio34/cäsar23.mp3' },
      { day: 24, audioFile: 'audio34/cäsar24.mp3' },
      { day: 25, audioFile: 'audio35/cäsar25.mp3' },
      { day: 26, audioFile: 'audio35/cäsar26.mp3' },
      { day: 27, audioFile: 'audio35/cäsar27.mp3' },
      { day: 28, audioFile: 'audio36/cäsar28.mp3' },
      { day: 29, audioFile: 'audio36/cäsar29.mp3' }
    ]
  },
  "Leonardo da Vinci": {
    title: "Italian Polymath",
    quotes: [
      '"Learning never exhausts the mind."',
      '"Simplicity is the ultimate sophistication."',
      '"Art is never finished, only abandoned."',
      '"I have been impressed with the urgency of doing. Knowing is not enough; we must apply."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio37/leonardo1.mp3' },
      { day: 2, audioFile: 'audio37/leonardo2.mp3' },
      { day: 3, audioFile: 'audio37/leonardo3.mp3' },
      { day: 4, audioFile: 'audio37/leonardo4.mp3' },
      { day: 5, audioFile: 'audio38/leonardo5.mp3' },
      { day: 6, audioFile: 'audio38/leonardo6.mp3' },
      { day: 7, audioFile: 'audio38/leonardo7.mp3' },
      { day: 8, audioFile: 'audio38/leonardo8.mp3' },
      { day: 9, audioFile: 'audio39/leonardo9.mp3' },
      { day: 10, audioFile: 'audio39/leonardo10.mp3' },
      { day: 11, audioFile: 'audio39/leonardo11.mp3' },
      { day: 12, audioFile: 'audio39/leonardo12.mp3' },
      { day: 13, audioFile: 'audio40/leonardo13.mp3' },
      { day: 14, audioFile: 'audio40/leonardo14.mp3' },
      { day: 15, audioFile: 'audio40/leonardo15.mp3' },
      { day: 16, audioFile: 'audio40/leonardo16.mp3' },
      { day: 17, audioFile: 'audio41/leonardo17.mp3' },
      { day: 18, audioFile: 'audio41/leonardo18.mp3' },
      { day: 19, audioFile: 'audio41/leonardo19.mp3' },
      { day: 20, audioFile: 'audio41/leonardo20.mp3' },
      { day: 21, audioFile: 'audio42/leonardo21.mp3' },
      { day: 22, audioFile: 'audio42/leonardo22.mp3' },
      { day: 23, audioFile: 'audio42/leonardo23.mp3' },
      { day: 24, audioFile: 'audio42/leonardo24.mp3' },
      { day: 25, audioFile: 'audio43/leonardo25.mp3' },
      { day: 26, audioFile: 'audio43/leonardo26.mp3' },
      { day: 27, audioFile: 'audio43/leonardo27.mp3' },
      { day: 28, audioFile: 'audio44/leonardo28.mp3' },
      { day: 29, audioFile: 'audio44/leonardo29.mp3' }
    ]
  },
  "Buddha": {
    title: "Spiritual Teacher",
    quotes: [
      '"Peace comes from within. Do not seek it without."',
      '"Three things cannot be long hidden: the sun, the moon, and the truth."',
      '"The mind is everything. What you think you become."',
      '"Health is the greatest gift, contentment the greatest wealth."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio45/buddha1.mp3' },
      { day: 2, audioFile: 'audio45/buddha2.mp3' },
      { day: 3, audioFile: 'audio45/buddha3.mp3' },
      { day: 4, audioFile: 'audio45/buddha4.mp3' },
      { day: 5, audioFile: 'audio46/buddha5.mp3' },
      { day: 6, audioFile: 'audio46/buddha6.mp3' },
      { day: 7, audioFile: 'audio46/buddha7.mp3' },
      { day: 8, audioFile: 'audio46/buddha8.mp3' },
      { day: 9, audioFile: 'audio47/buddha9.mp3' },
      { day: 10, audioFile: 'audio47/buddha10.mp3' },
      { day: 11, audioFile: 'audio47/buddha11.mp3' },
      { day: 12, audioFile: 'audio47/buddha12.mp3' },
      { day: 13, audioFile: 'audio48/buddha13.mp3' },
      { day: 14, audioFile: 'audio48/buddha14.mp3' },
      { day: 15, audioFile: 'audio48/buddha15.mp3' },
      { day: 16, audioFile: 'audio48/buddha16.mp3' },
      { day: 17, audioFile: 'audio49/buddha17.mp3' },
      { day: 18, audioFile: 'audio49/buddha18.mp3' },
      { day: 19, audioFile: 'audio49/buddha19.mp3' },
      { day: 20, audioFile: 'audio49/buddha20.mp3' },
      { day: 21, audioFile: 'audio50/buddha21.mp3' },
      { day: 22, audioFile: 'audio50/buddha22.mp3' },
      { day: 23, audioFile: 'audio50/buddha23.mp3' },
      { day: 24, audioFile: 'audio50/buddha24.mp3' },
      { day: 25, audioFile: 'audio51/buddha25.mp3' },
      { day: 26, audioFile: 'audio51/buddha26.mp3' },
      { day: 27, audioFile: 'audio51/buddha27.mp3' },
      { day: 28, audioFile: 'audio52/buddha28.mp3' },
      { day: 29, audioFile: 'audio52/buddha29.mp3' }
    ]
  },
  "Marco Polo": {
    title: "Venetian Explorer",
    quotes: [
      '"I have not told half of what I saw."',
      '"Without stones there is no arch."',
      '"I did not tell half of what I saw, for I knew I would not be believed."',
      '"Let me tell you what I have seen in the East."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio53/marco1.mp3' },
      { day: 2, audioFile: 'audio53/marco2.mp3' },
      { day: 3, audioFile: 'audio53/marco3.mp3' },
      { day: 4, audioFile: 'audio53/marco4.mp3' },
      { day: 5, audioFile: 'audio54/marco5.mp3' },
      { day: 6, audioFile: 'audio54/marco6.mp3' },
      { day: 7, audioFile: 'audio54/marco7.mp3' },
      { day: 8, audioFile: 'audio54/marco8.mp3' },
      { day: 9, audioFile: 'audio55/marco9.mp3' },
      { day: 10, audioFile: 'audio55/marco10.mp3' },
      { day: 11, audioFile: 'audio55/marco11.mp3' },
      { day: 12, audioFile: 'audio55/marco12.mp3' },
      { day: 13, audioFile: 'audio56/marco13.mp3' },
      { day: 14, audioFile: 'audio56/marco14.mp3' },
      { day: 15, audioFile: 'audio56/marco15.mp3' },
      { day: 16, audioFile: 'audio56/marco16.mp3' },
      { day: 17, audioFile: 'audio57/marco17.mp3' },
      { day: 18, audioFile: 'audio57/marco18.mp3' },
      { day: 19, audioFile: 'audio57/marco19.mp3' },
      { day: 20, audioFile: 'audio57/marco20.mp3' },
      { day: 21, audioFile: 'audio58/marco21.mp3' },
      { day: 22, audioFile: 'audio58/marco22.mp3' },
      { day: 23, audioFile: 'audio58/marco23.mp3' },
      { day: 24, audioFile: 'audio58/marco24.mp3' },
      { day: 25, audioFile: 'audio59/marco25.mp3' },
      { day: 26, audioFile: 'audio59/marco26.mp3' },
      { day: 27, audioFile: 'audio59/marco27.mp3' },
      { day: 28, audioFile: 'audio60/marco28.mp3' },
      { day: 29, audioFile: 'audio60/marco29.mp3' }
    ]
  },
  "James Cook": {
    title: "British Explorer & Navigator",
    quotes: [
      '"Ambition leads me not only farther than any other man has been before me, but as far as I think it possible for man to go."',
      '"Do just once what others say you cannot do, and you will never pay attention to their limitations again."',
      '"I had ambition not only to go farther than any man had ever been before, but as far as it was possible for a man to go."',
      '"Bad weather has a way of following good sailors."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio61/cook1.mp3' },
      { day: 2, audioFile: 'audio61/cook2.mp3' },
      { day: 3, audioFile: 'audio61/cook3.mp3' },
      { day: 4, audioFile: 'audio61/cook4.mp3' },
      { day: 5, audioFile: 'audio62/cook5.mp3' },
      { day: 6, audioFile: 'audio62/cook6.mp3' },
      { day: 7, audioFile: 'audio62/cook7.mp3' },
      { day: 8, audioFile: 'audio62/cook8.mp3' },
      { day: 9, audioFile: 'audio63/cook9.mp3' },
      { day: 10, audioFile: 'audio63/cook10.mp3' },
      { day: 11, audioFile: 'audio63/cook11.mp3' },
      { day: 12, audioFile: 'audio63/cook12.mp3' },
      { day: 13, audioFile: 'audio64/cook13.mp3' },
      { day: 14, audioFile: 'audio64/cook14.mp3' },
      { day: 15, audioFile: 'audio64/cook15.mp3' },
      { day: 16, audioFile: 'audio64/cook16.mp3' },
      { day: 17, audioFile: 'audio65/cook17.mp3' },
      { day: 18, audioFile: 'audio65/cook18.mp3' },
      { day: 19, audioFile: 'audio65/cook19.mp3' },
      { day: 20, audioFile: 'audio65/cook20.mp3' },
      { day: 21, audioFile: 'audio66/cook21.mp3' },
      { day: 22, audioFile: 'audio66/cook22.mp3' },
      { day: 23, audioFile: 'audio66/cook23.mp3' },
      { day: 24, audioFile: 'audio66/cook24.mp3' },
      { day: 25, audioFile: 'audio67/cook25.mp3' },
      { day: 26, audioFile: 'audio67/cook26.mp3' },
      { day: 27, audioFile: 'audio67/cook27.mp3' },
      { day: 28, audioFile: 'audio68/cook28.mp3' },
      { day: 29, audioFile: 'audio68/cook29.mp3' }
    ]
  },
  "William Shakespeare": {
    title: "English Playwright & Poet",
    quotes: [
      '"All the world is a stage, and all the men and women merely players."',
      '"We know what we are, but know not what we may be."',
      '"To be, or not to be, that is the question."',
      '"Love all, trust a few, do wrong to none."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio69/shakespear1.mp3' },
      { day: 2, audioFile: 'audio69/shakespear2.mp3' },
      { day: 3, audioFile: 'audio69/shakespear3.mp3' },
      { day: 4, audioFile: 'audio69/shakespear4.mp3' },
      { day: 5, audioFile: 'audio70/shakespear5.mp3' },
      { day: 6, audioFile: 'audio70/shakespear6.mp3' },
      { day: 7, audioFile: 'audio70/shakespear7.mp3' },
      { day: 8, audioFile: 'audio70/shakespear8.mp3' },
      { day: 9, audioFile: 'audio71/shakespear9.mp3' },
      { day: 10, audioFile: 'audio71/shakespear10.mp3' },
      { day: 11, audioFile: 'audio71/shakespear11.mp3' },
      { day: 12, audioFile: 'audio71/shakespear12.mp3' },
      { day: 13, audioFile: 'audio72/shakespear13.mp3' },
      { day: 14, audioFile: 'audio72/shakespear14.mp3' },
      { day: 15, audioFile: 'audio72/shakespear15.mp3' },
      { day: 16, audioFile: 'audio72/shakespear16.mp3' },
      { day: 17, audioFile: 'audio73/shakespear17.mp3' },
      { day: 18, audioFile: 'audio73/shakespear18.mp3' },
      { day: 19, audioFile: 'audio73/shakespear19.mp3' },
      { day: 20, audioFile: 'audio73/shakespear20.mp3' },
      { day: 21, audioFile: 'audio74/shakespear21.mp3' },
      { day: 22, audioFile: 'audio74/shakespear22.mp3' },
      { day: 23, audioFile: 'audio74/shakespear23.mp3' },
      { day: 24, audioFile: 'audio74/shakespear24.mp3' },
      { day: 25, audioFile: 'audio75/shakespear25.mp3' },
      { day: 26, audioFile: 'audio75/shakespear26.mp3' },
      { day: 27, audioFile: 'audio75/shakespear27.mp3' },
      { day: 28, audioFile: 'audio76/shakespear28.mp3' },
      { day: 29, audioFile: 'audio76/shakespear29.mp3' }
    ]
  },
  "Leonidas": {
    title: "Spartan King",
    quotes: [
      '"It is better to fall with honor than to live in shame."',
      '"A king leads by example, not by command."',
      '"Courage is not the absence of fear, but the mastery of it."',
      '"Discipline is the shield of the strong."'
    ],    
    tracks: [
      { day: 1, audioFile: 'audio77/leonidas1.mp3' },
      { day: 2, audioFile: 'audio77/leonidas2.mp3' },
      { day: 3, audioFile: 'audio77/leonidas3.mp3' },
      { day: 4, audioFile: 'audio77/leonidas4.mp3' },
      { day: 5, audioFile: 'audio78/leonidas5.mp3' },
      { day: 6, audioFile: 'audio78/leonidas6.mp3' },
      { day: 7, audioFile: 'audio78/leonidas7.mp3' },
      { day: 8, audioFile: 'audio78/leonidas8.mp3' },
      { day: 9, audioFile: 'audio79/leonidas9.mp3' },
      { day: 10, audioFile: 'audio79/leonidas10.mp3' },
      { day: 11, audioFile: 'audio79/leonidas11.mp3' },
      { day: 12, audioFile: 'audio79/leonidas12.mp3' },
      { day: 13, audioFile: 'audio80/leonidas13.mp3' },
      { day: 14, audioFile: 'audio80/leonidas14.mp3' },
      { day: 15, audioFile: 'audio80/leonidas15.mp3' },
      { day: 16, audioFile: 'audio80/leonidas16.mp3' },
      { day: 17, audioFile: 'audio81/leonidas17.mp3' },
      { day: 18, audioFile: 'audio81/leonidas18.mp3' },
      { day: 19, audioFile: 'audio81/leonidas19.mp3' },
      { day: 20, audioFile: 'audio81/leonidas20.mp3' },
      { day: 21, audioFile: 'audio82/leonidas21.mp3' },
      { day: 22, audioFile: 'audio82/leonidas22.mp3' },
      { day: 23, audioFile: 'audio82/leonidas23.mp3' },
      { day: 24, audioFile: 'audio82/leonidas24.mp3' },
      { day: 25, audioFile: 'audio83/leonidas25.mp3' },
      { day: 26, audioFile: 'audio83/leonidas26.mp3' },
      { day: 27, audioFile: 'audio83/leonidas27.mp3' },
      { day: 28, audioFile: 'audio84/leonidas28.mp3' },
      { day: 29, audioFile: 'audio84/leonidas29.mp3' }
    ]
  }
};

function createBackgroundParticles() {
  const particle = document.createElement('div');
  particle.className = 'background-particle';
  particle.style.cssText = `
      position: fixed;
      width: 3px;
      height: 3px;
      background: #ffd700;
      pointer-events: none;
  `;
  
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;
  
  document.body.appendChild(particle);
  
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 100 + 50;
  const duration = Math.random() * 2000 + 3000;
  
  particle.animate([
      { transform: 'translate(0, 0)', opacity: 0 },
      { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0.5, offset: 0.5 },
      { transform: `translate(${Math.cos(angle) * distance * 2}px, ${Math.sin(angle) * distance * 2}px)`, opacity: 0 }
  ], {
      duration: duration,
      easing: 'ease-out'
  }).onfinish = () => {
      particle.remove();
      createBackgroundParticles();
  };
}

// Create initial background particles
for (let i = 0; i < 20; i++) {
  createBackgroundParticles();
}

class AudioPlayer {
  constructor() {
    this.initializeElements();
    this.initializeState();
    this.createLines();
    this.setupEventListeners();
    this.initializeQuoteRotation();
    
    // Set default personality
    this.setActivePersonality("Marcus Aurelius");
  }

  initializeElements() {
    // Audio elements
    this.audio = new Audio();
    this.playButton = document.querySelector('.play-button');
    this.playIcon = document.querySelector('.play-icon');
    this.pauseIcon = document.querySelector('.pause-icon');
    this.progressRing = document.querySelector('.progress-ring');
    this.timeDisplay = document.querySelector('.time-display');
    this.personalityName = document.getElementById('personalityName');
    this.dayTitle = document.getElementById('dayTitle');
    
    // Control buttons
    this.prevDayBtn = document.querySelector('.prev-day');
    this.nextDayBtn = document.querySelector('.next-day');
    this.prevTrackBtn = document.getElementById('prev-track');
    this.nextTrackBtn = document.getElementById('next-track');
    this.rewindBtn = document.getElementById('rewind');
    this.forwardBtn = document.getElementById('forward');
    this.playPauseBtn = document.getElementById('play-pause');
    this.muteBtn = document.getElementById('mute');
    this.volumeSlider = document.getElementById('volume');
    
    // Progress elements
    this.progressContainer = document.getElementById('progressContainer');
    this.progressLine = document.getElementById('progressLine');
    this.quoteElement = document.querySelector('.wisdom-quote');

    // Add personality navigation buttons
    this.prevPersonalityBtn = document.createElement('div');
    this.nextPersonalityBtn = document.createElement('div');
    this.prevPersonalityBtn.className = 'nav-arrow prev-personality';
    this.nextPersonalityBtn.className = 'nav-arrow next-personality';
    this.prevPersonalityBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    this.nextPersonalityBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    this.personalityTitle = document.getElementById('personalityTitle');
    this.prevPersonalityBtn = document.querySelector('.prev-personality');
    this.nextPersonalityBtn = document.querySelector('.next-personality');
    this.dayTitle = document.getElementById('dayTitle');
    this.prevDayBtn = document.querySelector('.prev-day');
    this.nextDayBtn = document.querySelector('.next-day');

    this.personalityCards = document.querySelectorAll('.personality-card');
    
    // Insert personality navigation before title container
    const titleContainer = document.querySelector('.title-container');
    titleContainer.parentNode.insertBefore(this.prevPersonalityBtn, titleContainer);
    titleContainer.parentNode.insertBefore(this.nextPersonalityBtn, titleContainer.nextSibling);
  }

  initializeState() {
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.lastVolume = 1;
    this.audio.volume = 1;
    this.currentQuoteIndex = 0;
  }

  createLines() {
    const linesContainer = document.querySelector('.lines');
    for (let i = 0; i < 72; i++) {
      const line = document.createElement('div');
      line.className = 'line';
      line.style.transform = `rotate(${i * 5}deg)`;
      linesContainer.appendChild(line);
    }
  }

  setupEventListeners() {
    // Play/Pause
    this.playButton.addEventListener('click', () => this.togglePlay());
    this.playPauseBtn.addEventListener('click', () => this.togglePlay());
    
    // Navigation
    this.prevDayBtn.addEventListener('click', () => this.previousTrack());
    this.nextDayBtn.addEventListener('click', () => this.nextTrack());
    this.prevTrackBtn.addEventListener('click', () => this.previousTrack());
    this.nextTrackBtn.addEventListener('click', () => this.nextTrack());
    
    // Timeline and Progress
    this.progressContainer.addEventListener('click', (e) => this.seek(e));
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.handleTrackEnd());
    
    // Controls
    this.rewindBtn.addEventListener('click', () => this.rewind());
    this.forwardBtn.addEventListener('click', () => this.forward());
    this.muteBtn.addEventListener('click', () => this.toggleMute());
    this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
    
    // Speed Control
    document.querySelectorAll('.speed-button').forEach(button => {
      button.addEventListener('click', () => this.setSpeed(button));
    });

    // Add personality navigation listeners
    this.prevPersonalityBtn.addEventListener('click', () => this.previousPersonality());
    this.nextPersonalityBtn.addEventListener('click', () => this.nextPersonality());

     // Add personality navigation
     this.prevPersonalityBtn.addEventListener('click', () => this.changePersonality('prev'));
     this.nextPersonalityBtn.addEventListener('click', () => this.changePersonality('next'));
     
     // Add day navigation
     this.prevDayBtn.addEventListener('click', () => this.changeDay('prev'));
     this.nextDayBtn.addEventListener('click', () => this.changeDay('next'));
    
     // Add card click listeners
    this.personalityCards.forEach(card => {
      card.addEventListener('click', () => {
        const personalityName = card.dataset.personality;
        this.setActivePersonality(personalityName);
      });
    });
  }

  setActivePersonality(personalityName) {
    // Update active card visual state
    this.personalityCards.forEach(card => {
      card.classList.toggle('active', card.dataset.personality === personalityName);
    });

    // Update current personality
    this.currentPersonality = personalityName;
    this.currentDay = 1;
    
    // Update display
    this.updateDisplay();
    
    // Reset and start playing first track
    this.loadTrack(0);
    
    // Update quote
    this.currentQuoteIndex = 0;
    this.updateQuote();
  }

  changePersonality(direction) {
    const personalityNames = Object.keys(personalities);
    let currentIndex = personalityNames.indexOf(this.currentPersonality);
    
    if (direction === 'prev' && currentIndex > 0) {
      currentIndex--;
    } else if (direction === 'next' && currentIndex < personalityNames.length - 1) {
      currentIndex++;
    }
    
    this.currentPersonality = personalityNames[currentIndex];
    this.currentDay = 1; // Reset day when changing personality
    this.updateDisplay();
  }

  changeDay(direction) {
    const personality = personalities[this.currentPersonality];
    const maxDays = personality.tracks.length;
    
    if (direction === 'prev' && this.currentDay > 1) {
      this.currentDay--;
    } else if (direction === 'next' && this.currentDay < maxDays) {
      this.currentDay++;
    }
    
    this.updateDisplay();
    this.loadTrack(this.currentDay - 1);
  }

  updateDisplay() {
    const personality = personalities[this.currentPersonality];
    
    // Update personality info
    document.getElementById('personalityName').textContent = this.currentPersonality;
    document.getElementById('personalityTitle').textContent = personality.title;
    document.getElementById('dayTitle').textContent = `DAY ${this.currentDay}`;
  }

  updateNavigationState() {
    const personalityNames = Object.keys(personalities);
    const currentIndex = personalityNames.indexOf(this.currentPersonality);
    const maxDays = personalities[this.currentPersonality].tracks.length;
    
    // Update personality navigation
    this.prevPersonalityBtn.disabled = currentIndex === 0;
    this.nextPersonalityBtn.disabled = currentIndex === personalityNames.length - 1;
    
    // Update day navigation
    this.prevDayBtn.disabled = this.currentDay === 1;
    this.nextDayBtn.disabled = this.currentDay === maxDays;
  }

  previousPersonality() {
    const personalityNames = Object.keys(personalities);
    const currentIndex = personalityNames.indexOf(this.currentPersonality);
    if (currentIndex > 0) {
      this.changePersonality(personalityNames[currentIndex - 1]);
    }
  }

  nextPersonality() {
    const personalityNames = Object.keys(personalities);
    const currentIndex = personalityNames.indexOf(this.currentPersonality);
    if (currentIndex < personalityNames.length - 1) {
      this.changePersonality(personalityNames[currentIndex + 1]);
    }
  }

  updateQuote() {
    const personality = personalities[this.currentPersonality];
    const quoteElement = document.querySelector('.wisdom-quote');
    quoteElement.style.opacity = '0';
    
    setTimeout(() => {
      quoteElement.textContent = `${personality.quotes[this.currentQuoteIndex]} - ${this.currentPersonality}`;
      quoteElement.style.opacity = '0.8';
    }, 1000);
  }

  initializeQuoteRotation() {
    setInterval(() => {
      const personality = personalities[this.currentPersonality];
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % personality.quotes.length;
      this.updateQuote();
    }, 10000);
  }

  loadTrack(index) {
    const personality = personalities[this.currentPersonality];
    const track = personality.tracks[index];
    
    if (!track) return;
    
    this.audio.src = track.audioFile;
    
    // Update the day number separately
    this.dayTitle.textContent = `DAY ${track.day}`;
    
    this.currentTrackIndex = index;
    this.resetPlayState();
  }

  togglePlay() {
    if (this.audio.paused) {
      this.audio.play();
      this.playIcon.style.display = 'none';
      this.pauseIcon.style.display = 'block';
      this.playButton.classList.add('playing');
    } else {
      this.audio.pause();
      this.playIcon.style.display = 'block';
      this.pauseIcon.style.display = 'none';
      this.playButton.classList.remove('playing');
    }
    this.isPlaying = !this.audio.paused;
  }

  previousTrack() {
    if (this.currentTrackIndex > 0) {
      this.loadTrack(this.currentTrackIndex - 1);
      if (this.isPlaying) {
        this.audio.play();
        this.playButton.classList.add('playing');
      }
    }
  }

  nextTrack() {
    const personality = personalities[this.currentPersonality];
    if (this.currentTrackIndex < personality.tracks.length - 1) {
      this.loadTrack(this.currentTrackIndex + 1);
      if (this.isPlaying) {
        this.audio.play();
        this.playButton.classList.add('playing');
      }
    }
  }

  seek(event) {
    const rect = this.progressContainer.getBoundingClientRect();
    const clickPosition = (event.clientX - rect.left) / rect.width;
    this.audio.currentTime = clickPosition * this.audio.duration;
  }

  updateProgress() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    this.progressLine.style.width = `${progress}%`;
    this.progressRing.style.background = `conic-gradient(from 0deg, goldenrod ${progress}%, transparent ${progress}%)`;
    
    const currentTime = this.formatTime(this.audio.currentTime);
    const duration = this.formatTime(this.audio.duration);
    this.timeDisplay.textContent = `${currentTime} / ${duration}`;
  }

  handleTrackEnd() {
    this.playButton.classList.remove('playing');
    const personality = personalities[this.currentPersonality];
    if (this.currentTrackIndex < personality.tracks.length - 1) {
      this.nextTrack();
    } else {
      this.resetPlayState();
    }
  }

  rewind() {
    this.audio.currentTime = Math.max(0, this.audio.currentTime - 10);
  }

  forward() {
    this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 10);
  }

  toggleMute() {
    if (this.audio.volume > 0) {
      this.lastVolume = this.audio.volume;
      this.setVolume(0);
    } else {
      this.setVolume(this.lastVolume);
    }
  }

  setVolume(value) {
    this.audio.volume = value;
    this.volumeSlider.value = value;
    this.updateVolumeIcon(value);
  }

  updateVolumeIcon(volume) {
    const icon = this.muteBtn.querySelector('i');
    icon.className = 'fas';
    
    if (volume === 0) {
      icon.classList.add('fa-volume-mute');
    } else if (volume < 0.5) {
      icon.classList.add('fa-volume-down');
    } else {
      icon.classList.add('fa-volume-up');
    }
  }

  setSpeed(button) {
    const speed = parseFloat(button.dataset.speed);
    this.audio.playbackRate = speed;
    
    document.querySelectorAll('.speed-button').forEach(btn => {
      btn.classList.toggle('active', btn === button);
    });
  }

  resetPlayState() {
    this.playIcon.style.display = 'block';
    this.pauseIcon.style.display = 'none';
    this.playButton.classList.remove('playing');
    this.isPlaying = false;
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

// Initialize player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AudioPlayer();
});



// Funktion zum Anzeigen des Philosophenprofils
function showPhilosopher(philosopher) {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('philosopher-page').style.display = 'block';

    const philosopherName = philosopher.charAt(0).toUpperCase() + philosopher.slice(1);
    document.getElementById('personalityName').textContent = philosopherName;

    // Setze den Steckbrief des Philosophen
    setPhilosopherProfile(philosopher);

    // Setze die Day-Buttons für den jeweiligen Philosophen
    setupAudioButtons(philosopher);
}








// Funktion zum Einrichten der Audio-Buttons für den Philosophen
function setupAudioButtons(philosopher) {
    const days = ['day1', 'day2', 'day3']; // Liste der Tage, die unterstützt werden


    if (philosopher === 'aurelius') {
        document.getElementById('day5').style.display = 'inline-block'; // Zeige Tag 5 an
        days.push('day5'); // Füge Tag 5 zur Liste hinzu
    }


    days.forEach(day => {
        const button = document.getElementById(day);
        if (button) {
            button.style.display = 'inline-block'; // Stelle sicher, dass der Button angezeigt wird
            button.onclick = function() {
                playAudio(`audio/${philosopher}-${day}.mp3`, philosopher, day.replace('day', ''));
                recordVisitedDay(); // Speichert den Besuchstag
            };
        }
    });

    // Verberge den Tag 5-Button, wenn es sich nicht um Aurelius handelt
    if (philosopher !== 'aurelius') {
        const day5Button = document.getElementById('day5');
       
    }
}











// Funktion zum Zurückkehren zur Startseite
function showStartPage() {
    document.getElementById('philosopher-page').style.display = 'none';
    document.getElementById('start-page').style.display = 'block';

    if (currentAudio) {
        currentAudio.pause(); // Stoppe die Wiedergabe
        currentAudio.currentTime = 0; // Setze den Zeitpunkt zurück
        currentAudio = null; // Setze das aktuelle Audio-Objekt zurück
    }

    document.getElementById('audio-controls').style.display = 'none'; // Verstecke die Steuerung
    document.getElementById('task-dialog').style.display = 'none'; // Verstecke das Aufgaben-Dialogfeld
}

// Funktion zum Abspielen von Audio
function playAudio(audioSrc, philosopher, day) {
    if (currentAudio) {
        currentAudio.pause(); // Stoppe das vorherige Audio
        currentAudio.currentTime = 0; // Setze den Zeitpunkt des vorherigen Audios zurück
    }

    currentAudio = new Audio(audioSrc);
    currentAudio.playbackRate = 1.0; // Setze die Standardgeschwindigkeit auf 1,0x
    audioElement = currentAudio;
    currentAudio.play();

    // Setze die Aufgabe für den aktuellen Tag
    setTask(philosopher, day);

    document.getElementById('audio-controls').style.display = 'block'; // Zeige die Steuerung an

    currentAudio.addEventListener('ended', () => {
        showTask();
    });
}


// Funktion zum Setzen der Aufgabe für den aktuellen Tag
function setTask(philosopher, day) {
    const tasks = {
        'aurelius': {
            1: 'Reflect for 10 minutes on a current challenge; find clarity and inner strength.',
            2: 'Reflect silently on a disappointment. Write your feelings, seek forgiveness, and find inner strength.',
            3: 'Reflect on a tough decision today. List priorities, balance them, and decide with reason and compassion.',
            4: 'Today, during conversations, consciously radiate calmness and composure. Observe how this affects your conversation partners.',
            5: 'Think about a past betrayal. Try forgiveness and notice its effect on your peace and interactions today.',
            6: 'Reflect on a time when patience led to success. Today, pause, observe, and trust in the steady path.',
            7: 'Reflect on societal pressures versus inner values. Align actions with your principles for true fulfillment.',
            8: 'Write freely today. Let your words flow without overthinking. Face challenges with clarity.',
            9: 'Today, take a quiet moment to organize your thoughts. Strength lies in mastering your mind and finding inner calm.',
            10: 'Reflect on your relationships. Engage deeply, listen, and support. Strengthen bonds through meaningful dialogue.',
            11: 'Reflect on handling betrayal or threat with patience rather than impulse.',
            12: 'When praised, stay grounded. Focus on your core purpose and maintain humility.',
            13: 'Reflect on a recent conflict. Write down both perspectives and find a middle ground.',
            14: 'Show kindness to someone today—offer empathy or support. Nurture the connections that bind us.',
            15: 'Have a meaningful conversation with someone who has a different perspective. Stay open-minded and embrace the exchange of ideas.',
            16: 'Reflect on a current decision. Question if it serves a greater good or personal gain, and seek the view from a trusted person.',
            17: 'Reflect on a recent decision balancing strategy and ethics. Ensure future choices align with your values.',
            18: 'Reflect on a recent interaction with someone who had a different perspective. Consider what you learned and how to apply it.',
            19: 'Reflect on a recent urgent situation. Did a measured response improve the outcome?',
            20: 'Reflect on a current challenge. Write down how a stoic mindset could help you manage it.',
            21: 'Identify a current challenge. How could patience and persistence improve your approach.',
            22: 'Find a stressful area in your life. Schedule time to rest and reflect on how it improved your well-being.',
            23: 'Adopt a morning ritual that fosters stillness and intention to enhance your day.',
            24: 'Apply empathy and active listening to resolve a significant disagreement today.',
            25: 'Reflect on a current limitation or change in your life. Embrace it with acceptance and seek the lessons it offers.',
            26: 'Reflect on a piece of art or literature that shaped your self-view. Apply its insights to your life today.',
            27: 'Reflect on someone who has shaped your growth. How can you continue learning from them or similar influences?',
            28: 'Reflect on a time of criticism or false accusations. How did you respond, and how can you maintain your integrity in future challenges?',
            29: 'Reflect on how understanding mortality shapes your actions. Embrace acceptance to live purposefully.'
           
        },
        'plato': {
            1: 'Reflect on a truth-related decision. List aspects and consequences, then act wisely.',
            2: 'Discuss a well-known topic with someone who disagrees. Listen and note new insights.',
            3: 'Persuade someone on an issue with a solid argument. Reflect on the reactions.',
            4: 'Reflect on your ambitions. Aligned with your purpose? If not, adjust.',
            5: 'Reflect on challenges from uninformed decisions. How can you improve and stay true to your principles?',
            6: 'Reflect on how loss or change shaped you. How can these experiences deepen your understanding of values and goals?',
            7: 'Reflect on when appearances misled you. How can you seek deeper truths?',
            8: 'Reflect on unfulfilled expectations. How can these moments guide your growth? Balance ideals with reality for transformative change.',
            9: 'Let reflections guide you today. Seek harmony and deeper self-understanding.',
            10: 'Reflect on a challenging situation. How did it deepen your understanding? Apply lessons from the Oracle of Delphi to grasp complex issues better.',
            11: 'Reflect on challenges. How do they shape your values and balance ideals with reality?',
            12: 'Reflect on mortality. How does it shape your values and actions? Let contemplation of death provide clarity and purpose, inspired by Socrates.',
            13: 'Reflect on beliefs about the souls immortality. How do they influence your actions and purpose? Let them inspire greater virtue.',
            14: 'Recall feeling lost. How did it affect your view of yourself and the world? See it as a growth metaphor.',
            15: 'Reflect on a loss or setback. How did it impact your view of your work and goals?',
            16: 'Reflect on a differing perspective. How did it challenge or enrich your understanding?',
            17: 'Reflect on a neglected project. Why? Reevaluate its relevance and consider integrating it into your current pursuits.',
            18: 'Reflect on a recent observation. How did it shape your perception and self-understanding?',
            19: 'Reflect on a recent silence. How did it affect your thoughts and understanding?',
            20: 'Reflect on a sleepless night. How can it guide your stress and emotional management?',
            21: 'Reflect on the dishonest merchant. How can this improve your approach to trust and detecting deception?',
            22: 'Reflect on burdensome responsibilities. How can you find meaning and reconcile dissatisfaction?',
            23: 'Find deep meaning in trivial objects or moments. How can they inspire reflection and growth?',
            24: 'Reflect on your “last leaf” moments. How do you handle change and endings? What lessons do you draw from them?',
            25: 'Reflect on how fears shape your social choices. How do you balance comfort with societal expectations?',
            26: 'Reflect on patience. How does it impact your tasks and interactions? Cultivate it to enhance both goals and the process.',
            27: 'Reflect on Eudorus story. What hidden talents might you have? How can you uncover and express them?',
            28: 'Identify areas needing patience. How can these challenges foster growth and self-understanding?',
            29: 'Reflect on how death influences your actions and thoughts. Consider it a transition and find peace in lifes cyclical nature.'
        },
        'aristotle': {
            1: 'Choose a decision balancing fairness and impact. Document how to reconcile these and mitigate effects.',
            2: 'Reflect on a recent failure. List steps to emerge stronger from it.',
            3: 'Reflect on balancing long-term goals with immediate needs. Note your approach or plan.',
            4: 'Today, break down complex problems into manageable parts.',
            5: 'Consider how emotions affect your decisions and interactions. Use them wisely, with empathy and ethical awareness.',
            6: 'Safeguard your values and knowledge. Ensure they grow and are preserved for the future.',
            7: 'Embrace the unknown. Explore and question to uncover deeper truths in challenges.',
            8: 'Pursuing knowledge needs courage and perseverance. Embrace challenges and seek out mysteries today.',
            9: 'Embrace diverse perspectives to enrich your understanding and connect with the world.',
            10: 'Defend your principles and values against opposition. Safeguard your convictions.',
            11: 'Engage with differing viewpoints and test ideas to drive progress and innovation.',
            12: 'In debates, aim on understanding, not winning. Choose a topic, analyze arguments, and reflect on your response.',
            13: 'Use logical reasoning and systematic inquiry for clear arguments and better decisions.',
            14: 'Challenge beliefs to refine perspectives. Embrace critique for deeper understanding.',
            15: 'Explore diverse problem-solving methods. Stay flexible and adapt strategies.',
            16: 'Reflect on decision-making. Use systematic thinking for clarity and balance.',
            17: 'Embrace difficulties as growth opportunities. Adapt and apply your principles to navigate challenges.',
            18: 'Reflect on how relationships shape your path. Embrace connections and the lessons they offer.',
            19: 'Engage in debates to refine your beliefs and deepen understanding.',
            20: 'Examine your problems and projects from all angles. Consider both immediate causes and underlying purposes.',
            21: 'Use method: clarify, break down, and seek evidence-based answers.',
            22: 'Seek underlying principles and causes. Deep understanding reveals the true nature of things.',
            23: 'Learn from the past, but let your own experiences guide you. Think independently to find your path.',
            24: 'Align desires with reason and actions with the good. Cultivate virtues daily to reach eudaimonia and true happiness.',
            25: 'Reflect on how form and matter interact to shape existence.',
            26: 'Engage with the world to gain deeper, practical wisdom. Reflect on and seek new experiences for meaningful insights.',
            27: 'If you make a mistake today, remember that failure is not an end but a beginning.',
            28: 'Learn from unexpected teachers. Let their experiences broaden your understanding and shape your knowledge.',
            29: 'Reflect on temptations and demands. Stay true to your values for lasting satisfaction.',
            30: 'Reflect on your path. Pursue goals with passion and integrity. The journey and truths define you, not the end.',  
        }
    };

    currentTask = tasks[philosopher][day] || 'No task available for this day.';
}

// Funktion zum Anzeigen der Aufgabe
function showTask() {
    const taskDialog = document.getElementById('task-dialog');
    const taskText = taskDialog.querySelector('.task-text');
    taskText.textContent = currentTask;
    taskDialog.style.display = 'block'; // Zeige das Aufgaben-Dialogfeld
}

// Event Listener für die Tastensteuerung
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#audio-controls button:nth-of-type(1)').addEventListener('click', () => {
        if (audioElement) audioElement.play();
    });
    document.querySelector('#audio-controls button:nth-of-type(2)').addEventListener('click', () => {
        if (audioElement) audioElement.pause();
    });
    document.querySelector('#audio-controls button:nth-of-type(3)').addEventListener('click', () => {
        if (audioElement) audioElement.currentTime -= 10;
    });
    document.querySelector('#audio-controls button:nth-of-type(4)').addEventListener('click', () => {
        if (audioElement) audioElement.currentTime += 10;
    });

    // Speed control buttons
    document.querySelector('#audio-controls button[data-speed="1"]').addEventListener('click', () => {
        if (currentAudio) currentAudio.playbackRate = 1.0;
    });
   
    document.querySelector('#audio-controls button[data-speed="1.5"]').addEventListener('click', () => {
        if (currentAudio) currentAudio.playbackRate = 1.5;
    });
   
    document.querySelector('#audio-controls button[data-speed="1.2"]').addEventListener('click', () => {
        if (currentAudio) currentAudio.playbackRate = 1.2;
    });

    document.querySelector('#audio-controls button[data-speed="2"]').addEventListener('click', () => {
        if (currentAudio) currentAudio.playbackRate = 2.0;
    });
   
    // Event Listener für das Schließen des Aufgaben-Dialogs
    document.querySelector('#task-dialog button').addEventListener('click', () => {
        document.getElementById('task-dialog').style.display = 'none';
        if (audioElement) audioElement.play();
    });

    // Streak beim Laden der Seite berechnen und anzeigen
    updateProfile();
});



// Funktion zum Speichern des Besuchstags
function recordVisitedDay() {
    const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    let visitedDays = JSON.parse(localStorage.getItem('visitedDays')) || [];
    if (!visitedDays.includes(today)) {
        visitedDays.push(today);
        localStorage.setItem('visitedDays', JSON.stringify(visitedDays));
    }
}

// Funktion zum Abrufen der Anzahl der besuchten Tage
function getVisitedDays() {
    return JSON.parse(localStorage.getItem('visitedDays')) || [];
}

// Funktion zur Berechnung des aktuellen Streaks
function getCurrentStreak() {
    const visitedDays = getVisitedDays();
    if (visitedDays.length === 0) return 0;

    let streak = 0;
    let currentDate = new Date();

    for (let i = visitedDays.length - 1; i >= 0; i--) {
        const visitDate = new Date(visitedDays[i]);
        const diffDays = Math.floor((currentDate - visitDate) / (1000 * 60 * 60 * 24));

        if (diffDays > streak) break; // Streak unterbrochen

        streak++;
        currentDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    }

    return streak;
}

// Profil aktualisieren
function updateProfile() {
    const streak = getCurrentStreak();
    document.getElementById('streak-days').textContent = streak;
}
