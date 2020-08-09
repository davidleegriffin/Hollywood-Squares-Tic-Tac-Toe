window.addEventListener("DOMContentLoaded", event => {
    const imgX = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';
    const imgO = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg';
    let currentImg = null;
    let arr = [];
    let count = localStorage.getItem('count1');
    let gameStatus = localStorage.getItem('gameStatus');
    let winStatus = ' <h1><marquee>LETS PLAY HOLLYWOOD SQUARES!!!</marquee></h1>';

    const board = document.getElementById('tic-tac-toe-board')
    const banner = document.getElementById('banner');
    const newGameBTN = document.getElementById('new-game');
    const quitGameBtn = document.getElementById("give-up");

    quitGameBtn.addEventListener("click", (event) => {
        gameStatus = 'false';
        localStorage.setItem('gameStatus', 'false');
        if (count % 2 === 0) {
            winStatus = '<h1>O IS THE WINNER!!!</h1>';
            localStorage.setItem('winStatus', '<h1>O IS THE WINNER!!!</h1>');
            banner.innerHTML = `${winStatus}`;
        }
        if (count % 2 === 1) {
            winStatus = '<h1>X IS THE WINNER!!!</h1>';
            localStorage.setItem('winStatus', '<h1>X IS THE WINNER!!!</h1>');
            banner.innerHTML = `${winStatus}`;
        }
        quitGameBtn.disabled = true;
        newGameBTN.disabled = false;
    });

    newGameBTN.addEventListener('click', (event) => {
        window.localStorage.clear();
        location.reload();
        gameStatus = 'true';
        localStorage.setItem('gameStatus', 'true');
    });

    checkLocal();

    board.addEventListener('click', (e) => {
        if (gameStatus === 'false') return;

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

        if (diagNWSE === -3) winX();
        if (diagNWSE === 3) winO();
        if (diagNESW === -3) winX();
        if (diagNESW === 3) winO();

        for (let x = 0; x < 9; x += 3) {
            rowWin = arr[x] + arr[x + 1] + arr[x + 2];
            if (rowWin === -3) winX();
            if (rowWin === 3) winO();
        };

        for (let y = 0; y < 3; y++) {
            columnWin = arr[y] + arr[y + 3] + arr[y + 6];
            if (columnWin === -3) winX();
            if (columnWin === 3) winO();
        };

        if (count === 9) {
            newGameBTN.disabled = false;
            quitGameBtn.disabled = true;
            gameStatus = 'false';
            winStatus = '<h1>TIE!!!</h1>'
            localStorage.setItem('gameStatus', 'false');
            localStorage.setItem('winStatus', `${winStatus}`);
            banner.innerHTML = `${winStatus}`;
        };
    };

    function winX() {
        quitGameBtn.disabled = true;
        newGameBTN.disabled = false;
        gameStatus = 'false';
        winStatus = '<h1>X IS THE WINNER!!!</h1>'
        localStorage.setItem('gameStatus', 'false');
        localStorage.setItem('winStatus', `${winStatus}`);
        banner.innerHTML = `${winStatus}`;
        return;
    };

    function winO() {
        quitGameBtn.disabled = true;
        newGameBTN.disabled = false;
        gameStatus = 'false';
        winStatus = '<h1>O IS THE WINNER!!!</h1>';
        localStorage.setItem('gameStatus', 'false');
        localStorage.setItem('winStatus', `${winStatus}`);
        banner.innerHTML = `${winStatus}`;
    };

    function checkLocal() {
        for (let n = 0; n < 9; n++) {
            arr[n] = localStorage.getItem(n);
            let square = document.getElementById(`square-${n}`);

            if (gameStatus === 'true') {
                quitGameBtn.disabled = false;
                newGameBTN.disabled = true;
            } else {
                quitGameBtn.disabled = true;
                newGameBTN.disabled = false;
            };

            if (arr[n] < 0) {
                square.innerHTML = `<img src="${imgX}"></img>`;
                square.setAttribute('style', 'opacity: 1; background-color: white;');
            } else if (arr[n] > 0) {
                square.innerHTML = `<img src="${imgO}"></img>`;
                square.setAttribute('style', 'opacity: 1; background-color: white;');
            }
        };
        winCheck(arr);
        banner.innerHTML = `${winStatus}`;
        return arr;
    };
    checkLocal();
});
