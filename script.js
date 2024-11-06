function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").src = "./dice" + randomNumber1 + ".png";

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").src = "./dice" + randomNumber2 + ".png";


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="Player 1 wins ";
        document.querySelector("h1").style.color="#88bdbc";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").textContent="Player 2 wins ";
        document.querySelector("h1").style.color="#88bdbc";
    }
    else if(randomNumber1==randomNumber2){
        document.querySelector("h1").textContent="Its Draw !!!";
        document.querySelector("h1").style.color="#5880e9";
    }
}