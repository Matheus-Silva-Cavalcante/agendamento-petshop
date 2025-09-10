import { carregarAgendamentosDia } from "../schedules/carregar-agendamento.js";
import { carregarHorariosDia } from "../schedules/carregar-horarios-dia.js";

const dataListaAgendamento = document.querySelector("#dataListaAgendamento");
const dataAgendamento = document.querySelector("#dataAgendamento");

dataListaAgendamento.onchange = () => carregarAgendamentosDia();
dataAgendamento.onchange = () => carregarHorariosDia();