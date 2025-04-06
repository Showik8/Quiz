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


module.exports = { quizSchema, fastRefSchema };