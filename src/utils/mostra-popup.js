const popup = document.querySelector(".popup");

export function mostrarPopup(mostrar){
    popup.classList[mostrar ? "add" : "remove"]("aberta");
}




import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'; // Importa o plugin isBetween
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'; // Importa o plugin isSameOrAfter

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

function encontrarProximoAniversario(dataNascimentoStr) {
  const dataNascimento = dayjs(dataNascimentoStr);
  const hoje = dayjs();

  // Define o aniversário para o ano atual
  let aniversarioAtualAno = dataNascimento.year(hoje.year());

  // Se a data do aniversário já passou este ano, adiciona um ano
  if (aniversarioAtualAno.isBefore(hoje)) {
    aniversarioAtualAno = aniversarioAtualAno.add(1, 'year');
  }

  return aniversarioAtualAno;
}

// Exemplo de uso:
const dataNascimento = '1990-07-15'; // Substitua pela data de nascimento desejada
const proximoAniversario = encontrarProximoAniversario(dataNascimento);

console.log(`A próxima data de aniversário é: ${proximoAniversario.format('DD/MM/YYYY')}`);