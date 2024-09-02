const seguirLuzButton = document.getElementById('seguir-luz');
const seguirSomButton = document.getElementById('seguir-som');
const saidaJogoDiv = document.getElementById('saida-jogo');

seguirLuzButton.addEventListener('click', () => {
  const resposta = Math.random() < 0.5 ? 'certa' : 'errada';
  if (resposta === 'certa') {
    saidaJogoDiv.innerHTML = 'Parabéns, você acertou! Você encontrou o caminho para sair da floresta.';
  } else {
    saidaJogoDiv.innerHTML = 'Não foi dessa vez! Tente novamente.';
  }
});

seguirSomButton.addEventListener('click', () => {
  const resposta = Math.random() < 0.5 ? 'certa' : 'errada';
  if (resposta === 'certa') {
    saidaJogoDiv.innerHTML = 'Parabéns, você acertou! Você encontrou um rio que o leva para fora da floresta.';
  } else {
    saidaJogoDiv.innerHTML = 'Não foi dessa vez! Tente novamente.';
  }
});