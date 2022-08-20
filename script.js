var question=[{
    question:"What is the baby of a moth known as?",
    choices:["bany","infant","kit","larva"],
    correctAnswer:3
},
{
    question:"What is the adult of a kid called?",
    choices:["calf","doe","goat","chick"],
    correctAnswer:2
}
];
 var currentQuestion=0;
 var correctAnswer=0;
 var quizOver=false;
 $(document).ready(function() {
    displayCurrentQuestion();
        $(this).find(".quizMessage").hide();
        $(this).find(".nextButton").on("click",function(){
            if(!quizOver)
            {
                value=$("input[type='radio']:checked").val();
                if(value==undefined){
                    $(document).find(".quizMessage").text("please select an answer");
                    $(document).find(".quizMessage").show();
                }
                else{
                    $(document).find(".quizMessage").hide();
                    if(value==questions[currentQuestion].correctAnswer)
                    {
                        correctAnswer++;
                    }
                    currentQuestion++;
                    if(currentQuestion<question.length){
                        displayCurrentQuestion();
                    } 
                    else{
                        displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver=true;
                }
               
            }
        }
        else {
            quizOver = false;
            // displayScore();
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
 });
 function displayCurrentQuestion(){
    console.log("In display current question");
    var question=questions[currentQuestion].question;
    var questionClass=$(document).find(".quizContainer>.question");
    var choiceList=$(document).find(".quizContainer>.choiceList");
    var numChoice=questions[currentQuestion].choices.length;
    $(questionClass).text(question);
    $(choiceList).find("li").remove();
    var choice;
    for(i=0;i<numChoice;i++){
        choice=questions[currentQuestion].choices[i];
        $('<li><input type="radio" value='+i+'name="dynradio" />'+choice+'</li>').appendTo(choiceList);
    }
 }
 function resetQuiz(){
    currentQuestion=0;
    correctAnswer=0;
    hideScore();
 }
 function displayScore(){
    $(document).find("quizContainer>.result").text("You scored:"+correctAnswer+ "out of:" +questions.length);
    $(document).find(".quizContainer>.result").show();
 }
 function hideScore(){
 $(document).find(".result").hide();}
