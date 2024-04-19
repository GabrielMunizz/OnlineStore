import { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { FetchedCategories } from '../../utils/types';
import OnlineStoreContext from '../../context/OnlineStoreContext';
import * as S from '../../styles/Categories.style';

function Categories() {
  const context = useContext(OnlineStoreContext);
  const { setCategoryID, setCategoryName, setIsOpen } = context;
  const CATEGORIES_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const { data, error, isLoading } = useFetch(CATEGORIES_URL);
  const categories = data as FetchedCategories[] || [];

  const handleAllCategories = () => {
    setCategoryID('');
    setCategoryName('');
    setIsOpen(false);
  };

  const handleCategory = (category: FetchedCategories) => {
    setCategoryID(category.id);
    setCategoryName(category.name);
    setIsOpen(false);
  };

  return (
    <S.Categories>
      {!isLoading && error && (
        <p>Um erro inesperado ocorreu...</p>
      )}
      {!isLoading && (
        <>
          <button
            className="allCategoriesBtn"
            onClick={ handleAllCategories }
            aria-label="allCategoriesBtn"
          >
            Todas as categorias
          </button>
          {categories
            .map((category) => (
              <button
                key={ category.id }
                aria-label={ `${category.name}` }
                onClick={ () => handleCategory(category) }
              >
                {category.name}
              </button>))}
        </>
      )}
    </S.Categories>
  );
}

export default Categories;
