import Swal from 'sweetalert2';

// função para gerar alertas; primeiro parâmetro pode ser dois tipos: success ou error;
// segundo parâmetro é a mensagem que quer que exiba na tela;
// terceiro parâmetro é um subtitulo que vem como default vazio;
// para mudar o estilo do alerta ou inserir mais tipos, checar documentação do sweetAlert: https://sweetalert2.github.io/#themes;

const alertGenerator = (type: string, title: string, text = '') => {
  switch (type) {
    case 'success':
      Swal.fire({
        title,
        text,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        background: 'transparent',
        color: 'white',
      });
      break;
    case 'error':
      Swal.fire({
        title,
        text,
        icon: 'error',
        background: 'transparent',
        color: 'white',
        showConfirmButton: false,
        timer: 2000,
      });
      break;
    default:
      console.error('Parâmetro inválido');
  }
};

export default alertGenerator;
