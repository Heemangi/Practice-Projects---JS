const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length;

let quesBox = document.getElementById('quesBox');
let optionInputs = document.querySelectorAll('.options')

const loadQuestion = ()=> {
    if (total === index){
        return endQuiz()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `$(index + 1) $(data.question)`

    optionInputs[0].nextElementSibling.innerText = data.a
    optionInputs[0].nextElementSibling.innerText = data.b
    optionInputs[0].nextElementSibling.innerText = data.c
    optionInputs[0].nextElementSibling.innerText = data.d

}

const submitQuiz= ()=> {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans == data.correct){
            right++;
        } else {
            wrong++;
        }
        index++;
        loadQuestion();
        return;
    }


const getAnswer = ()=> {
    let ans;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz =()=>{
    document.getElementById("box").innerHTML = `
            <h3> Hii, you've scored ${right} / ${total} </h3> `
}

loadQuestion();