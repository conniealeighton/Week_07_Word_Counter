const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function(){

};

WordCounter.prototype.broadcast = function(){
  PubSub.subscribe('InputView:word-inputted', (event) => {
    const inputtedWord = event.detail;
    const result = this.wordCountFunction(inputtedWord);
    PubSub.publish('wordCountFunction:result', result)
  })
};

WordCounter.prototype.wordCountFunction = function(string){
  return string.split(" ").length
}

module.exports = WordCounter;
