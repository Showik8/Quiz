const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const {quizi} = require("./API")

app.post("/data", (req, res) => {
  console.log("Received data:", req.body); // Output the parsed body data
  res.send("Data received");
});


app.get("/quiz/:id", (req,res) =>{
  const id =req.params.id.toLocaleLowerCase()
  res.send(quizi.filter((item) => item.name ===id));
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

