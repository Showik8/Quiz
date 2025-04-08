const  mongoose  = require("mongoose");

const quizSchema = mongoose.Schema({
    id:String,
    name:String,
    questions:Array 
})

const fastRefSchema = mongoose.Schema({
    id:String,
    name:String,
    img:String,
    Quizes: Array,
    _correct_answer:String
})

const yourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
});
const YourModel = mongoose.model("YourModel", yourSchema);
const QuizModel = mongoose.model("QuizModel", quizSchema,);


module.exports = {
  quizSchema,
  fastRefSchema,
  yourSchema,
  YourModel,
  QuizModel,
};