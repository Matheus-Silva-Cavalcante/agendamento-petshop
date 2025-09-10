import { cancelarAgendamento } from "../../services/cancelar-agendamento.js";
import { carregarAgendamentosDia } from "./carregar-agendamento.js";

const agendamentos = document.querySelectorAll(".cronograma__lista ");

agendamentos.forEach(agendamento => {
    agendamento.addEventListener("click", async (evento) => {
        if (evento.target.classList.contains("cronograma__lista__agendamento__remover-agendamento")){
            const item = evento.target.closest(".cronograma__lista__agendamento");
            const id = item.getAttribute("id-agendamento");

            if (!id) throw "Não foi possível deletar o agendamento. Nenhum id foi encontrado.";

            const excluirAgendamento = confirm(`Deseja excluir esse agendamento?`);

            if (excluirAgendamento) {
                await cancelarAgendamento(id);
                carregarAgendamentosDia();
            }
        }        
    }); 
});