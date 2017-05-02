javascript:(function(e,s){e.src=s;e.onload=function(){jQuery.noConflict();console.log('jQuery injected');};document.head.appendChild(e);})(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js') function gAnswer(){var qCont=document.getElementById("question-title");var qRaw=qCont.innerText;var qArray=qRaw.split(" ");var o1=qArray[0];var o2=qArray[2];var aFinal=o1*o2 console.log("Raw question: "+qRaw+" Answer: "+aFinal);} function pAnswers(){}
/* 
INSTALL GUIDE (GOOGLE CHROME)
1. Open Chrome (This script hasn't been tested on any other browser)
2. Go to freerice.com
3. Hit CTRL + SHIFT + I
4. Click "console" on the top bar
5. Paste the code in and hit enter
*/
