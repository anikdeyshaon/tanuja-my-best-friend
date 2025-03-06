// Slideshow Functionality
const photos = document.querySelectorAll('.tanuja-photo');
let currentPhoto = 0;

function showNextPhoto() {
    photos[currentPhoto].classList.remove('active');
    currentPhoto = (currentPhoto + 1) % photos.length; // Loop back to first photo
    photos[currentPhoto].classList.add('active');
}

setInterval(showNextPhoto, 3000); // Change photo every 3 seconds

// Change Background Color and Footer Contrast
const colorBtn = document.getElementById('color-btn');
const footer = document.querySelector('footer');

colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;

    // Calculate brightness to determine footer text color
    const bgColor = randomColor.slice(1); // Remove '#'
    const r = parseInt(bgColor.substr(0, 2), 16);
    const g = parseInt(bgColor.substr(2, 2), 16);
    const b = parseInt(bgColor.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Luminance formula

    // Set footer text to white or black based on background brightness
    footer.style.color = brightness > 128 ? '#000' : '#fff';
});

// Show Fun Fact
const factBtn = document.getElementById('fact-btn');
const funFactElement = document.getElementById('fun-fact');
const facts = [
    "Tanuja doesn't call the wrong number. You answer the wrong phone.",
    "When Tanuja enters a room, the temperature rises by 10 degrees. That's just friction from the air trying to get out of her way.",
    "Tanuja doesn't need a keyboard to code. She just stares at the computer until it does what she wants.",
    "Scientists have estimated that the energy from Tanuja's smile could power a small city for a week.",
    "Tanuja once made a to-do list so efficient that it completed itself.",
    "When Tanuja's phone dies, it apologizes to her.",
    "Tanuja doesn't need GPS. Lost places ask her for directions.",
    "Tanuja doesn't wait for the weekend. The weekend waits for her.",
    "When Tanuja walks into a meeting, time stops to take notes.",
    "Tanuja doesn't brew coffee. She intimidates the beans into brewing themselves.",
    "Tanuja once stared at a cloud until it rained out of respect.",
    "The internet doesn't load for Tanuja. It salutes and gets out of the way.",
    "Tanuja doesn't negotiate. Deals sign themselves in her presence.",
    "When Tanuja does math, numbers thank her for the workout.",
    "Tanuja doesn't sleep. She pauses the universe for a break.",
    "Tanuja's laughter once caused an earthquake—scientists called it a 'joy quake.'",
    "Tanuja doesn't need a watch. Time checks in with her.",
    "When Tanuja plays chess, the pieces move themselves to avoid defeat.",
    "Tanuja once told a storm to calm down. It's been sunny ever since.",
    "Tanuja doesn't write emails. Words assemble themselves to save her the trouble.",
    "Tanuja's shadow doesn't follow her. It asks permission first.",
    "When Tanuja dances, gravity takes a day off.",
    "Tanuja doesn't need Wi-Fi. The signal begs to connect to her.",
    "Tanuja once blinked, and the stars rearranged themselves to impress her.",
    "Tanuja doesn't lose things. Missing items send her apology letters.",
    "When Tanuja sings, microphones amplify themselves to keep up.",
    "Tanuja's ideas are so powerful, brainstorming sessions end in thunder.",
    "Tanuja doesn't wait in line. Lines form behind her out of courtesy.",
    "When Tanuja smiles at the moon, it glows brighter just to say thank you.",
    "Tanuja doesn't set her alarm clock. She tells time when to wake her up.",
    "Excel spreadsheets calculate themselves when Tanuja opens them.",
    "Tanuja doesn't catch flights. Flights wait for Tanuja.",
    "Tanuja once submitted a blank exam paper. She still got full marks because the professor didn't dare question her knowledge.",
    "When Tanuja logs into her bank account, the stock market stabilizes out of respect.",
    "If Tanuja makes a typo, the dictionary updates itself.",
    "Tanuja once solved a Rubik's cube in one move. That move was picking it up.",
    "Gravity only exists because Tanuja allows it.",
    "Tanuja doesn't check the news. The news checks with her first.",
    "If you stare at a blank Word document long enough, you'll see Tanuja's to-do list appear.",
    "Banks don’t regulate money. Tanuja regulates banks.",
    "Tanuja doesn’t take interviews. She just nods, and the job accepts her.",
    "The only reason ATMs work is because they fear disappointing Tanuja.",
    "Tanuja doesn’t climb mountains. Mountains lower themselves for her.",
    "The GDP of Bangladesh rises 2% every time Tanuja smiles.",
    "Tanuja once missed a deadline. The deadline apologized and rescheduled itself.",
    "If Tanuja looks at a bug in the code, it immediately fixes itself out of embarrassment.",
    "Tanuja doesn’t need two-factor authentication. Websites identify themselves to her.",
    "Tanuja once calculated compound interest mentally... on an infinite loop.",
    "When Tanuja plays Wordle, the word changes itself to match her guess.",
    "Tanuja doesn't break records. Records break themselves in her honor.",
    "Bangladesh Bank doesn't employ Tanuja. She allows them to list her on the payroll.",
    "Tanuja doesn't follow fashion trends. Her outfits become tomorrow's trends.",
    "When Tanuja takes notes, pens write faster to keep up with her thoughts.",
    "Tanuja doesn’t balance the books. The books balance themselves out of respect.",
    "When Tanuja approves a loan, the money thanks her for the opportunity.",
    "Tanuja once audited an account. The account apologized and corrected itself.",
    "When Tanuja logs into the system, cybercriminals voluntarily log out.",
    "Bangladesh Bank’s reserves don’t need security. They have Tanuja.",
    "Tanuja doesn’t need interest rates. Money naturally grows in value around her.",
    "If Tanuja rejects a transaction, even the ATM spits the cash back.",
    "Tanuja once misplaced a decimal point. The global economy adjusted accordingly.",
    "When Tanuja walks into a bank, fraud detection software upgrades itself automatically.",
    "Tanuja doesn’t check exchange rates. Exchange rates check with her before changing.",
    "If there’s a banking crisis, Tanuja doesn’t react. The crisis does.",
    "Tanuja doesn’t approve policies. Policies rewrite themselves to match her expectations.",
    "When Tanuja transfers money, it reaches its destination before she hits send.",
    "Tanuja once made a budget so perfect that inflation took a holiday.",
    "Bangladesh Bank doesn’t run simulations. They just ask Tanuja what will happen.",
    "Tanuja doesn’t follow financial forecasts. The forecasts change based on what she decides.",
    "A bank once lost track of its assets. Tanuja found them without looking.",
    "Tanuja doesn’t count cash. Cash lines up in perfect order for her.",
    "The IMF doesn’t suggest policies to Bangladesh. They just ask what Tanuja thinks.",
    "Tanuja once solved a financial discrepancy just by raising an eyebrow.",
    "Tanuja doesn't avoid traffic. Traffic reroutes itself when it sees her coming.",
    "Tanuja doesn't need autocorrect. Words spell themselves correctly in her presence.",
    "When Tanuja makes a typo, dictionaries update their spelling.",
    "Tanuja doesn't search on Google. Google asks Tanuja for answers.",
    "Tanuja doesn't need bookmarks. Books remember which page she was on.",
    "When Tanuja visits a restaurant, chefs compete for the honor of cooking her meal.",
    "Tanuja doesn't charge her devices. They stay powered out of respect.",
    "When Tanuja speaks, even silence listens attentively.",
    "Tanuja doesn't need sunscreen. The sun protects itself from her radiance.",
    "When Tanuja gives feedback, it's so constructive buildings appear.",
    "When Tanuja takes a selfie, phones automatically apply the 'legendary' filter."
]

factBtn.addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    funFactElement.textContent = randomFact;
});