const API = {
  Programing: [
    {
      name: "html",
      questions: [
        {
          id: 0,
          question: "What is the correct HTML for creating a checkbox?",
          options: [
            "<checkbox>",
            "<input type='checkbox'>",
            "<input type='radio'>",
            "<check>",
          ],
          correct_answer: "<input type='checkbox'>",
        },
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "HyperText Management Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language",
          ],
          correct_answer: "HyperText Markup Language",
        },
        {
          id: 2,
          question:
            "Which of the following is the correct HTML element to link to an external stylesheet?",
          options: [
            "<link href='style.css' rel='stylesheet'>",
            "<style src='style.css'>",
            "<stylesheet>style.css</stylesheet>",
            "<css src='style.css'>",
          ],
          correct_answer: "<link href='style.css' rel='stylesheet'>",
        },
        {
          id: 3,
          question: "Which HTML tag is used to define an unordered list?",
          options: ["<ul>", "<ol>", "<li>", "<list>"],
          correct_answer: "<ul>",
        },
        {
          id: 4,
          question: "Which tag is used to define a table in HTML?",
          options: ["<table>", "<thead>", "<td>", "<tr>"],
          correct_answer: "<table>",
        },
        {
          id: 5,
          question: "What does the <a> tag in HTML do?",
          options: [
            "Creates a link",
            "Adds a table",
            "Defines an image",
            "Sets the page title",
          ],
          correct_answer: "Creates a link",
        },
        {
          id: 6,
          question:
            "What is the correct HTML element to define the title of a document?",
          options: ["<header>", "<meta>", "<title>", "<h1>"],
          correct_answer: "<title>",
        },
        {
          id: 7,
          question: "Which tag is used for inserting images in HTML?",
          options: ["<image>", "<img>", "<picture>", "<src>"],
          correct_answer: "<img>",
        },
        {
          id: 8,
          question:
            "What is the correct HTML element for inserting a line break?",
          options: ["<break>", "<br>", "<hr>", "<lb>"],
          correct_answer: "<br>",
        },
        {
          id: 9,
          question: "Which of the following is an attribute of the <a> tag?",
          options: ["href", "src", "alt", "style"],
          correct_answer: "href",
        },
      ],
    },
    {
      name: "javascript",
      questions: [
        {
          id: 0,
          question: "What does 'NaN' stand for in JavaScript?",
          options: [
            "Not a Number",
            "Null and Nothing",
            "Number and Null",
            "None and Nothing",
          ],
          correct_answer: "Not a Number",
        },
        {
          id: 1,
          question:
            "Which of the following is used to define a constant in JavaScript?",
          options: ["var", "let", "const", "define"],
          correct_answer: "const",
        },
        {
          id: 2,
          question:
            "What will be the output of the following code: `console.log(2 + '2')`?",
          options: ["4", "22", "undefined", "NaN"],
          correct_answer: "22",
        },
        {
          id: 3,
          question:
            "Which method is used to remove the last element from an array in JavaScript?",
          options: ["pop()", "push()", "shift()", "unshift()"],
          correct_answer: "pop()",
        },
        {
          id: 4,
          question: "Which of the following is a falsy value in JavaScript?",
          options: ["0", "false", "undefined", "all of the above"],
          correct_answer: "all of the above",
        },
        {
          id: 5,
          question:
            "What is the correct way to write a function in JavaScript?",
          options: [
            "function = myFunction() {}",
            "function myFunction() {}",
            "function: myFunction() {}",
            "myFunction() => {}",
          ],
          correct_answer: "function myFunction() {}",
        },
        {
          id: 6,
          question:
            "Which of the following is NOT a primitive data type in JavaScript?",
          options: ["String", "Number", "Object", "Boolean"],
          correct_answer: "Object",
        },
        {
          id: 7,
          question: "How do you create an object in JavaScript?",
          options: [
            "var obj = {}",
            "var obj = []",
            "var obj = ()",
            "var obj = <>",
          ],
          correct_answer: "var obj = {}",
        },
        {
          id: 8,
          question: "What does the 'this' keyword refer to in JavaScript?",
          options: [
            "The current function",
            "The current object",
            "The window object",
            "The global object",
          ],
          correct_answer: "The current object",
        },
        {
          id: 9,
          question: "How do you add a comment in JavaScript?",
          options: [
            "// This is a comment",
            "# This is a comment",
            "/* This is a comment */",
            "Both A and C",
          ],
          correct_answer: "Both A and C",
        },
      ],
    },
    {
      name: "css",
      questions: [
        {
          id: 0,
          question: "What does the `display: flex;` property do in CSS?",
          options: [
            "Makes elements appear as blocks",
            "Creates a flexbox layout for its children",
            "Aligns text inside the container",
            "Applies a grid layout to elements",
          ],
          correct_answer: "Creates a flexbox layout for its children",
        },
        {
          id: 1,
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
          ],
          correct_answer: "Cascading Style Sheets",
        },
        {
          id: 2,
          question:
            "Which of the following is the correct CSS syntax to change the text color of a paragraph?",
          options: [
            "p {color: blue;}",
            "p {text-color: blue;}",
            "p {font-color: blue;}",
            "color: blue; p;",
          ],
          correct_answer: "p {color: blue;}",
        },
        {
          id: 3,
          question: "How do you add a comment in CSS?",
          options: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "<!-- This is a comment -->",
          ],
          correct_answer: "/* This is a comment */",
        },
        {
          id: 4,
          question:
            "What is the correct CSS property to change the background color?",
          options: [
            "background-color",
            "bgcolor",
            "background-color: color;",
            "color-background",
          ],
          correct_answer: "background-color",
        },
        {
          id: 5,
          question:
            "Which of the following CSS selectors is used to target an element with a specific class?",
          options: ["#class-name", ".class-name", "class-name", "class-name[]"],
          correct_answer: ".class-name",
        },
        {
          id: 6,
          question: "How can you apply a CSS rule to all <p> tags?",
          options: [
            "p { color: red; }",
            "all p { color: red; }",
            "p[color='red']",
            "<p> color: red;",
          ],
          correct_answer: "p { color: red; }",
        },
        {
          id: 7,
          question: "How do you make a list display horizontally in CSS?",
          options: [
            "list-style-type: inline;",
            "display: inline;",
            "li { display: block; }",
            "ul { display: inline; }",
          ],
          correct_answer: "display: inline;",
        },
        {
          id: 8,
          question:
            "Which property is used to set the space between elements in CSS?",
          options: ["padding", "margin", "spacing", "gap"],
          correct_answer: "margin",
        },
        {
          id: 9,
          question: "What does the `position: absolute;` property do in CSS?",
          options: [
            "Positions the element relative to its closest positioned ancestor",
            "Positions the element relative to the viewport",
            "Positions the element at the top of the page",
            "Positions the element at the bottom of the page",
          ],
          correct_answer:
            "Positions the element relative to its closest positioned ancestor",
        },
      ],
    },
    {
      name: "git",
      questions: [
        {
          id: 0,
          question: "What does `git branch` do?",
          options: [
            "Shows the current branch",
            "Creates a new branch",
            "Switches between branches",
            "All of the above",
          ],
          correct_answer: "All of the above",
        },
        {
          id: 1,
          question: "What does Git stand for?",
          options: [
            "Global Information Tracker",
            "Group Information Tracker",
            "Git Is Tracking",
            "None of the above",
          ],
          correct_answer: "None of the above",
        },
        {
          id: 2,
          question: "Which command is used to create a new Git repository?",
          options: ["git init", "git create", "git start", "git new"],
          correct_answer: "git init",
        },
        {
          id: 3,
          question:
            "Which command is used to check the status of files in a Git repository?",
          options: ["git status", "git log", "git check", "git track"],
          correct_answer: "git status",
        },
        {
          id: 4,
          question: "What does the `git clone` command do?",
          options: [
            "Copies a repository to a new location",
            "Creates a new branch",
            "Commits changes",
            "Checks the status of a repository",
          ],
          correct_answer: "Copies a repository to a new location",
        },
        {
          id: 5,
          question: "Which Git command is used to stage files for a commit?",
          options: ["git add", "git commit", "git stage", "git push"],
          correct_answer: "git add",
        },
        {
          id: 6,
          question: "What is the purpose of `git commit`?",
          options: [
            "To save changes to the local repository",
            "To stage files for committing",
            "To push changes to a remote repository",
            "To create a new branch",
          ],
          correct_answer: "To save changes to the local repository",
        },
        {
          id: 7,
          question: "How do you view the commit history in Git?",
          options: ["git history", "git log", "git show", "git commit --log"],
          correct_answer: "git log",
        },
        {
          id: 8,
          question:
            "Which command is used to push changes to a remote Git repository?",
          options: ["git push", "git upload", "git send", "git sync"],
          correct_answer: "git push",
        },
        {
          id: 9,
          question: "What is the purpose of `git pull`?",
          options: [
            "Fetches changes from the remote repository and merges them",
            "Pushes changes to the remote repository",
            "Shows the latest commit history",
            "Clones a remote repository to the local machine",
          ],
          correct_answer:
            "Fetches changes from the remote repository and merges them",
        },
      ],
    },
  ],
  Science: [
    {
      name: "physics",
      questions: [
        {
          id: 0,
          question: "What is the SI unit of force?",
          options: ["Newton", "Joule", "Pascal", "Watt"],
          correct_answer: "Newton",
        },
        {
          id: 1,
          question: "Which of these is the law of universal gravitation?",
          options: ["F = ma", "F = G(m1 * m2) / r^2", "E = mc^2", "P = W/t"],
          correct_answer: "F = G(m1 * m2) / r^2",
        },
        {
          id: 2,
          question: "What is the speed of light in a vacuum?",
          options: [
            "3 × 10^8 m/s",
            "2 × 10^6 m/s",
            "1 × 10^9 m/s",
            "3 × 10^10 m/s",
          ],
          correct_answer: "3 × 10^8 m/s",
        },
        {
          id: 3,
          question: "Who developed the theory of general relativity?",
          options: [
            "Isaac Newton",
            "Albert Einstein",
            "Nikola Tesla",
            "James Clerk Maxwell",
          ],
          correct_answer: "Albert Einstein",
        },
        {
          id: 4,
          question:
            "What is the force that opposes motion between two surfaces in contact?",
          options: [
            "Friction",
            "Magnetism",
            "Gravitational Force",
            "Centripetal Force",
          ],
          correct_answer: "Friction",
        },
        {
          id: 5,
          question:
            "What is the energy stored in an object due to its position called?",
          options: [
            "Kinetic energy",
            "Potential energy",
            "Thermal energy",
            "Mechanical energy",
          ],
          correct_answer: "Potential energy",
        },
        {
          id: 6,
          question:
            "Which of these is an example of a non-renewable energy source?",
          options: ["Wind", "Solar", "Coal", "Hydropower"],
          correct_answer: "Coal",
        },
        {
          id: 7,
          question:
            "What does the 'C' stand for in Einstein's equation E = mc²?",
          options: ["Carbon", "Celsius", "Speed of light", "Centripetal force"],
          correct_answer: "Speed of light",
        },
        {
          id: 8,
          question: "What type of wave is light?",
          options: [
            "Transverse",
            "Longitudinal",
            "Mechanical",
            "Electromagnetic",
          ],
          correct_answer: "Electromagnetic",
        },
        {
          id: 9,
          question: "Which particle has a negative charge?",
          options: ["Proton", "Neutron", "Electron", "Photon"],
          correct_answer: "Electron",
        },
      ],
    },
    {
      name: "math",
      questions: [
        {
          id: 0,
          question:
            "What is the formula for calculating the area of a triangle?",
          options: [
            "(base × height) / 2",
            "(length × width)",
            "(base + height) / 2",
            "(length × height)",
          ],
          correct_answer: "(base × height) / 2",
        },
        {
          id: 1,
          question: "What is the derivative of sin(x)?",
          options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
          correct_answer: "cos(x)",
        },
        {
          id: 2,
          question: "What is the value of pi to two decimal places?",
          options: ["3.14", "3.15", "2.14", "3.1416"],
          correct_answer: "3.14",
        },
        {
          id: 3,
          question: "What is the square root of 144?",
          options: ["10", "12", "14", "16"],
          correct_answer: "12",
        },
        {
          id: 4,
          question: "Which of the following is a prime number?",
          options: ["1", "4", "7", "9"],
          correct_answer: "7",
        },
        {
          id: 5,
          question: "What is the formula for the area of a circle?",
          options: ["πr^2", "2πr", "πd", "2r"],
          correct_answer: "πr^2",
        },
        {
          id: 6,
          question: "What is the integral of x with respect to x?",
          options: ["x^2", "x", "2x", "x^3"],
          correct_answer: "x^2",
        },
        {
          id: 7,
          question:
            "Which of the following is an example of an irrational number?",
          options: ["1/2", "√2", "3", "4/5"],
          correct_answer: "√2",
        },
        {
          id: 8,
          question: "Which of these is an even number?",
          options: ["5", "7", "12", "15"],
          correct_answer: "12",
        },
        {
          id: 9,
          question: "What is the value of 2^3?",
          options: ["8", "6", "12", "16"],
          correct_answer: "8",
        },
      ],
    },
    {
      name: "chemistry",
      questions: [
        {
          id: 0,
          question: "What is the atomic number of carbon?",
          options: ["6", "12", "14", "8"],
          correct_answer: "6",
        },
        {
          id: 1,
          question: "Which of the following is a chemical element?",
          options: ["Water", "Hydrogen", "Salt", "Sugar"],
          correct_answer: "Hydrogen",
        },
        {
          id: 2,
          question: "Which of these is an example of a covalent bond?",
          options: ["NaCl", "H2O", "CaO", "MgCl2"],
          correct_answer: "H2O",
        },
        {
          id: 3,
          question: "Which of the following elements is a noble gas?",
          options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
          correct_answer: "Helium",
        },
        {
          id: 4,
          question: "What is the atomic mass unit (amu) based on?",
          options: [
            "Mass of an electron",
            "Mass of a proton",
            "Mass of a neutron",
            "Mass of a hydrogen atom",
          ],
          correct_answer: "Mass of a proton",
        },
        {
          id: 5,
          question:
            "What type of bond is formed when electrons are shared between atoms?",
          options: [
            "Covalent bond",
            "Ionic bond",
            "Metallic bond",
            "Hydrogen bond",
          ],
          correct_answer: "Covalent bond",
        },
        {
          id: 6,
          question: "What is the process by which plants make their food?",
          options: [
            "Respiration",
            "Photosynthesis",
            "Fermentation",
            "Transpiration",
          ],
          correct_answer: "Photosynthesis",
        },
        {
          id: 7,
          question: "What is the chemical formula for water?",
          options: ["H2O", "CO2", "O2", "H2O2"],
          correct_answer: "H2O",
        },
        {
          id: 8,
          question: "What is the pH of pure water?",
          options: ["7", "0", "14", "4"],
          correct_answer: "7",
        },
        {
          id: 9,
          question: "What is the process by which a liquid turns into a gas?",
          options: ["Freezing", "Condensation", "Evaporation", "Melting"],
          correct_answer: "Evaporation",
        },
      ],
    },
    {
      name: "niology",
      questions: [
        {
          id: 0,
          question:
            "Which of these is a part of the cell responsible for protein synthesis?",
          options: ["Mitochondria", "Ribosome", "Nucleus", "Chloroplast"],
          correct_answer: "Ribosome",
        },
        {
          id: 1,
          question: "Which of these is a type of plant cell?",
          options: [
            "Red blood cell",
            "Bacterial cell",
            "Muscle cell",
            "Xylem cell",
          ],
          correct_answer: "Xylem cell",
        },
        {
          id: 2,
          question: "What is the function of the mitochondria?",
          options: [
            "Protein synthesis",
            "Energy production",
            "Cell division",
            "Cell structure",
          ],
          correct_answer: "Energy production",
        },
        {
          id: 3,
          question:
            "Which part of the plant is responsible for photosynthesis?",
          options: ["Root", "Stem", "Leaf", "Flower"],
          correct_answer: "Leaf",
        },
        {
          id: 4,
          question: "What is the function of red blood cells?",
          options: [
            "Carrying oxygen",
            "Producing insulin",
            "Digesting food",
            "Fighting infections",
          ],
          correct_answer: "Carrying oxygen",
        },
        {
          id: 5,
          question:
            "What is the term for an organism that makes its own food using sunlight?",
          options: ["Heterotroph", "Autotroph", "Carnivore", "Herbivore"],
          correct_answer: "Autotroph",
        },
        {
          id: 6,
          question:
            "Which of the following is a characteristic of all living organisms?",
          options: [
            "Ability to photosynthesize",
            "Ability to move",
            "Ability to reproduce",
            "Ability to think",
          ],
          correct_answer: "Ability to reproduce",
        },
        {
          id: 7,
          question:
            "Which of these structures are found in both plant and animal cells?",
          options: ["Chloroplast", "Cell wall", "Nucleus", "Vacuole"],
          correct_answer: "Nucleus",
        },
        {
          id: 8,
          question:
            "What is the name of the process that breaks down food in the body to release energy?",
          options: ["Respiration", "Digestion", "Fermentation", "Excretion"],
          correct_answer: "Respiration",
        },
        {
          id: 9,
          question:
            "Which organ system is responsible for pumping blood through the body?",
          options: [
            "Digestive system",
            "Respiratory system",
            "Circulatory system",
            "Nervous system",
          ],
          correct_answer: "Circulatory system",
        },
      ],
    },
  ],
};

const FastRef = [
  {
    name: "Programing",
    img: "https://media.istockphoto.com/id/1386341272/photo/abstract-modern-tech-of-programming-code-screen-developer.jpg?s=612x612&w=0&k=20&c=16FJUoZ6j-XmBDF0g-llzkJaIsdpf6uz46D4eQfL_LM=",

    Quizes: ["HTML", "CSS", "JavaScript", "GIT"],
  },
  {
    name: "Science",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aUU_-wkSj27H5_2Sl-IW91O8POxZuU3Vfw&s",

    Quizes: ["Physics", "Math ", "Chemistry ", "Biology "],
  },
];

module.exports = {API,FastRef};
