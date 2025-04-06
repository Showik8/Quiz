const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const _ = require("lodash");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config()
const PORT = process.env.PORT || 8888;



const MONGOURL = process.env.MONGO_URL;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "assets")));
app.use(cors());

const {API,FastRef} = require("./API");
const { Programming, Science,Languages } = API;
const questions = new Array
const correctAnswers = [];



function filterQuestions(obj){
   const questions = obj.map((topic) => ({
     ...topic,
     questions: topic.questions.map(({ correct_answer, ...rest }) => rest),
   }));
}



app.get("/", (req, res) => {
  res.send(FastRef);
});

app.get("/api/:id", (req, res) => {
  let id = req.params.id;
  let Topic =id.charAt(0).toUpperCase() + id.slice(1)
  let search = API[Topic]

   const questions = search.map((topic) => ({
     ...topic,
     questions: topic.questions.map(({ correct_answer, ...rest }) => rest),
   }));


   res.send(questions)

for (let i = 0; i < questions.length; i++) {
  correctAnswers.push(questions[i].correct_answer);
}

console.log(correctAnswers)

});



app.get("/programming/:id", (req, res) => {
  const id = req.params.id.toLocaleLowerCase();
  const indexQuiz = Programming.filter((item)=>item.name === id)
  res.send(indexQuiz[0]);
});

app.get("/science/:id",(req,res)=>{
  const id = req.params.id.toLocaleLowerCase()
  const indexQuiz = Science.filter((item)=>item.name === id)
  res.send(indexQuiz[0])
});

app.get("/languages/:id", (req, res) => {
  const id = req.params.id.toLocaleLowerCase();
  const indexQuiz = Languages.filter((item) => item.name === id);
  res.send(indexQuiz[0]);
});

app.get("/quiz/:id",(req,res)=>{
  const id = req.params.id.toLocaleLowerCase()
let foundQuiz = null;
for (let key in API) {
  foundQuiz = API[key].find((quiz) => quiz.name === id);
  if (foundQuiz) break; 
}

res.send(foundQuiz)

})

mongoose.connect(MONGOURL).then(() => {
  console.log("DB is Connected");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(err=> console.log(err))



