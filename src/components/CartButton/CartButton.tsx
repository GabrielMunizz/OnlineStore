import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import calculateQuantity from '../../utils/calculateQuatity';
import { ReduxType } from '../../utils/types';

function CartButton() {
  const products = useSelector((state: ReduxType) => state.cart);
  const totalQuantity = calculateQuantity(products);

  return (
    <div className="cartContainer">
      <Link
        to="/cart"
        aria-label="cartBtn"
      >
        <AiOutlineShoppingCart className="cartIcon" />
        {totalQuantity > 0 && (
          <span
            className="quantityCounter"
            style={
                    totalQuantity > 99
                      ? { width: '14px', height: '14px' }
                      : { fontSize: '0.8rem' }
                  }
          >
            {totalQuantity > 99 ? '+99' : totalQuantity}
          </span>
        )}
      </Link>
    </div>
  );
}

export default CartButton;
