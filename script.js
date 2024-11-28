function flipCard(event) {
  const cardInner = event.currentTarget.querySelector(".card-inner");
  cardInner.classList.toggle("flipped");
}
