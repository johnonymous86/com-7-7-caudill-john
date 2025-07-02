// question array variable
var questionsArr = [
    {
      question: 'Who was the second president of the United States?',
      answer: 'Thomas Jefferson',
      options: [
        'James Madison',
        'Benjamin Franklin',
        'Thomas Jefferson',
        'George Washington',
      ]
    },
    {
      question: 'What is the state bird of Florida?',
      answer: 'Mockingbird',
      options: [
        'Cardinal',
        'Seagull',
        'Scrub Jay',
        'Mockingbird',
      ]
    },
    {
      question: 'Which of the following is a moon of Jupiter?',
      answer: 'Callisto',
      options: [
        'Callisto',
        'Dagobah',
        'Bajor',
        'LV-426',
      ]
    },
    {
      question: 'How much land does a man need?',
      answer: '6 feet',
      options: [
        '500 miles',
        '6 feet',
        '20,000 Leagues',
        'The entire Siberian Steppe',
      ]
    },
    {
      question: 'Who played drums for The Beatles?',
      answer: 'Ringo Starr',
      options: [
        'Barry Manilow',
        'Bongo Jones',
        'Ringo Starr',
        'Keith Jagger',
      ]
    }
  ];
  
  //grab element and create variables
  const quizContainer = document.getElementById('quiz');
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let timerInterval;
  const TIME_PER_QUESTION = 30; // seconds
  let timeLeft = TIME_PER_QUESTION;
  
 
  function initializeQuiz() {
    quizContainer.innerHTML = ''; // Clear existing content
  
    const startButton = document.createElement('button');
    startButton.id = 'start-quiz';
    startButton.textContent = 'Start Quiz!';
    startButton.addEventListener('click', startQuiz);
    quizContainer.appendChild(startButton);
  }
  


  /*function startQuiz() {
    currentQuestionIndex = (0);
    correctAnswers = (0);
    displayQuestion();
  }*/