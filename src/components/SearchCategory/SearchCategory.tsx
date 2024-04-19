import { useContext } from 'react';
import OnlineStoreContext from '../../context/OnlineStoreContext';

function SearchCategory() {
  const context = useContext(OnlineStoreContext);

  const { categoryName } = context;
  return (
    <div className="categoryContainer">
      <span>
        {`Pesquisando em: ${
          categoryName === '' ? 'Todas as categorias' : categoryName
        }`}

      </span>
    </div>
  );
}

export default SearchCategory;
