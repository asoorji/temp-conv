alert("This is a Fahrenheit to Celsius Converter. Click on the yellow box to get the result.")

alert("Please, how do I handle d exception of when a user enters an alphabet instead of a number. Kindly help me out using d comment section. Thanks in advance ");
    
function  findCelsius() {
    fah = document.getElementById("f").value; 
    if (fah == "") {
        document.getElementById("res1").innerHTML = "Please, enter a number!";
    }

    else {
        var cel;
        cel = (fah - 32) * 5/9;
        document.getElementById("res1").innerHTML = "Your temperature in Celsius is";
        document.getElementById("res2").innerHTML = cel;
    }
  }

