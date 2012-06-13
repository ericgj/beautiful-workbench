var TextSplitter = {

  split:function (text) {
    var tokenSet = {};
    var splittedString = this.removeNewLines(text).split(" ");
    for (var i = 0; i < splittedString.length; i++) {
      tokenSet[splittedString[i]] = tokenSet[splittedString[i]] != undefined ? tokenSet[splittedString[i]] + 1 : 1;
    }
    return this.objectToArray(tokenSet).sort(this.sortTokenArrayFunction);
  },

  removeNewLines:function (text) {
    return text.replace("\n", " ");
  },

  objectToArray:function (object) {
    var output = [];
    for (var key in object) {
      output.push([key, object[key]]);
    }
    return output;
  },

  sortTokenArrayFunction:function (a, b) {
    return b[1] - a[1];
  }

}