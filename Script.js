function showAlert() {
   alert("Hei");
}

function showText(text) {
   let elem = document.getElementById("teksti-kappale");
    elem.textContent = text;
}

function toggleClass(elemId, className){
  let elem = document.getElementById(elemId);  
    elem.classList.toggle(className); 
}
