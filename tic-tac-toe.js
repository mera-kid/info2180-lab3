window.onload = function() {
    //Exercise 1 - Layout the board
    let gameboard = document.querySelectorAll("#board > div");
    gameboard.forEach(div => {
        div.classList.add("square")
    })

    //Exercise 2 - Add X or O to square when clicked
    let gamestate = [];
    let count = 0;

    const winstates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let message = document.getElementById("status");

    gameboard.forEach((square, index) => {
        //console.log(index);
        square.addEventListener("click", function(){
            if (count % 2 == 0){
                //console.log("click");
                square.textContent = "X";
                square.classList.add("X");
                gamestate[index] = "X";
                console.log(gamestate);
                count++;
                
            } else{
                //console.log("click");
                square.textContent = "O";
                square.classList.add("O");
                gamestate[index] = "O";
                console.log(gamestate);
                count++;
            } 
            
            //Exercise 4 - Check winner and update status
            winstates.forEach((state, index) => {
                if (gamestate[state[0]] == "X" && gamestate[state[1]] == "X" && gamestate[state[2]] == "X"){
                    message.textContent = "Congratulations! X is the Winner!"
                    message.classList.add("you-won")
                } else if (gamestate[state[0]] == "O" && gamestate[state[1]] == "O" && gamestate[state[2]] == "O"){
                    message.textContent = "Congratulations! O is the Winner!"
                    message.classList.add("you-won")
                }
            })      
        });
    })
    //Exercise 3 - Change style on mouseover
    gameboard.forEach(square => {
        square.addEventListener("mouseover", function(){
            square.classList.add("hover");
        })

        square.addEventListener("mouseout", function(){
            square.classList.remove("hover");
        })
    });
}