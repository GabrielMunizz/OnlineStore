import { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import OnlineStoreContext from '../../context/OnlineStoreContext';
import ProductCard from './ProductCard';
import Loading from '../Loading/Loading';
import * as S from '../../styles/Products.style';
import { getProducts } from '../../utils/getters';

function Products() {
  const context = useContext(OnlineStoreContext);
  const { categoryID, query } = context;
  const PRODUCT_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${query}`;
  const { data, error, isLoading } = useFetch(PRODUCT_URL);
  const products = getProducts(data) || [];

  return (
    <S.ProductsContainer>
      {!isLoading && products.length === 0 && (
        <div className="homeContent">
          <h3
            className="initialMessage"
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
      )}
      {isLoading && (
        <div className="homeContent">
          <Loading />
        </div>
      )}
      {!isLoading && error && !(error.message).includes('abort') && (
        <p>Um erro inesperado ocorreu...</p>
      )}
      {!isLoading
        && products.map((product, i) => (
          <ProductCard key={ i } product={ product } />
        ))}
    </S.ProductsContainer>
  );
}

export default Products;
