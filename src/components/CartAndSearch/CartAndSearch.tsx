import CartButton from '../CartButton/CartButton';
import SearchInput from '../SearchInput/SearchInput';
import SearchCategory from '../SearchCategory/SearchCategory';

function CartAndSearch() {
  return (
    <div className="categoryAndCart">
      <div className="cartAndSearch">
        <CartButton />
        <SearchInput />
      </div>
      <SearchCategory />
    </div>
  );
}

export default CartAndSearch;
