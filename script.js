async function populate(){
    const response = await fetch("data.json")
    const result = await response.json();

  let questions = (result.quizzes[0].questions[0].question)

  console.log(result.quizzes[0].questions[0])
}

let answer;
populate()

function generateHtml(obj){
let questions = obj.quizzes[0].questions
let question1 = obj.quizzes[0].questions[0].question


}


