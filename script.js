// URL에서 질문 가져오기
const urlParams = new URLSearchParams(window.location.search);
const question = urlParams.get('question');
document.getElementById('question').innerHTML = question;

// 랜덤 답변 보여주기
const answerBox = document.getElementById('answer-box');
const answerElement = document.createElement('p');
answerBox.appendChild(answerElement); // answerBox에 answerElement 추가

function setRandomAnswer() {
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
  const randomIndex = Math.floor(Math.random() * answers.length);
  answerElement.innerHTML = answers[randomIndex]; // answerElement의 내용을 업데이트
}

setRandomAnswer(); // 최초 로딩시 한번 실행
