const TicTacToePage = require('../pages/tictactoe_page');

describe('Tic Tac Toe Game', () => {
    it('should enter a number and generate board', async () => {
        //open the page and set the board size to pass and create board
        await TicTacToePage.open();
        const boardSize = 3;
        await TicTacToePage.createBoard(boardSize);
    });

    it('prints board with cell ids', async () => {
        await TicTacToePage.open();
        const boardSize = 3;
        await TicTacToePage.createBoard(boardSize);
        //get the last cell that the board generates and expect it to exist in the DOM
        const lastCell = $(`[id="${boardSize-1}"]`);
        await expect(lastCell).toExist();
    });

    it('fills cell with X and O when clicked', async () => {
        await TicTacToePage.open();
        const boardSize = 4;
        await TicTacToePage.createBoard(boardSize);

        //get two cells that will exist
        const cell1 = $('[id="10"]');
        const cell2 = $('[id="15"]');

        //click one first which is x and confirm then click second which is o and confirm
        await cell1.click();
        await expect(cell1).toHaveText('X');
        await cell2.click();
        await expect(cell2).toHaveText('O');
    });

    it('displays winning modal when player wins', async () => {
        await TicTacToePage.open();
        const boardSize = 3;
        await TicTacToePage.createBoard(boardSize);

        //call function to click all cells to easily end the game
        await TicTacToePage.clickAllCells(boardSize)

        //confirm the modal is displayed once there is a winner
        await expect(TicTacToePage.endgameModal).toBeDisplayed();
    });

    //this will fail, but would have a test to ensure correct player is shown winning
    it('displays correct winner in modal', async () => {
        await TicTacToePage.open();
        const boardSize = 3;
        await TicTacToePage.createBoard(boardSize);

        //x goes
        const cell1 = $('[id="0"]');
        await cell1.click();
        //o goes
        const cell2 = $('[id="1"]');
        await cell2.click();
        //x goes
        const cell3 = $('[id="3"]');
        await cell3.click();
        //o goes
        const cell4 = $('[id="4"]');
        await cell4.click();
        //x goes
        const cell5 = $('[id="6"]');
        await cell5.click();

        //confirm the modal is displayed once there is a winner and validate the correct player is in the modal
        await expect(TicTacToePage.endgameModal).toBeDisplayed();
        await expect(TicTacToePage.endgameModal).toHaveTextContaining('X');
        });

});


