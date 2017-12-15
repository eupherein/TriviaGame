    //variables    
    var currentQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var outOfTimeQuestions = 0;
    var number = 16;
    var intervalId;
    var question;
    var questionClass;
    var choiceList;
    var numChoices
    var allQuestions = [{
        question: "What was the first thing purchased through bitcoin?",
        choices: ["xbox", "pizza", "tv", "computer"],
        correctAnswer: 1,
        image: "assests/images/pizza.gif"
    },
    
    {
        question: "Who created bitcoin?",
        choices: ["Bill Gates", "Warren Buffett", "Satoshi Nakamoto", "Jamie Dimon"],
        correctAnswer: 2,
        image: "assests/images/anon.gif"
    },
    {
        question: "What was the first bitcoin marketplace?",
        choices: ["bitpay", "silk road", "amazon", "ebuy"],
        correctAnswer: 1,
        image: "assests/images/silk.gif"
    },
    {
        question: "What caused the big crash of 2013?",
        choices: ["Mt. Gox Hack", "silk Road", "Alt coin boom", "Too much mining"],
        correctAnswer: 0,
        image: "assests/images/hacker.gif"
    },
    {
        question: "What caused the most recent crash of bitcoin that was described as a 'pop'?",
        choices: ["Jamie Dimon FUD", "China's 'Initial Coin Offering' ban", "Not enough mining", "China banned everything again"],
        correctAnswer: 3,
        image: "assests/images/banned.gif"
    },
    ];
    
    //hidden button to restart game
    $("playAgain").hide();    
 
    //start button that disappears when game begins 
$("#start").click(function () {
    $("#start").hide();
    $(".question").html("<img src='assets/images/bitcoin/gif'/>");
    setTimeout(function () {
        reset();
    }, 4000);
});
    //functions
function game() {
    $(".list-group-item").click(function() {
        var value = $(".list-group-item").index(this);
            console.log(value);
            if (value === questions[currentQuestion].correct) {
                
            }
    });
    }

//timer 
function timer() {
    intervalId = setInterval(decrement, 1000);

};

function decrement() {
    $("timeLeft").html("<h3>" + number + "</h3>");
    number--;
    if (number === 0) {
        stop()
    }
}





