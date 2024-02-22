function makePlayer(name, symbol) {
    return {
        name,
        symbol
    };
};

const gameBoard = (() => {
    let board = Array(9).fill(null);

    const checkWinner = () => {
        //logic for checking winner
    };

    const isBoardFull = () => {
        return !board.includes(null);
    };

    const makeMove = (index, symbol) => {
        if (board[index] === null) {
            board[index] = symbol;
            return true; //field was empty
        }
        return false //field wasn't empty
    };

    const resetBoard = () => {
        board = Array(9).fill(null);
        
    };
    
    const displayBoard = () => {
        console.log(board);
    };

    return {
        checkWinner,
        isBoardFull,
        makeMove,
        resetBoard,
        displayBoard,
    };
    

})();
