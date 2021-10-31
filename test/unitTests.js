const assert = require('chai').assert;
const expect = require('chai').expect;
const tictactoe = require('../tictactoe.js');

describe('testing tic tac toe functions', function(){

    it('should generate a board and return an array', function(){
        const board = tictactoe.generateBoard(3);
        expect(board).to.be.an("array");
        expect(board).to.eql([[null, null, null],[null, null, null],[null, null, null]]);
    });

    it('should return true if winner', function(){
        const winningArray = [['X', 'X', 'X'],[null, null, null],[null, null, null]];
        const winningBoard = tictactoe.checkWin(winningArray);
        expect(winningBoard).to.be.true;
    });

    it('should return false if no winner', function(){
        const unfinishedArray = [['O', 'X', 'X'],[null, null, null],[null, null, null]];
        const unfinishedBoard = tictactoe.checkWin(unfinishedArray);
        expect(unfinishedBoard).to.be.false;
    });

    /* these tests will fail, but just writing them as an example for catching errors through validation that should exist*/
    //ideally a test would be written such as this to catch validation issues with the input
    it('should thrown an error when no input', function(){
       expect(()=>tictactoe.generateBoard(null)).to.throw('Sorry you must input a number between 3 and 10');
     });

     //ideally a test would be written such as this to catch boundary issues with the input
     it('should throw an error when input is too small', function(){
         expect(()=>tictactoe.generateBoard(1)).to.throw('Sorry you must input a number between 3 and 10');
      });

     //ideally a test would be written such as this to catch boundary issues with the input
      it('should thrown an error when input is too large', function(){
         expect(()=>tictactoe.generateBoard(100)).to.throw('Sorry you must input a number between 3 and 10');
    });

});