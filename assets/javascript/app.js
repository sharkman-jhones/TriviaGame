var triviaEntry = [
	{
		question:"Which famous American musician was fatally shot by his father on April 1, 1984?",
		answer: "Marvin Gaye",
		wrong1: "Elvis Presley",
		wrong2: "Otis Redding",
		wrong3: "Janis Joplin"},
	{

	}
];


$('#questionArea').html(triviaEntry[0].question +"<hr>");
$('#answerArea').append(triviaEntry[0].answer + "<br>");
$('#answerArea').append(triviaEntry[0].wrong1 + "<br>");
$('#answerArea').append(triviaEntry[0].wrong2 + "<br>");
$('#answerArea').append(triviaEntry[0].wrong3);