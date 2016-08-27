var correctAnswer = 0;
var wrongAnswer = 0;
var askedQuestionNum = [];
var choiceIndex = [];
var triviaEntry = [
	{
		question:"Which famous American musician was fatally shot by his father on April 1, 1984?",
		answer: "Marvin Gaye",
		wrong1: "Elvis Presley",
		wrong2: "Otis Redding",
		wrong3: "Janis Joplin",
	},

	{
		question:"Who was the lead singer of the band Audioslave?",
		answer: "Chris Cornell",
		wrong1: "Scott Weiland",
		wrong2: "Eddie Vedder",
		wrong3: "Scott Stapp"
	},
	
	{
		question:"What was the name of Michael Jackson's first solo album as an adult?",
		answer: "Off The Wall",
		wrong1: "Thriller",
		wrong2: "Got to Be There",
		wrong3: "Dangerous"
	},

	{
		question:"In what year did Paul McCartney announce he was quitting the Beatles?",
		answer: "1970",
		wrong1: "1968",
		wrong2: "1969",
		wrong3: "1971"
	},

	{
		question:"Who was the lead singer for the rock and roll band \"The Crickets\"?",
		answer: "Buddy Holly",
		wrong1: "Eddie Cochran",
		wrong2: "Jerry Lee Lewis",
		wrong3: "Little Richard"
	},

	{
		question:"ABBA was a pop group from what country?",
		answer: "Sweden",
		wrong1: "Norway",
		wrong2: "Finland",
		wrong3: "Germany"
	},

	{
		question:"What was the first music video played on MTV?",
		answer: "Video Killed the Radio Star - The Buggles",
		wrong1: "You Better Run - Pat Benatar",
		wrong2: "You Better You Bet - The Who",
		wrong3: "She Won't Dance with Me - Rod Stewart"
	},

	{
		question:"Which band sang the hit \"Hey There Delilah\", which reached No. 1 on the Billboard Hot 100 in 2007?",
		answer: "Plain White T's",
		wrong1: "Fall Out Boy",
		wrong2: "Bowling for Soup",
		wrong3: "Jimmy Eat World"
	},

	{
		question:"In 1967, what band released the hit song \"Ruby Tuesday\"?",
		answer: "The Rolling Stones",
		wrong1: "Cream",
		wrong2: "Queen",
		wrong3: "Bob Dylan"
	},

	{
		question:"The fans of Lady Gaga are known as what?",
		answer: "Little Monsters",
		wrong1: "Swifties",
		wrong2: "Juggalos",
		wrong3: "Trekkies"
	},
];

function questionGenerator() {
var randIndex = Math.floor(Math.random()*triviaEntry.length);

$('#questionArea').html(triviaEntry[randIndex].question + "<hr>");
$('#answerArea').append('<form action="">');
$('#answerArea').append("<input type='radio' name='playerChoice' value='correct'> "+ triviaEntry[randIndex].answer +"<br>");
$('#answerArea').append("<input type='radio' name='playerChoice' value='wrong'> "+ triviaEntry[randIndex].wrong1 + "<br>");
$('#answerArea').append("<input type='radio' name='playerChoice' value='wrong'> "+ triviaEntry[randIndex].wrong2 + "<br>");
$('#answerArea').append("<input type='radio' name='playerChoice' value='wrong'> "+ triviaEntry[randIndex].wrong3 + "<br>");
$('#answerArea').append("<input type=\"submit\" id='submitButton' value='Submit'>");
$('#answerArea').append('</form>');
$('#submitButton').click(function(){
	alert("The button is clicked")
	if (value=='correct'){
		correctAnswer++;
		console.log(correctAnswer);
		alert("Right Answer")
	}

	else{
		wrongAnswer++;
		console.log(wrongAnswer);
		alert("Wrong Answer");
	}
});

askedQuestionNum.push(randIndex);
console.log(askedQuestionNum);
console.log(randIndex);
}

questionGenerator();
