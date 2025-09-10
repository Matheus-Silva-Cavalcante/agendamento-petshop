const popup = document.querySelector(".popup");

export function mostrarPopup(mostrar){
    popup.classList[mostrar ? "add" : "remove"]("aberta");
}