const suitInfo = document.getElementById("input1");
const colorInfo = document.getElementById("input2");

function setCard() {
    const card = document.getElementById(suitInfo.value);
    card.style.color = colorInfo.value;
}

function resetCard() {
    const diamond = document.getElementById("diamonds");
    const club = document.getElementById("clubs");
    const heart = document.getElementById("hearts");
    const spade = document.getElementById("spades");

    diamond.style.color = "grey";
    club.style.color = "grey";
    heart.style.color = "grey";
    spade.style.color = "grey";
}