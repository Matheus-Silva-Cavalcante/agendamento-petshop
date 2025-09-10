import dayjs from "dayjs";
import { carregarAgendamentosDia } from "./schedules/carregar-agendamento.js";

const dataAtual = dayjs(new Date()).format("YYYY-MM-DD");

const dataListaAgendamento = document.querySelector("#dataListaAgendamento");
dataListaAgendamento.value = dataAtual;
// dataListaAgendamento.min =  dataAtual;

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM carregado.")

    carregarAgendamentosDia(); 
})