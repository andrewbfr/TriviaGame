
////////---------------

//MOUNTAIN THEMED TRIVIA. solidified content.

/////-----------------




//-------------- *Conditions of Game for Successful Grading* ------
//*Countdown starts when "start" button is pressed
//*You can only select one answer at a time
//*End of timer --OR-- clicking "done"/"finish" will pass answers into answer check/roundup/whatever final tally
//*End of timer/etc. will also take to new page with the roundup/tally displayed
//*Have a "restart" or "play again" button to do the questions over again on this tally page
//*


//PSEUDO CODING ARHHDS-------------
// A start button that loads the trivia question object (with answers included in it)
// Start button also has to start the timer that delivers some amount of 
//milliseconds to finish guessing all of the questions

// Should the Start button load a "new .html page?" Such that, there is an index.html
// and a quesiton.html that is retrieved?

// "hard" or "advanced" game offers new pages for each question and starts a 
// new time with each page/question load

// questions are created in new divs, etc upon the click of "start" button.
// new divs for questions may not be necessary, can practice creating multiple
//

// so, in this way, the hard coding isn't in the HTML file but rather, in JS. 
// this is a little more interesting..

// need to find a way to keep track of which answers are "correct" and which
// are "wrong", the data-attribute covered in class might be a useful option

// some class designation, data attribute or something that isn't directly
// on the visual presentation (even if it's visible in the console). I know this will 
// provide answers to someone who looks at the Sources in an Inspector/Debugger

//an on click event listener, where if button with correct answer 
//class is pressed then add a tally, and else tally the incorrect 
//answer group

//on button clicks, have the correct answers add an index position to a 
// variable, the incorrect answers will do the same to a different variable
// use "this" to refer to on.click buttons
// populate variables with .push
// the onclick event in each "correct" and "incorrect" answer will populate (i++) the relevant
// variable, the "finish" button (new idea as of this comment) will tally all of these and 
// .text display them in the div which displays correct answers
// "start" button will add or clear the hidden/visible attribute given to the question and answer divs
// "done" button will add or clear the same attribute, such that the questions are no longer visible and the answer tally now is
// "replay" button will again add or clear the attribute to the tally page and open visibility to the question divs
// correctAnsers.length and same for wrong will deliver the number of correct answers to display in the final tally
// 
//DOM Manipulation

 //  alert("You have chosen "+$(this).text().trim()+" "+ $(this).val()+ " " + $(this).attr('value'));
	// }



	// add a modal box later

//so difficult to start
//---------------------------------
//Variables
console.log("Hi I'm here");

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;




//---------------------------------
//Functions


//put on click on the global scale, use it to call the answer logging function

$('label').click(function() {
		console.log("heh");

});

//try to collect the "value" or the status of the radio buttons with jquery and push them into some variable that can be recalled and checked against with the "done" button when it is clicked.

	// if (button has value of "cheese") push a 1 to correctAnswers
function answerLogging(){

	console.log("heh");
	var popcornAnswer = $(".answer .btn.active").text().trim();

	console.log(popcornAnswer);
	


	// $('input[type="radio"]:checked').each(function(i,v){ 
	// 	values.push($(v).val()); 
	// });

	// if (this.val() === 'cheese') {
	// 	correctAnswers = correctAnswers + 1;
	// }


	// // else (button has value of "jest") push a 1 to wrongAnswers

	// 	else {
	// 		wrongAnswers = wrongAnswers + 1;
	// 	}


};

console.log(correctAnswers);

console.log(wrongAnswers);

console.log(unAnswered);





//---------------------------------
//Main Processes