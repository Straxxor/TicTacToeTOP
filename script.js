
function makePlayer(name, symbol) {
    return {
        name,
        symbol
    };
};

const gameBoard = (() => {
    let board = Array(9).fill(null);
    
    const getBoard = () => board;
    
    const isBoardFull = () => {
        return !board.includes(null);
    };
    
   
    const resetBoard = () => {
        board = Array(9).fill(null);
        
    };
    
    return {

        isBoardFull,
        resetBoard,
        getBoard,
        
    };
    
    
})();

const displayController = (() => {
    const render = (board) => {
        console.log(gameBoard.getBoard().slice(0, 3));
        console.log("----------------");
        console.log(gameBoard.getBoard().slice(3, 6));
        console.log("----------------");
        console.log(gameBoard.getBoard().slice(6));
    };
    
    const clearConsole = () => {
        console.clear();
    };
    
    return {
        render,
        clearConsole
    };
})();

const gameController = (() => {
    const playerX = makePlayer("PlayerX", "X");
    const playerO = makePlayer("PlayerO", "O");
    let currentPlayer = playerX;
    let gameActive = true;
    
    const switchPlayers = () => {
        if(currentPlayer === playerX) {
            currentPlayer = playerO;
        } else {
            currentPlayer = playerX;
        };
    };

    const checkWinner = () => {
        const board = gameBoard.getBoard();
        
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for (pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
                console.log(`Winner winner chicken dinner! Congratulations ${currentPlayer.name}`);
                return board[a];
            };
        };
        
        return null;
        
    };

    const checkDraw = () => {
        const boardFull = gameBoard.isBoardFull();

        if(boardFull & checkWinner === null) {
            console.log("Draw!")
        }; 
    };

    const makeMove = (index) => {
            const board = gameBoard.getBoard();
        if (board[index] === null) {
            board[index] = currentPlayer.symbol;
            displayController.clearConsole();
            displayController.render();
            checkDraw();
            checkWinner();
            switchPlayers();
            return true; // field was empty - move done
        }
        return false // field wasn't empty - move not done
    };

    return {
        switchPlayers,
        checkWinner,
        checkDraw,
        makeMove,
    };
})();