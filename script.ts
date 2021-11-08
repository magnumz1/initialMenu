const PopUp = {
    GameMenu: {
        pop: document.getElementById('game-menu'),
        
        open(){
            PopUp.InitialMenu.close()

            PopUp.GameMenu.pop.classList.remove('not-active')
            PopUp.GameMenu.pop.classList.add('active')
        },
        
        close(id: string){
            PopUp.GameMenu.pop.classList.remove('active')
            PopUp.GameMenu.pop.classList.add('not-active')

            PopUp.InitialMenu.open()
        }
    },

    InitialMenu: {
        pop: document.getElementById('initial-menu'),

        open(){
            PopUp.InitialMenu.pop.classList.remove('not-active')
            PopUp.InitialMenu.pop.classList.add('active')
        },
        
        close(){
            PopUp.InitialMenu.pop.classList.remove('active')
            PopUp.InitialMenu.pop.classList.add('not-active')
        }
    }
}

const ButtonsHTML = {
    newGameButton: document.getElementById('new-game-button'),
    loadGameButton: document.getElementById('load-game-button'),
    returnToGameMenu: document.getElementById('returnToGameMenu')
}

ButtonsHTML.returnToGameMenu.addEventListener('click', PopUp.GameMenu.open)