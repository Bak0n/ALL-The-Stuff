/* Stackoverflow script to install jQuery through console

javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')
*/

// Code to parse question and solve

function gAnswer() {
	var qCont = document.getElementById("question-title");
	var qRaw = qCont.innerText;
	var qArray = qRaw.split(" ");
	var o1 = qArray[0];
	var o2 = qArray[2];
	var aFinal = o1 * o2
	console.log("Raw question: " + qRaw + " Answer: " + aFinal);
}

// Parse answers and click on the correct one, determined from gAnswer();

function pAnswers() {
// Still working!
}
