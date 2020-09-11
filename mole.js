window.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let turnCount = 0;
    let startButton = document.getElementById('startGame');
    let molesRemaining = document.getElementById('molesRemaining');
    let userScore = document.getElementById('score');
    userScore.innerHTML = `Score: ${score}`;
    let moleHeads = document.querySelectorAll(".wgs__mole-head");

    startButton.addEventListener('click', (e) => {
        popUpRandomMole();
    })
    
    moleHeads.forEach(mole => {
        mole.addEventListener('click', (e) => {
            e.target.classList.add("wgs__mole-head--hidden")
            e.target.classList.add("wsg__mole-head--whacked");
            score += 1;
            userScore.innerHTML = `Score: ${score}`;
        })
    });
    
    
    function popUpRandomMole() {
        let remaining = 9 - turnCount;
        turnCount += 1;
        if (turnCount > 10) {
            window.alert(`Game Over! Score: ${score}`);
            location.reload();
        }
        molesRemaining.innerHTML = `Moles Remaining: ${remaining}`;
        let moleHeads = document.querySelectorAll(".wgs__mole-head");
        let random = Math.floor(Math.random() * 8);
        let mole = moleHeads[random];
        mole.classList.remove("wgs__mole-head--hidden");
        setTimeout(() => {
          hideMole(mole);
        }, 750);
      }

    function hideMole(mole) {
        mole.classList.add('wgs__mole-head--hidden');
        setTimeout(() => {
            popUpRandomMole();
         }, 1000);
    }
  
  });