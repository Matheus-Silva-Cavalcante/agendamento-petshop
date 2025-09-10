import { apiConfig } from "./api-config.js";

export async function novoAgendamento({ nome, pet, telefone, descricao, data }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nome, pet, telefone, descricao, data}),
        });

        const agendamento = await response.json();

        alert(`Agendamento salvo com susseço. id: ${agendamento.id}`);

        return agendamento;
    } catch (error) {
        console.log(error);
        throw "Não foi possível fazer o agendamento do seu pet. Por favor, tente mais tarde.";
    }
}