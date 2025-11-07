// Random facts database
const randomFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren't.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "A day on Venus is longer than its year.",
    "There are more stars in the universe than grains of sand on all Earth's beaches.",
    "Cows have best friends and get stressed when they're separated.",
    "The human brain uses about 20% of the body's total energy, despite being only 2% of body weight.",
    "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
    "Sea otters hold hands while they sleep so they don't drift apart.",
    "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
    "A single strand of spaghetti is called a 'spaghetto'.",
    "Dolphins have names for each other and can call out to specific individuals.",
    "The average cloud weighs around 1 million pounds.",
    "There are more possible games of chess than atoms in the observable universe.",
    "A jiffy is an actual unit of time equal to 1/100th of a second.",
    "Butterflies taste with their feet.",
    "The Hawaiian alphabet has only 12 letters.",
    "A group of porcupines is called a 'prickle'.",
    "The human eye can distinguish about 10 million different colors.",
    "A shrimp's heart is in its head.",
    "The first oranges weren't orange - they were green.",
    "A day on Mercury lasts 59 Earth days.",
    "The average person spends 6 months of their lifetime waiting at red lights.",
    "There are more fake flamingos in the world than real ones.",
    "The oldest known living tree is over 5,000 years old.",
    "A sneeze travels out of your mouth at over 100 miles per hour.",
    "The average person will spend 25 years sleeping.",
    "A bolt of lightning is 5 times hotter than the surface of the sun."
];

let currentFact = "";

// Initialize EmailJS (you'll need to replace with your actual public key)
(function() {
    emailjs.init("NfhW4FLzyD_Q43E5O"); // Replace with your EmailJS public key
})();

// Generate random fact
function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    currentFact = randomFacts[randomIndex];
    document.getElementById('fact-preview').textContent = currentFact;
    return currentFact;
}

// Send email function
async function sendEmail() {
    if (!currentFact) {
        showStatus('Please generate a fact first!', 'error');
        return;
    }

    const sendBtn = document.getElementById('send-btn');
    const originalText = sendBtn.textContent;

    try {
        sendBtn.textContent = 'Sending...';
        sendBtn.disabled = true;

        // EmailJS parameters
        const templateParams = {
            to_email: 'sj@genco-oil.com',
            fact: currentFact,
            from_name: 'Random Fact Sender',
            subject: 'Here\'s an interesting random fact for you!'
        };

        // Send email using EmailJS
        await emailjs.send('service_i1a9a8p', 'template_zwcnyle', templateParams);

        showStatus('Email sent successfully to sj@genco-oil.com!', 'success');

        // Generate a new fact after successful send
        setTimeout(() => {
            generateRandomFact();
        }, 2000);

    } catch (error) {
        console.error('Error sending email:', error);
        showStatus('Failed to send email. Please check your EmailJS configuration.', 'error');
    } finally {
        sendBtn.textContent = originalText;
        sendBtn.disabled = false;
    }
}

// Send email to Jenny function
async function sendEmailToJenny() {
    if (!currentFact) {
        showStatus('Please generate a fact first!', 'error');
        return;
    }

    const sendBtn = document.getElementById('send-jenny-btn');
    const originalText = sendBtn.textContent;

    try {
        sendBtn.textContent = 'Sending...';
        sendBtn.disabled = true;

        // EmailJS parameters
        const templateParams = {
            to_email: 'jenny@genco-oil.com',
            fact: currentFact,
            from_name: 'Random Fact Sender',
            subject: 'Here\'s an interesting random fact for you!'
        };

        // Send email using EmailJS
        await emailjs.send('service_i1a9a8p', 'template_zwcnyle', templateParams);

        showStatus('Email sent successfully to jenny@genco-oil.com!', 'success');

        // Generate a new fact after successful send
        setTimeout(() => {
            generateRandomFact();
        }, 2000);

    } catch (error) {
        console.error('Error sending email:', error);
        showStatus('Failed to send email. Please check your EmailJS configuration.', 'error');
    } finally {
        sendBtn.textContent = originalText;
        sendBtn.disabled = false;
    }
}

// Show status message
function showStatus(message, type) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    
    // Clear status after 5 seconds
    setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.className = 'status';
    }, 5000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-btn').addEventListener('click', generateRandomFact);
    document.getElementById('send-btn').addEventListener('click', sendEmail);
    document.getElementById('send-jenny-btn').addEventListener('click', sendEmailToJenny);

    // Generate initial fact
    generateRandomFact();
});