import dayjs from "dayjs";
import { mostrarPopup } from "../../utils/mostra-popup";

const periodoManha = document.querySelector(".cronograma__lista-manha");
const periodoTarde = document.querySelector(".cronograma__lista-tarde");
const periodoNoite = document.querySelector(".cronograma__lista-noite");

const btnNovoAgendamento = document.querySelector(".btn-novo-agendamento");

export async function listarAgendamentos(agendamentoDia) {
    try {
        periodoManha.innerHTML = "";
        periodoTarde.innerHTML = "";
        periodoNoite.innerHTML = "";

        agendamentoDia.forEach(agendamento => {
            const item = document.createElement("div");
            item.classList.add("cronograma__lista__agendamento");
            item.setAttribute("id-agendamento", agendamento.id);

            item.innerHTML = `
                <div class="cronograma__lista__agendamento__horario">
                    <img class="cronograma__lista__agendamento__horario-vencido"
                        style="display: ${verificarDataHora(dayjs(agendamento.data).format("YYYY-MM-DD"), dayjs(agendamento.data).format("HH:mm"))};" 
                        src="./src/asset/clock-circle-red.svg"> 
                    ${dayjs(agendamento.data).format("HH:mm")}
                </div>

                <div class="cronograma__lista__agendamento__nome">
                    <div class="cronograma__lista__agendamento__nome__animal">${agendamento.pet}</div>

                    <span>/</span>

                    <div>${agendamento.nome}</div>
                </div>

                <div class="cronograma__lista__agendamento__descricao">
                    ${agendamento.descricao} 
                </div>

                <div class="cronograma__lista__agendamento__remover">
                    <a href="#" class="cronograma__lista__agendamento__remover-agendamento">Remover agendamento</a>
                </div>
            `;

            const horario = dayjs(agendamento.data).hour();

            if (horario <= 12) {
                periodoManha.append(item);
            } else if (horario > 12 && horario <= 18) {
                periodoTarde.append(item);
            } else {
                periodoNoite.append(item);
            }
        });

    } catch (error) {
        console.log(error);
        throw "Não foi possível carregar o(s) agendamento(s) do dia. Por favor, tente mais terde.";
    }
}

btnNovoAgendamento.addEventListener("click", () => {
    mostrarPopup(true);
});

function verificarDataHora(data, hora) {
    const dataAtual = dayjs(new Date()).format("YYYY-MM-DD");
    const horaAtual = dayjs(new Date()).format("HH:mm");
    console.log(horaAtual)
 
    if (data < dataAtual || hora < horaAtual) {
        return "flex";
    } else {
        return "none";
    }
}
