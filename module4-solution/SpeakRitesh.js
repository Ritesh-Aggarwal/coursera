
(function (window){
var helloSpeaker= {};
var speakWord = "Ritesh";
	helloSpeaker.speak = function(name){
		console.log(speakWord + " " + name);
	

};
window.helloSpeaker=helloSpeaker;
})(window);
