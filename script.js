function loadCalendar() {
  const calendar = document.getElementById("calendar");

  // Define card numbers (1 to 24) and shuffle them
  const startNumber = 1;
  const count = 12;
  const numbers = Array.from({ length: count }, (_, i) => i + startNumber);
  shuffleArray(numbers);

  // const christmasIcons = ["🎄", "🎅", "❄", "🎁", "⭐"];
  const christmasIcons = [
    "🎄", // Christmas Tree
    "🎅", // Santa Claus
    "🤶", // Mrs. Claus
    "❄", // Snowflake
    "🎁", // Wrapped Gift
    "⭐", // Star
    "🔔", // Bell
    "🕯", // Candle
    "⛄", // Snowman
    "🦌", // Deer
    "🎀", // Ribbon
    "🍪", // Cookie
    "🥛", // Glass of Milk
    "🛷", // Sled
    "🌟", // Glowing Star
    "🎶", // Musical Notes (Caroling)
    "🍭", // Candy
    "🍬", // Wrapped Candy
    "🌲", // Evergreen Tree
    "🎡", // Ferris Wheel (Holiday Fair)
    "🎩", // Top Hat (Frosty the Snowman)
    "🎅🏻", // Light Skin Tone Santa
    "🎅🏽", // Medium Skin Tone Santa
    "🎅🏿", // Dark Skin Tone Santa
    "🎵", // Musical Note
    "🥂", // Clinking Glasses
    "🍷", // Wine Glass
    "🎸", // Guitar (Holiday Music)
    "❇", // Sparkle
    "✨", // Sparkles
    "💫", // Dizzy
    "🎗", // Reminder Ribbon
  ];

  numbers.forEach((number) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-date", number); // Attach the date as a custom attribute
    // card.textContent = `${number}${getOrdinalSuffix(number)}`;
    card.textContent = `${number}`;
    card.addEventListener("click", (event) => openCard(event, number));

    // Add 1-2 random Christmas icons to the card
    const iconCount = Math.floor(Math.random() * 2) + 1; // Randomize 1 to 2 icons
    for (let i = 0; i < iconCount; i++) {
      const icon = document.createElement("div");
      icon.className = "christmas-icon";
      icon.innerHTML = christmasIcons[Math.floor(Math.random() * christmasIcons.length)];

      const position = getRandomPosition();
      icon.style.top = position.top;
      icon.style.left = position.left;

      card.appendChild(icon);
    }

    calendar.appendChild(card);
  });
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getOrdinalSuffix(num) {
  if (num % 10 === 1 && num % 100 !== 11) return "st";
  if (num % 10 === 2 && num % 100 !== 12) return "nd";
  if (num % 10 === 3 && num % 100 !== 13) return "rd";
  return "th";
}

function getRandomPosition() {
  // Predefined positions
  const positions = [
    { top: "10%", left: "10%" }, // Top left
    { top: "10%", left: "50%" }, // Top middle
    { top: "10%", left: "80%" }, // Top right
    { top: "50%", left: "10%" }, // Left center
    { top: "50%", left: "80%" }, // Right center
    { top: "80%", left: "10%" }, // Bottom left
    { top: "80%", left: "50%" }, // Bottom middle
    { top: "80%", left: "80%" }  // Bottom right
  ];

  // Randomize from predefined positions
  return positions[Math.floor(Math.random() * positions.length)];
}


let activeCard = null;

function openCard(event, date) {
  const card = event.target;
  const modal = document.getElementById("modal");
  // const ordinalDate = `${date}${getOrdinalSuffix(date)}`;
  const ordinalDate = `${date}`;
  const cardIndex = date - 1;
  const cardText = contentOrderedArray[cardIndex] || "Nothing available for this date! roll again!";

  document.getElementById("modal-date").innerText = `Door ${ordinalDate}`;
  document.getElementById("modal-body").innerText = cardText;

  // Show overlay with dimming effect
  overlay.style.opacity = "0.8";
  // overlay.style.pointerEvents = "auto";

  // Get card position and size
  const cardRect = card.getBoundingClientRect();
  const modalStyle = modal.style;

  // Calculate transform-origin based on card position
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Set transform-origin to the center of the card
  modalStyle.transformOrigin = `${(cardCenterX / viewportWidth) * 100}% ${(cardCenterY / viewportHeight) * 100}%`;


  card.style.transform = "rotateY(45deg)";
  card.style.transition = "transform 1.5s ease";


  activeCard = card;


  setTimeout(() => {
    modal.style.display = "flex";
    modal.style.animation = "zoomFromCard 1.7s ease";
  }, 500);
}

function closeModal() {
  const modal = document.getElementById("modal");
  const card = document.querySelector(".card[style*='rotateY']");

  modal.style.display = "none";

  setTimeout(() => {
    // Reset the active card's flip animation
    if (activeCard) {
      card.style.background = "rgb(180, 180, 180)";
      overlay.style.opacity = "0";
      modal.style.display = "none";
      overlay.style.pointerEvents = "none";
      activeCard.style.transform = "rotateY(0deg)"; // Reset to original position
      activeCard.style.transition = "transform 1.5s ease"; // Smooth animation back
      activeCard = null; // Clear the reference
    }
  }, 300); // Delay matches modal's closing animation duration
}

window.onload = loadCalendar;

const contentOrderedArray = [
  "Meet 3 new people who practice solo polyamory (prioritize independence while maintaining multiple relationships) or relationship anarchy (reject hierarchical relationship norms) and ask about why it works for them?",
  "Introduce yourself to 3 new people and ask them “If you could instantly master one skill, what would it be and why?”",
  "Meet 3 new people and ask them “What’s a piece of advice you’ve received that has really helped you on your non-monogamy journey?”",
  "Meet 3 new people who have experienced 'kitchen table polyamory' (all partners comfortable engaging in shared social spaces) and ask them what enabled that to work for them?",
  "Meet 3 new people and ask them “What’s a piece of advice you’ve received that you credit with positively impacting your life?”",
  "Meet 3 new people who actively participate in sex positive or alternative relationship community events and ask them what they have learned about being part of community as a result?",
  "Meet 3 new people and ask them, “What’s a book, podcast, or resource that has had a big impact on how you approach non-monogamy?”",
  "Meet 3 new people and ask them, “How do you celebrate milestones or special moments in your relationships?”",
  "Meet 3 new people and ask them, “What’s a misconception about non-monogamy you wish more people understood?”",
  "Meet 3 new people who have navigated long-distance relationships and ask them what tools or strategies have worked best for staying connected.",
  "Meet 3 new people and ask them, “What’s something you’ve learned about yourself through non-monogamy?”",
  "Meet 3 new people and ask them, “What’s a tradition or ritual you’ve created that helps nurture your relationships?”",
];