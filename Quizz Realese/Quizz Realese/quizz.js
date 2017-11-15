var PerguntaAtual = 0;
var score = 0;
var TotalQuestoes = questions.length;

var container = document.getElementById('quizContainer');
var questaEl = document.getElementById('questao');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var classification = document.getElementsByClassName('classficacao');

function CarregaQuestao (questionIndex) {
	var q = questions[questionIndex];
	if(questionIndex == 3 || questionIndex == 7){
		questaEl.textContent = (questionIndex + 1) + '. ' + q.question;
		writeQuest.style.display = 'block';
		writeQuest.focus();
		quest.style.display = 'none';
		opt1.style.display = 'none';
		opt2.style.display = 'none';
		opt3.style.display = 'none';
		opt4.style.display = 'none';
		opt5.style.display = 'none';
	}
	else{
		questaEl.textContent = (questionIndex + 1) + '. ' + q.question;
		opt1.textContent = q.option1;
		opt2.textContent = q.option2;
		opt3.textContent = q.option3;
		opt4.textContent = q.option4;
		opt5.textContent = q.option5;
		writeQuest.style.display = 'none';
		quest.style.display = 'inline-block';
		opt1.style.display = 'inline-block';
		opt2.style.display = 'inline-block';
		opt3.style.display = 'inline-block';
		opt4.style.display = 'inline-block';
		opt5.style.display = 'inline-block';
	}
};

function ProximaQuestao (questionIndex) {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var wroteQuest = document.querySelector('input[type=text]');
	if(selectedOption == null && wroteQuest.value == ''){
		alert('Responda a questão!');
		return;
	}

	var answer = '';
	if(selectedOption != null){
		answer = selectedOption.value;
	}
	var answerWrote = wroteQuest.value;
	if(questions[PerguntaAtual].answer == answer || questions[PerguntaAtual].answer == answerWrote){
		score = score+100;
	}

	if(selectedOption != null){
		selectedOption.checked = false;
	}
	wroteQuest.value = '';
	PerguntaAtual++;
	if(PerguntaAtual == TotalQuestoes - 1){
		nextButton.textContent = 'Fim';
	}
	if(PerguntaAtual == TotalQuestoes){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Sua pontuação: ' + score;
		if(score < 300){
			resultCont.textContent = 'Sua pontuação:'+score+'\n\nParece que você não conhece muito sobre o assunto :(';
			resultCont.style.display = 'block';
		}
		else if(score > 300 && score < 600){
			resultCont.textContent = 'Sua pontuação:'+score+'\n\nMediano, precisa estudar um pouco mais...';
			resultCont.style.display = 'block';
		}
		else if(score > 600 && score < 900){
			resultCont.textContent = 'Sua pontuação:'+score+'\n\nParabéns, você é bastante experiente sobre o assunto!!';
			resultCont.style.display = 'block';
		}
		else if(score > 900){
			resultCont.textContent = 'Sua pontuação:'+score+'\n\nWOOOOW Você é um EXPERT no assunto!! PARABÉNS!!!!';
			resultCont.style.display = 'block';
		}
		return;
	}
	CarregaQuestao(PerguntaAtual);
}

CarregaQuestao(PerguntaAtual);
