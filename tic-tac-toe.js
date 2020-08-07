window.addEventListener("DOMContentLoaded", event => {
    const imgX = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';
    const imgO = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg';
    let currentImg = null;
    const board = document.getElementById('tic-tac-toe-board')
    let count = localStorage.getItem('count1');
    const banner = document.getElementById('banner');
    let arr = [];
    
    for (let n = 0; n < 9; n++) {
        arr[n] = localStorage.getItem(n);
        let square = document.getElementById(`square-${n}`);
        if (arr[n] < 0) {
            square.innerHTML = `<img src="${imgX}"></img>`;
            square.setAttribute('style', 'opacity: 1; background-color: white;');
        } else if (arr[n] > 0) {
            square.innerHTML = `<img src="${imgO}"></img>`;
            square.setAttribute('style', 'opacity: 1; background-color: white;');
        }
    }
    
    const newGameBTN = document.getElementById('new-game');
    newGameBTN.disabled = true;
    newGameBTN.addEventListener('click', (event) => {
        window.localStorage.clear();
        location.reload();
    });

    const quitGameBtn = document.getElementById("give-up");
    quitGameBtn.addEventListener("click", (event) => {
        if (count % 2 === 0) {
            banner.innerHTML = '<h1>O IS THE WINNER!!!</h1>';
        }
        if (count % 2 === 1) {
            banner.innerHTML = '<h1>X IS THE WINNER!!!</h1>';
        }
        quitGameBtn.disabled = true;
        newGameBTN.removeAttribute('disabled');
    });

    board.addEventListener('click', (e) => {
        let target = document.getElementById(e.target.id);
        let splitId = target.id.split('');
        let key = splitId[7];
        ++count;
        
        if (count % 2 === 1) {
            currentImg = `<img src="${imgX}"></img>`;
            arr[key] = -1;
            localStorage.setItem(key, -1);
            localStorage.setItem('count1', count);
            winCheck(arr);
            
        } else if (count % 2 === 0) {
            currentImg = `<img src="${imgO}"></img>`;
            arr[key] = 1;
            localStorage.setItem(key, 1);
            localStorage.setItem('count1', count);
            winCheck(arr);
        }
        target.innerHTML = currentImg;
        target.setAttribute('style', 'opacity: 1; background-color: white;');
    });
    
    function winCheck(arr) {
      let rowWin = 0;
      let columnWin = 0;
      let diagNWSE = arr[0] + arr[4] + arr[8];
      let diagNESW = arr[2] + arr[4] + arr[6];

        if (diagNWSE===-3) { banner.innerHTML = '<h1>X IS THE WINNER!!!</h1>';
            quitGameBtn.disabled = true;
            newGameBTN.removeAttribute('disabled');
        };

        if (diagNWSE===3) { banner.innerHTML = '<h1>O IS THE WINNER!!!</h1>';
            quitGameBtn.disabled = true;
            newGameBTN.removeAttribute('disabled');
        }

        if (diagNESW===-3) {banner.innerHTML = '<h1>X IS THE WINNER!!!</h1>';
            quitGameBtn.disabled = true;
            newGameBTN.removeAttribute('disabled');
        }

        if (diagNESW===3) {banner.innerHTML = '<h1>O IS THE WINNER!!!</h1>';
            quitGameBtn.disabled = true;
            newGameBTN.removeAttribute('disabled');
        }

        for (let x = 0; x < 9; x += 3) {
          rowWin = arr[x] + arr[x + 1] + arr[x + 2];

            if (rowWin===-3) { 
                banner.innerHTML = '<h1>X IS THE WINNER!!!</h1>';
                quitGameBtn.disabled = true;
                newGameBTN.removeAttribute('disabled');
            }

            if (rowWin===3) { 
                banner.innerHTML = '<h1>O IS THE WINNER!!!</h1>';
                quitGameBtn.disabled = true;
                newGameBTN.removeAttribute('disabled');
            }
        };
            
        for (let y=0; y<3; y++) {
            columnWin = arr[y] + arr[y+3] + arr[y+6];

            if (columnWin===-3) {
                banner.innerHTML = '<h1>X IS THE WINNER!!!</h1>';
                quitGameBtn.disabled = true;
                newGameBTN.removeAttribute('disabled');
            }

            if (columnWin===3) {
                banner.innerHTML = '<h1>O IS THE WINNER!!!</h1>';
                quitGameBtn.disabled = true;
                newGameBTN.removeAttribute('disabled');
            }
        };
    
        if (count === 9) {
                banner.innerHTML = '<h1>TIE!!!</h1>';
                newGameBTN.removeAttribute('disabled');
                quitGameBtn.disabled = true;
        };
    };

});