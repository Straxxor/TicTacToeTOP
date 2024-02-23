// Factory Function for generating players.
// To be used later so that the player can
// use his name and pick his symbol.

function makePlayer(name, symbol) {
    return {
        name,
        symbol
    };
};

const currentPlayer = makePlayer("Strahinja", "X");
const FriendPlayer = makePlayer("Friend", "O");



// IIFE Module, used for game setting and logic.

const gameBoard = (() => {
    let board = Array(9).fill(null);

    
    const isBoardFull = () => {
        return !board.includes(null);
    };
    

    const makeMove = (index, symbol) => {
        if (board[index] === null) {
            board[index] = symbol;
            return true; // field was empty - move done
        }
        return false // field wasn't empty - move not done
    };
    

    // Resets the board.
    
    const resetBoard = () => {
        board = Array(9).fill(null);
        
    };
    

    // Renders the board to console.
    
    const displayBoard = () => {
        console.log(board);
    };
    

    //logic for checking winner

    const checkWinner = () => {
        
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
                console.log("Winner winner chicken dinner!");
                return board[a];
            };
        };

        return null;
    };


    // Makes all the functions available(now called "methods"
    // because they are stored in an object.)

    return {
        checkWinner,
        isBoardFull,
        makeMove,
        resetBoard,
        displayBoard,
    };
    

})();
