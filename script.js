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
    const answer = answers[randomIndex];
  
    return answer;
  }
  
  function displayRandomAnswer() {
    const textbox = document.getElementById('textbox');
    textbox.innerHTML = getRandomAnswer();
  }
  
  displayRandomAnswer();
  