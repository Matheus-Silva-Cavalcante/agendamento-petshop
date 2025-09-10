import dayjs from "dayjs";
import { mostrarPopup } from "../../utils/mostra-popup.js";
import { apiConfig } from "../../services/api-config.js";

import { carregarAgendamentosDia } from "../schedules/carregar-agendamento.js";
import { novoAgendamento } from "../../services/novo-agendamento.js";
import { carregarHorariosDia } from "../schedules/carregar-horarios-dia.js";

const form = document.querySelector("form");

const nomeTutor = document.querySelector("#nomeTutor");
const nomePet = document.querySelector("#nomePet");
const telefoneTutor = document.querySelector("#telefone");
const descricaoServico = document.querySelector("#descricaoServico");
const dataAgendamento = document.querySelector("#dataAgendamento");
const horaAgendamento = document.querySelector("#horaAgendamento");

const btnFecharPopup = document.querySelector(".agendamento__btn-fechar-popup");

function carregarData() {
    const dataAtual = dayjs(new Date()).format("YYYY-MM-DD");

    dataAgendamento.value = dataAtual;
    dataAgendamento.min = dataAtual;
}

carregarData();

form.onsubmit = async (event) => {
    event.preventDefault();

    try {
        const nome = nomeTutor.value.trim();
        const pet = nomePet.value.trim();
        const telefone = telefoneTutor.value.trim();
        const descricao = descricaoServico.value.trim();

        const [horario] = horaAgendamento.value.split(":");
        const data = dayjs(dataAgendamento.value).add(horario, "hour");

        if (!verificarCampoFormulario(nome, pet, telefone, descricao)) return;

        await novoAgendamento({ nome, pet, telefone, descricao, data });

        carregarAgendamentosDia();

        mostrarPopup(false);
        limparCamposformulario();
    } catch (error) {
        console.log(error);
        throw "Não foi possível realizar o agendamento. Por favor, tente mais tarde.";
    }
}

function verificarCampoFormulario(tutor, pet, telefone, descricao) {
    if (!tutor) {
        nomeTutor.classList.add("inputErro");
        mensagemErroTutor.style.display = "";

        return false
    } else {
        nomeTutor.classList.remove("inputErro");
        mensagemErroTutor.style.display = "none";
    }

    if (!pet) {
        nomePet.classList.add("inputErro");
        mensagemErroPet.style.display = "";

        return false
    } else {
        nomePet.classList.remove("inputErro");
        mensagemErroPet.style.display = "none";
    }

    if (!telefone) {
        telefoneTutor.classList.add("inputErro");
        mensagemErroTelefone.style.display = "";

        return false
    } else {
        telefoneTutor.classList.remove("inputErro");
        mensagemErroTelefone.style.display = "none";
    }

    if (!descricao) {
        descricaoServico.classList.add("inputErro");
        mensagemErroDescricao.style.display = "";

        return false
    } else {
        descricaoServico.classList.remove("inputErro");
        mensagemErroDescricao.style.display = "none";
    }

    return true;
}

function limparCamposformulario() {
    nomeTutor.value = '';
    nomePet.value = '';
    telefoneTutor.value = '';
    descricaoServico.value = '';
}

btnFecharPopup.addEventListener("click", () => {
    mostrarPopup(false);
    limparCamposformulario();
    carregarData();
    carregarHorariosDia();
})
