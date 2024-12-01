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
  const ordinalDate = `${date}${getOrdinalSuffix(date)}`;
  const dareIndex = date - 1;
  const dareText = dares[dareIndex] || "No dare available for this date.";

  document.getElementById("modal-date").innerText = `December ${ordinalDate}`;
  document.getElementById("modal-body").innerText = dareText;

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

const dares = [
  "I dare you to meet 3 people who are practicing solo polyamory (prioritize independence while maintaining multiple relationships).",
  "I dare you to meet 2 people in a relationship where one partner is polyamorous and the other is monogamous (poly/mono dynamic).",
  "I dare you to meet 3 people who consider themselves relationship anarchists (reject hierarchical relationship norms).",
  "I dare you to meet 3 people who actively use 'kitchen table polyamory' as their relationship model (all partners comfortable engaging in shared social spaces).",
  "I dare you to meet 2 people who prioritize platonic relationships in their polyamorous structure (queerplatonic or non-romantic partnerships).",
  "I dare you to meet 3 people who have explored open relationships as a gateway to ethical non-monogamy (consensual non-monogamy without emotional connections beyond the primary).",
  "I dare you to meet 3 people who practice hierarchical polyamory (prioritize a primary partner while having secondary relationships).",
  "I dare you to meet 1 person who is part of a triad or throuple (three people in a consensual, mutual relationship).",
  "I dare you to meet 2 people who have been part of a polycule for over 1 year (a network of polyamorous relationships).",
  "I dare you to meet 3 people who identify as swingers (focus on consensual non-monogamy, often centered on sexual exploration).",
  "I dare you to meet 3 people who have transitioned from monogamy to polyamory within the past year and ask about their journey.",
  "I dare you to meet 1 person who is a community organizer or educator in the ethical non-monogamy/polyamory space to learn about the broader movement.",
  "I dare you to meet 3 people who are in a long-distance polyamorous relationship and ask about their challenges.",
  "I dare you to meet 2 people who explore polyamory primarily in a queer context and learn about their experiences.",
  "I dare you to meet 3 people who have successfully navigated a breakup within a polyamorous structure and maintained connections.",
  "I dare you to meet 2 people who use agreements or contracts to manage their polyamorous relationships.",
  "I dare you to meet 3 people who are polyamorous parents and ask how they balance parenting and relationships.",
  "I dare you to meet 1 person who has transitioned from hierarchical to non-hierarchical polyamory and learn about their journey.",
  "I dare you to meet 3 people who date separately but maintain strong boundaries within their partnerships.",
  "I dare you to meet 2 people who host polyamorous events or gatherings and learn about their motivations.",
  "I dare you to meet 3 people who prioritize metamour (partner's partner) relationships and build friendships with them.",
  "I dare you to meet 2 people who explore polyamory through online or virtual relationships.",
  "I dare you to meet 3 people who are new to polyamory and ask them about their initial fears and experiences.",
  "I dare you to meet 1 person who has been practicing polyamory for over 3 years and learn about their perspective."
];