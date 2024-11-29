
function loadCalendar() {
  const calendar = document.getElementById("calendar");

  // Define card numbers (1 to 24) and shuffle them
  const numbers = Array.from({ length: 24 }, (_, i) => i + 1);
  shuffleArray(numbers);

  // Define Christmas gradients
  const gradients = [
    "linear-gradient(135deg, red 70%, white 20%, green 10%)",
    "linear-gradient(225deg, red 75%, green 15%, white 10%)",
    "linear-gradient(45deg, red 80%, white 10%, green 10%)",
    "linear-gradient(315deg, red 90%, green 5%, white 5%)",
  ];

  // Define Christmas icons
  const christmasIcons = ["🎄", "🎅", "❄", "🎁", "⭐"];

  numbers.forEach((number) => {
    // Randomize gradient
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    // Create card
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--card-gradient", randomGradient);
    card.setAttribute("onclick", `openCard(event, '${number}')`);
    card.textContent = `${number}${getOrdinalSuffix(number)}`;

    // Add 1-2 random Christmas icons to the card
    const iconCount = Math.floor(Math.random() * 2) + 1; // Randomize 1 to 2 icons
    for (let i = 0; i < iconCount; i++) {
      const icon = document.createElement("div");
      icon.className = "christmas-icon";
      icon.innerHTML = christmasIcons[Math.floor(Math.random() * christmasIcons.length)];

      // Position icons away from the center
      const randomPosition = () => Math.random() * 60 + 20; // Random position (20% to 80%)
      icon.style.top = `${randomPosition()}%`;
      icon.style.left = `${randomPosition()}%`;

      card.appendChild(icon);
    }

    // Append card to calendar
    calendar.appendChild(card);
  });
}

// Helper function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Helper function to get ordinal suffix
function getOrdinalSuffix(num) {
  if (num % 10 === 1 && num % 100 !== 11) return "st";
  if (num % 10 === 2 && num % 100 !== 12) return "nd";
  if (num % 10 === 3 && num % 100 !== 13) return "rd";
  return "th";
}

// Helper function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Helper function to get ordinal suffix
function getOrdinalSuffix(num) {
  if (num % 10 === 1 && num % 100 !== 11) return "st";
  if (num % 10 === 2 && num % 100 !== 12) return "nd";
  if (num % 10 === 3 && num % 100 !== 13) return "rd";
  return "th";
}


// Helper function to shuffle an array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Helper function to get ordinal suffix
function getOrdinalSuffix(num) {
  if (num % 10 === 1 && num % 100 !== 11) return "st";
  if (num % 10 === 2 && num % 100 !== 12) return "nd";
  if (num % 10 === 3 && num % 100 !== 13) return "rd";
  return "th";
}


function openCard(event, date) {
  const modal = document.getElementById("modal");
  const ordinalDate = `${date}${getOrdinalSuffix(date)}`;
  const dareIndex = date - 1;
  const dareText = dares[dareIndex] || "No dare available for this date.";
  document.getElementById("modal-date").innerText = `December ${ordinalDate}`;
  document.getElementById("modal-body").innerText = dareText;
  modal.style.display = "flex";
}

// function openCard(event, date) {
//   const modal = document.getElementById("modal");
//   const ordinalDate = `${date}${getOrdinalSuffix(date)}`;
//   document.getElementById("modal-date").innerText = `December ${ordinalDate}`;
//   const dareIndex = date - 1;
//   const dareText = dares[dareIndex] || "No dare available for this date.";
//   document.getElementById("modal-body").innerText = dareText;
//   modal.style.display = "flex";
// }

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Helper function to shuffle an array (Fisher-Yates Shuffle)
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

// Initialize calendar
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