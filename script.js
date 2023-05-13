function getAnswer() {
    const answers = [
        '언젠가는',
        '가만히 있어라',
        '안 돼',
        '그래',
        '좋아',
        '다시 한 번 물어봐',
        '조심해',
        '아니',
        '응',
        '물론',
        '절대 아니야'
    ];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

const urlParams = new URLSearchParams(window.location.search);
const question = urlParams.get('question');
const answer = getAnswer();

document.getElementById('question').textContent = question;
document.getElementById('answer').textContent = answer;
