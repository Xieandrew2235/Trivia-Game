var panel = $('#quiz-area');
var countStartNumber = 30;

$(document).on('click', '#start-over', function(e) {
  game.reset();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
  game.loadQuestion();
});

var questions = [{
  question: "Who is the all-time leader in career home runs?",
  answers: ["Ken Griffey Jr.", "Barry Bonds", "Hank Aaron", "Babe Ruth"],
  correctAnswer: "Barry Bonds",
  image:"assets/images/bonds.gif"
}, 

];




