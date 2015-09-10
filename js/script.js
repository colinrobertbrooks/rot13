//document ready functions
$( document ).ready(function() {
  //set default string
  $('#string-input').val('fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr');
});


//input and reset functions
function validatInput () {
    var input =$('#string-input').val();
    if( /^[a-z ]*$/i.test( input )) {
      rot13();
    } else {
      alert('Please limit your string to letters and spaces!');
    }
 }

function reset () {
  $('#input-container').css('display','block');
  $('#result-container').css('display','none');
  $('#string-input')
    .val('')
    .focus();
}


//rot13 functions
function rot13 () {
  //apply rot13 algorithm
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var inStringArr = $('#string-input').val().toLowerCase().split(' ');
  var outStringArr = [];
  inStringArr.forEach(function(word, i){
    var newLetters = [];
    word.split('').forEach(function(letter, i){
      var wordAlphaIndex = alphabet.indexOf(letter);
      var alphabetShift = alphabet.slice(wordAlphaIndex).concat(alphabet.slice(0, wordAlphaIndex));
      newLetters.push(alphabetShift[13]);
    });
    outStringArr.push(newLetters.join(''));
  });
  //return result to page
  $('#input-container').css('display','none');
  $('#result-container').css('display','block');
  $('#result').text(outStringArr.join(' '));
}


//helper functions
function replaceAll (find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}
