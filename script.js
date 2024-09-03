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
                    <li>length: 3-7 minutes</li>
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
                    <li>length: 3-7 minutes</li>
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
                    <li>length: 3-6 minutes</li>
                </ul>
            `;
            break;           
        case 'nietzsche':
            profile.innerHTML = `
                <h3>Profile of Nietzsche</h3>
                <ul>
                    <li>Occupation/Role: Greek Philosopher and Scientist</li>
                    <li>Story Style: Systematic and empirical approach to philosophy and science</li>
                    <li>Everyday Relevance: Provides insights into logic, ethics, and the natural world, promoting practical wisdom</li>
                    <li>length: 3-6 minutes</li>
                </ul>
            `;
            break;
    }
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

















