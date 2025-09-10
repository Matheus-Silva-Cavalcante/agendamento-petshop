import { carregarHorarios } from "../form/carregar-horarios.js";

const dataSelecionada = document.querySelector("#dataAgendamento");

export async function carregarHorariosDia() {
    const data = dataSelecionada.value;

    carregarHorarios({data});
}