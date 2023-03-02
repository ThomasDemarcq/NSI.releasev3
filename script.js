var pattern = ['N', 'E', 'R', 'D',];
var current = 0;

var keyHandler = function (event) {

	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current) {
		current = 0;
		window.alert('We do a little bit of trolling')
    play();
	}

};

document.addEventListener('keydown', keyHandler, false);

function play(){
  var audio = new Audio('audio.mp3.mp3');
  audio.play()
}