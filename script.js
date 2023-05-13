function getRandomAnswer() {
    const answers = [
        '언젠가는',
        '가만히 있어라',
        '안 돼',
        '그래',
        '좋아',
        '다시 한 번 물어봐',
        '조심해',
        '아니',
        '응'
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');

const urlParams = new URLSearchParams(window.location.search);
const question = urlParams.get('question');
questionElement.innerText = question;

const answer = getRandomAnswer();
answerElement.innerText = answer;
