import { apiConfig } from "./api-config.js";

export async function cancelarAgendamento(id) {
    console.log(id)
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules/${[id]}`, {
            method: 'DELETE',
        });

        const agendamentoExcluido = await response.json();
        console.log(agendamentoExcluido)

        alert(`Agendamento com id: ${agendamentoExcluido.id}, deletado.`);

        return agendamentoExcluido;
    } catch (error) {
        console.log(error);
        throw `Não foi possível deletar o agendamento com o ${id}. Por favor, tente mais tarde.`;
    }   
}

