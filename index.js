// const url = "http://localhost:3000/quiz/html"; 

// const inp = document.getElementById("input");
// const text =inp.innerText

// async function fetchQuiz(id) {
//   const response = await fetch(`http://localhost:3000/quiz/${id}`);
//   const data = await response.json();
//   console.log(data);
// }

const data =async () =>{
    const respons = await fetch("http://localhost:8888/api/languages");
    const data = await respons.json()
    console.log(data)
}

data()


// const obj = {
//   rame:{
//     agi:"agi"
//   },
//   rume:{
//     agi:"igi"
//   }
// }

// Object.keys(obj).map((key) => {
//   console.log(key, obj[key]); // Logs key and its corresponding value
// }); // aconsollogebs rame

// Object.values(obj).map((value) => {
//   console.log(value); // Logs the value of each key-value pair
// }); // agi
