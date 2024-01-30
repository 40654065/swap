function swap() {
    var i = document.getElementById("jay").value;
    var j = document.getElementById("jayu").value;

    document.getElementById("demo").innerHTML =
      "Before swap: variable 1=" + i + " variable 2=" + j;

    var temp = i;
    var i = j;
    var j = temp;

    document.getElementById("demo1").innerHTML =
      "After swap: variable 1=" + i + " variable 2=" + j;
  }