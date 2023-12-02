new Vue({ 
  el: '#quiz-app',
  data() {
    return {
      questions: [
            {
            question: 'Какой тег не неправильный',
            answers: [
                '<h4>',
                '<h3>',
                '<h7>',
                '<h6>'
            ],
            correct_answer: 2,
            selected: null,
            sense: 0
            },
            {
              question: 'Какой тег используется для создания ссылки?',
              answers: [
                '<a>',
                '<b>',
                '<u>',
                '<i>'
              ],
              correct_answer: 0,
              selected: null,
              sense: 0
              },
            {

            question: 'Какой тег используется для создания изображения?',
            answers: [
                '<image>',
                '<photo>',
                '<img>',
                '<jpg>'
            ],
            correct_answer: 2,
            selected: null,
            sense: 0
            },
            {
            question: 'Какой тег не имеет закрывающего тега',
            answers: [
              'img',
              'li',
              'span',
              'i'
            ],
            correct_answer: 0,
            selected: null,
            sense: 0
            },
            {
            question: 'Какой еще тег, кроме тега <b>, делает текст жирным?',
            answers: [
                'fat',
                'black',
                'strong',
                'emp'
            ],
            correct_answer: 2,
            selected: null,
            sense: 0
            },
            {
            question: 'Какой из них можно использовать для увеличения или уменьшения ширины изображения?',
            answers: [
                'border',
                'width',  
                'height',
                'type'
            ],
            correct_answer: 1,
            selected: null,
            sense: 0
            },
            {
            question: "Каков правильный HTML для создания гиперссылки?",
            answers: [
                '<a>http://www.google.com</a>',
                '<a name="http://www.google.com">Google.com</a>',
                '<a href="http://www.google.com">Google</a>',
                '<a url="http://www.google.com">Google.com</a>'
            ],
            correct_answer: 2,
            selected: null,
            sense: 0
            },
            {
              question: 'Что означает CSS в веб-разработке?',
              answers: [
                  'Counter Strike: Source',
                  'Cascading Style Sheet',
                  'Corrective Style Sheet',
                  'Computer Style Sheet'
              ],
              correct_answer: 1,
              selected: null,
              sense: 0
            },
            {
            question: 'Один из следующих атрибутов не включен в поле ввода типа «текст»',
            answers: [
                'value',
                'src',
                'disabled',
                'size'
            ],
            correct_answer: 1,
            selected: null,
            sense: 0
            },
            {
            question: 'Один из следующих элементов не является типом кнопок',
            answers: [
                'action',
                'button',
                'reset',
                'submit'
            ],
            correct_answer: 0,
            selected: null,
            sense: 0
            },
            {
            question: 'Выберите неправильное утверждение для типа ввода сheckbox',
            answers: [
                'Тип поля ввода - "checkbox"',
                'Атрибут "name" должен быть уникальным для каждого поля ввода',
                'Когда пользователь отправляет форму, значение атрибута "name" будет отправлено на сервер',
                'Пользователь может выбрать ноль или более вариантов из ограниченного числа вариантов'
            ],
            correct_answer: 2,
            selected: null,
            sense: 0
            },
            {
              question: 'Какое утверждение неверно?',
              answers: [
                  'Тег "img" требует только изображения типа .jpg',
                  'Атрибут "size" может быть использован в теге "select"',
                  'Упорядоченные списки можно создавать в числовом или алфавитном порядке ',
                  'Для определения предварительно выбранной опции потребуется атрибут "selected"'
              ],
              correct_answer: 0,
              selected: null,
              sense: 0
              },
            
            {
              question: 'как увидеть свой HTML-дизайн в реальном времени',
              answers: [
                  'Live-Server',
                  'Network',
                  'Console',
                  'Elements'
              ],
              correct_answer: 0,
              selected: null,
              sense: 0
              },
              {
                question: 'Чтобы переместить элемент, какой атрибут используется',
                answers: [
                    'src',
                    'height',
                    'type',
                    'align'
                ],
                correct_answer: 3,
                selected: null,
                sense: 0
                },
              {
                question: 'Какой атрибут используется при наведении курсора мыши на изображение, чтобы отобразить его название?',
                answers: [
                    'alt',
                    'title',
                    'text',
                    'type'
                ],
                correct_answer: 1,
                selected: null,
                sense: 0
                },
                {
                  question: 'Какой атрибут может быть добавлен в img тег чтобы во время наведения курсора он показал его титул',
                  answers: [
                    'alt',
                    'class',
                    'text',
                    'type'
                  ],
                  correct_answer: 0,
                  selected: null,
                  sense: 0
                  },
                  {
                    question: 'Где мы можем писать метатеги?',
                    answers: [
                      '<script></script>',
                      '<head></head>',
                      '<body></body>',
                      '<h1></h1>'
                    ],
                    correct_answer: 1,
                    selected: null,
                    sense: 0
                    },
                    {
                      question: 'Выберите неправильное утверждение для input type radio',
                      answers: [
                        'Тип поля ввода - "radio"',
                        'Все атрибуты "name" должны быть уникальными',
                        'Атрибут "value" должен быть уникальным',
                        'Ни один из них'
                      ],
                      correct_answer: 1,
                      selected: null,
                      sense: 0
                      },
                      {
                        question: 'Один из следующих типов не является типом неупорядоченного листа?',
                        answers: [
                          'square',
                          'circle',
                          'disc',
                          'round'
                        ],
                        correct_answer: 3,
                        selected: null,
                        sense: 0
                        },
                        {
                          question: 'Какой из них не является элементом блочного уровня?',
                          answers: [
                            '<nav></nav>',
                            '<p></p>',
                            '<span></span>',
                            '<li></li>'
                          ],
                          correct_answer: 2,
                          selected: null,
                          sense: 0
                          },
        ],
      showWrongQuestion: false,
      wrongQuestions: [],
      temp: [],
      currentQuestion: 0,
      answered: 0,
      wrongAnswers: 0,
      correctAnswers: 0
    }
  },
  methods: {
    selectAnswer: function(e) {
      var choise = e.currentTarget,
          answers = document.querySelectorAll('.answers span'),
          nextBtn = document.querySelector('.next-btn');
      
      answers.forEach(answer => {
        answer.classList.contains('selected') ? answer.classList.remove('selected') : '';
      });
      
      choise.classList.add('selected');
      
      this.questions[this.currentQuestion].selected = choise.dataset.index; // add the selected index to the obj in the 'selected' property
      
      nextBtn.removeAttribute('disabled');
      
    },
    calculateResult: (questions) => {
      var correct;
      
      for(var i=0; i< questions.length; i++) {
        this.questions[i].selected == questions[i].correct ? correct++ : '';
      }
      
      return (correct / questions.length) * 100;
    }
  },
  mounted() {
    
    var nextBtn = this.$el.querySelector('.next-btn'),
        wrongAnswersBtn = this.$el.querySelector('.show-wrong-ones'),
        answers = this.$el.querySelectorAll('.answers span'),
        questionsLength = this.questions.length,
        result = this.$el.querySelector('.result'),
        question = this.$el.querySelector('.question'),
        closeResult = this.$el.querySelector('.result button.close'),
        wrongQuestions = this.$el.querySelector('.wrong-questions'),
        showMyResults = this.$el.querySelector('#return-to-result');
          
    nextBtn.addEventListener('click', () => {
      
      this.answered < this.questions.length ? this.answered++ : '';
      
      if(!nextBtn.hasAttribute('disabled') && this.currentQuestion < (questionsLength -1)) {    
        this.currentQuestion++;
        
        answers.forEach(answer => {
          answer.classList.contains('selected') ? answer.classList.remove('selected') : '';
        });
        
        nextBtn.setAttribute('disabled', '');
        
      } else if(this.currentQuestion >= (questionsLength -1)) {
        
        this.questions.forEach( (question) => {
          if(question.selected == question.correct_answer && question.sense ==0) {
            
            this.correctAnswers++;
            question.sense = 1;
            
          } else if(question.selected != question.correct_answer && question.sense ==0) {
            
            this.wrongAnswers++;
            question.sense = 1;
            let temp = {};
            temp.answers = question.answers;
            temp.question = question.question;
            temp.correct_answer = question.correct_answer;
            temp.selected = question.selected;
            
            this.wrongQuestions.push(temp);
          }
        });
        
        result.classList.add('active');
        question.classList.add('blur');
      }
    });
    
    closeResult.addEventListener('click', () => {
      result.classList.remove('active');
      question.classList.remove('blur');
    });
    
    wrongAnswersBtn.addEventListener('click', () => {      
      result.classList.remove('active');
      wrongQuestions.classList.add('active');
    });
    
    showMyResults.addEventListener('click', () => {
      result.classList.add('active');
      wrongQuestions.classList.remove('active');
    })
  }
});