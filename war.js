var location1 = Math.floor(Math.random()* 5);
var location2 = location1 + 1;
var location3 = location2 + 1;;

var hits = 0;
var guesses = 0;

var guess;

var IsSunk = false;

while (IsSunk == false){
    guess = prompt("Game On!!!, enter a number between 0 and 6");
    if (guess < 0 || guess > 6){
        alert("enter a valid number");
    } else {
        guesses = guesses + 1

        if (guess == location1 || guess == location2 || guess == location3){
            alert("HITS")
            hits = hits + 1
            if (hits == 3){
                IsSunk = true;
                alert("You sank the battleship")
            }
           if (location1 == location2 || location2 == location3 || location1 == location3){
            alert("MISS!, enter a different value")
           }
            
           
        } else {
            alert("MISS!");
        }   
    }
}

var result = "it took " + guesses + " guesses to sank a battleship " + 
" which means a shooting accuracy of " + (3/guesses);

alert(result)
