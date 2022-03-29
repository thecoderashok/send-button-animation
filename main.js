let button = document.getElementById("button");
let BtnIconRow = document.getElementById("button-icon-row");

function send() {
  BtnIconRow.style.transform = "translateX(0%)";

  setTimeout(() => {
    if ((BtnIconRow.style.transform = "translateX(0%)")) {
      document.getElementById("iconSent").style.transform = "rotate(45deg)";
        document.getElementById("iconSent").style.opacity = "0"
     setTimeout(() => {
            document.getElementById("iconSent-check").style.opacity = "1"
     }, 200);

     
      document.getElementById("button-placeholder-row").style.transform = "translateY(-50%)";
    }


  }, 1000);
}


