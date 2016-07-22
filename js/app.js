$(document).ready(function(){

	var gameNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	

	$('form').submit(function() {

	/*--- Validate input  ---*/
		var x = $('#userGuess').val();
		if (x<1 || x>100 || parseInt(x) != x) {
			alert ("Guess a number from 1 to 100")
				return false;}

	/*--- Check if Number has been Guessed ---*/
		if ( x == $(this).parent().find('li:contains(x)')) {
			alert ("Number already guessed");
				return false;};


	/*--- Counting the number of guesses ---*/
		var guessCount = parseInt($('#count').html());
		var guessCount = guessCount + 1;
		$(this).parent().find('#count').text(guessCount);


	/*--- Guesses and Feedback ---*/
		var diff = Math.abs(gameNumber - x);
			if (diff == 0) {
				$(this).parent().find('#feedback').html('Ding ding!');}

			else if (diff <= 10) {
				$(this).parent().find('#feedback').html('Very Hot');}

			else if (diff > 10 && diff <= 20) {
				$(this).parent().find('#feedback').html('Hot');}

			else if (diff > 20 && diff <= 30) {
				$(this).parent().find('#feedback').html('Warmer');}

			else if (diff > 30 && diff <= 45) {
				$(this).parent().find('#feedback').html('Cooler');}

			else if (diff > 45 && diff <= 60) {
				$(this).parent().find('#feedback').html('Cold');}

			else if (diff > 60 && diff <= 99) {
				$(this).parent().find('#feedback').html('Very Cold');}

	/*--- List Guessed Numbers ---*/
		$(this).parent().find('#guessList').append('<li>' + x + '</li>');


		event.preventDefault();
		$('#userGuess').val('');
	});


	$('body').on('click', '.new', function() {
		location.reload();});

})


