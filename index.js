// question array 
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
      question: 'What are the odds of successfully navigating an asteroid field',
      answer: '3,720 to 1',
      options: [
        '500 miles',
        '3,720 to 1',
        '42',
        'Never tell me the odds',
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
  
  //grab element and create variables NOT WORKING 
  //quiz not initializing on click event
  const quizContainer = document.getElementById('quiz');
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  const TIME_LEFT = 30; 
  let timeLeft = TIME_LEFT;
  

 
  function initializeQuiz() {
    quizContainer.innerHTML = ''; 
  
    const startButton = document.createElement('button');
    startButton.id = 'start-quiz';
    startButton.textContent = 'Start Quiz!';
    startButton.addEventListener('click', startQuiz);
    quizContainer.appendChild(startButton);
  }
  


  function startQuiz() {
    currentQuestionIndex = (0);
    correctAnswers = (0);
    displayQuestion();
  }

  function displayQuestion() {
    
    clearInterval(timerInterval);
  
    quizContainer.innerHTML = '';
  
    
    if (currentQuestionIndex => questionsArr.length) {
      endQuiz();
      return;
    }
  
    const question = questionsArr[currentQuestionIndex];
    const questionText = document.createElement('p');
    questionText.textContent = question.question;
    quizContainer.appendChild(questionText);
    const optionsDiv = document.createElement('div');

    //creates button for answers
    question.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.addEventListener('click', () => handleAnswer(option));
      optionsDiv.appendChild(optionButton);
    });
    quizContainer.appendChild(optionsDiv);
  
    // Below adds a timer
    const timerDisplay = document.createElement('p');
    timerDisplay.id = 'timer'; 
    quizContainer.appendChild(timerDisplay);
  
    // Initialize and start the timer
    timeLeft = TIME_LEFT;
    timerDisplay.textContent = timeLeft;
  
    timerInterval = setInterval(() => {
      timeLeft--; //time decrement
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval); //iterate through the questions array 
        currentQuestionIndex++;
        displayQuestion();
      }
    }, 1000);
  }

  function endQuiz() {
    quizContainer.innerHTML = '';
    const score = Math.round((correctAnswers / questionsArr.length) * 100);
    localStorage.setItem('previous-score', score);
  }

  window.onload = initializeQuiz;
  /*
  let currentQuestionIndex = 0;
let score = 0;
let timerIntervalId = null;
let timeLeft = 0;
const TIME_LEFT = 30;


/*window.onload = initializeQuiz;*/