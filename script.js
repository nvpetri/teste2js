function redirectToIndex2() {
    window.location.href = "index2.html";
}

function rejectAnswer() {
    var button = document.getElementsByClassName("button")[1];
    button.style.position = "relative";
    setInterval(function() {
        var position = button.style.left;
        var newPosition = parseInt(position) + 10;
        button.style.left = newPosition + "px";
        if (newPosition >= window.innerWidth - button.offsetWidth) {
            button.style.left = "0px";
        }
    }, 100);
}