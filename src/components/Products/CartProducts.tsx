import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchedProductsType } from '../../utils/types';
import { addQuantity, removeQuantity } from '../../redux/actions/quantity';
import removeProduct from '../../redux/actions/removeFromCart';
import * as S from '../../styles/CartProducts.style';
import { Button } from '../../styles/Button.style';

type CartProductsProps = {
  product: FetchedProductsType;
};

function CartProducts({ product }: CartProductsProps) {
  const { id, title, thumbnail, price, quantity } = product;

  const formattedPrice = price
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const formattedTotal = ((quantity as number) * price)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const dispatch = useDispatch();
  return (
    <S.CartProductCard>
      <S.ImageTitlePrice>
        <Link to={ `/productDetails/${id}` }>
          <img src={ thumbnail } alt={ title } />
        </Link>
        <div className="titleAndPrice">
          <h3 aria-label="productTitle">
            {title}
          </h3>

          <hr />

          <h3>Preço unitário:</h3>
          <h3>{formattedPrice}</h3>
        </div>
      </S.ImageTitlePrice>
      <S.QuantityContainer>
        <div className="buttonsContainer">
          <Button
            aria-label="removeQuantityBtn"
            onClick={ () => dispatch(removeQuantity(id)) }
          >
            -
          </Button>
          <span>Quantidade: </span>
          <span
            className="productQuantity"
            aria-label="productQuantity"
          >
            {quantity}
          </span>
          <Button
            aria-label="addQuantityBtn"
            onClick={ () => dispatch(addQuantity(id)) }
          >
            +
          </Button>
        </div>
        <div className="totalContainer">
          <h3>
            {`Total: ${formattedTotal}`}
          </h3>
          <Button
            aria-label="removeFromCartBtn"
            onClick={ () => dispatch(removeProduct(id)) }
            className="removeProdBtn"
          >
            Remover
          </Button>
        </div>
      </S.QuantityContainer>
    </S.CartProductCard>
  );
}

export default CartProducts;
