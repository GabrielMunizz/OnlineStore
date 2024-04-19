import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FetchedProductsType } from '../../utils/types';
import * as S from '../../styles/Products.style';
import { Button } from '../../styles/Button.style';
import addToCart from '../../redux/actions/addToCart';

type ProductCardProps = {
  product: FetchedProductsType
};

function ProductCard({ product }: ProductCardProps) {
  const { id, thumbnail, title, price } = product;
  const shortTitle = title.length > 60 ? `${title.slice(0, 60)}...` : title;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <S.ProductCard>
      <h3 aria-label="productTitle">{shortTitle}</h3>
      <img src={ thumbnail } alt={ title } />
      <h5 className="productCardPrice">
        {`R$: ${price
          .toFixed(2)
          .replace('.', ',')}`}

      </h5>
      <Button
        aria-label="producDetailsBtn"
        className="productCardBtn"
        onClick={ () => navigate(`/productDetails/${id}`) }
      >
        Detalhes do produto
      </Button>
      <Button
        aria-label="addToCartBtn"
        className="productCardBtn"
        onClick={ () => dispatch(addToCart(product)) }
      >
        Adicionar ao carrinho
      </Button>
    </S.ProductCard>
  );
}

export default ProductCard;
