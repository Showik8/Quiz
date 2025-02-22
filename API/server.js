const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 8888;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "assets")));
app.use(cors());

const {API,FastRef} = require("./API");
const { Programing, Science } = API;


app.get("/", (req, res) => {
  console.log(FastRef);
  res.send(FastRef);
});

app.get("/programing", (req, res) => {
  res.send(Programing);
});

app.get("/science",(req,res)=>{
  res.send(Science);
});


app.get("/programing/:id", (req, res) => {
  const id = req.params.id.toLocaleLowerCase();
  const indexQuiz = Programing.filter((item)=>item.name === id)
  res.send(indexQuiz[0]);
});

app.get("/science/:id",(req,res)=>{
  const id = req.params.id.toLocaleLowerCase()
  const indexQuiz = Science.filter((item)=>item.name === id)
  res.send(indexQuiz[0])
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



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

