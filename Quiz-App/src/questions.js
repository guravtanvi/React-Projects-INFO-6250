const questionBank = [
    {
      id: 0,
      question: "Neutron was discovered by",
      answers: ["Marie Curie", "Mendeleef", "Rutherford", "Chadwick"],
      correct: "Chadwick",
      
    },
    {
      id: 1,
      question: 'The theory of Evolution was produced by',
      answers: ["Darwin", "Einstein", "Newton", "Mendel"],
      correct: "Darwin"
    },
    {
      id: 2,
      question: "Cinematography was invented by",
      answers: ["Graham Bell", "Edison", "Zeiss", "Faraday"],
      correct: "Edison"
    },
    {
      id: 3,
      question: "Inert gases were discovered by",
      answers: ["Dalton", "Newton", "Roentgen", "Ramsay"],
      correct: "Ramsay"
    },
    {
      id: 4,
      question: "Who discovered oxygen?",
      answers: ["Lavoisier", "Joseph Priestley", "Dalton", "Swinton"],
      correct: "Joseph Priestley"
    },
    {
      id: 5,
      question: "Total number of continents in the World is",
      answers: ["4","6","8","7"],
      correct: "7"
    },
    {
      id: 6,
      question: "Which of the following country has given first time voting rights to women?",
      answers: ["USA","France","New Zealand","India"],
      correct: "New Zealand"
    },
    {
      id: 7,
      question: "Which of following countries has highest per capita income in the world?",
      answers: ["Qatar","USA","Macau","China"],
      correct: "Qatar"
    },
    {
      id: 8,
      question: "Which one is the largest ocean in the World?",
      answers: ["Indian","Pacific","Atlantic","Arctic"],
      correct: "Pacific"
    },
    {
      id: 9,
      question: "Which of the following is the most populous country in Africa?",
      answers: ["South Africa","Nigeria","Ethiopia","Egypt"],
      correct: "Nigeria"
    },
    {
      id: 10,
      question: "Which is the capital of Afghanistan?",
      answers: ["Kabul", "Moroni", "Jalalabad", "Kandahar"],
      correct: "Kabul"
    },
    {
      id: 11,
      question: "Where is the official home of Santa Claus?",
      answers: ["USA", "Canada", "Norway", "Finland"],
      correct: "Finland"
    },
    {
      id: 12,
      question: "Area 51 is located in which US state?",
      answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
      correct: "Nevada"
    },
    {
      id: 13,
      question: "Which of these is the largest landlocked country in the world?",
      answers: ["Kazakhstan", "Bolivia", "Paraguay", "Central African Republic"],
      correct: "Kazakhstan"
    },
    {
      id: 14,
      question: "Which is the capital of Belgium?",
      answers: ["Athens", "Lome", "Skopje", "Brussels"],
      correct: "Brussels"
    },
    {
      id: 15,
      question: "In which country, a white elephant is found",
      answers: ["India", "Sri Lanka", "Thailand", "Malaysia"],
      correct: "Thailand"
    },
    {
      id: 16,
      question: "The capital of New Zealand is",
      answers: ["Wellington", "Auckland", "Christchurch", "Napier"],
      correct: "Wellington"
    },
    {
      id: 17,
      question: "2010 Commonwealth Games held in?",
      answers: ["Canada", "India", "Britian", "Malaysia"],
      correct: "India"
    },
    {
      id: 18,
      question: "The term “Googly” is associated with?",
      answers: ["Cricket", "Football", "Badminton", "Hockey"],
      correct: "Cricket"
    },
    {
      id: 19,
      question: "Which of the following are automatically loaded and operates as a part of browser?",
      answers: ["Add-ons", "Plug-ins", "Utilities", "Widgets"],
      correct: "Plug-ins"
    },
    {
      id: 20,
      question: "Which of the following property in HTML is used to determine which drag operation was desired?",
      answers: ["dragend", "getData", "dropEffect", "captureData"],
      correct: "dropEffect"
    },
    {
      id: 21,
      question: "Which of the following is not a appropriate value for font-variant property?",
      answers: ["inherit", "default", "large-caps", "small-caps"],
      correct: "large-caps"
    },
    {
      id: 22,
      question: "What is the CSS Property Equivalent for the attribute",
      answers: ["text-decoration:reappear", "text-decoration:blink", "text-decoration:no-text", "none"],
      correct: "text-decoration:no-text"
    },
    {
      id: 23,
      question: "In css what does “font-size” can be called as",
      answers: ["Selector", "Rule", "Property", "Property-Name"],
      correct: "dropEffect"
    },
    {
      id: 24,
      question: "Which of the following property sets the width of an element’s complete border?",
      answers: ["border-width", "width", "border-depth", "none"],
      correct: "border-width"
    },
    {
      id: 25,
      question: "Which is the Land of the Rising Sun?",
      answers: ["China", "Taiwan", "Australia", "Japan"],
      correct: "Japan"
    },
    {
      id: 26,
      question: "The most populous city in the world is",
      answers: ["Paris", "London", "Tokyo", "Peking"],
      correct: "Tokyo"
    },
    {
      id: 27,
      question: "Which of the following is the most powerful type of computer ?",
      answers: ["Super–micro", "Super conductor", "Super computer", "Megaframe"],
      correct: "Super computer"
    },
    {
      id: 28,
      question: "Which is a single integrated circuit?",
      answers: ["Gate", "Mother Board", "Chip", "CPU"],
      correct: "Gate"
    },
    {
      id: 29,
      question: "Which of the following is an example of non volatile memory?",
      answers: ["VLSI", "LSI", "ROM", "RAM"],
      correct: "Cricket"
    },
    {
      id: 30,
      question: "Web pages are written using?",
      answers: ["FTP", "HTTP", "HTML", "URL"],
      correct: "HTML"
    }
  ];
  
  export default (n = 1) =>
    Promise.resolve(questionBank.sort(() => 0.5 - Math.random()).slice(0, n));
  