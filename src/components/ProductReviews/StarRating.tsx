import { FaStar } from 'react-icons/fa6';
import { useContext } from 'react';
import OnlineStoreContext from '../../context/OnlineStoreContext';
import { getStarColor } from '../../utils/getters';

function StarRating() {
  // carrega o rating do context, caso não exista uma rating salva, o estado default é 0.
  const { rating, setRating } = useContext(OnlineStoreContext);

  // a lógica do componente abaixo: é criado um array de 5 posições. currentRate pega o index do array (inicial 0) e adiciona 1 (na posição 0 currentRate = 1 até chegar na posição 4 onde currentRate será 5);
  // currentRate é colocado como value do input e é adicionado um evento de Click onde o estado rating é atualizado para currentRate;
  // no icone FaStar a cor é pintada de laranja caso o currentRate seja menor ou igual ao rating;
  // ex.: caso seja clicado na posição 2, o rating dessa posição é atualizado para 3, pintando os icones nas posições menores ou iguais a 3 de laranja e o restante de cinza;

  return (
    <>
      {[...Array(5)].map((_star, index) => {
        const currentRate = index + 1;
        const starColor = getStarColor(currentRate, rating);
        return (
          <label key={ index }>
            <input
              aria-label="starRatingBtn"
              type="radio"
              name="rate"
              style={ { display: 'none' } }
              value={ currentRate }
              onClick={ () => setRating(currentRate) }
            />
            <FaStar
              size={ 25 }
              color={ starColor }
            />
          </label>
        );
      })}

    </>

  );
}

export default StarRating;
