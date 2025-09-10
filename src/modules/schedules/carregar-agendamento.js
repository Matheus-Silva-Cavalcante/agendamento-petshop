import { buscarAgendamento } from "../../services/buscar-agendamento.js";
import { listarAgendamentos } from "./listar-agendamentos.js";
import { carregarHorariosDia } from "./carregar-horarios-dia.js";
import dayjs from "dayjs";

const dataListaAgendamento = document.querySelector("#dataListaAgendamento");

export async function carregarAgendamentosDia() {
    const data = dataListaAgendamento.value;

    const agendamentoDia = await buscarAgendamento({data});

    listarAgendamentos(agendamentoDia);

    carregarHorariosDia();
}
