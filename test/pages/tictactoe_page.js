class TicTacToePage {

    //defining getters for selectors
    get iframe () { return $('#result'); }
    get input () { return $('#number') }
    get startBtn () { return $('#start') }
    get table () { return $('#table') }
    get endgameModal () { return $('#endgame') }

    //open the codepen page and switch into the iframe
    async open () {
        await browser.url('https://codepen.io/CalendlyQA/pen/KKPQLmV');
        await browser.switchToFrame(await this.iframe);
    }

    //function to input a number and generate the board which also confirms it is displayed
    async createBoard (boardSize) {
        await this.input.setValue(boardSize);
        await this.startBtn.click();
        await expect(await this.table).toBeDisplayed();
    }

    //easily click all the cells
    async clickAllCells (boardSize) {
        for (let i=0; i < boardSize*boardSize; i++){
            await $(`[id="${i}"]`).click();
        };
    }
}

module.exports = new TicTacToePage();
