let currentAudio = null; // Variable, um die aktuelle Audiodatei zu speichern
let audioElement = null;

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
  { name: 'Leonidas', title: 'Spartan King', type: 'leader', image: 'leonidas.jpg', open: 'leonidas' },
  { name: 'Confucius', title: 'Chinese philosopher', type: 'philosopher', image: 'Confucius.jpg', open: 'confucius' },
  { name: 'Socrates', title: 'Greek Philosopher', type: 'philosopher', image: 'Socrates.jpg', open: 'socrates' },
];












const carousel = document.getElementById('carousel');
let currentRotation = 0;
const radius = window.innerWidth <= 768 ? 355 : 474; // Smaller radius for mobile


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
    title: "Roman Emperor & Philosopher (121–180)",
    quotes: [
      '"The universe is change; our life is what our thoughts make it."',
      '"Waste no more time arguing what a good man should be. Be one."',
      '"The best revenge is to be unlike him who performed the injury."',
      '"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."',
      '"You have power over your mind, not external events. Realize this, and you will find strength."',
      '"The impediment to action advances action. What stands in the way becomes the way."',
      '"The happiness of your life depends upon the quality of your thoughts. Therefore, guard your thoughts and take care that they align with virtue and reason."',
      '"When you wake up, remind yourself: Today I will meet difficult people, but they cannot harm me if I stay true to myself and the good."' 
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
    title: "Greek Philosopher (c. 427–347 BCE)",
    quotes: [
      '"The beginning is the most important part of the work."',       
      '"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."',
      '"Be kind, for everyone you meet is fighting a hard battle."',       
      '"Wise men speak because they have something to say; fools because they have to say something."',
      '"Wisdom begins in wonder."',       
      '"The measure of a man is what he does with power."',
      '"Education is the kindling of a flame, not the filling of a vessel."',       
      '"He who learns to rule himself is greater than he who rules others.."'   
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
    title: "Greek Philosopher (384–322 BCE)",
    quotes: [
      '"We are what we repeatedly do. Excellence, then, is not an act, but a habit."',
      '"The whole is greater than the sum of its parts."',
      '"Knowing yourself is the beginning of all wisdom."',
      '"Excellence is never an accident."',
      '"The aim of the wise is not to secure pleasure, but to avoid pain."',
      '"It is the mark of an educated mind to entertain a thought without accepting it."',
      '"Educating the mind without educating the heart is no education at all."',
      '"Happiness depends upon ourselves."'
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
    title: "German Philosopher (1844–1900)",
    quotes: [
      '"He who has a why to live can bear almost any how."',
      '"That which does not kill us makes us stronger."',
      '"There are no facts, only interpretations."',
      '"Without music, life would be a mistake."',
      '"The individual has always had to struggle to keep from being overwhelmed by the tribe."',
      '"The man of knowledge must be able not only to love his enemies but also to hate his friends."',
      '"In every real man, a child is hidden that wants to play."',
      '"No one can build you the bridge on which you must cross the river of life—only you can."'
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
    title: "Roman Emperor & Military Commander (100–44 BCE)",
    quotes: [
      '"I came, I saw, I conquered."',
      '"Experience is the teacher of all things."',
      '"It is easier to find men who will volunteer to die than to find those who are willing to endure pain with patience."',
      '"The die is cast."',
      '"Cowards die many times before their actual deaths."',
      '"It is not these well-fed long-haired men that I fear, but the pale and the hungry-looking."',
      '"If you must break the law, do it to seize power: in all other cases observe it."',
      '"Fortune favors the bold."'
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
    title: "Italian Polymath (1452–1519)",
    quotes: [
      '"Learning never exhausts the mind, it only ignites it."',
      '"Simplicity is the ultimate sophistication."',
      '"Art is never finished, only abandoned."',
      '"I have been impressed with the urgency of doing. Knowing is not enough; we must apply."',
      '"Art is the queen of all sciences communicating knowledge to all the generations of the world."',
      '"The greatest deception men suffer is from their own opinions."',
      '"You can have no dominion greater or less than that over yourself."',
      '"Nature is the source of all true knowledge. She has her own logic, her own laws, she has no effect without cause, nor invention without necessity."'
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
    title: "Spiritual Teacher (c. 563–483 BCE)",
    quotes: [
      '"Peace comes from within. Do not seek it without."',
      '"Three things cannot be long hidden: the sun, the moon, and the truth."',
      '"The mind is everything. What you think you become."',
      '"Health is the greatest gift, contentment the greatest wealth."',
      '"You only lose what you cling to."',
      '"It is better to travel well than to arrive."',
      '"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."',
      '"Holding onto anger is like drinking poison and expecting the other person to die."'
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
    title: "Venetian Explorer (1254–1324)",
    quotes: [
      '"I have not told half of what I saw."',
      '"Without stones there is no arch."',
      '"I did not tell half of what I saw, for I knew I would not be believed."',
      '"You can’t cross the sea merely by standing and staring at the water."',
      '"The world is a book, and those who do not travel read only one page."',
      '"A man who is not a good servant will not be a good master."',
      '"The greatest adventure is what lies ahead."',
      '"There is a world of difference between the knowledge gained through experience and the knowledge found in books."'
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
    title: "British Explorer & Navigator (1728–1779)",
    quotes: [
      '"Ambition leads me not only farther than any other man has been before me, but as far as I think it possible for man to go."',
      '"Do just once what others say you cannot do, and you will never pay attention to their limitations again."',
      '"I had ambition not only to go farther than any man had ever been before, but as far as it was possible for a man to go."',
      '"Bad weather has a way of following good sailors."',
      '"I am not afraid to die, but I am afraid of the loss of the opportunity to do good."',
      '"We must not forget that it is not the size of the ship, but the ability of the crew, that makes a successful voyage."',
      '"No great discovery was ever made without a bold guess."',
      '"I am not a man who seeks praise, but I do seek to leave a legacy of discovery."'
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
    title: "English Playwright & Poet (1564–1616)",
    quotes: [
      '"All the world is a stage, and all the men and women merely players."',
      '"We know what we are, but know not what we may be."',
      '"To be, or not to be, that is the question."',
      '"Love all, trust a few, do wrong to none."',
      '"This above all: to thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man."',
      '"It is not in the stars to hold our destiny but in ourselves."',
      '"The better part of Valour, is Discretion."',
      '"We know what we are, but know not what we may be."'
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
    title: "Spartan King and Warrior (c. 540–480 BCE)",
    quotes: [
      '"Come and take them!"',
      '"Eat well, for tonight we dine in Hades."',
      '"This is Spartas law: Either come back with your shield or on it."',
      '"Better to fight for something than live for nothing."',
      '"Freedom is the only worthy goal in life. It is won by disregarding fear."',
      '"With courage, we conquer not just our enemies, but ourselves."',
      '"The strength of a warrior is not measured by the sword, but by the heart that wields it."',
      '"A man who fights with honor is never defeated, no matter the outcome."',
      '"In unity, there is power; in division, there is defeat."'
    ],
    tracks: [
      { day: 2, audioFile: 'audio77/leonidas1.mp3' },
      { day: 3, audioFile: 'audio77/leonidas2.mp3' },
      { day: 1, audioFile: 'audio77/leonidas3.mp3' },
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
  },
  "Socrates": {
    title: "Greek Philosopher (469–399 BCE)",
    quotes: [
      '"The way to gain a good reputation is to endeavor to be what you desire to appear."',
      '"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers."',
      '"He who wants to change the world should first change himself."',
      '"Understanding a question is half an answer."',
      '"A multitude of books distracts the mind."',
      '"We cannot live better than in seeking to become better."',
      '"I call myself a peaceful warrior because the battles we fight are on the inside."',
      '"Be slow to fall into friendship, but when thou art in, continue firm and constant."'
    ],
    tracks: [
      { day: 1, audioFile: 'audio88/Socrates1.mp3' },
      { day: 2, audioFile: 'audio88/Socrates2.mp3' },
      { day: 3, audioFile: 'audio88/Socrates3.mp3' },
      { day: 4, audioFile: 'audio88/Socrates4.mp3' },
      { day: 5, audioFile: 'audio89/Socrates5.mp3' },
      { day: 6, audioFile: 'audio89/Socrates6.mp3' },
      { day: 7, audioFile: 'audio89/Socrates7.mp3' },
      { day: 8, audioFile: 'audio89/Socrates8.mp3' },
      { day: 9, audioFile: 'audio90/Socrates9.mp3' },
      { day: 10, audioFile: 'audio90/Socrates10.mp3' },
      { day: 11, audioFile: 'audio90/Socrates11.mp3' },
      { day: 12, audioFile: 'audio90/Socrates12.mp3' },
      { day: 13, audioFile: 'audio91/Socrates13.mp3' },
      { day: 14, audioFile: 'audio91/Socrates14.mp3' },
      { day: 15, audioFile: 'audio91/Socrates15.mp3' },
      { day: 16, audioFile: 'audio91/Socrates16.mp3' },
      { day: 17, audioFile: 'audio92/Socrates17.mp3' },
      { day: 18, audioFile: 'audio92/Socrates18.mp3' },
      { day: 19, audioFile: 'audio92/Socrates19.mp3' },
      { day: 20, audioFile: 'audio92/Socrates20.mp3' },
      { day: 21, audioFile: 'audio93/Socrates21.mp3' },
      { day: 22, audioFile: 'audio93/Socrates22.mp3' },
      { day: 23, audioFile: 'audio93/Socrates23.mp3' },
      { day: 24, audioFile: 'audio93/Socrates24.mp3' },
      { day: 25, audioFile: 'audio94/Socrates25.mp3' },
      { day: 26, audioFile: 'audio94/Socrates26.mp3' },
      { day: 27, audioFile: 'audio94/Socrates27.mp3' },
      { day: 28, audioFile: 'audio95/Socrates28.mp3' },
      { day: 29, audioFile: 'audio95/Socrates29.mp3' }
    ]
  },
  "Confucius": {
    
    "title": "Chinese Philosopher (551–479 BCE)",
    "quotes": [
      "The superior man is modest in his speech but exceeds in his actions.",
      "Real knowledge is to know the extent of one’s ignorance.",
      "When we see men of a contrary character, we should turn inwards and examine ourselves.",
      "Ignorance is the night of the mind, but a night without moon and star.",
      "The superior man acts before he speaks, and afterwards speaks according to his actions.",
      "If we don't know life, how can we know death?",
      "The strength of a nation derives from the integrity of the home.",
      "He who learns but does not think, is lost. He who thinks but does not learn is in great danger."
    ],
    
    tracks: [
      { day: 1, audioFile: 'audio96/Confucius1.mp3' },
      { day: 2, audioFile: 'audio96/Confucius2.mp3' },
      { day: 3, audioFile: 'audio96/Confucius3.mp3' },
      { day: 4, audioFile: 'audio96/Confucius4.mp3' },
      { day: 5, audioFile: 'audio97/Confucius5.mp3' },
      { day: 6, audioFile: 'audio97/Confucius6.mp3' },
      { day: 7, audioFile: 'audio97/Confucius7.mp3' },
      { day: 8, audioFile: 'audio97/Confucius8.mp3' },
      { day: 9, audioFile: 'audio98/Confucius9.mp3' },
      { day: 10, audioFile: 'audio98/Confucius10.mp3' },
      { day: 11, audioFile: 'audio98/Confucius11.mp3' },
      { day: 12, audioFile: 'audio98/Confucius12.mp3' },
      { day: 13, audioFile: 'audio99/Confucius13.mp3' },
      { day: 14, audioFile: 'audio99/Confucius14.mp3' },
      { day: 15, audioFile: 'audio99/Confucius15.mp3' },
      { day: 16, audioFile: 'audio99/Confucius16.mp3' },
      { day: 17, audioFile: 'audio100/Confucius17.mp3' },
      { day: 18, audioFile: 'audio100/Confucius18.mp3' },
      { day: 19, audioFile: 'audio100/Confucius19.mp3' },
      { day: 20, audioFile: 'audio100/Confucius20.mp3' },
      { day: 21, audioFile: 'audio101/Confucius21.mp3' },
      { day: 22, audioFile: 'audio101/Confucius22.mp3' },
      { day: 23, audioFile: 'audio101/Confucius23.mp3' },
      { day: 24, audioFile: 'audio101/Confucius24.mp3' },
      { day: 25, audioFile: 'audio102/Confucius25.mp3' },
      { day: 26, audioFile: 'audio102/Confucius26.mp3' },
      { day: 27, audioFile: 'audio102/Confucius27.mp3' },
      { day: 28, audioFile: 'audio103/Confucius28.mp3' },
      { day: 29, audioFile: 'audio103/Confucius29.mp3' }
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

     // Calculate current day based on track index
     const currentDay = this.currentTrackIndex + 1;

     // Set and show the task
     TaskManager.setTask(this.currentPersonality, currentDay);
     TaskManager.showDialog();

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

        



// Task management functionality
const TaskManager = {
  currentTask : '',
        tasks : {
            'Marcus Aurelius': {
                '1': 'Reflect on your thoughts today. Maintain calmness and observe your inner self.',
                '2': 'Reflect silently on a disappointment. Write your feelings, seek forgiveness, and find inner strength.',
                '3': 'Reflect on a tough decision today. List priorities, balance them, and decide with reason and compassion.',
                '4': 'Today, during conversations, consciously radiate calmness and composure. Observe how this affects your conversation partners.',
                '5': 'Think about a past betrayal. Try forgiveness and notice its effect on your peace and interactions today.',
                '6': 'Reflect on a time when patience led to success. Today, pause, observe, and trust in the steady path.',
                '7': 'Reflect on societal pressures versus inner values. Align actions with your principles for true fulfillment.',
                '8': 'Write freely today. Let your words flow without overthinking. Face challenges with clarity.',
                '9': 'Today, take a quiet moment to organize your thoughts. Strength lies in mastering your mind and finding inner calm.',
                '10': 'Reflect on your relationships. Engage deeply, listen, and support. Strengthen bonds through meaningful dialogue.',
                '11': 'Reflect on handling betrayal or threat with patience rather than impulse.',
                '12': 'When praised, stay grounded. Focus on your core purpose and maintain humility.',
                '13': 'Reflect on a recent conflict. Write down both perspectives and find a middle ground. ',
                '14': 'Show kindness to someone today—offer empathy or support. Nurture the connections that bind us.',
                '15': 'Have a meaningful conversation with someone who has a different perspective. Stay open-minded and embrace the exchange of ideas.',
                '16': 'Reflect on a current decision. Question if it serves a greater good or personal gain, and seek the view from a trusted person.',
                '17': 'Reflect on a recent decision balancing strategy and ethics. Ensure future choices align with your values.',
                '18': 'Reflect on a recent interaction with someone who had a different perspective. Consider what you learned and how to apply it.',
                '19': 'Reflect on a recent urgent situation. Did a measured response improve the outcome?',
                '20': 'Reflect on a current challenge. Write down how a stoic mindset could help you manage it.',
                '21': 'Identify a current challenge. How could patience and persistence improve your approach.',
                '22': 'Find a stressful area in your life. Schedule time to rest and reflect on how it improved your well-being.',
                '23': 'Adopt a morning ritual that fosters stillness and intention to enhance your day.',
                '24': 'Apply empathy and active listening to resolve a significant disagreement today.',
                '25': 'Reflect on a current limitation or change in your life. Embrace it with acceptance and seek the lessons it offers.',
                '26': 'Reflect on a piece of art or literature that shaped your self-view. Apply its insights to your life today.',
                '27': 'Reflect on someone who has shaped your growth. How can you continue learning from them or similar influences?',
                '28': 'Reflect on a time of criticism or false accusations. How did you respond, and how can you maintain your integrity in future challenges?',
                '29': 'Reflect on how understanding mortality shapes your actions. Embrace acceptance to live purposefully.'

            },
            'Plato': {
                '1': 'Reflect on a truth-related decision. List aspects and consequences, then act wisely.',
                '2': 'Discuss a well-known topic with someone who disagrees. Listen and note new insights.',
                '3': 'Persuade someone on an issue with a solid argument. Reflect on the reactions.',
                '4': 'Reflect on your ambitions. Aligned with your purpose? If not, adjust.',
                '5': 'Reflect on challenges from uninformed decisions. How can you improve and stay true to your principles?',
                '6': 'Reflect on how loss or change shaped you. How can these experiences deepen your understanding of values and goals?',
                '7': 'Reflect on when appearances misled you. How can you seek deeper truths?',
                '8': 'Reflect on unfulfilled expectations. How can these moments guide your growth? Balance ideals with reality for transformative change.',
                '9': 'Let reflections guide you today. Seek harmony and deeper self-understanding.',
                '10': 'Reflect on a challenging situation. How did it deepen your understanding? Apply lessons from the Oracle of Delphi to grasp complex issues better.',
                '11': 'Reflect on challenges. How do they shape your values and balance ideals with reality?',
                '12': 'Reflect on mortality. How does it shape your values and actions? Let contemplation of death provide clarity and purpose, inspired by Socrates.',
                '13': 'Reflect on beliefs about the souls immortality. How do they influence your actions and purpose? Let them inspire greater virtue.',
                '14': 'Recall feeling lost. How did it affect your view of yourself and the world? See it as a growth metaphor.',
                '15': 'Reflect on a loss or setback. How did it impact your view of your work and goals?',
                '16': 'Reflect on a differing perspective. How did it challenge or enrich your understanding?',
                '17': 'Reflect on a neglected project. Why? Reevaluate its relevance and consider integrating it into your current pursuits.',
                '18': 'Reflect on a recent observation. How did it shape your perception and self-understanding?',
                '19': 'Reflect on a recent silence. How did it affect your thoughts and understanding?',
                '20': 'Reflect on a sleepless night. How can it guide your stress and emotional management?',
                '21': 'Reflect on the dishonest merchant. How can this improve your approach to trust and detecting deception?',
                '22': 'Reflect on burdensome responsibilities. How can you find meaning and reconcile dissatisfaction?',
                '23': 'Find deep meaning in trivial objects or moments. How can they inspire reflection and growth?',
                '24': 'Reflect on your “last leaf” moments. How do you handle change and endings? What lessons do you draw from them?',
                '25': 'Reflect on how fears shape your social choices. How do you balance comfort with societal expectations?',
                '26': 'Reflect on patience. How does it impact your tasks and interactions? Cultivate it to enhance both goals and the process.',
                '27': 'Reflect on Eudorus story. What hidden talents might you have? How can you uncover and express them?',
                '28': 'Identify areas needing patience. How can these challenges foster growth and self-understanding?',
                '29': 'Reflect on how death influences your actions and thoughts. Consider it a transition and find peace in lifes cyclical nature.'
            },
            'Aristotle': {
                '1': 'Choose a decision balancing fairness and impact. Document how to reconcile these and mitigate effects.',
                '2': 'Reflect on a recent failure. List steps to emerge stronger from it.',
                '3': 'Reflect on balancing long-term goals with immediate needs. Note your approach or plan.',
                '4': 'Today, break down complex problems into manageable parts.',
                '5': 'Consider how emotions affect your decisions and interactions. Use them wisely, with empathy and ethical awareness.',
                '6': 'Safeguard your values and knowledge. Ensure they grow and are preserved for the future.',
                '7': 'Embrace the unknown. Explore and question to uncover deeper truths in challenges.',
                '8': 'Pursuing knowledge needs courage and perseverance. Embrace challenges and seek out mysteries today.',
                '9': 'Embrace diverse perspectives to enrich your understanding and connect with the world.',
                '10': 'Defend your principles and values against opposition. Safeguard your convictions.',
                '11': 'Engage with differing viewpoints and test ideas to drive progress and innovation.',
                '12': 'In debates, aim on understanding, not winning. Choose a topic, analyze arguments, and reflect on your response.',
                '13': 'Use logical reasoning and systematic inquiry for clear arguments and better decisions.',
                '14': 'Challenge beliefs to refine perspectives. Embrace critique for deeper understanding.',
                '15': 'Explore diverse problem-solving methods. Stay flexible and adapt strategies.',
                '16': 'Reflect on decision-making. Use systematic thinking for clarity and balance.',
                '17': 'Embrace difficulties as growth opportunities. Adapt and apply your principles to navigate challenges.',
                '18': 'Reflect on how relationships shape your path. Embrace connections and the lessons they offer.',
                '19': 'Engage in debates to refine your beliefs and deepen understanding.',
                '20': 'Examine your problems and projects from all angles. Consider both immediate causes and underlying purposes.',
                '21': 'Use method: clarify, break down, and seek evidence-based answers.',
                '22': 'Seek underlying principles and causes. Deep understanding reveals the true nature of things.',
                '23': 'Learn from the past, but let your own experiences guide you. Think independently to find your path.',
                '24': 'Align desires with reason and actions with the good. Cultivate virtues daily to reach eudaimonia and true happiness.',
                '25': 'Reflect on how form and matter interact to shape existence.',
                '26': 'Engage with the world to gain deeper, practical wisdom. Reflect on and seek new experiences for meaningful insights.',
                '27': 'If you make a mistake today, remember that failure is not an end but a beginning.',
                '28': 'Learn from unexpected teachers. Let their experiences broaden your understanding and shape your knowledge.',
                '29': 'Reflect on temptations and demands. Stay true to your values for lasting satisfaction.',
                '30': 'Reflect on your path. Pursue goals with passion and integrity. The journey and truths define you, not the end.',
            },
            'Friedrich Nietzsche': {
                '1': 'Reflect on your struggles, use discipline and introspection, and embrace challenges to reach your highest self.',
                '2': 'Use the Will to Power to shape your path, turning challenges into opportunities for success.',
                '3': 'Live as if each moment repeats. Take one meaningful action today that reflects your deepest values.',
                '4': 'Examine one of your values today. Is it truly yours or inherited? Consider redefining it to better reflect your authentic self.',
                '5': 'Identify a challenge today. Embrace it as a teacher guiding your growth, just as Clara did.',
                '6': 'Identify an outdated belief. Adopt a new value that fits your current worldview and start applying it.',
                '7': 'Find a task today where you balance chaos and structure. Apply a clear structure to a creative activity and see how it improves your results.',
                '8': 'Engage in a joyful activity today. Let the pleasure and laughter remind you to value the journey and enhance your perspective.',
                '9': 'Identify a weakness and confront it honestly. How can accepting it lead to a more authentic path?',
                '10': 'Identify where you conform to norms. Try an unconventional approach and explore how it fosters your creativity and autonomy.',
                '11': 'Identify an area of envy or bitterness today. Shift your focus to personal growth and set a small goal to transform your narrative.',
                '12': 'Try a new activity today to rekindle your sense of wonder and discovery.',
                '13': 'Take one step today towards well-being: exercise, meditate, or connect meaningfully. Embrace "große Gesundheit.',
                '14': 'Break free from routine today. Make a small change, like trying a new hobby or visiting a new place, to ignite your creativity.',
                '15': 'Share one insight you will gain today through conversation or a kind act. Let your experience bring positive change to others.',
                '16': 'Notice and value something ordinary today. Find beauty in the mundane to enrich your perspective.',
                '17': 'Identify a belief you hold that challenges norms. Today, take a decisive step to defend or pursue it—through discussion, writing, or reflection.',
                '18': 'Embrace solitude today. Spend time alone with your thoughts to explore and understand yourself more deeply.',
                '19': 'Identify a routine or outdated method today. Explore new possibilities for personal growth.',
                '20': 'Embrace a current challenge with calm acceptance today. Let go of resistance and cultivate serenity to find deeper peace.',
                '21': 'Identify a recent challenge and use it to foster growth and deeper understanding. Embrace it as an opportunity for insight and transformation.',
                '22': 'Identify a rigid rule or constraint today. Redefine it as a game, rewriting the rules to explore new possibilities and freedom.',
                '23': 'Identify a societal norm limiting you. Take one small step today to redefine it and align more with your personal values and goals.',
                '24': 'Identify a current challenge. Use it as a source of strength to fuel your personal or creative growth and drive your journey forward.',
                '25': 'Choose one moment today to fully focus on the present experience. Observe and embrace it fully, just as Marcus Callahan did.',
                '26': 'Understand others desires, use empathy, and align your goals to see how it impacts your persuasion.',
                '27': 'Reflect alone in a quiet space. Notice how this solitude deepens self-understanding and creativity.',
                '28': 'Take on a challenge outside your comfort zone today. Observe its impact and document your insights and growth.',
                '29': 'Try a creative activity today. Notice its impact and consider how to incorporate this feeling into your daily life.',
               
            },
            'Julius Cäsar': {
                '1': 'Reflect on a bold decision you made. How did you handle the risks, and how did it shape your path?',
                '2': 'Reflect on a collaborative project. How did strengths and strategies shape the outcome?',
                '3': 'Reflect on a goal and its challenges. Apply perseverance and take one step today to advance.',
                '4': 'Reflect on a current project. Apply preparation, adaptability, and execution. Take one action today to enhance your strategic approach.',
                '5': 'Use empathy, vision, and authentic communication today. Take one action to inspire and build loyalty.',
                '6': 'Reflect on a conflict where forgiveness could help. Take one step today to initiate reconciliation, aiming for lasting peace and stability.',
                '7': 'Identify an area where change is needed. Plan and implement one small step today to improve the situation effectively.',
                '8': 'Reflect on how your self-presentation aligns with your values. Identify one way to improve it and take a concrete action today.',
                '9': 'Reflect on a recent influence. Improve your communication and take action today.',
                '10': 'Identify one area to manage time better. Allocate specific time blocks and prioritize tasks. Implement today and observe the impact.',
                '11': 'Define your desired identity, take action to project it, and observe the impact.',
                '12': 'Identify someone supportive. Show appreciation with a gesture and observe its impact on your relationship.',
                '13': 'Adapt your approach to a current challenge. Stay flexible and open to new solutions. Observe how this impacts your progress.',
                '14': 'Apply patience and long-term planning. Align todays efforts with your vision and observe the impact.',
                '15': 'Assess risks in a current challenge. Apply calculated risk-taking and embrace uncertainty to achieve transformative outcomes.',
                '16': 'Evaluate and leverage your network to advance your goals. Nurture connections to enhance your career and ambitions.',
                '17': 'Identify a challenge and brainstorm innovative solutions. Embrace new ideas to drive improvement and success.',
                '18': 'Align todays actions with future goals. Plan strategic steps for the week and start implementing them.',
                '19': 'Write down a personal goal and create a step-by-step plan. Take the first step towards it today.',
                '20': 'Choose a symbol representing your identity. Plan to integrate it into your daily life or work. Start today.',
                '21': 'Write down a goal for the coming months. Break it into steps, outline a plan, share it with someone you trust, and start today.',
                '22': 'Identify a current challenge. Outline a strategy for communication and negotiation. Take the first step today.',
                '23': 'Describe a recent achievement. Frame it to highlight your intentions and outcomes. Share and observe the response.',
                '24': 'Reflect on a recent conflict. Analyze how emotional intelligence could improve outcomes. Propose a more empathetic approach for future conflicts.',
                '25': 'Reflect on asserting authority. Analyze balance with others needs and suggest one improvement.',
                '26': 'Reflect on a recent project. Analyze how you managed timing and suggest one adjustment to improve it in the future.',
                '27': 'Identify a recent challenge and a skill to improve. Create a brief plan and take one actionable step today toward enhancing this skill.',
                '28': 'Identify where you are pushing too hard. Take a step back today and assess its long-term benefits.',
                '29': 'Identify where you place trust. Balance trust with safeguards to protect yourself. Ensure trust is well-placed and stay vigilant.',
            },
             'Leonardo da Vinci': {
                '1': 'Explore a field you are curious about today. Spend time researching it and embrace the joy of discovery.',
                '2': 'Combine different skills or knowledge areas today. Explore how blending disciplines can enhance your work and creativity.',
                '3': 'Reflect on a project or goal. Apply patience and dedication. Take a small step today to enhance your efforts.',
                '4': 'Examine a small object closely today. Note its structure, purpose, and function. Record insights or sketches to enhance your observation skills.',
                '5': 'Choose a challenge. Approach it with fresh ideas from unexpected sources. Document insights and try creative solutions.',
                '6': 'Pick a fascinating concept and visualize it through drawings. Document how sketching clarifies and deepens your understanding.',
                '7': 'Reflect on an unfinished project and appreciate the growth and learning from the process. Embrace imperfections as part of your development.',
                '8': 'Reflect on an area where you seek perfection. Focus on the journey and lessons learned, embracing imperfections as part of your growth.',
                '9': 'Document an idea or observation today—sketch, write, or note it down. Reflect on how this might clarify your thoughts and inspire others.',
                '10': 'Observe a small element of nature today. Note its form and function. Reflect on how it might inspire your own work or life.',
                '11': 'Reflect on a current project needing patience. Write down your progress, challenges, and next steps to keep moving forward.',
                '12': 'Approach a mundane task today with artistic attention. Treat it as a work of art, focusing on every detail and appreciating its beauty.',
                '13': 'Question one accepted belief or practice today. Explore it from a new perspective and seek fresh insights.',
                '14': 'Conduct a small experiment in an area of interest today. Observe and document the results. Use this process to expand your understanding.',
                '15': 'Explore a topic of interest today. Spend time researching it and note your findings.',
                '16': 'Today, dive into an area of interest with humility. Recognize that learning is endless and let this mindset enrich your journey.',
                '17': 'Today, envision an unconventional solution to a challenge you are passionate about. Sketch, write, or brainstorm freely to ignite innovation.',
                '18': 'Find a collaboration opportunity today. Share ideas and be open to others perspectives.',
                '19': 'Reflect on one area for improvement in your life today. Assess your progress, identify growth areas, and plan steps for enhancement.',
                '20': 'Pick a topic you are curious about and spend some time exploring it today. Let your curiosity lead you and enjoy the learning process.',
                '21': 'Choose a project today and dedicate focused, distraction-free time to it. Notice how this concentrated effort boosts your productivity and progress.',
                '22': 'Find a quiet space today to reflect on a project or challenge. Use this solitude to think deeply and creatively, and observe how it enhances your work.',
                '23': 'Reflect on a recent project. Identify one area where you can act on your own desires, not others expectations.',
                '24': 'Identify a neglected area in your life or work. Plan to explore it today and let your curiosity lead to new insights.',
                '25': 'Find a project where creativity and logic intersect. Plan to integrate both today and observe the results.',
                '26': 'Identify a project where creativity and logic intersect. Plan to blend these elements today and note the impact.',
                '27': 'Find an area where you are rigid. Try a new approach today and see how flexibility improves your results.',
                '28': 'Pick a task and refine the details today. Notice the improvement in quality.',
                '29': 'Find an area needing balance today. Make one small change to align with your values or natural principles.',
            },
            'Buddha': {
                '1': 'Today, make one small change that fosters inner contentment, like practicing mindfulness or expressing gratitude.',
                '2': 'Today, perform one small act of compassion, like offering a kind word or helping someone.',
                '3': 'Identify an area where you lean towards an extreme and find a way to introduce balance. Adjust your approach to integrate moderation.',
                '4': 'Identify where you resist change. Accept its impermanence to find peace and let go of limiting attachments.',
                '5': 'Find a source of suffering. Reflect on attachments role. Apply the Four Noble Truths for inner peace.',
                '6': 'Pick one aspect of the Noble Eightfold Path. Take a small, practical step today to embody it in your actions or thoughts.',
                '7': 'Choose an everyday activity today. Be fully present and mindful in that moment, focusing on every detail without distraction.',
                '8': 'Meditate for 10 minutes. Sit quietly, focus on your breath, and gently refocus when distracted. Observe without judgment.',
                '9': 'Today, before acting, pause to reflect on your intention. Ensure it is guided by compassion. Observe the outcomes and impact.',
                '10': 'Reflect on one attachment. Notice its impact and practice letting go.',
                '11': 'Reflect on one area of your life where you seek clarity and note any insights.',
                '12': 'Observe how you define yourself and consider how embracing Non-Self could bring freedom.',
                '13': 'Send loving-kindness to yourself and others today; observe its effect on your peace.',
                '14': 'Reflect on a current challenge and respond with patience today.',
                '15': 'Acknowledge your desires and practice contentment through a small act of generosity today.',
                '16': 'Spend a few moments observing your surroundings and reflecting on their interconnectedness today.',
                '17': 'Reach out to someone in your community today and offer or seek support.',
                '18': 'Reflect on your challenges as steps toward personal growth. Meditate on their role in your journey.',
                '19': 'Find a quiet spot today and spend a few minutes in stillness, focusing on your breath. Notice how this silence impacts your mind.',
                '20': 'Identify one grievance to let go of today. Meditate on the benefits of forgiveness and observe how it affects your peace.',
                '21': 'Observe ego-driven thoughts and their impact; practice mindfulness to see their illusory nature.',
                '22': 'Identify moments to practice ethical conduct and observe their impact on inner peace and relationships.',
                '23': 'Acknowledge challenging aspects of life and practice acceptance to foster inner peace.',
                '24': 'Identify a strong attachment and practice letting it go to experience greater freedom and inner peace.',
                '25': 'Observe a moment of discomfort with patience and acceptance to find balance and insight.',
                '26': 'Engage fully in a task or activity today and reflect on the insights gained from this direct experience.',
                '27': 'Observe your reactions today, pause during challenges, and cultivate inner calm to see how it affects your responses and interactions.',
                '28': 'Pause today to acknowledge simple blessings and practice gratitude. Observe how this shift affects your mood and peace.',
                '29': 'Identify where you are resisting change. Reflect on how to adapt with openness and observe how this shift impacts your peace.',
            },
            'Marco': {
                '1': 'Note what piques your curiosity today. Write down your questions or topics, and take a small step to explore them.',
                '2': 'Find an area where a new perspective could help. Take one action today to engage with a different idea or culture.',
                '3': 'Review a system in your life. Integrate a new idea today to enhance it with diverse perspectives.',
                '4': 'Reflect on a recent cultural exchange and how it enriched you. Embrace more such interactions to broaden your perspective.',
                '5': 'Reflect on a current challenge and how your determination can help. Identify strategies to stay resolute and overcome obstacles.',
                '6': 'Assess a current challenge with strategic foresight. Identify weaknesses and plan your moves like a Mongol general to turn the situation in your favor.',
                '7': 'Observe something overlooked today; view it from a new perspective and discover what it can teach you.',
                '8': 'Learn about a different belief today with an open mind; it may deepen your understanding of your own.',
                '9': 'Examine your lifes organization; implement one small change for greater efficiency.',
                '10': 'Try a new dish today; embrace the experience with an open heart.',
                '11': 'Embrace delays as opportunities for growth and learning.',
                '12': 'See the ordinary with fresh eyes and find wonder in the everyday.',
                '13': 'Focus on details today; precision brings deeper understanding and progress.',
                '14': 'Be flexible today; adapt to challenges and find creative solutions.',
                '15': 'Approach tasks with patience; listen, reflect, and respond thoughtfully.',
                '16': 'Engage with someone from a different background today to broaden your perspective.',
                '17': 'Engage in an activity today that expands your knowledge or skills.',
                '18': 'Reflect on a situation where adaptability is needed. Identify one strategy to approach it with greater flexibility.',
                '19': 'Reflect on a story that impacted you. How has it shaped your perspective?',
                '20': 'Reflect on a time you faced skepticism about your beliefs. How did you maintain conviction?',
                '21': 'Consider how collaborating with others could improve a current project or challenge. Identify one specific way to leverage teamwork.',
                '22': 'Reflect on a recent communication barrier and how non-verbal cues and cultural awareness might improve understanding.',
                '23': 'Reflect on a recent unfamiliar experience and how it has challenged your assumptions or expanded your understanding.',
                '24': 'Observe an object or scene closely today. Note overlooked details and reflect on how they enhance your overall understanding.',
                '25': 'Identify a challenge and outline steps to use determination to overcome it. Write down your plan and commit to it.',
                '26': 'Reflect on how a recent travel or learning experience has broadened your perspective and how you can apply this new understanding in daily life.',
                '27': 'Reflect on a recent challenge where you showed courage. How can this bravery help with future challenges?',
                '28': 'Reflect on a recent challenge in finding the truth. How did you handle it, and what can you learn to ensure accuracy in the future?',
                '29': 'Reflect on a recent experience. Note what you saw, heard, and felt. How could sharing these details help others understand and learn?',
            },
            'James Cook': {
                '1': 'Document a detail from your day to contribute to a broader understanding.',
                '2': 'Review a current project with a focus on precision and detail.',
                '3': 'Learn about a different culture today to broaden your understanding and appreciation.',
                '4': 'Identify a project where attention to detail can improve outcomes. Plan steps to address potential obstacles today.',
                '5': 'Reflect on a recent setback. How can its lessons guide your approach to current goals?',
                '6': 'Reflect on where systematic methods and thorough documentation could improve your results.',
                '7': 'Consider how scientific or innovative methods might address your current challenge.',
                '8': 'Reflect on a past conflict due to misunderstanding and how cultural respect can help resolve similar issues.',
                '9': 'Reflect on a time when respecting another culture led to a positive outcome. How can this lesson improve your interactions today?',
                '10': 'Reflect on when detailed observation deepened your understanding. How can you apply meticulous research to your current projects?',
                '11': 'Scientific exploration values courage and learning over specific goals, enriching collective knowledge. Apply that!',
                '12': 'Choose a skill to master today; plan steps to improve it and reflect on its future impact.',
                '13': 'Review how you manage resources today; plan and implement improvements for better efficiency.',
                '14': 'Explore an aspect of another culture today; learn and reflect on its impact on your understanding of diversity.',
                '15': 'Reflect on a time you adapted to overcome a challenge and how flexibility improved the outcome; apply these principles to your daily life.',
                '16': 'Consider how collaborating with others can enhance your work and seek input or share knowledge to advance your progress.',
                '17': 'Reflect on unexplored areas in your life and consider how venturing into them with curiosity can expand your understanding.',
                '18': 'Map out a strategy for a current project, focusing on long-term goals and potential obstacles.',
                '19': 'Tackle a health or well-being challenge with creative, unconventional solutions.',
                '20': 'Share wisdom or offer support to someone who looks up to you; leadership is about empowering others.',
                '21': 'Reflect on how your work and dedication can lay a foundation for future success, benefiting both yourself and others.',
                '22': 'Reflect on how to adapt and endure through lifes storms, focusing on your response rather than the challenge itself.',
                '23': 'Reflect on a communication challenge you faced and consider how to improve your strategies for better understanding and relationships.',
                '24': 'Reflect on how sharing your observations from a recent unfamiliar experience can contribute to broader understanding and solutions.',
                '25': 'Reflect on how sharing your new cultural experiences can deepen connections and understanding.',
                '26': 'Reflect on a recent cultural encounter and how you might show more respect for differing traditions.',
                '27': 'Reflect on a recent challenge and how creativity helped you overcome it.',
                '28': 'Observe natural patterns around you and reflect on how they can inform your perspective and decisions.',
                '29': 'Reflect on a new experience and think about how documenting it can deepen your understanding and enrich your knowledge.',
            },
            'William Shakespeare': {
                '1': 'Reflect on a key decision or challenge in your life. Apply careful contemplation, like Hamlet, to navigate moral conflicts and seek clarity.',
                '2': 'Reflect on how passion and conflict influence your decisions and relationships.',
                '3': 'Reflect on how collaboration or resources can enhance your current project or goal.',
                '4': 'Reframe a current challenge with humor and imagination to find new solutions.',
                '5': 'Reflect on how your ambitions shape your decisions. Consider if they need balancing with ethical considerations.',
                '6': 'Reflect on how biases affect your judgments and interactions. Strive to challenge and overcome these prejudices for a fairer perspective.',
                '7': 'Reflect on balancing personal values with societal expectations and compromise.',
                '8': 'Capture fleeting thoughts and emotions in words that resonate beyond the moment.',
                '9': 'Create a new phrase or line that reflects your unique thoughts and emotions, considering the impact of your words.',
                '10': 'Reflect on how you wield power and influence, and consider if your actions are guided by honor or darker motives.',
                '11': 'Reflect on your choices, pride, and trust, and consider if there are decisions or relationships you need to mend before regrets grow too severe.',
                '12': 'Reflect on your ambitions and their moral costs; assess if your path leads to fulfillment or destruction, and seek balance in your pursuits.',
                '13': 'Reflect on whether your roles align with your true self or just meet others expectations, and act with sincerity rather than obligation.',
                '14': 'Honor the quiet strength of Portias in your life and, when needed, act with courage and clarity.',
                '15': 'Reflect on your loyalties and make a conscious effort to honor and maintain them, as they are vital to your life.',
                '16': 'Reflect on the roles you play, how you navigate societal constraints, and find ways to assert your autonomy, like Katherina.',
                '17': 'Reflect on how you confront existential questions and uncertainties, and apply those insights to navigate your path with clarity and purpose.',
                '18': 'Consider how innovation impacts your life and work, and find ways to infuse your passions with fresh perspectives and creativity.',
                '19': 'Examine your important relationships with honesty and open communication, and address any mistrust to maintain their integrity.',
                '20': 'Reflect on how external factors influence your relationships and decisions, and approach this with an open mind.',
                '21': 'Reflect on a recent decision involving justice and mercy, and how your values shaped it.',
                '22': 'Explore the effects of ambiguity in language, seeking new insights and understanding throughout your day.',
                '23': 'Choose a figure who faced betrayal, analyze their response, and reflect on how this comparison deepens your understanding of *Julius Caesar*.',
                '24': 'Explore a literary work or film with classical mythological elements, analyzing how these enhance themes and character development.',
                '25': 'Analyze how a current leaders ambition impacts their legitimacy and national identity.',
                '26': 'Reflect on how love and ambition intersect in a current situation and how this understanding might influence your approach.',
                '27': 'Analyze a recent decision through historical or political drama themes and apply these insights to future choices.',
                '28': 'Reflect on a moral dilemma, focusing on the conflict between personal ethics and societal expectations, and the roles of justice and mercy.',
                '29': 'Examine if your relationships are based on genuine trust or external factors and how this affects your interactions.',
            },
            'Leonidas': {
                '1': 'Trust someone today instead of relying only on yourself.',
                '2': 'Do a task you usually neglect with full attention.',
                '3': 'Seek advice from someone you normally ignore.',
                '4': 'Work on a challenge that requires teamwork.',
                '5': 'Admit one mistake openly and without excuses.',
                '6': 'Take one action that pushes you toward greatness.',
                '7': 'Protect and support someone around you.',
                '8': 'Resolve a conflict peacefully instead of fighting.',
                '9': 'Focus only on what you can control today.',
                '10': 'Take an action today that defines your legacy.',
                '11': 'Seek wisdom from someone unexpected.',
                '12': 'Observe a challenge before reacting.',
                '13': 'Remove one unnecessary comfort from your life today.',
                '14': 'Pause and reflect before making a big decision.',
                '15': 'Take control of a situation where you feel powerless.',
                '16': 'Analyze a past failure and extract its lesson.',
                '17': 'Use your words to shape a situation today.',
                '18': 'Perform a small act of kindness for someone struggling.',
                '19': 'Face a fear today with humor or confidence.',
                '20': 'Strengthen your personal roots—family, values, or friendships.',
                '21': 'Consider if retreating is the wiser choice today.',
                '22': 'Look for hidden potential in someone overlooked.',
                '23': 'Observe a conversation silently and learn from it.',
                '24': 'Train your body or mind to push your limits today.',
                '25': 'Accept discomfort as part of growth—do something hard.',
                '26': 'Show courage in a situation where you would hesitate.',
                '27': 'Recognize a moment today where patience is strength.',
                '28': 'Make a decision today that aligns with your highest values.',
                '29': 'Lead by example instead of demanding change from others.'
            },

            'Confucius': {
              '1': 'Ask "Why does this work this way?" to deepen understanding.',
              '2': 'Pause before responding to criticism—will it lead to wisdom or conflict?',
              '3': 'Replace a bad habit with a good one that meets the same need.',
              '4': 'Understand others’ values to lead effectively.',
              '5': 'When angry, wait three days before acting.',
              '6': 'See mistakes as lessons. Write down one today.',
              '7': 'Change your environment to support your growth.',
              '8': 'Turn a tedious task into an act of precision.',
              '9': 'Dedicate yourself fully to one overwhelming task.',
              '10': 'Apply a piece of theoretical knowledge in practice.',
              '11': 'Decide quickly on small matters, reflect on big ones.',
              '12': 'Reflect: "Am I better than yesterday?" Note one improvement.',
              '13': 'Master the fundamentals of a skill today.',
              '14': 'Notice when someone crosses a line—observe patterns.',
              '15': 'What do your praises reveal about your values?',
              '16': 'Take a small step to change stagnation today.',
              '17': 'Observe an expert and imitate their approach.',
              '18': 'Listen to what is left unsaid in conversations.',
              '19': 'Pause before reacting to insults—choose reason over emotion.',
              '20': 'Identify someone’s patterns and motivations.',
              '21': 'Reflect: Have you prioritized wealth over values?',
              '22': 'Stand firm on your principles despite opposition.',
              '23': 'Weigh criticism—has the critic walked your path?',
              '24': 'Pause when upset. Can you master your reaction?',
              '25': 'Are you holding on out of worth or fear?',
              '26': 'Teach one key responsibility to another today.',
              '27': 'Choose integrity over convenience in one action.',
              '28': 'Help someone and reflect on its impact.',
              '29': 'Embrace patience—focus on process over outcome.'
          }


  },

  init() {
      // Get DOM elements
      this.taskText = document.getElementById('task-text');
      this.taskSubtitle = document.getElementById('task-subtitle');
      this.overlay = document.getElementById('task-overlay');
      this.dialog = document.getElementById('task-dialog');
      this.laterButton = document.getElementById('later-button');
      this.completeButton = document.getElementById('complete-button');

      // Bind event listeners
      this.laterButton.addEventListener('click', () => this.closeDialog());
      this.completeButton.addEventListener('click', () => this.closeDialog());

      // Initialize with default task
      this.setTask('Marcus Aurelius', 1);
  },

  setTask(philosopher, day) {
    if (!this.taskText || !this.taskSubtitle) {
        console.error('Required DOM elements not found');
        return;
    }
    
    const dayKey = `${day}`;
    
    if (!this.tasks[philosopher]) {
        console.error(`Philosopher ${philosopher} not found`);
        return;
    }
    
    // Update current task
    this.currentTask = this.tasks[philosopher][dayKey] || 'No task available for this day.';
    
    // Update DOM
    this.taskText.textContent = this.currentTask;
    this.taskSubtitle.textContent = `Day ${day} • ${this.capitalizeFirstLetter(philosopher)}`;
  },

  showDialog() {
      if (!this.overlay || !this.dialog) return;

      // Reset any existing transitions
      this.overlay.style.display = 'block';
      this.dialog.style.display = 'block';
      
      // Force browser reflow
      void this.dialog.offsetHeight;
      
      // Add show classes
      this.overlay.classList.add('show');
      this.dialog.classList.add('show');
  },

  closeDialog() {
      if (!this.overlay || !this.dialog) return;

      // Remove show classes
      this.overlay.classList.remove('show');
      this.dialog.classList.remove('show');
      
      // Wait for transition to complete before hiding elements
      setTimeout(() => {
          this.overlay.style.display = 'none';
          this.dialog.style.display = 'none';
      }, 300); // Match this with your CSS transition duration
  },

  capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  TaskManager.init();
});

// Show a task
TaskManager.setTask('aurelius', 1);
TaskManager.showDialog();

// Close the dialog
TaskManager.closeDialog();
