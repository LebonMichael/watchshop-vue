let checked = document.getElementsByClassName("checked");
let methode = document.getElementsByClassName("methode")

for (let i = 0; i < checked.length; i++) {
   document.getElementsByClassName("checked")[i].addEventListener("click", function() {
      for ( i = 0; i < checked.length; i++){
         checked[i].classList.remove("border-danger","border-3");
         checked[i].classList.add("border-secondary");
      }
      this.classList.add("border-danger","border-3");
      this.classList.remove("border-secondary");
   });
}

for (let i = 0; i < methode.length; i++) {
   document.getElementsByClassName("methode")[i].addEventListener("click", function() {
      for ( i = 0; i < methode.length; i++){
         methode[i].classList.remove("border-danger","border-3");
         methode[i].classList.add("border-secondary");
      }
      this.classList.add("border-danger","border-3");
      this.classList.remove("border-secondary");
   });
}