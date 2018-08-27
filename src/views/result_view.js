PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.returnWordCount = function() {
  PubSub.subscribe("wordCountFunction:result", (event) => {
    const result = event.detail;
    this.updateView(result);
  })
}

ResultView.prototype.updateView = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `Your phrase contained ${result} words`
}

module.exports = ResultView;
