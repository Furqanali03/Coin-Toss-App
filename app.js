function tossCoin(userChoice) {
    var result;
    var coinImage = document.getElementById("coin-image");
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    var resultOut = document.querySelector("#resultout");

    if (randomNumber === 1) {
        result = "heads";
        coinImage.innerHTML = '<img src="https://i.ebayimg.com/images/g/EQcAAOSw5mZhoOxs/s-l1200.webp" style="width: 150px;">';
    } else {
        result = "tails";
        coinImage.innerHTML = '<img src="https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg" style="width: 150px;">';
    }

    if (randomNumber === userChoice) {
        // alert("You win! The result is " + result + ".");
        resultOut.innerHTML = `You won ! the result is ${result}.`
    } else {
        // alert("You lose! The result is " + result + ".");
        resultOut.innerHTML = `You loss ! the result is ${result}.`
    }
}