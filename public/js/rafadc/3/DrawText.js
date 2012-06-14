var WordDrawing = {
  canvas:undefined,
  wordsToSelect:20,
  maxWordSize:6,

  drawWords:function (text) {
    this.clearCanvas();
    var words = TextSplitter.split(text).filter(this.wordFilter).slice(0, this.wordsToSelect);
    console.log("Words found");
    console.log(words);
    words = this.normalizeSize(words);

    var validPositions = [this.getInitialPosition()];

    for (var i = 0; i < words.length; i++) {
      var text = this.canvas.text(0, 0, (words[i])[0]);
      var scaleFactor = (words[i])[1];
      StarPlacingStrategy.placeInRandomPosition(validPositions, text, scaleFactor);
      validPositions = validPositions.concat(StarPlacingStrategy.getNewPositionsFor(text));
    }
  },


  clearCanvas:function () {
    this.wordsAdded = [];
    if (this.canvas == undefined) {
      console.log("A");
      this.canvas = Raphael("drawContainer", 800, 600);
    } else {
      console.log("B");
      this.canvas.clear();
    }
  },

  wordFilter:function (word) {
    return word[0].length > 3;
  },

  normalizeSize:function (words) {
    var biggestWordSize = (words[0])[1];
    return words.map(this.maxSizeFunctionForSize(this.maxWordSize, biggestWordSize));
  },

  maxSizeFunctionForSize:function(maxSize, biggestWordSize) {
    return function (word) {
      return [word[0], word[1] * maxSize / biggestWordSize];
    }
  },

  getInitialPosition: function() {
    var canvas = this.canvas;
    return {position:[canvas.width / 2, canvas.height / 2], direction:[1, 1]};
  }
}