const answers = [
    "언젠가는",
    "가만히 있어라",
    "안 돼",
    "그래",
    "좋아",
    "다시 한 번 물어봐",
    "조심해",
    "아니",
    "응",
    "물론",
    "절대 아니야"
  ];
  
  function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  }
  
  // URL에서 질문 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const question = urlParams.get('question');
  
  // 가져온 질문 보여주기
  const questionElement = document.createElement('p');
  questionElement.innerHTML = question;
  questionElement.classList.add('question');
  document.querySelector('main').insertBefore(questionElement, document.querySelector('img'));
  
  // 랜덤 답변 보여주기
  const answerBox = document.getElementById('answer-box');
  const answerElement = document.createElement('p');
  answerElement.innerHTML = getRandomAnswer();
  answerBox.appendChild(answerElement);
  