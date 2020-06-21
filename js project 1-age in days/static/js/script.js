// Challenging 1: Your Age in days
function ageInDays(){
    let year_born = prompt("What is the year you born?")
    let age = 2020 - year_born;
    console.log(age* 365); // result will be in the console
    //var ageInDays =age * 365;
    // creating h1 element in html
    var h1 = document.createElement('h1'); 
    // creating text 
    var textAnswer = document.createTextNode('You are ' + age * 365 + ' days old.');
    // set this text to h1
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);  // set h1 in the div id called 'flex-box-result'


}
function reset(){
    // we created id 'ageInDays' on the top, when we reset it, we should remove it
    document.getElementById('ageInDays').remove();
}