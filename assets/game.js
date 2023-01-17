var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {

    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = Math.max ( 0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max( 0, enemyHealth - damage);
         console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );



        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        

        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max ( 0, playerHealth - damage ) ;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remainig."
        );




        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        }
        else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
     

 
};

//function to start a new game
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10; 

    for(var i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
    
         // pick new enemy to fight based on the index of the enemyNames array
         var pickedEnemyName = enemyNames[i];
    
         // reset enemyHealth before starting new fight
         enemyHealth = randomNumber(40, 60);
    
         // use debugger to pause script from running and check what's going on at that moment in the code
         // debugger;
    
         // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
         fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
       
    }
    //play again
    endGame()

};

// function to end the entire game
var endGame = function () {
    //if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    window.alert("The game has now ended. Let's see how we did!");
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random()* (max - min + 1)) + min;

    return value;
}

//start the game when the page loads
startGame();
