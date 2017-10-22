
////////---------------

//MOUNTAIN THEMED TRIVIA. solidified content.

/////-----------------

//TO DO
	
	// !!!set timer!!!

	//one page with displaying "start" button and some text about the game

	// initiate setInterval timer, make question divs visible and hide "start" button

	// modal 
		// display answers
		// allow reset/replay buttons



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

//---------------------------------
//Variables
console.log("Hi I'm here");

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

//timer variables
var number = 90;

var intervalId;





//----- Main Processes
document.getElementById("donzo").onclick = function(){
      answerLogging();
}

//jeopardy class hides before start and on done
document.getElementById("start").onclick = function(){
	countDown();
};



//---------------------------------
//Functions
//look at this if/else with nested if/else
// research ways to abstract this further 
function answerLogging(){


	//timer

	stop();

	// 
	//question correct/incorrect parameters

	//question one
	var firstAnswer = $("#q1 .btn.active").text().trim();
	console.log(firstAnswer);
	if (firstAnswer){
		if (firstAnswer === "Fourteen"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
		// unanswered
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 2
	var secondAnswer = $("#q2 .btn.active").text().trim();
	console.log(secondAnswer);
	if (secondAnswer){
		if (secondAnswer === "Annapurna"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 3
	var thirdAnswer = $("#q3 .btn.active").text().trim();
	console.log(thirdAnswer);
	if (thirdAnswer){
		if (thirdAnswer === "Prominence"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 4
	var fourthAnswer = $("#q4 .btn.active").text().trim();
	console.log(fourthAnswer);
	if (fourthAnswer){
		if (fourthAnswer === "Mt. Whitney"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 5
	var fifthAnswer = $("#q5 .btn.active").text().trim();
	console.log(fifthAnswer);
	if (fifthAnswer){
		if (fifthAnswer === "Kilimanjaro"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 6
	var sixthAnswer = $("#q6 .btn.active").text().trim();
	console.log(sixthAnswer);
	if (sixthAnswer){
		if (sixthAnswer === "None"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 7
	var seventhAnswer = $("#q7 .btn.active").text().trim();
	console.log(seventhAnswer);
	if (seventhAnswer){
		if (seventhAnswer === "Reinhold Messner"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};
	//question 8
	var eighthAnswer = $("#q8 .btn.active").text().trim();
	console.log(eighthAnswer);
	if (eighthAnswer){
		if (eighthAnswer === "Olympus Mons"){
			correctAnswers++;
		console.log(correctAnswers);
		} else {
			wrongAnswers++;
		console.log(wrongAnswers);

		}
	} else{
		unAnswered++;
		console.log(unAnswered);
	};

	//temporary answer display
	alert("Unanswered= " + unAnswered + " Correct Answers= " + correctAnswers + " Wrong Answers= " + wrongAnswers);



	
	//reset variable values so if "done" is clicked again, it will start anew instead of adding values together.
	unAnswered = 0;
	correctAnswers = 0;
	wrongAnswers = 0;

	// reset timer

	$("#timer").text("00");

	//end of answerLogging()

	};


// function called on "start" click
	function countDown(){
		$(".for-hiding").removeAttr('hidden');

		$(".start-btn").attr("hidden","true");

		$("#timer").text("90");

		run();

	
 };



	// decrement timer


	// var number = 90;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    // var intervalId;

    //  When the stop button gets clicked, run the stop function.
    

    //  When the resume button gets clicked, execute the run function.
    // $("#start").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h1>" + number + "</h1>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        answerLogging();

      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }


   

	


