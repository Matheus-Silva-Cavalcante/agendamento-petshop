import dayjs from "dayjs";
import { horariosAgendamento } from "../../utils/horarios-agendamento.js";

const listaHorarios = document.querySelector("#horaAgendamento");

export function carregarHorarios({data}){
    listaHorarios.innerHTML = "";

    const horarios = horariosAgendamento.map((hora) => {
        const [horaAgendamento] = hora.split(":");

        const verificarDiaAtual = dayjs(data).add(horaAgendamento, "hour").isAfter(dayjs());

        return {
            hora,
            disponivel: verificarDiaAtual,
        }
    });

    horarios.forEach(({hora, disponivel})  => {
        const option = document.createElement("option");

        disponivel ? option.disabled = false : option.disabled = true;

        if (hora === "12:00") {
            option.disabled = true;
        }

        option.value = hora;
        option.textContent = hora;

        listaHorarios.append(option);
    });
}

