var PopUp = {
    GameMenu: {
        pop: document.getElementById('game-menu'),
        open: function () {
            PopUp.InitialMenu.close();
            PopUp.GameMenu.pop.classList.remove('not-active');
            PopUp.GameMenu.pop.classList.add('active');
        },
        close: function (id) {
            PopUp.GameMenu.pop.classList.remove('active');
            PopUp.GameMenu.pop.classList.add('not-active');
            PopUp.InitialMenu.open();
        }
    },
    InitialMenu: {
        pop: document.getElementById('initial-menu'),
        open: function () {
            PopUp.InitialMenu.pop.classList.remove('not-active');
            PopUp.InitialMenu.pop.classList.add('active');
        },
        close: function () {
            PopUp.InitialMenu.pop.classList.remove('active');
            PopUp.InitialMenu.pop.classList.add('not-active');
        }
    }
};
var ButtonsHTML = {
    newGameButton: document.getElementById('new-game-button'),
    loadGameButton: document.getElementById('load-game-button'),
    returnToGameMenu: document.getElementById('returnToGameMenu')
};
ButtonsHTML.returnToGameMenu.addEventListener('click', PopUp.GameMenu.open);
