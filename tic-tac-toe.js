window.onload = function() {
    let gameboard = document.querySelectorAll('#board > div');

    gameboard.forEach(child => {
        child.classList.add('square')
    })
}