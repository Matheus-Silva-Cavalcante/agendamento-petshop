// import { mostrarPopup } from "../utils/mostra-popup.js";

// const horaAgendamento = document.querySelector("#horaAgendamento");

// const btnNovoAgendamento = document.querySelector(".btn-novo-agendamento")

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("#dataListaAgendamento").value = dataYYYYMMDD(new Date());

//     formatarHora(new Date());
// });

// function formatarData(data) {

//     const dia = String(data.getDate()).padStart(2, '0');
//     const mes = String(data.getMonth() + 1).padStart(2, '0');
//     const ano = data.getFullYear();

//     const dataFormatada = `${dia}/${mes}/${ano}`;

//     console.log(dataFormatada)

//     return dataFormatada;
// }

// export function formatarHora(data){
//     const hora = data.toLocaleString("pt-BR", {
//         hour: "2-digit",
//     });

//     horaAgendamento.value = hora;
// }

// export function dataYYYYMMDD(data) {
//     const offset = data.getTimezoneOffset() * 60 * 1000;
    
//     const time = data.getTime();
    
//     const novaData = new Date(time - offset);
    
//     return novaData.toJSON().split('T')[0];
// };

// btnNovoAgendamento.addEventListener("click", () => {
//     mostrarPopup(true);
// });
