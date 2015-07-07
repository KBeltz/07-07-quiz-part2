#Version 2

This version of the project will abandon the use of alerts/prompts and instead use HTML elements. You'll use Javascript to read/interact with those HTML elements (a.k.a. the "DOM").

This is comparable to when we went from the command-line to the Web. Much of your logic will remain the same, but your UX will change.

Make a brand new project folder for this, and start from scratch. Copy over code from the first version as needed.

You might find going through http://teamtreehouse.com/library/interactive-web-pages-with-javascript (Just the "JavaScript and the DOM" and "Selecting Elements and Adding Events with JavaScript" sections) helpful. Maybe just going through a particular video in a section when needed will be enough, or maybe watching the entire thing first will be best.

The following tasks should be done in order.

##Part 1

Make an index.html file. Build the following HTML structure:
div#quiz (This means make a div and give it an id of quiz.)
div#question
Empty for now. We'll use JavaScript to put question text into this.
div#choices
Empty for now. We'll use JavaScript to put question text into this.
input[type=text]#answer (This means make an input tag with attribute type=text and an id of answer.
button#submitter (This means make a button tag with an id of submitter.)
div#question_result
Empty for now. We'll use JavaScript to put each question's result into this.
button#next
This will eventually be the button that the user clicks after they see that a question was correct/wrong. It will load up the next question.
div#total_result
Empty for now. We'll use JavaScript to put the quiz's final result into this.
Add a global.js file.
Copy over your collection of questions. Don't copy anything else - especially not the alerts/prompts.
Using Javascript, add the first question's content to div#quiz. So when you load the page, the first question's content should already be there.
Do the same thing for the question's choices (into div#choices).
Okay so now you have a non-functional quiz game, but at least it's showing the user the first question and choices. And there is a field for the user to enter their answer (and a button to submit it), but that doesn't actually do anything yet. So let's fix that. (After this, we'll worry about going through multiple questions – for now, we'll deal with the first question alone.)

##Part 2

Write a function called given_answer which returns the text that's currently typed into the #answer field. You can test this by running given_answer() in the Javascript console built into your web browser.
Now you, more or less, have prompt functionality. The user can type something in, and you can retrieve its value.
Write a function called is_correct_answer, which takes one argument (called answer_text). This function checks if the given argument matches the text of the correct answer. It should return true or false.
Later, we will use the given_answer() method to define the value of this function's answer_text argument.
You'll need a way to indicate what the correct answer is. You might accomplish this a few different ways. One way is to just hard-code it in for now. Like I said before, we're only concerned with the first question for now, so it's okay that this code won't work as it is for multiple questions.
Again, you can test this code in the console.
Write a function called update_question_result, which takes one argument (named correct). When the argument is true, the function sets the content of #question_result to "Success!". Otherwise, the function sets the content of #question_result to "Wrong!".
You can test this out in console too.
Now we have the various pieces of functionality that would be needed to make this question and its answering interactive. But it's not interactive yet. We're doing everything manually in the console. Let's have these functions run on their own when the user submits their answer.

##Part 3

Write a function called process_answer_submission. It should look something like this:
function process_answer_submission(){
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
}
Now we want that function to run whenever button#submitter is clicked. You might need to do some research to figure this out. Hint: What you're trying to do here is attach an "event handler" to the button. The "event" is "click". So you're trying to define how the button handles being clicked. Specifically, you're trying to say that the behavior of the button, when it's clicked, should be as described in the process_answer_submission function.
You should now have a minimally functional quiz game, using Javascript and the DOM. Here are some things left:

After a question is submitted, when the user clicks the #next button:
Clear the #answer field.
Clear #question_result.
Set the text of #question to the next question's text.
Set the text of #choices to the next question's choices.
After all of the questions have been answered, update #total_result.
(E.g. "You answered 7 of 10 questions correctly, good for 70.0%")
Hint: It will be helpful to have a global variable that tracks the current question.

Some of this might be too difficult to do yourself. I expect all of you to get through Part 1, and for most of you to get through Part 2. We'll review all of this in the morning.
