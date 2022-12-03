const questions = [
    {
        question: 'Trouble falling or staying asleep, or sleeping too much',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Feeling tired/having little to no energy',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Overeating / undereating',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Little to no interest/pleasure in doing things that you usually like doing',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Feeling hopeless, down or miserable',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Thoughts of hurting yourself or others / thoughts that you would be better off' +
            ' dead, or' +
            ' of hurting' +
            ' yourself',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Trouble concentrating on things, such as reading or watching television',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Feeling bad about yourself, feeling that you are a failure or' +
            ' feeling that you have let yourself or your family down',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'Moving or speaking slowly enough that you or others could have' +
            ' noticed / the opposite - being fidgety or restless enough that you or others' +
            ' could have noticed that you have been moving' +
            ' around a lot more than usual',
        answers: {
            1: 'Not at all',
            2: 'Several days',
            3: 'More than half the days',
            4: 'Nearly Every day'
        }
    },
    {
        question: 'If you checked off anything other than not at all, how difficult' +
            ' have these problems' +
            ' made it for you at work, home, or with other people?',
        answers: {
            1: 'Not difficult at all',
            2: 'Somewhat difficult',
            3: 'Very difficult',
            4: 'Extremely difficult'
        }
    },
];

let quizContainer = document.getElementById("depressionQuiz");
const submitButton = document.getElementById("depressionSubmit");

// generateQuiz(questions, quizContainer, submitButton);
showQuestions(questions, quizContainer);


function showQuestions(questions, quizContainer) {
    let output = [];
    for (let i = 0; i < questions.length; i++) {
        let answers = [];
       // quizContainer.innerHTML += '<div class="question">' + questions[i].question + '</div>';
        for(let number in questions[i].answers){
            answers.push(
                '<label>' +
                '<input type="radio" name="question' + i + '" value="' + number + '"> ' +
                  questions[i].answers[number] +
                '</label>'
            )
        }
        
        // add this question and its answers to the output
         output.push(
             '<div class="question">' + questions[i].question + '</div>'
             + '<div class="answers">' + answers.join('') + '</div>'
         );
    }
    quizContainer.innerHTML = output.join('');
    // finally combine our output list into one string of html and put it on the page
    //quizContainer.innerHTML = output.join('');
}

function generateQuiz(questions, quizContainer, submitButton){
    showQuestions(questions, quizContainer);
}