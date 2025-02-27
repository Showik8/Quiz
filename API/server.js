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
const { Programing, Science,Languages } = API;


app.get("/", (req, res) => {
  res.send(FastRef);
});

app.get("/api/:id", (req, res) => {
  let id = req.params.id;
  let Topic =id.charAt(0).toUpperCase() + id.slice(1)
  let search = API[Topic]

  res.send(search)

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



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

