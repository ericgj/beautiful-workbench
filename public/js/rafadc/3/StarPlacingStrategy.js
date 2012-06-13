var StarPlacingStrategy = {
  margin:3,
  wordsAdded:[],

  getNewPositionsFor:function (textBox) {
    var bBox = textBox.getBBox();
    var positions = [];
    positions.push({position:[bBox.x , bBox.y], direction:[-1 , -1]});
    positions.push({position:[bBox.x2 , bBox.y], direction:[1 , -1]});
    positions.push({position:[bBox.x , bBox.y2], direction:[-1 , 1]});
    positions.push({position:[bBox.x2 , bBox.y2], direction:[1 , 1]});
    return positions;
  },

  placeInRandomPosition:function (positions, text, scaleFactor) {
    var textIsIncorrectlyPlaced = true;
    while (positions.length > 0 && textIsIncorrectlyPlaced) {
      var randomNumber = Math.floor(Math.random() * positions.length);
      var valueToPick = positions[randomNumber];
      positions.splice(randomNumber, 1);
      var positionToBeMoved = [valueToPick.position[0] + this.margin + text.getBBox().width / 2 * valueToPick.direction[0], valueToPick.position[1] + this.margin + text.getBBox().height / 2 * valueToPick.direction[1]];
      this.moveTextToPosition(text, positionToBeMoved, scaleFactor);
      textIsIncorrectlyPlaced = this.textCollidesWithAlreadyAddedText(text);
    }
    this.wordsAdded.push(text);
  },

  moveTextToPosition:function (text, positionToDraw, scaleFactor) {
    text.transform("T" + positionToDraw[0] + "," + positionToDraw[1] + "S" + scaleFactor);
  },

  textCollidesWithAlreadyAddedText:function (text) {
    for (var i = 0; i < this.wordsAdded.length; i++) {
      if (Raphael.isBBoxIntersect(text.getBBox(), this.wordsAdded[i].getBBox())) {
        return true;
      }
    }
    return false;
  }

}