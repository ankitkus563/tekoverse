let cardInsider = document.getElementsByClassName("card-insider");
let Cards = document.getElementsByClassName("Cards");

for(let i=0; i<cardInsider.length; i++){

    cardInsider[i].addEventListener("pointerenter", () => {

        cardInsider[i].classList.add("card-insider"+i);
        Cards[i].classList.add("Cardgreen");
    });
    cardInsider[i].addEventListener("pointerleave", () => {

        cardInsider[i].classList.remove("card-insider"+i);
        Cards[i].classList.remove("Cardgreen");
    });
}

