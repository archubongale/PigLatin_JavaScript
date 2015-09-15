var pigLatin = function(userWord) {
  var splitAt = isVowel(userWord);
    var message = userWord.slice(splitAt) + userWord.slice(0,splitAt) + 'ay';
  return message;
};


var isVowel = function(word) {
  var vowels = ['a', 'e', 'i','o','u'];

  var splitLetter = word.split("");

  for(var i=0; i< splitLetter.length; i++){
    for(var j=0; j< vowels.length;j++) {

      if(splitLetter[i] === vowels[j]) {
        return i;
      }
    }
  }
};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {

      var userWord = $("input#userWord").val();
      var translated = pigLatin(userWord);
      $(".translated").text(translated);

      $("#result").show();

      event.preventDefault();
    });
});
