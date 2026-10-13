window.onload = function() {
    //Exercise 1 - Layout the board
    let gameboard = document.querySelectorAll("#board > div");
    gameboard.forEach(div => {
        div.classList.add("square")
    })

    //Exercise 2 - Add X or O to square when clicked
    let gamestate = [];
    let count = 0;
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