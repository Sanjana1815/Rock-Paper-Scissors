document.addEventListener("DOMContentLoaded", function () {
  const computer = document.querySelector(".computer img");
  const player = document.querySelector(".player img");
  const computerPoints = document.querySelector(".computerPoints");
  const playerPoints = document.querySelector(".playerPoints");
  const options = document.querySelectorAll(".choicess img");

  const msg = document.getElementById("msg");

  options.forEach((options) => {
    options.addEventListener("click", () => {
      computer.classList.add("shakeComputer");
      player.classList.add("shakePlayer");

      setTimeout(() => {
        computer.classList.remove("shakeComputer");
        player.classList.remove("shakePlayer");

        const choicess = ["stone", "paper", "scissors"];
        const arrayNo = Math.floor(Math.random() * 3);
        const computerChoice = choicess[arrayNo];
        const playerChoice = options.id;

        player.src = "./" + playerChoice + "Player.png";
        computer.src = "./" + computerChoice + "Computer.png";



        if (playerChoice === computerChoice) {
          msg.innerText = "Game was Draw. Play again.";
          msg.style.backgroundColor = "#081b31";
        } else {
          const winCondition =
            (playerChoice === "stone" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "stone") ||
            (playerChoice === "scissors" && computerChoice === "paper");

          if (winCondition) {
            playerPoints.innerHTML = parseInt(playerPoints.innerHTML) + 1;
            msg.style.backgroundColor = "green";
            msg.innerText = `You Win! Your ${playerChoice} beats ${computerChoice}`;
          } else {
            computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1;
            msg.style.backgroundColor = "red";
            msg.innerText = `You lost. ${computerChoice} beats your ${playerChoice}`;
          }
        }
      }, 900);
    });
  });
});