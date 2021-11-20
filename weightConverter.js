function weightConverter(valNum) {
    var valNum =valNum*2.046;
    var n= valNum.toFixed(0);
        document.getElementById("outputPounds").innerHTML=n;
}