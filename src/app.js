window.onload = () => {
  function displayNumbers() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return singleNumber;
  }
  function displaySuits() {
    let suits = ["♥", "♣", "♦", "♠"];
    let singlesuits = suits[Math.floor(Math.random() * suits.length)];
    return singlesuits;
  }

  let numbersCard = displayNumbers();
  let suitsCard = displaySuits();

  let spanNumber = document.querySelector(".number");
  spanNumber.innerHTML = numbersCard;
  let spanTopSuit = document.querySelector(".top-suit");
  spanTopSuit.innerHTML = suitsCard;
  let spanBottomSuit = document.querySelector(".bottom-suit");
  spanBottomSuit.innerHTML = suitsCard;

  if (suitsCard == "♥" || suitsCard == "♦") {
    spanNumber.style.color = "red";
    spanTopSuit.style.color = "red";
    spanBottomSuit.style.color = "red";
  }
};
