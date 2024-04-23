function tossCoin(userChoice) {
    var result;
    var coinImage = document.getElementById("coin-image");
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    var resultOut = document.querySelector("#resultout");

    if (randomNumber === 1) {
        result = "heads";
        coinImage.innerHTML = '<img src="/images.jpg" alt="Heads">';
    } else {
        result = "tails";
        coinImage.innerHTML = '<img src="/tail.jpg" alt="Tails">';
    }

    if (randomNumber === userChoice) {
        // alert("You win! The result is " + result + ".");
        resultout.innerHTML = `You won ! the result is ${result}.`
    } else {
        // alert("You lose! The result is " + result + ".");
        resultout.innerHTML = `You loss ! the result is ${result}.`
    }
}