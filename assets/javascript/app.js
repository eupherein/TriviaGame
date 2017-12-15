//game is held here
$(document).ready(function () {
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
        $(".list-group-item").click(function () {
            var value = $(".list-group-item").index(this);
            console.log(value);
            if (value === questions[currentQuestion].correct) {
                stop();
                console.log("correct answer selected");
                correctAnswers++;
                breakTimeCorrect();
            }
            else {
                stop();
                console.log("wrong answer selected");
                incorrectAnswers++;
                breakTimeCorrect();
            };
        });
    }

    //interm screen on correct answer choice
    function breakTimeCorrect() {
        $(".timeLeft").html("Correct!");
        $(".question").html("<img src=" + questions[currentQuestion].image + "/>")
        $(".choiceList").hide();
        setTimeout(function () {
            $(".timeLeft").empty();
            $(".result").hide();
            $(".choiceList").show();
            nextQuestion();
        }, 5000);
    }

    //interm screen on incorrect answer choice
    function breakTimeIncorrect() {
        var j = questions[currentQuestion].correct;
        $(".timeLeft").html("You tried!  It's actually " + questions[currentQuestion].choices[j]);
        $(".question").html("<img src=" + questions[currentQuestion].image + "/>");
        $(".choiceList").hide();
        setTimeout(function () {
            $(".timeLeft").empty();
            $(".result").hide();
            $(".choiceList").show();
            nextQuestion();
        }, 5000);
    }

    //go onto next question until there are no more
    function nextQuestion() {
        $(".result").unbind();
        currentQuestion++;
        //if out of questions, display player score
        if (currentQuestion < 5) {
            displayScore();
        };
    };

    //scoreboard function
    function displayScore() {
        $(".timeLeft").empty();
        $(".question").html("<img src='assets/images/bitcoin.gif'/>");
        $(".choiceList").hide();
        $(".playAgain").show().click(function () {
            reset();
        });
        $(".result").html("Correct: " + correctAnswers + "<br> Incorrect: " + incorrectAnswers + "<br> Unanswered: " + outOfTimeQuestions);
        $(".result").show();
    };

    //restart game function
    function reset() {
        currentQuestion = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        outOfTimeQuestions = 0;
        number = 16;
        $(".choiceList").show();
        $(".timeLeft").show();
        $(".result").hide();
        $(".playAgain").hide();
        displayQuestion();

    }

    function displayQuestion() {
        $("#start").hide();
        //starts a 20 second timer
        timer();
        //pulls a question from the allQuestions array
        question = question[currentQuestion].question;
        console.log("current question: " + question);
        questionClass = $(".quizContainer").find("choiceList");
        numChoices = question[currentQuestion].choices.length;
        console.log("current answer: " + questions[currentQuestions].correct);

        //set questionClass to current question
        $(questionClass).html(question);

        //remove current list elements
        $(choiceList).find(".list-group-item").remove();

        var choice;
        for (i = 0; i < numChoices; i++) {
            questions[currentQuestion].choices[i];
            $("<button type='button' class='list-group-item'>" + choice + "<button>").appendTo(choiceList);
        };
    } 
game();


    //game timer 
    function timer() {
        intervalId = setInterval(decrement, 1000);

    };

    function decrement() {
        $("timeLeft").html("<h3>" + number + "</h3>");
        number--;
        if (number === 0) {
            stop()
            number = 16;
            outOfTimeQuestions++;
            console.log("out of time");
            breakTimeIncorrect();
        };
    };
    function stop() {
        clearInterval(intervalId);
        number = 16;
    };


});

