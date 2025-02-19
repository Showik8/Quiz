const quizi = [
  {
    name: "html",
    questions: [
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
      {
        id: 10,
        question: "What is the correct HTML for creating a checkbox?",
        options: [
          "<checkbox>",
          "<input type='checkbox'>",
          "<input type='radio'>",
          "<check>",
        ],
        correct_answer: "<input type='checkbox'>",
      },
    ],
  },
  {
    name: "javascript",
    questions: [
      {
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
        question:
          "Which of the following is used to define a constant in JavaScript?",
        options: ["var", "let", "const", "define"],
        correct_answer: "const",
      },
      {
        question:
          "What will be the output of the following code: `console.log(2 + '2')`?",
        options: ["4", "22", "undefined", "NaN"],
        correct_answer: "22",
      },
      {
        question:
          "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correct_answer: "pop()",
      },
      {
        question: "Which of the following is a falsy value in JavaScript?",
        options: ["0", "false", "undefined", "all of the above"],
        correct_answer: "all of the above",
      },
      {
        question: "What is the correct way to write a function in JavaScript?",
        options: [
          "function = myFunction() {}",
          "function myFunction() {}",
          "function: myFunction() {}",
          "myFunction() => {}",
        ],
        correct_answer: "function myFunction() {}",
      },
      {
        question:
          "Which of the following is NOT a primitive data type in JavaScript?",
        options: ["String", "Number", "Object", "Boolean"],
        correct_answer: "Object",
      },
      {
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
      {
        id: 10,
        question: "What does the `display: flex;` property do in CSS?",
        options: [
          "Makes elements appear as blocks",
          "Creates a flexbox layout for its children",
          "Aligns text inside the container",
          "Applies a grid layout to elements",
        ],
        correct_answer: "Creates a flexbox layout for its children",
      },
    ],
  },
  {
    name: "git",
    questions: [
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
      {
        id: 10,
        question: "What does `git branch` do?",
        options: [
          "Shows the current branch",
          "Creates a new branch",
          "Switches between branches",
          "All of the above",
        ],
        correct_answer: "All of the above",
      },
    ],
  },
];


module.exports = { quizi };
