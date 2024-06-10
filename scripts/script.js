let currentQuestion = 0;
let correctAnswers = 0;

showQuestions();//incs

//event
document.querySelector('.scoreArea button').addEventListener('click', reset)

//functions
function showQuestions(){
    if(questions[currentQuestion]){
        let quest = questions[currentQuestion];

        let conf = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${conf}%`

            document.querySelector('.scoreArea').style.display = 'none';
            document.querySelector('.questionArea').style.display = 'block';
            document.querySelector('.question').innerHTML = quest.question;
            document.querySelector('.options').innerHTML = '';

            let optionsHtml = '';
                for(let y in quest.options){
                    optionsHtml += `<div data-op="${y}" class="option"><span>${parseInt(y)+1}</span>${quest.options[y]}</div>`;
                }
                document.querySelector('.options').innerHTML = optionsHtml;

                document.querySelectorAll('.options .option').forEach(item =>{
                    item.addEventListener('click', optionClickEvent);
                });
    }else{
        finished();
    }
}

function optionClickEvent(v){
    let verifyOption = parseInt(v.target.getAttribute('data-op'));
    
    if(questions[currentQuestion].answer === verifyOption){
        correctAnswers++ ;
    }
    currentQuestion++;
    showQuestions();
}

function finished (){
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if(points < 40){
        document.querySelector('.prizeImage').src = 'assets/pngegg.png'
        document.querySelector('.scoreText1').innerHTML ='Tá Complicado Hein?'
        document.querySelector('.scorePct').style.color = '#FF0000'
    }else if(points >= 40 && points < 70){
        document.querySelector('.prizeImage').src = 'assets/pngegg2.png'
        document.querySelector('.scoreText1').innerHTML ='Da Pra Melhorar'
        document.querySelector('.scorePct').style.color = '#FFD700'
    }else  if (points >= 70){
        document.querySelector('.scoreText1').innerHTML ='PARABÉNS'
        document.querySelector('.scorePct').style.color = '#7CFC00'
    }


    document.querySelector('.scorePct').innerHTML = `ACERTOU ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Voce acertou ${correctAnswers} de ${questions.length} questões`

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';

}

function reset (){
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestions();
}