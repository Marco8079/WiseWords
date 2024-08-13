let currentAudio = null; // Variable, um die aktuelle Audiodatei zu speichern
let audioElement = null;
let currentTask = ''; // Variable für die aktuelle Aufgabe

// Funktion zum Anzeigen des Philosophenprofils
function showPhilosopher(philosopher) {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('philosopher-page').style.display = 'block';

    const philosopherName = philosopher.charAt(0).toUpperCase() + philosopher.slice(1);
    document.getElementById('philosopher-name').textContent = philosopherName;

    // Setze den Steckbrief des Philosophen
    setPhilosopherProfile(philosopher);

    // Setze die Day-Buttons für den jeweiligen Philosophen
    setupAudioButtons(philosopher);
}

// Funktion zum Setzen des Philosophenprofils
function setPhilosopherProfile(philosopher) {
    const profile = document.getElementById('philosopher-profile');
    switch (philosopher) {
        case 'aurelius':
            profile.innerHTML = `
                <h3>Profile of Marcus Aurelius</h3>
                <ul>
                    <li>Occupation/Role: Roman Emperor and Philosopher</li>
                    <li>Story Style: Reflective, philosophical, and introspective</li>
                    <li>Everyday Relevance: Demonstrates how to maintain inner peace and clarity during challenging times and make ethical decisions</li>
                </ul>
            `;
            break;
        case 'plato':
            profile.innerHTML = `
                <h3>Profile of Plato</h3>
                <ul>
                    <li>Occupation/Role: Ancient Greek Philosopher</li>
                    <li>Story Style: Dialogues exploring philosophical ideas and theories</li>
                    <li>Everyday Relevance: Challenges assumptions and encourages critical thinking about justice, ethics, and knowledge</li>
                </ul>
            `;
            break;
        case 'aristotle':
            profile.innerHTML = `
                <h3>Profile of Aristotle</h3>
                <ul>
                    <li>Occupation/Role: Greek Philosopher and Scientist</li>
                    <li>Story Style: Systematic and empirical approach to philosophy and science</li>
                    <li>Everyday Relevance: Provides insights into logic, ethics, and the natural world, promoting practical wisdom</li>
                </ul>
            `;
            break;
    }
}

// Funktion zum Einrichten der Audio-Buttons für den Philosophen
function setupAudioButtons(philosopher) {
    const days = ['day1', 'day2', 'day3']; // Liste der Tage, die unterstützt werden

    days.forEach((day, index) => {
        const button = document.getElementById(day);
        if (button) {
            button.onclick = function() {
                playAudio(`audio/${philosopher}-${day}.mp3`, philosopher, index + 1);
                recordVisitedDay(); // Speichert den Besuchstag
            };
        }
    });
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
            4: 'Today, during conversations, consciously radiate calmness and composure. Observe how this affects your conversation partners.'
        },
        'plato': {
            1: 'Reflect on a truth-related decision. List aspects and consequences, then act wisely.',
            2: 'Discuss a well-known topic with someone who disagrees. Listen and note new insights.',
            3: 'Persuade someone on an issue with a solid argument. Reflect on the reactions.'
        },
        'aristotle': {
            1: 'Choose a decision balancing fairness and impact. Document how to reconcile these and mitigate effects.',
            2: 'Reflect on a recent failure. List steps to emerge stronger from it.',
            3: 'Reflect on balancing long-term goals with immediate needs. Note your approach or plan.'
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

    // Event Listener für das Schließen des Aufgaben-Dialogs
    document.querySelector('#task-dialog button').addEventListener('click', () => {
        document.getElementById('task-dialog').style.display = 'none';
    });

    // Streak beim Laden der Seite berechnen und anzeigen
    updateProfile();
});

// Profil-Seite Funktionen
function showProfile() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('philosopher-page').style.display = 'none';
    document.getElementById('user-profile').style.display = 'block';
    
    // Profilbild und Informationen anzeigen
    document.getElementById('profile-image-rewards').src = 'Abzeichen Route.png'; // Profilbild-URL einfügen
    document.getElementById('streak-days').textContent = getCurrentStreak(); // Anzahl der Streak-Tage anzeigen
}

function hideProfile() {
    document.getElementById('user-profile').style.display = 'none';
    document.getElementById('start-page').style.display = 'block';
}

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

// Beispiel für den Aufruf der Funktion mit den Abzeichen des Nutzers
document.addEventListener('DOMContentLoaded', () => {
    const userBadges = JSON.parse(localStorage.getItem('awardedBadges')) || [];
    userBadges.forEach(badgeName => {
        const badgeInfo = badges[badgeName];
        if (badgeInfo) {
            const badgeElement = document.createElement('div');
            badgeElement.className = 'badge';
            badgeElement.innerHTML = `
                <img src="${badgeInfo.image}" alt="${badgeInfo.name}">
                <p>${badgeInfo.name}</p>
            `;
            document.getElementById('badges-container').appendChild(badgeElement);
        }
    });

    // Streak beim Laden der Seite aktualisieren
    updateProfile();
});


















// script.js

// Funktion zum Abspielen des Soundeffekts
function playStartupSound() {
    var audio = document.getElementById('startup-sound');
    if (audio) {
        audio.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    }
}

// Event-Listener für das Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    playStartupSound();
});
