<!DOCTYPE html>
<html>
  <head>
    <title>마법의 소라고둥</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <header>
      <h1>마법의 소라고둥</h1>
    </header>
    <main>
        <?php
            $answers = [
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

            $question = $_POST['question'];
            $answer = $answers[array_rand($answers)];

            echo "<p class='answer'>$answer</p>";
            echo "<img src='magicsora2.jfif' alt='마법의 소라고둥 이미지'>";
            echo "<p class='question'>$question</p>";
        ?>
    </main>
    <footer>
      <p>문의 및 아이디어 : <a href="mailto:cheeseorim@gmail.com">cheeseorim@gmail.com</a></p>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
