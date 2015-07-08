//Questions
var q1 = {question: ("Arrays in Ruby can contain values of which type?"), selections: "1: Integers, 2: Characters, 3: Strings, 4: Any type", answer: "4"};
var q2 = {question: ("What is the difference between a Hash and an Array in Ruby?"), selections: "1: Hashes can have a non-integer index, 2: The size of a hash is not fixed, 3: There is no difference, 4: None of these", answer: "1"};
var q3 = {question: ("Which of the following is a primitive type in Ruby?"), selections: "1: Integer, 2: String, 3: Float, 4: None of these", answer: "4"};
var q4 = {question: ("A __________ takes your source code, converts it into machine language, and stores it in an executable file."), selections: "1: Program, 2: Compiler, 3: Debugger, 4: Text editor", answer: "2"};
var q5 = {question: ("__________ is writing step-by-step instructions telling the computer exactly what you want it to do."), selections: "1: Designing, 2: Scripting, 3: Programming, 4: Encoding", answer: "3"};

var questions = [q1, q2, q3, q4, q5];
var numCorrect = 0;
var currentQuestion = 0;
var quizLength = questions.length;

document.getElementById("question").innerText = questions[currentQuestion].question;
document.getElementById("choices").innerText = questions[currentQuestion].selections;
document.getElementById("submitter").onclick = process_answer_submission;
document.getElementById("next").onclick = next_question;

//returns the text that's currently typed into the #answer field
var given_answer = function() {
  return document.getElementById("answer").value;
}

//checks if the given argument matches the text of the correct answer
var is_correct_answer = function(answer_text) {
  if (answer_text === questions[currentQuestion].answer) {
    return true;
  }
  else {
    return false;
  }
}

var update_question_result = function(correct) {
  if (correct) {
    numCorrect++;
    return document.getElementById("question_result").innerText = "Success!";
  }
  else {
    return document.getElementById("question_result").innerText = "Wrong!";
  }
}

var process_answer_submission = function() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
  document.getElementById("submitter").style.visibility = "hidden";
}

function next_question() {
  currentQuestion++;
  if (currentQuestion < quizLength) {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("choices").innerText = questions[currentQuestion].selections;
    document.getElementById("submitter").onclick = process_answer_submission;
    document.getElementById("next").onclick = next_question;
    document.getElementById("answer").value = "";
    document.getElementById("question_result").innerText = "";
    document.getElementById("submitter").style.visibility="visible";
  }

  else {
    var percent = (numCorrect/quizLength) * 100;
    document.getElementById("total_result").innerText = ("You answered " + numCorrect + " of " + quizLength + " questions correctly, for a score of " + percent + "%!");
  }
}
