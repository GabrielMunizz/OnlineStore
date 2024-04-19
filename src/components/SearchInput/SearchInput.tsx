import { useContext, useState } from 'react';
import OnlineStoreContext from '../../context/OnlineStoreContext';
import { Button } from '../../styles/Button.style';

function SearchInput() {
  const context = useContext(OnlineStoreContext);

  const [search, setSearch] = useState('');
  const { setQuery } = context;

  const handleQuery = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearch(value);
  };

  const handleClick = () => {
    setQuery(search);
  };
  return (
    <div className="inputContainer">
      <input
        className="searchInput"
        aria-label="searchInput"
        type="text"
        value={ search }
        onChange={ handleQuery }
      />
      <Button
        className="searchBtn"
        aria-label="searchBtn"
        onClick={ handleClick }
      >
        Buscar
      </Button>
    </div>
  );
}

export default SearchInput;
