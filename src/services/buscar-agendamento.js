import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function buscarAgendamento({data}) {
    try {
        const agendamentos = await fetch(`${apiConfig.baseURL}/schedules`);

        const listaAgendamentos = await agendamentos.json();

        const agendamentosDia = listaAgendamentos.filter((agendamento) => dayjs(data).isSame(agendamento.data, "day"));

        return agendamentosDia;
    } catch (error) {
        console.log(error);
        throw `Não foi passível buscar o agendamento. Por favor, tente mais tarde.`;
    }
}