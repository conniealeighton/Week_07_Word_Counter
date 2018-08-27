const PubSub = require('../helpers/pub_sub.js');

const InputView = function(){

};

InputView.prototype.publishInputtedWord = function(){
  const input = document.querySelector('#word');
  input.addEventListener('input', (event) => {
    const inputtedWord = event.target.value;
    PubSub.publish('InputView:word-inputted', inputtedWord);
  })
};

module.exports = InputView;
