/* this function will decide who's the winner
    return an array [0,1] means human lost and bot won 
*/
function decideWinner(humanChoice, botChoice){
    // if(humanChoice === botChoice)
    //     return[0, 0];
    // else if((humanChoice === "rock" && botChoice === "scissors")
    //         ||(humanChoice === "paper" && botChoice === "rock")
    //         ||(humanChoice === "scissors" && botChoice === "paper"))
    //     return [1,0];
    // else
    //     return [0,1];
 
        // object
        /* e.g.,
            rpsDatabase[humanchoice][botChoice]
            if yourChoice is 'rock', and botChoice is 'scissors' that's 1 for yourChoice
        */
    var rpsDatabase={
       'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors': 0.5, 'rock':0 }
    }
    // access the database, below will return the number after :
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore, computerScore];

}

/* this function will return final result in object
    i.e. {message: 'You won!','color': 'green'}
*/
function finalMessage(results){
// function finalMessage([yourScore, computerScore])
    if(results[0]=== 0){
        return{'message': 'You Lost!', 'color':'red'};
    }
    else if(results[0]===0.5)
        return{'message': 'TIE!', 'color':'yellow'};
    else
        return{'message': 'You Won!', 'color':'green'};
}   
/* This function will display the final result on html page */
function rpsFrontEnd(humanChoice, botChoice, message){
    var imagesDatabase= { // images dababase
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    // create divs for images and message
    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanChoice] +"' width=30% style='box-shadow:0px 10px 50px rgba(37, 50, 233)'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    
    console.log(message['color']);
    messageDiv.innerHTML = "<h2 style='color: " + message['color'] + "; font-size:30px; padding: 10px; '>" + message['message'] +"</h2>"
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    botDiv.innerHTML = "<img src='"+imagesDatabase[botChoice] +"' width=30% style='box-shadow:0px 10px 50px rgba(243, 38, 24)'>"
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    

}
function rpsGame(yourChoice){ 
/* yourChoice is an image element here
     - we can get its id and its source
        (i.e.,yourChoice.id, yourChoice.src) 
*/
    var humanChoice = yourChoice.id;
    var botChoice; // random choice
    botChoice = ramChoice(); // get random choice

    var results = decideWinner(humanChoice, botChoice);
    // printing out final message
    var message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}
function ramChoice(){
    var choices = ['rock', 'paper', 'scissors'];
    /* Math.random() will pick a number between 0 and 1*/
    return choices[Math.floor(Math.random() * 3)];
}