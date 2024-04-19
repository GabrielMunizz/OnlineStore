import { FetchedProductsType } from '../../utils/types';
import * as S from '../../styles/Checkout.style';

type CheckoutProductsProps = {
  cart: FetchedProductsType[]
};

function CheckoutProducts({ cart }: CheckoutProductsProps) {
  return (
    <section>
      <S.CheckoutContent>
        {cart.map((product) => (
          <S.CheckoutProduct key={ product.id }>
            <div>
              <img src={ product.thumbnail } alt="product thumbnail" />
              <p className="productTitle">{product.title}</p>
            </div>
            <div className="quantityContainer">
              <p>
                x
              </p>
              <p>
                {product.quantity}
              </p>
            </div>
          </S.CheckoutProduct>
        ))}
      </S.CheckoutContent>
    </section>
  );
}

export default CheckoutProducts;
