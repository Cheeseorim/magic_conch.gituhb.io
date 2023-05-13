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
        <p class="answer" id="answer"></p>
        <img src="magicsora2.jfif" alt="마법의 소라고둥 이미지">
        <p class="question"><?php echo $_POST["question"]; ?></p>
        <div class="textbox">
            <p><?php echo $answer; ?></p>
          </div>
    </main>
    <footer>
      <p>문의 및 아이디어 : <a href="mailto:cheeseorim@gmail.com">cheeseorim@gmail.com</a></p>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
